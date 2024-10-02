import { MouseEvent, useState } from 'react'
import { useModal } from 'hooks/useModal'
import ImageGrid from 'components/ImageGrid'
import ImageViewer from 'components/ImageViewer'
import ImageCarousel from 'components/ImageCarousel'

import image01 from 'assets/images/IMG_1.jpg'
import image02 from 'assets/images/IMG_2.jpg'
import image03 from 'assets/images/IMG_3.jpg'
import image04 from 'assets/images/IMG_4.jpg'
import image05 from 'assets/images/IMG_5.jpg'
import image06 from 'assets/images/IMG_6.jpg'
import image07 from 'assets/images/IMG_7.jpg'
import image08 from 'assets/images/IMG_8.jpg'
import image09 from 'assets/images/IMG_9.jpg'
import image10 from 'assets/images/IMG_10.jpg'
import image11 from 'assets/images/IMG_11.jpg'
import image12 from 'assets/images/IMG_12.jpg'

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
