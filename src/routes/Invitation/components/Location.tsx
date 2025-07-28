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
      <h2>대절버스 안내</h2>
      <div className={styles.address}>
        <div className={styles.addressItem}>
          <h4>운행 안내</h4>
          <p>멀리서 오시는 귀한 분들을 모시고자 버스를 대절하였습니다.</p>
        </div>
        <div className={styles.addressItem}>
          <h4>출발지</h4>
          <p>영등포역(1호선) 5번 출구를 나와 약 50m 직진, 택시 정류장</p>
        </div>
        <div className={styles.addressItem}>
          <h4>출발 시간</h4>
          <p>오전 10:30 (예정)</p>
          <p>*출발 10분 전까지 출발지에 도착해주시면 감사하겠습니다.</p>
        </div>
        <div className={styles.addressItem}>
          <h4>탑승 신청</h4>
          <p>아래 링크를 통해 탑승 신청을 해주시기 바랍니다.</p>
        </div>
      </div>
      <div className={styles.busFormButton}>
        <a href='https://forms.gle/F9ZQ9ED37Gm2addm6' target='_blank' rel='noreferrer' className={styles.formLink}>
          대절버스 탑승 신청하기
        </a>
      </div>

      <Map
        center={{ lat: 37.5159236, lng: 126.9073819 }} // 지도의 중심 좌표
        style={{ width: '100%', height: '320px', marginTop: '1rem' }} // 지도 크기
        level={5} // 지도 확대 레벨
        draggable={false}
      >
        <MapMarker position={{ lat: 37.5159236, lng: 126.9073819 }} />
      </Map>
    </section>
  )
}

export default Location
