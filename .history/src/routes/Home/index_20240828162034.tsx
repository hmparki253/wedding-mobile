import { useNavigate } from 'react-router-dom'
import Confetti from 'react-confetti'
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
      <Confetti numberOfPieces={200} colors={['#FFC0CB', '#FF69B4']} gravity={0.01} />
      <div className={styles.mainImage} />
      <div className={styles.bottomSheet}>
        <div className={styles.fadeIn} style={{ animationDelay: '100ms' }}>
          신랑 <span>최정회</span> <span style={{ fontSize: '12px', marginLeft: '4px' }}>그리고</span> 신부{' '}
          <span>채은솔</span>
        </div>
        <p className={styles.fadeIn} style={{ animationDelay: '300ms' }}>
          2024. 11. 30 (토) 오전 11시 20분
          <br />
          더링크호텔 3F 베일리홀
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
