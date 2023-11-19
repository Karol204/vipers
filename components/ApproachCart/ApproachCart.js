import React from 'react'
import Image from 'next/image.js'
import styles from './ApproachCart.module.css'

const ApproachCart = ({ imgURL, headline, text}) => {
  return (
    <div className={styles.container}>
        <Image className={styles.img}  src={imgURL}/>
        <h3 className={styles.headline}>{headline}</h3>
        <p className={styles.paragraph}>{text}</p>
    </div>
  )
}

export default ApproachCart