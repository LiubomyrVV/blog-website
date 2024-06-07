import { useEffect, useState } from 'react'

import { getStories } from '../../service/getStories'

import styles from './container.module.css'
import { convertToDate } from '../../functions/functions'

export const Container = ({ count }) => {
    const [stories, setStories] = useState([])

    useEffect(() => {
        const getData = () => {
            getStories({ count })
            .then(res => {
                if (res && res.stories) {
                    setStories(res.stories);
                } else {
                    setStories([]); 
                }
            })
            .catch(err => {
                console.error('Error fetching stories:', err);
                getData()
            });
        }
        getData()
        
    }, [count])

    return (
        <ul className={styles.cartContainer}>
            {stories.length ? stories.map(({ id, title, longURL, thumbnailImage, resourceType, published
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
                    <p className={styles.description}> </p>
                    <a href={longURL} target='_blank' rel='noreferrer' className={styles.anchor}>Read More..</a>
                </li>
            }) : <div style={{ color: '#fff', textAlign: 'center', margin: '14px 0' }}>Loading</div>}
        </ul>
    )
}
