
import { Header } from '../../components/header/Header'
import { Footer } from '../../components/footer/Footer'
import Subscription from '../../components/subscription/Subscription'

import styles from './about.module.css'


import { P1, P2, P3, P4 } from './constant'

import { Posts } from '../../components/posts/Posts'
import { PAGES } from '../../router/routes'



export const About = () => {
 
  
  return (

    <div className="about">
      <Header />
      <div className={styles.title}>
        <div className={styles.details}>
          <div className={styles.type}>DEVELOPMENT</div>
          <div className={styles.date}>16 March 2023</div>
        </div>
        <h2>How to make a Game look more attractive with New VR & AI Technology</h2>
      </div>
      <article className={styles.main}>

        <img src="https://www.premiumbeat.com/blog/wp-content/uploads/2022/08/Best-VR-Film.jpg" alt="" />
        <section>
          <section className={styles.paragraphs}>
            <p>{P1}</p>
            <p>{P2}</p>
          </section>

          <blockquote>
            <p>“People worry that computers will get too smart and take over the world,
               but the real problem is that they’re too stupid and they’ve already 
               taken over the world.”</p>
            <footer>– Pedro Domingos</footer>
          </blockquote>
          <p>{P3}</p>

          <figure className={styles.imageFooter}>
            <img src="https://f00.esfr.pl/files/storage/article/photo/fd/94/7e/35a6ac475badfd6246a5ddcaab/ps%20vr_glowne_tekst.jpg" alt="" />
            <figcaption>
              {P4}
            </figcaption>
          </figure>
        </section>
        
        <Posts count={3} rout={PAGES.BLOG} />
      </article>
      <Subscription />
      <Footer />
    </div>
  )
}
