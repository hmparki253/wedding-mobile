import { useState } from 'react'
import { Map, MapMarker } from 'react-kakao-maps-sdk'
import styles from './location.module.scss'

import ImageCarousel from 'components/ImageCarousel'
import image1 from 'assets/images/weddinghall_01.jpeg'
import image2 from 'assets/images/weddinghall_02.jpeg'
import image3 from 'assets/images/weddinghall_03.jpeg'
import kakaoIcon from 'assets/icons/kakao_map.png'
import naverIcon from 'assets/icons/naver_map.png'

const addressText = [
  {
    title: '주소',
    description: '서울특별시 구로구 경인로 610\n더링크호텔 3층 베일리홀',
  },
  {
    title: '오시는 길',
    description: '신도림역 5번 출구 \n구로역 3번 출구 (1호선)',
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
        images={[image1, image2, image3]}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
        indicatorPosition='outer'
        intervalTime={4000}
        delay={800}
      />
      <h2>찾아오시는 길</h2>
      <Map
        center={{ lat: 37.536821, lng: 126.975458 }} // 지도의 중심 좌표
        style={{ width: '100%', height: '320px', marginTop: '1rem' }} // 지도 크기
        level={3} // 지도 확대 레벨
      >
        <MapMarker position={{ lat: 37.536821, lng: 126.975458 }} />
      </Map>
      <h3 className={styles.location}>로얄파크컨벤션</h3>
      <div className={styles.address}>
        {addressText.map((text) => (
          <div key={text.title} className={styles.addressItem}>
            <h4>{text.title}</h4>
            <p>{text.description}</p>
          </div>
        ))}
        <div className={styles.mapIcons}>
          <a href='https://map.naver.com/p/entry/place/1915861607?c=15.00,0,0,0,dh' target='_blank' rel='noreferrer'>
            <img src={naverIcon} alt='네이버 지도' />
          </a>
          <a
            href='https://map.kakao.com/?urlX=494581&urlY=1121521&urlLevel=3&itemId=1505842477&q=%EB%A1%9C%EC%96%84%ED%8C%8C%ED%81%AC%EC%9B%A8%EB%94%A9&srcid=1505842477&map_type=TYPE_MAP'
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
