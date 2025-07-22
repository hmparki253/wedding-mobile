import styles from './gnb.module.scss'
import NavBar from './NavBar'

const GNB = () => {
  return (
    <header className={styles.gnb}>
      <div className={styles.headerWrapper}>
        <div className={styles.logoWrapper}>
          <div className={styles.headerDate}>2025 / 09 / 13 </div>
          <div className={styles.headerDay}>SATURDAY</div>
        </div>
        <NavBar />
      </div>
    </header>
  )
}

export default GNB
