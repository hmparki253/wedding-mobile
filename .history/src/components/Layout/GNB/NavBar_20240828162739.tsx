import cx from 'classnames'
import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

import { trackMenuClick } from 'hooks/useGTM'
import styles from './gnb.module.scss'

interface INavItem {
  to: string
  title: string
}

const navList: INavItem[] = [
  {
    to: '/',
    title: '홈',
  },
  {
    to: 'invitation',
    title: '청첩장',
  },
  {
    to: 'gallery',
    title: '사진첩',
  },
  {
    to: 'message',
    title: '방명록',
  },
]

const ITEM_WIDTH = 100 / navList.length

const getCurrentIndex = (pathname: string) => {
  const path = pathname.split('/')[1]
  const index = navList.findIndex((item) => item.to === path)
  return index === -1 ? 0 : index
}

const NavBar = () => {
  const location = useLocation()
  const [currentIndex, setCurrentIndex] = useState(getCurrentIndex(location.pathname))

  useEffect(() => {
    setCurrentIndex(getCurrentIndex(location.pathname))
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <nav className={styles.navBar}>
      <ul>
        {navList.map((item) => (
          <li key={`gnb-item-${item.title}`} style={{ width: `${ITEM_WIDTH}%` }}>
            <NavLink
              to={item.to}
              className={({ isActive }) => cx({ [styles.isActive]: isActive })}
              onClick={() => trackMenuClick(item.to)}
            >
              {item.title}
            </NavLink>
          </li>
        ))}
      </ul>
      {/* <span
        className={styles.indicator}
        style={{
          width: `${ITEM_WIDTH}%`,
          transform: `translateX(${currentIndex * 100}%)`,
        }}
      /> */}
    </nav>
  )
}

export default NavBar
