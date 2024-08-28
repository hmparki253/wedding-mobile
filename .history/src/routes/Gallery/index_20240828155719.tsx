import { MouseEvent, useState } from 'react'
import { useModal } from 'hooks/useModal'
import ImageGrid from 'components/ImageGrid'
import ImageViewer from 'components/ImageViewer'
import ImageCarousel from 'components/ImageCarousel'

import image01 from 'assets/images/IMG_1.jpg'
import image02 from 'assets/images/IMG_2.jpeg'
import image03 from 'assets/images/IMG_3.jpeg'
import image04 from 'assets/images/IMG_4.jpeg'

const imageList = [
  image01,
  image02,
  image03,
  image04,
  image01,
  image02,
  image03,
  image04,
  image01,
  image02,
  image03,
  image04,
  image01,
  image02,
  image03,
  image04,
]

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const { isModalOpen, openModal, closeModal } = useModal()

  const handleImageClick = (e: MouseEvent) => {
    const index = Number((e.target as HTMLImageElement).dataset.index)
    setCurrentIndex(index)
    openModal()
  }

  return (
    <section>
      <h2>GALLERY</h2>
      <ImageGrid imageList={imageList} handleImageClick={handleImageClick} />
      {isModalOpen && (
        <ImageViewer
          imageList={imageList}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
          close={closeModal}
          hasButton={false}
        >
          <ImageCarousel
            images={imageList}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
            hasIndicator={false}
            autoPlay={false}
            hasPadding
          />
        </ImageViewer>
      )}
    </section>
  )
}

export default Gallery
