import styles from './welcome.module.scss'

const Welcome = () => {
  return (
    <section className={styles.welcomeSection}>
      <div className={styles.header}>
        <h2>INVITATION</h2>
      </div>
      <div className={styles.messageCard}>
        <p className={styles.message}>
          서로의 곁에서
          <br />
          소중한 순간들을 함께해 온 저희 두 사람이,
          <br />
          이제 하나의 미래를 함께 그려가려 합니다.
          <br />
          따뜻한 축복으로 함께해 주신다면
          <br />
          진심으로 감사드리겠습니다.
        </p>
      </div>

      <div className={styles.hostInfo}>
        <div className={styles.hostCard}>
          <div className={styles.hostParents}>
            <span>박주문 · 한영화</span> 의 아들
          </div>
          <div className={styles.hostName}>현민</div>
        </div>
        <div className={styles.hostCard}>
          <div className={styles.hostParents}>
            <span>이창수 · 박경분</span> 의 딸
          </div>
          <div className={styles.hostName}>수경</div>
        </div>
      </div>
    </section>
  )
}

export default Welcome
