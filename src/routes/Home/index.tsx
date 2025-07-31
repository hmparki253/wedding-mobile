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
      <Confetti numberOfPieces={150} opacity={0.5} colors={['#FFC0CB', '#FF69B4']} gravity={0.03} />
      <div className={styles.mainImage} />
      <div className={styles.bottomSheet}>
        <div className={styles.fadeIn} style={{ animationDelay: '100ms' }}>
          신랑 <span className={styles.name}>박현민</span>{' '}
          <span style={{ fontSize: '12px', marginLeft: '4px' }}>그리고</span> 신부{' '}
          <span className={styles.name}>이수경</span>
        </div>
        <p className={styles.fadeIn} style={{ animationDelay: '300ms' }}>
          2025. 09. 13 (토) 오후 2시 00분
          <br />
          춘천 미래컨벤션웨딩홀 1F 빌라드엠홀
        </p>
        <Button
          className={styles.fadeIn}
          style={{ animationDelay: '500ms', fontWeight: 'Hi Melody', fontSize: '20px', background: '#e5abab' }}
          text='청첩장 보기'
          size='fullWidth'
          onClick={handleButtonClick}
        />
      </div>
    </>
  )
}

export default Home
