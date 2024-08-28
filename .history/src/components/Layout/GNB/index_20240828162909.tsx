import styles from './gnb.module.scss'
import NavBar from './NavBar'

const GNB = () => {
  return (
    <header className={styles.gnb}>
      <div className={styles.headerWrapper}>
        <div className={styles.logoWrapper}>
          <div>2024 / 11 / 30 </div>
          <div>2024 / 11 / 30 </div>
        </div>
        <NavBar />
      </div>
    </header>
  )
}

export default GNB
