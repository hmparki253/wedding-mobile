import { useState } from 'react'
import { Map, MapMarker } from 'react-kakao-maps-sdk'
import styles from './bus.module.scss'

const Bus = () => {
  const [selectedRoute, setSelectedRoute] = useState<'route1' | 'route2' | null>(null)

  const busRoutes = {
    route1: {
      title: '영등포역 출발',
      time: '오전 10:30',
      location: '영등포역(1호선) 5번 출구를 나와 약 50m 직진, 택시 정류장',
      description: '멀리서 오시는 귀한 분들을 모시고자 버스를 대절하였습니다.',
      coordinates: {
        lat: 37.5159236,
        lng: 126.9073819,
      },
    },
  }

  const handleRouteSelect = (route: 'route1' | 'route2') => {
    setSelectedRoute(route)
  }

  return (
    <section>
      <h2>대절버스 안내</h2>
      <div className={styles.address}>
        <div className={styles.addressItem}>
          <h4>운행 안내</h4>
          <p>멀리서 오시는 귀한 분들을 모시고자 버스를 대절하였습니다.</p>
          <p>가는편: 영등포역 ~ 예식장</p>
          <p>오는편: 예식장 ~ 영등포역</p>
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
        center={{ lat: busRoutes.route1.coordinates.lat, lng: busRoutes.route1.coordinates.lng }}
        style={{ width: '100%', height: '320px', marginTop: '1rem' }}
        level={5}
        draggable={false}
      >
        <MapMarker position={{ lat: busRoutes.route1.coordinates.lat, lng: busRoutes.route1.coordinates.lng }} />
      </Map>
    </section>
  )
}

export default Bus
