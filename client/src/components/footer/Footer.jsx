

import styles from './footer.module.css'
import { Logo } from '../logo/Logo'
import { Link, NavLink } from 'react-router-dom'
import { PAGES } from '../../router/routes'


export const Footer = () => {

  const handleOnClick = () => {
    localStorage.setItem('isRedirectFromFooter', true)
  }
 
  

  return (
    <footer>
    <div className={styles.footerContainer}>
      <div className={styles.contact}>

        <Logo />

        <ul className={styles.navigation}>
          <li onClick={handleOnClick}><NavLink to={PAGES.HOME}> Home </NavLink></li>

          <li onClick={handleOnClick}><NavLink to={PAGES.BLOG}> Blog </NavLink></li>

          <li onClick={handleOnClick}><NavLink to={PAGES.ABOUT}> About </NavLink></li>

          <li onClick={handleOnClick}><NavLink to={PAGES.CONTACT}> Contact Us </NavLink></li>
        </ul>

        <ul className={styles.socials}>
            <li><Link>FB</Link></li>
            <li><Link>IG</Link></li>
            <li><Link>LN</Link></li>
            <li><Link>YT</Link></li>
        </ul>
      </div>

      <div className={styles.copyright}>
        Copyright Ideapeel Inc © 2023. All Right Reserved
      </div>
    </div>
    </footer>
  )
}
