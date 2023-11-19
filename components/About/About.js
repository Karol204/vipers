import React from 'react'
import Image from 'next/image.js'
import styles from './About.module.css'
import AboutPic from '../../public/about.jpg'
import ContactForm from '../ContactForm/ContactForm.js'

const About = () => {
  return (
    <div className={styles.AboutContainer}>
      <h1 className={styles.AboutHeadline}>Answering the Call to Elevate</h1> 
      <p className={styles.AboutParagraph}>Vipers London Limited invites you to reshape your hospitality narrative. More than a service provider, we are architects of triumph. Join forces with us to craft unforgettable experiences, optimize operations, and chart a course for unparalleled growth. 

Connect with us today, and embark on a journey where staffing brilliance and strategic consultancy converge to script a magnum opus for your establishment. </p>
      <div className={styles.innerContainer}>
      <div className={styles.imgContainer}>
          <Image className={styles.img}  src={AboutPic}/>
        </div>
        <div className={styles.Features} id='form'>
          <ContactForm/>
        </div>
        
      </div>
     
    </div>
  )
}

export default About