import { useEffect, useState } from 'react'
import { useResize } from '../../hooks/useResize'
import styles from './searchBurger.module.css'
import { screen } from '../../functions/Screen'
import { getStories } from '../../service/getStories'
import { Link } from 'react-router-dom'

let timerId;

export const SearchBurger = ({ isInputActive, setIsInputActive }) => {
  const { width } = useResize()
 
  const [filteredStories, setFilteredStories] = useState([])

  const handleInputChange = (e) => {
    const searchTerm = e.target.value

    clearTimeout(timerId)
    timerId = setTimeout(() => {
      getStories({ searchTerm }).then(res => {setFilteredStories(res.stories)})
    }, 200)
   
    console.log(filteredStories)
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

      ><i class="bi bi-x-lg"></i></div>
      <h3 className={styles.title}><span style={{color: ' rgb(34, 9, 92)'}}>S</span>earch</h3>
      <div className={styles.search}><input
        type='text'
        placeholder='Write something..'
        onChange={handleInputChange}
      /> </div>
      
      {!filteredStories.length ? <div style={{ textAlign: 'center', color: '#fff' }}>Nothing found ;d</div> : null}
      <div className={styles.list}
        style={{ opacity: filteredStories.length ? '1' : '0' }}
      >
        
        <ul
        >
          {filteredStories.length ? filteredStories.map(({title, longUrl, contentLength, thumbnailImage }, idx) => {
            return (<>
              <li key={idx}>
                <Link  value={contentLength} to={longUrl} target='_blank'>
                  <img src={thumbnailImage} alt="" width='62px'/>
                  <p>{title}</p>
                  </Link>
              </li>
            </>)
          }

          ) : <div>nothing</div>}
        </ul>
      </div>
    </div>

  )
}
