import styles from './welcome.module.scss'

const Welcome = () => {
  return (
    <section className={styles.welcome}>
      <h2>INVITATION</h2>
      <p>
        서로가 마주보며 다져온 사랑을
        <br />
        이제 함께 한 곳을 바라보며 걸어갈 수 있는
        <br />
        큰 사랑으로 키우고자 합니다.
        <br />
        저희 두 사람이
        <br />
        사랑이 가득한 가정을 이룰 수 있게
        <br />
        앞날을 축복해 주시면 감사하겠습니다.
      </p>
      <div className={styles.host}>
        <div>
          <div>
            <span>박주문 · 한영화</span> 의 아들
          </div>
          <span>현민</span>
        </div>
        <div>
          <div>
            <span>이창수 · 박경분</span> 의 딸
          </div>
          <span>수경</span>
        </div>
      </div>
    </section>
  )
}

export default Welcome
