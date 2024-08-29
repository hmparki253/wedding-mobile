import { MouseEvent, TouchEvent, useEffect, useState } from 'react'
import cx from 'classnames'
import styles from './imageCarousel.module.scss'

type Direction = 'PREV' | 'NEXT'

interface Props {
  images: string[]
  currentIndex: number
  setCurrentIndex: (index: number) => void
  intervalTime?: number
  delay?: number
  threshold?: number
  hasIndicator?: boolean
  indicatorPosition?: 'inner' | 'outer'
  autoPlay?: boolean
  hasPadding?: boolean
}

const maxWidth = 500
const width = Math.min(window.innerWidth, maxWidth)

const getTranslateX = (index: number, distance?: number) =>
  `calc(-1 * ${width} * ${index + 1}${distance ? ` - ${distance}` : ''}px)`

const ImageCarousel = ({
  images,
  currentIndex,
  setCurrentIndex,
  intervalTime = 90000,
  delay = 500,
  threshold = 0.25,
  hasIndicator = true,
  indicatorPosition = 'inner',
  autoPlay = true,
  hasPadding = false,
}: Props) => {
  const [isMoving, setIsMoving] = useState(false)
  const [isTouching, setIsTouching] = useState(false)
  const [touchStart, setTouchStart] = useState(0)
  const [touchMoved, setTouchMoved] = useState(0)
  const [translateX, setTranslateX] = useState(getTranslateX(currentIndex))
  const isWindowZoomed = window.innerWidth !== document.documentElement.clientWidth

  useEffect(() => {
    if (!autoPlay || isTouching) return
    const interval = setInterval(() => {
      setIsMoving(true)
      move('NEXT')
      timeout(() => setIsMoving(false))
    }, intervalTime)

    // eslint-disable-next-line consistent-return
    return () => clearInterval(interval)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [width, currentIndex, isTouching])

  const handleSwipeStart = (e: TouchEvent | MouseEvent) => {
    setTouchStart('touches' in e ? e.touches[0].clientX : e.clientX)
    setIsTouching(true)
  }

  const handleSwipeMove = (e: TouchEvent | MouseEvent) => {
    if (!isTouching || isWindowZoomed) return
    setTouchMoved(touchStart - ('touches' in e ? e.touches[0].clientX : e.clientX))
    setTranslateX(getTranslateX(currentIndex, touchMoved))
  }

  const handleSwipeEnd = () => {
    setTouchStart(0)
    setTouchMoved(0)
    setIsTouching(false)

    if (touchMoved === 0) return
    setIsMoving(true)
    timeout(() => setIsMoving(false))

    if (Math.abs(touchMoved) < width * threshold) {
      setTranslateX(getTranslateX(currentIndex))
      return
    }

    move(touchMoved < 0 ? 'PREV' : 'NEXT')
  }

  const move = (direction: Direction) => {
    const index = direction === 'PREV' ? currentIndex - 1 : currentIndex + 1
    setCurrentIndex(index)
    setTranslateX(getTranslateX(index))

    if (index === -1 || index === images.length) {
      const newIndex = index === -1 ? images.length - 1 : 0
      setCurrentIndex(newIndex)
      timeout(() => setTranslateX(getTranslateX(newIndex)))
    }
  }

  const timeout = (callback: () => void) => {
    const timer = setTimeout(() => {
      callback()
      clearTimeout(timer)
    }, delay)
  }

  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div
      className={styles.carousel}
      onTouchStart={handleSwipeStart}
      onTouchMove={handleSwipeMove}
      onTouchEnd={handleSwipeEnd}
      onMouseDown={handleSwipeStart}
      onMouseMove={handleSwipeMove}
      onMouseUp={handleSwipeEnd}
      onMouseLeave={handleSwipeEnd}
      style={{ cursor: isTouching ? 'grabbing' : 'grab' }}
    >
      <div
        className={cx(styles.images, { [styles.padding]: hasPadding })}
        style={{
          transform: `translateX(${translateX})`,
          transition: isMoving ? `transform ${delay}ms ease` : '',
        }}
      >
        <img src={images[images.length - 1]} alt='' />
        {images.map((image) => (
          <img key={`image-${image}`} src={image} alt='' />
        ))}
        <img src={images[0]} alt='' />
      </div>
      {hasIndicator && (
        <div className={cx(styles.indicators, styles[indicatorPosition])}>
          {images.map((image, index) => (
            <div key={`indicator-${image}`} className={cx({ [styles.active]: index === currentIndex })} />
          ))}
        </div>
      )}
    </div>
  )
}

export default ImageCarousel
