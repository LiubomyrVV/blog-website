import React, { useEffect, useState } from 'react'
import { getStories } from '../../service/getStories'

import styles from './searchStoriesList.module.css'
import { Link } from 'react-router-dom'

export const SearchStoriesList = ({ searchTerm }) => {
  const [stories, setStories] = useState([])
  const [stylesInfo, setStylesInfo] = useState({
    display: '',
    transform: '',
    opacity: '',
  })
 
  useEffect(() => {
    if (searchTerm) {
      setStylesInfo({...stylesInfo, display: 'block'})
      setTimeout(() => setStylesInfo({...stylesInfo,
        opacity: '1',
        transform: 'translateY(0)',
      }))
    } else {
      setStylesInfo({...stylesInfo, display: 'none'})
      setTimeout(() => setStylesInfo({...stylesInfo, opacity: '0', transform: 'translateY(-10%)'}))
    }
  }, [searchTerm])

  useEffect(() => {
    getStories({ searchTerm }).then(res => {setStories(res.stories)})
  }, [searchTerm])

  return (
    <ul style={{opacity: stylesInfo.opacity, transform: stylesInfo.transform,  display: stylesInfo.display}} className={styles.list}>
      {stories.length ? stories.map(({longURL, thumbnailImage, title}, idx) => 
        
        <li key={idx}>
          <Link to={longURL} target='_blank'>
            <img src={thumbnailImage} alt='' />
            <p>
              {title}
            </p>
          </Link>
        </li>
      ) : <div style={{color:'#fff', textAlign: 'center'}}> nothing found.. </div>}
    </ul>
  )
}
