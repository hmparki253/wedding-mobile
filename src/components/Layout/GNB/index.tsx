import { Link } from 'react-router-dom'

import styles from './gnb.module.scss'
import NavBar from './NavBar'

const GNB = () => {
  return (
    <header className={styles.gnb}>
      <div className={styles.headerWrapper}>
        <div className={styles.logoWrapper}>
          <Link to='/'>정회 & 은솔</Link>
        </div>
        <NavBar />
      </div>
    </header>
  )
}

export default GNB
