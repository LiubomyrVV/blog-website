import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useResize } from '../../hooks/useResize'

import styles from './searchBurger.module.css'

import { screen } from '../../functions/Screen'
import { getStories } from '../../service/getStories'

let timerId;

export const SearchBurger = ({ isInputActive, setIsInputActive }) => {
  const { width } = useResize()

  const [filteredStories, setFilteredStories] = useState([])
  
  useEffect(() => {
    getStories({ searchTerm: '' })
      .then(res => { 
        if (res && res.stories) {
          setFilteredStories(res.stories)
        } else {
          setFilteredStories([])
        }
      })
      .catch(error => {
        console.error('Error fetching stories:', error)
        setFilteredStories([])
      });
  },[])

  const handleInputChange = (e) => {
    const searchTerm = e.target.value

    clearTimeout(timerId)
    timerId = setTimeout(() => {
      getStories({ searchTerm })
        .then(res => {
          if (res && res.stories) {
            setFilteredStories(res.stories)
          } else {
            setFilteredStories([])
          }
        })
        .catch(error => {
          console.error('Error fetching stories:', error)
          setFilteredStories([])
        })
    }, 200)
  }

  return (
    <div
      className={styles.wrapper}
      style={{
        transform: isInputActive && width <= 1050 ? 'translateX(0%)' : 'translateX(100%)'
      }}
    >
      <div className={styles.exit}
        onClick={() => {
          screen.enableScroll()
          setIsInputActive(!isInputActive)
        }}

      ><i className="bi bi-x-lg"></i></div>
      <h3 className={styles.title}><span style={{ color: ' rgb(34, 9, 92)' }}>S</span>earch</h3>
      <div className={styles.search}><input
        type='text'
        placeholder='Write something..'
        onChange={handleInputChange}
      /> </div>

      <div className={styles.list}
      > 

        <ul  
        >
          {filteredStories.length ? filteredStories.map(({ title, longURL, contentLength, thumbnailImage }, idx) => {
          
            return (
              <li key={idx}>
                <Link value={contentLength} to={longURL} target='_blank'>
                  <img src={thumbnailImage} alt="" width='62px' height='42px'/>
                  <p>{title}</p>
                </Link>
              </li>
            )
          }

          ) : <div style={{color: '#fff', textAlign: 'center', margin: '14px 0'}}>Nothing found</div>}
        </ul>
      </div>
    </div>

  )
}
