import React from 'react'
import Link from 'next/link.js'
import styles from './Hero.module.css'
import Image from 'next/image.js'

import Logo from '../../public/logo1.png'


const Hero = () => {
  return (
    <div className={styles.homePagePicture}>
        <div className={styles.headlines}>
          <h1 className={styles.headline1}>Welcome to <br/>Vipers London Limited</h1>
          <h3 className={styles.headline2}>Elevating Hospitality Through Exemplary Staffing and Expert Consultancy</h3>
          {/* <Link className={styles.button} href='enquiries'>Enquire Now</Link> */}
          {/* <Image className={styles.Logo} src={Logo}/> */}
        </div>
        <Image className={styles.Logo1} alt='Vipers London Limited Logo' src={Logo}/>

      </div>
  )
}

export default Hero