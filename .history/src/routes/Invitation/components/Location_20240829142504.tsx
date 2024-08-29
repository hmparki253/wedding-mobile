import { useState } from 'react'
import { Map, MapMarker } from 'react-kakao-maps-sdk'
import styles from './location.module.scss'
import ImageCarousel from 'components/ImageCarousel'
import image1 from 'assets/images/baily_hall.jpg'
import image2 from 'assets/images/lobby.jpeg'
import image3 from 'assets/images/food.jpeg'
import image4 from 'assets/images/food2.jpeg'
import kakaoIcon from 'assets/icons/kakao_map.png'
import naverIcon from 'assets/icons/naver_map.png'

const addressText = [
  {
    title: '주소',
    description: '서울특별시 구로구 경인로 610\n더링크호텔 3층 베일리홀',
  },
  {
    title: '오시는 길',
    description:
      '1,2호선 신도림역 1번 출구에서 도보 10분 \n1호선 구로역 3번 출구 도보 7분 \n (셔틀버스: 1,2호선 신도림역 1번출구 맞은편) \n 버스이용시 신도림동(구로역) 또는 신도림중학교 정류장 하차',
  },
  {
    title: '주차 안내',
    description: '건물 내 지상, 지하 90분 무료 주차 가능\n지상, 지하 주차 800대 가능',
  },
]

const Location = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  return (
    <section>
      <h2>LOCATION</h2>
      <ImageCarousel
        images={[image1, image2, image3, image4]}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
        indicatorPosition='outer'
        intervalTime={4000}
        delay={800}
      />
      <h2>찾아오시는 길</h2>
      <Map
        center={{ lat: 37.50545604606263, lng: 126.8839587981552 }} // 지도의 중심 좌표
        style={{ width: '100%', height: '320px', marginTop: '1rem' }} // 지도 크기
        level={3} // 지도 확대 레벨
      >
        <MapMarker position={{ lat: 37.50545604606263, lng: 126.8839587981552 }}>
          <div style={{ color: '#000' }}>더링크 호텔</div>
        </MapMarker>
      </Map>
      <h3 className={styles.location}>더링크호텔</h3>
      <div className={styles.address}>
        {addressText.map((text) => (
          <div key={text.title} className={styles.addressItem}>
            <h4>{text.title}</h4>
            <p>{text.description}</p>
          </div>
        ))}
        <div className={styles.mapIcons}>
          <a href='https://map.naver.com/p/entry/place/1070501110?c=15.00,0,0,0,dh' target='_blank' rel='noreferrer'>
            <img src={naverIcon} alt='네이버 지도' />
          </a>
          <a
            href='https://map.kakao.com/?map_type=TYPE_MAP&itemId=801090941&urlLevel=3&urlX=474352&urlY=1112805&q=%EB%8D%94%EB%A7%81%ED%81%AC%ED%98%B8%ED%85%94'
            target='_blank'
            rel='noreferrer'
          >
            <img src={kakaoIcon} alt='카카오 지도' />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Location
