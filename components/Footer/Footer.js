import Link from 'next/link.js'
import styles from './Footer.module.css'
import React from 'react'

const Footer = () => {
  return (
    <div className={styles.container} id='footer'>
        <p className={styles.paragraph}>Created by <Link className={styles.link} href='http://karolrogalski.com'>Karol Rogalski</Link> </p>
           </div>
  )
}

export default Footer