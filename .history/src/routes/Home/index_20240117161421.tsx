import { useNavigate } from 'react-router-dom'

import { trackMenuClick } from 'hooks/useGTM'
import Button from 'components/Button'
import styles from './home.module.scss'

const Home = () => {
  const navigate = useNavigate()

  const handleButtonClick = () => {
    navigate('/invitation')
    trackMenuClick('invitation')
  }

  return (
    <>
      <div className={styles.mainImage} />
      <div className={styles.bottomSheet}>
        <div className={styles.fadeIn} style={{ animationDelay: '100ms' }}>
          신랑 <span>최정회</span> & 신부 <span>채은솔</span>
        </div>
        <p className={styles.fadeIn} style={{ animationDelay: '300ms' }}>
          2024. 12. 28 (토) 오후 2시
          <br />
          로얄파크컨벤션 3F 로얄홀
        </p>
        <Button
          className={styles.fadeIn}
          style={{ animationDelay: '500ms' }}
          text='청첩장 보기'
          size='fullWidth'
          onClick={handleButtonClick}
        />
      </div>
    </>
  )
}

export default Home
