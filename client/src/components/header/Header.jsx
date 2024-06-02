
import styles from './header.module.css'
import { useResize } from '../../hooks/useResize'
import { WIDTH } from './constant'
import { Burger } from './Burger'
import { NavLink, useNavigate } from 'react-router-dom'
import { PAGES } from '../../router/routes'
import { Logo } from '../logo/Logo'
import { useState } from 'react'
import { SearchBurger } from './SearchBurger'
import { SearchStoriesList } from './SearchStoriesList'




let timerId;
export const Header = () => {
  const [isInputActive, setIsInputActive] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')

  const { width } = useResize()
  const navigate = useNavigate()


  const redirect = () => {
    navigate(PAGES.BLOG)
  }
  const handleOnSearchChange = (e) => {
    const searchTerm = e.target.value

    clearTimeout(timerId)

    setTimeout(() => {
      setSearchTerm(searchTerm)
    }, 200)
  }

  return (
    <header>
  
      <div className={styles.wrapper}>
        <Logo />
        <SearchBurger
          setIsInputActive={setIsInputActive}
          isInputActive={isInputActive}
        />
        {width <= WIDTH.BURGER ?

          <Burger isInputActive={isInputActive} setIsInputActive={setIsInputActive} />
          :

          <ul className={styles.list}>
            <div className={styles.relativeContainer} style={{
              transform: isInputActive || width <= 1050 ? 'translateX(0%)' : 'translateX(160%)'
            }}>
              <li><NavLink to={PAGES.BLOG} style={({ isActive }) => isActive ? { color: 'var(--main-bg-color)' } : null}>Blog</NavLink></li>

              <li><NavLink to={PAGES.ABOUT} style={({ isActive }) => isActive ? { color: 'var(--main-bg-color)' } : null}>About</NavLink></li>


              <li><img className={styles.image}
                onClick={() => {
                  setIsInputActive(!isInputActive)
                }}
                src="search.svg" alt='Zarrin' /></li>
            </div>

            <div className={styles.search} style={{
              display: width <= 1050 ? 'none' : 'block',
              opacity: isInputActive ? '1' : '0',
              zIndex: isInputActive ? '10' : '-1',
              transform: isInputActive ? 'translateX(0%)' : 'translateX(100%)'
            }}>

              <input
                onChange={handleOnSearchChange}
                type='text'
                placeholder='Write something..' />
              <SearchStoriesList searchTerm={searchTerm} />
            </div>

            <li><NavLink to={PAGES.CONTACT} className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""

            }><button className={styles.button} onClick={redirect}>Contact Us</button></NavLink></li>
          </ul>
        }

      </div>
    </header>
  )
}
