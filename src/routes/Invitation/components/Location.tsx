import { MouseEvent, useState } from 'react'
import { Map, MapMarker } from 'react-kakao-maps-sdk'
import Button from 'components/Button'
import { ReactComponent as CheckIcon } from 'assets/icons/check.svg'
import styles from './location.module.scss'
import kakaoIcon from 'assets/icons/kakao_map.png'
import naverIcon from 'assets/icons/naver_map.png'
import tmapIcon from 'assets/icons/tmap.jpg'

const addressInfo = [
  {
    title: '주소',
    description: '강원 춘천시 퇴계로 118 (퇴계동 392-53)',
    icon: '📍',
  },
  {
    title: '오시는 길',
    description:
      '춘천시외버스터미널 → 이마트사거리(직진) → KBS 앞 사거리 (우회전 후 800m 직진) → (구)남춘천역사거리(직진)',
    icon: '🚗',
  },
  {
    title: '오시는 길',
    description: 'ITX 청춘 열차: 용산 → 남춘천역: 1시간 10분 소요 → 하차 후 택시 5분, 도보 15분 소요',
    icon: '🚂',
  },
  {
    title: '오시는 길',
    description:
      '경춘선 전철: 상봉역(경춘선) → 남춘천역: 20분 간격, 1시간 20분 소요 → 하차 후 택시 5분, 도보 15분 소요',
    icon: '🚇',
  },
  {
    title: '오시는 길',
    description: '시내버스노선: 2번/2-S (정류장: 휴먼시아 2차 하차)',
    icon: '🚌',
  },
  {
    title: '주차 안내',
    description: '건물 부지 내 지상, 무료 주차 가능',
    icon: '🅿️',
  },
]

const Location = () => {
  const [_currentIndex, _setCurrentIndex] = useState(0)
  const [copiedAddress, setCopiedAddress] = useState(false)

  const handleCopy = (e: MouseEvent<HTMLButtonElement>) => {
    const { value } = e.target as HTMLButtonElement
    navigator.clipboard.writeText(value)
    setCopiedAddress(true)
    // 2초 후 복사 상태 초기화
    setTimeout(() => {
      setCopiedAddress(false)
    }, 2000)
  }
  return (
    <section className={styles.locationSection}>
      <div className={styles.header}>
        <h2>LOCATION</h2>
        <div className={styles.venueName}>미래컨벤션웨딩홀</div>
      </div>

      {/* 지도 */}
      <div className={styles.mapContainer}>
        <Map
          center={{ lat: 37.8605717, lng: 127.7328071 }}
          style={{ width: '100%', height: '200px' }}
          level={3}
          draggable={false}
        >
          <MapMarker position={{ lat: 37.8605717, lng: 127.7328071 }} />
        </Map>
      </div>

      {/* 주소 정보 */}
      <div className={styles.addressInfo}>
        {addressInfo.map((info, index) => (
          <div key={info.title} className={styles.infoCard}>
            <div className={styles.infoHeader}>
              <span className={styles.infoIcon}>{info.icon}</span>
              <span className={styles.infoTitle}>{info.title}</span>
              {/* 첫 번째 항목(주소)에만 복사 버튼 추가 */}
              {index === 0 && (
                <div className={styles.copyButton}>
                  {copiedAddress ? (
                    <CheckIcon />
                  ) : (
                    <Button
                      text='복사'
                      value={info.description}
                      size='small'
                      buttonStyle='ghost'
                      onClick={handleCopy}
                    />
                  )}
                </div>
              )}
            </div>
            <p className={styles.infoDescription}>{info.description}</p>
          </div>
        ))}
      </div>

      {/* 지도 링크 */}
      <div className={styles.mapLinks}>
        <a
          href='https://map.naver.com/p/entry/place/13336897?c=15.00,0,0,0,dh'
          target='_blank'
          rel='noreferrer'
          className={styles.mapLink}
        >
          <img src={naverIcon} alt='네이버 지도' />
          <span>네이버 지도</span>
        </a>
        <a href='https://place.map.kakao.com/15874126' target='_blank' rel='noreferrer' className={styles.mapLink}>
          <img src={kakaoIcon} alt='카카오 지도' />
          <span>카카오 지도</span>
        </a>
        <a href='https://tmap.life/fc9a786a' target='_blank' rel='noreferrer' className={styles.mapLink}>
          <img src={tmapIcon} alt='티맵' />
          <span>T MAP</span>
        </a>
      </div>
    </section>
  )
}

export default Location
