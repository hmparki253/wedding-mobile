import { MouseEvent, useState } from 'react'
import { useModal } from 'hooks/useModal'
import ImageGrid from 'components/ImageGrid'
import ImageViewer from 'components/ImageViewer'
import ImageCarousel from 'components/ImageCarousel'

import image01 from 'assets/images/new-IMG_1-min.jpg'
import image02 from 'assets/images/IMG_2-min.jpg'
import image03 from 'assets/images/new-IMG_2-min.jpg' // 뒤쪽으로 밀어 -> 다른걸로 바꿔 | 8426
import image04 from 'assets/images/new-IMG_4-min.jpg' // 8338 -> 보정본 있나 확인
import image05 from 'assets/images/new-IMG_5-min.jpg' // 9164-1
import image06 from 'assets/images/new-IMG_6-min.jpg' // 9199
import image07 from 'assets/images/new-IMG_8-min.jpg' // 9067을 흑백으로 넣어
import image08 from 'assets/images/new-IMG_7-min.jpg' // IMG-4 를 여기에 위치시켜
import image09 from 'assets/images/new-IMG_9-min.jpg' // 9522
import image10 from 'assets/images/new-IMG_10-min.jpg' // 9583
import image11 from 'assets/images/new-IMG_11-min.jpg' // 9901
import image12 from 'assets/images/new-IMG_12-min.jpg' // 9999 - 보정본 있는것으로 교체

const imageList = [
  image01,
  image02,
  image03,
  image04,
  image05,
  image06,
  image07,
  image08,
  image09,
  image10,
  image11,
  image12,
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
