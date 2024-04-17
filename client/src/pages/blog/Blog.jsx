import React from 'react'
import { Header } from '../../components/header/Header'
import { Footer } from '../../components/footer/Footer'
import Subscription from '../../components/subscription/Subscription'
import styles from './blog.module.css'
import { Container } from '../../components/container/Container'

export const Blog = () => {
  
  return (
    <div className='blog'>
      <Header />

        <section className={styles.titleWrapper}>
          <h4>OUR BLOGS</h4>
          <h1>Find our all blogs from here</h1>
          <p>our blogs are written from very research research and well known writers writers so that
            we can provide you the best blogs and articles articles for you to read them all along</p>
        </section>
        <Container count={6}/>
          
       

      <Subscription />
      <Footer />
    </div>
  )
}
