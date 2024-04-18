import { useNavigate } from "react-router-dom"
import { PAGES } from "../../router/routes"

import styles from './posts.module.css'
import { Container } from "../container/Container"


export const Posts = ({ title = 'Popular Post', count = 3, main = {}, rout = PAGES.BLOG }) => {
  let data = {}; 
  try {
    data = main
  } catch (err) {}

  const navigate = useNavigate()

  const redirect = (rout) => {
    navigate(rout)
  }

  return (
    <>


      <section className={styles.post}>
        <div className={styles.title}>
          <h3>{title}</h3>
          <button className={styles.button} onClick={() => {redirect(rout)}}>View All</button>
        </div>
        {Object.values(main).length ? 
        <div className={styles.main}>
          <img src={data.imageUrl} alt="" />
          <div className={styles.cart}>
            <div className={styles.details}>
              <div className={styles.type}>{data.type}</div>
              <div className={styles.date}>{data.date}</div>
            </div>
            <h3 className={styles.title}>{data.title}</h3>
            <p className={styles.description}>{data.description}</p>
            <div className={styles.posterButton}><button onClick={() => {redirect(data.rout)}} className={styles.anchor}>{data.button}</button></div>
          </div>
          
        </div> : null}
        
        <Container count={count} />
      </section>
    </>
  )
}
 