import React from 'react'
import { Header } from '../../components/header/Header'
import Subscription from '../../components/subscription/Subscription'
import { Footer } from '../../components/footer/Footer'
import styles from './contact.module.css'
import { ContactForm } from '../../components/contactForm/ContactForm'



export const Contact = () => {
  return (
    <div className='contact'>
      <Header />
      <section className={styles.getInTouch}>
        <div className={styles.title}>
          <h2>Get in Touch</h2>
          <p className={styles.subtitle}>Contact us to publish your content and show ads to our website and get a good reach</p>
        </div>
        <ul className={styles.carts}>
            <li>
              <figure className={styles.icon}><i class="bi bi-house"></i></figure>
              <h4 className={styles.title}>Office</h4>
              <p className={styles.info}>Victoria Street, London, UK</p>
            </li>
            <li>
              <figure className={styles.icon}><i class="bi bi-envelope"></i></figure>
              <h4 className={styles.title}>Email</h4>
              <p className={styles.info}>hello@zarrin.com</p>
            </li>
            <li>
              <figure className={styles.icon}><i class="bi bi-telephone"></i></figure>
              <h4 className={styles.title}>Phone</h4>
              <p className={styles.info}>(001) 2342 3451</p>
            </li>
        </ul>
      </section>
      <div className={styles.mapWrapper}>
          <div id='map'></div>
      </div>
      <section className={styles.contact}>
        <ContactForm />
      </section>
      <Subscription />
      <Footer />
    </div>
  )
}
