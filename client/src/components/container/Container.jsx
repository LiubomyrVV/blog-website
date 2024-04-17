
import { useEffect, useState } from 'react'
import { getStories } from '../../service/getStories'
import styles from './container.module.css'
import { convertToDate } from '../../functions/functions'






export const Container = ({ count }) => {
    const [stories, setStories] = useState([])


    useEffect(() => {
        getStories({ count }).then(res => {
            console.log(res.stories)
            setStories(res.stories)
        })
    }, [])
    

    
    return (
        <ul className={styles.cartContainer}>
               {stories.map(({id, title, longURL, thumbnailImage, resourceType, published
                    }, idx) => {
                    
                
                    return <li className={styles.item} key={idx}>
                        <img 
                        alt='' 
                        src={thumbnailImage}
                        className={styles.image}
                    
                        />
                        <div className={styles.details}>
                            <div className={styles.type}>{resourceType}</div>
                            <div className={styles.date}>{convertToDate(published)}</div>
                        </div>
                        <h3 className={styles.title}>{title}</h3>
                        <p  className={styles.description}> </p>
                        <a href={longURL} target='_blank' rel='noreferrer' className={styles.anchor}>Read More..</a>
                    </li>

                })} 
        </ul>
        
    )
}
