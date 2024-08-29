import Confetti from 'react-confetti'
import { Outlet } from 'react-router-dom'
import GNB from './GNB'
import styles from './layout.module.scss'

const Layout = () => {
  return (
    <>
      <Confetti numberOfPieces={100} opacity={0.5} colors={['#FFC0CB', '#FF69B4']} gravity={0.01} />
      <GNB />
      <main className={styles.pageContainer}>
        <Outlet />
      </main>
      {/* TODO: footer 추가 */}
    </>
  )
}

export default Layout
