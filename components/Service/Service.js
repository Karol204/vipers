import React from 'react'
import ServiceCart from '../ServiceCart/ServiceCart.js'
import Image from 'next/image.js'
import event1 from '../../public/event1.jpg'
import event2 from '../../public/event2.jpg'
import event3 from '../../public/event3.jpg'
import styles from './Service.module.css'


const Service = () => {
  return (
    <div className={styles.services}>
          <h1 className={styles.servicesyHeadline}>Service we provide</h1>
          <div className={styles.servicesPictureContainer}>
          </div>
    </div>
  )
}

export default Service