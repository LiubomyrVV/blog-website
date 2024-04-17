

import { Footer } from '../../components/footer/Footer'
import { Header } from '../../components/header/Header'
import { Posts } from '../../components/posts/Posts'
import Subscription from '../../components/subscription/Subscription'

import styles from './home.module.css'

import { IMG_URL1, P1 } from './constant'
import { useNavigate } from 'react-router-dom'
import { PAGES, ROUTES } from '../../router/routes'
import { Background } from '../../components/background/Background'



export const Home = () => {
  const navigate  = useNavigate()
  
  const redirect = () => {
    navigate(PAGES.ABOUT)
  }
  return (
    <div className='home'>
           <Header />
           <div className={styles.featuredContainer}>
                <Background >
                    <figure className={styles.wrapper}>
                        <figcaption>
                            <div className={styles.type}>Featured Post</div>
                            <h3>How AI will Change the Future</h3>
                            <p>{P1}</p>
                            <button className={styles.button} onClick={redirect}>Read more</button>
                        </figcaption>
                        <img src={IMG_URL1} alt=""  />
                    </figure>
                </Background>
           </div> 
           <div className={styles.poster}>
              <div className={styles.wrapper}>
                <img src="https://www.premiumbeat.com/blog/wp-content/uploads/2022/08/Best-VR-Film.jpg" alt="" />
                <div className={styles.cart}>
                    <div className={styles.details}>
                      <div className={styles.type}>DEVELOPMENT</div>
                      <div className={styles.date}>11March 2023</div>
                    </div>
                    <h3 className={styles.title}>Best Website to research for your  next project</h3>
                    <p  className={styles.description}>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clicks </p>
                    <div className={styles.posterButton}><button onClick={redirect} className={styles.anchor}>Read More..</button></div>
                    
                  </div>
              </div>
           </div>       
           <Posts main={{
                imageUrl: `https://www.premiumbeat.com/blog/wp-content/uploads/2022/08/Best-VR-Film.jpg `,
                type: `DEVELOPMENT`,
                date: `11March 2023`,
                title: `Best Website to research for your  next project`,
                description: `Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clicks `,
                button: `Read More..`,
                rout: PAGES.ABOUT
              }} title={`Our Recent Post`} />
           
           
           <Posts count={6} rout={PAGES.BLOG} />
           <Subscription />
           <Footer />
    </div>
  )
}
