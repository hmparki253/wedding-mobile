import { useState } from 'react'
import { Map, MapMarker } from 'react-kakao-maps-sdk'
import styles from './bus.module.scss'

const Bus = () => {
  const [selectedRoute, setSelectedRoute] = useState<'route1' | 'route2'>('route1')

  const busRoutes = {
    route1: {
      title: '가는편',
      subtitle: '영등포역 → 예식장',
      time: '오전 10:30 출발',
      location: '영등포역(1호선) 5번 출구 택시 정류장',
      detail: '5번 출구를 나와 약 50m 직진',
      coordinates: {
        lat: 37.5159236,
        lng: 126.9073819,
      },
    },
    route2: {
      title: '오는편',
      subtitle: '예식장 → 영등포역',
      time: '오후 4:00 출발',
      location: '미래컨벤션웨딩홀 주차장',
      detail: '예식장 정문 앞 주차장',
      coordinates: {
        lat: 37.8605717,
        lng: 127.7328071,
      },
    },
  }

  const currentRoute = busRoutes[selectedRoute]

  return (
    <section className={styles.busSection}>
      <div className={styles.header}>
        <h2>대절버스 안내</h2>
        <p className={styles.description}>
          멀리서 오시는 귀한 분들을 위해
          <br />
          왕복 전세버스를 준비했습니다
        </p>
      </div>

      {/* 노선 선택 탭 */}
      <div className={styles.routeTabs}>
        <button
          type='button'
          className={`${styles.routeTab} ${selectedRoute === 'route1' ? styles.active : ''}`}
          onClick={() => setSelectedRoute('route1')}
        >
          <div className={styles.tabTitle}>가는편</div>
          <div className={styles.tabSubtitle}>영등포역 → 예식장</div>
        </button>
        <button
          type='button'
          className={`${styles.routeTab} ${selectedRoute === 'route2' ? styles.active : ''}`}
          onClick={() => setSelectedRoute('route2')}
        >
          <div className={styles.tabTitle}>오는편</div>
          <div className={styles.tabSubtitle}>예식장 → 영등포역</div>
        </button>
      </div>

      {/* 선택된 노선 정보 */}
      <div className={styles.routeInfo}>
        <div className={styles.infoCard}>
          <div className={styles.timeInfo}>
            <span className={styles.timeLabel}>출발시간</span>
            <span className={styles.time}>{currentRoute.time}</span>
          </div>

          <div className={styles.locationInfo}>
            <span className={styles.locationLabel}>탑승장소</span>
            <div className={styles.locationDetail}>
              <div className={styles.locationName}>{currentRoute.location}</div>
              <div className={styles.locationDesc}>{currentRoute.detail}</div>
            </div>
          </div>
        </div>

        {/* 지도 */}
        <div className={styles.mapContainer}>
          <Map
            center={{ lat: currentRoute.coordinates.lat, lng: currentRoute.coordinates.lng }}
            style={{ width: '100%', height: '200px' }}
            level={3}
            draggable={false}
          >
            <MapMarker position={{ lat: currentRoute.coordinates.lat, lng: currentRoute.coordinates.lng }} />
          </Map>
        </div>
      </div>

      {/* 안내사항 */}
      <div className={styles.notice}>
        <div className={styles.noticeItem}>⏰ 출발 10분 전까지 탑승장소에 도착해주세요</div>
        <div className={styles.noticeItem}>📱 탑승 신청은 필수입니다</div>
        <div className={styles.noticeItem}>📞 기사님 연락처: 010-3339-9929 (이상정 기사님)</div>
        <div className={styles.noticeItem}>🚌 차량번호: 경기76자3250</div>
      </div>

      {/* 신청 버튼 */}
      <div className={styles.applicationSection}>
        <a
          href='https://forms.gle/F9ZQ9ED37Gm2addm6'
          target='_blank'
          rel='noreferrer'
          className={styles.applicationButton}
        >
          🚌 대절버스 탑승 신청하기
        </a>
      </div>
    </section>
  )
}

export default Bus
