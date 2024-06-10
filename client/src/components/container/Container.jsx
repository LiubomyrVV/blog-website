import { useEffect, useState } from 'react'

import { getStories } from '../../service/getStories'

import styles from './container.module.css'
import { convertToDate } from '../../functions/functions'

const getDataDelay = 2000;

let tries = 0;
let maxTries = 5;
let timerId;

export const Container = ({ count }) => {
    const [stories, setStories] = useState([])

    useEffect(() => {
        const getData = () => {
            getStories({ count })
            .then(res => {
                if (res && res.stories) {
                    setStories(res.stories)
                } else {
                    if (tries <= maxTries) {
                        timerId = setTimeout(() => {
                            getData()
                        }, getDataDelay)
                        tries++
                    } else setStories([]);
                }
            })
            .catch(err => {
                if (tries <= maxTries) {
                    timerId = setTimeout(() => {
                        getData()
                    }, getDataDelay)
                    tries++
                } else console.error('Error fetching stories:', err) 
            })
        }
        getData()

        return () =>  {
            tries = 0
            clearTimeout(timerId)
        }
    }, [count]) 

    return (
        <ul className={styles.cartContainer}>
            {stories.length ? stories.map(({ title, longURL, thumbnailImage, resourceType, published
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
