import { useState } from 'react'
import { Map, MapMarker } from 'react-kakao-maps-sdk'
import styles from './location.module.scss'
// import ImageCarousel from 'components/ImageCarousel'
// import image1 from 'assets/images/baily_hall.jpg'
// import image2 from 'assets/images/lobby.jpeg'
// import image3 from 'assets/images/food.jpeg'
// import image4 from 'assets/images/food2.jpeg'
import kakaoIcon from 'assets/icons/kakao_map.png'
import naverIcon from 'assets/icons/naver_map.png'

const addressText = [
  {
    title: '주소',
    description: '강원 춘천시 퇴계로 118 (퇴계동 392-53)',
  },
  {
    title: '오시는 길',
    description:
      '- 춘천시외버스터미널 -> 이마트사거리(직진) -> KBS 앞 사거리 (우회전 후 800m 직진) -> (구)남춘천역사거리(직진)',
  },
  {
    title: '주차 안내',
    description: '건물 부지 내 지상, 무료 주차 가능',
  },
]

const Location = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  return (
    <section>
      <h2>LOCATION</h2>
      {/* <ImageCarousel
        images={[image1, image2, image3, image4]}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
        indicatorPosition='outer'
        intervalTime={4000}
        delay={800}
      /> */}
      <h2>찾아오시는 길</h2>
      <Map
        center={{ lat: 37.8605717, lng: 127.7328071 }} // 지도의 중심 좌표
        style={{ width: '100%', height: '320px', marginTop: '1rem' }} // 지도 크기
        level={5} // 지도 확대 레벨
        draggable={false}
      >
        <MapMarker position={{ lat: 37.8605717, lng: 127.7328071 }} />
      </Map>
      <h3 className={styles.location}>미래컨벤션웨딩홀</h3>
      <div className={styles.address}>
        {addressText.map((text) => (
          <div key={text.title} className={styles.addressItem}>
            <h4>{text.title}</h4>
            <p>{text.description}</p>
          </div>
        ))}
        <div className={styles.mapIcons}>
          <a href='https://map.naver.com/p/entry/place/13336897?c=15.00,0,0,0,dh' target='_blank' rel='noreferrer'>
            <img src={naverIcon} alt='네이버 지도' />
          </a>
          <a href='https://place.map.kakao.com/15874126' target='_blank' rel='noreferrer'>
            <img src={kakaoIcon} alt='카카오 지도' />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Location
