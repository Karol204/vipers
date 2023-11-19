import React from 'react'
import styles from './Approach.module.css'
import ApproachCart from '../ApproachCart/ApproachCart.js'
import bartender from '../../public/bartender.jpg'
import chef from '../../public/chef.jpg'
import wedding from '../../public/wedding.jpg'


const Approach = () => {
  return (
    <div className={styles.section} id='ourApproach'>
      <div className={styles.approach}>
        <h2 className={styles.approachH2}>Vipers Approach</h2>
        <p className={styles.approachP}>Welcome to Vipers London Limited, a distinguished leader in hospitality staffing and consultancy services nestled in the heart of London. Our foundation is built upon an unwavering commitment to excellence, positioning us as your definitive partner for tailored staffing solutions and strategic consultancy across Hotels, Restaurants, Bars, and Events. Our resolute dedication translates into seamless operations, unparalleled guest experiences, and lasting success. </p>
      </div>
      <div className={styles.container} id='specials'>
        <ApproachCart imgURL={bartender} headline={'Staffing Distinction:'} text={'Imagine a reservoir of unparalleled talent, handpicked to meet the unique demands of your establishment. From skilled culinary artisans to captivating front-of-house professionals, our candidates embody the essence of exceptional guest experiences. '}/>
        <ApproachCart imgURL={chef} headline={'Our Profound Expertise:'} text={'Within the halls of Vipers London, a collective of industry experts converge, each with an intricate understanding of the nuances within the hospitality sector. We seamlessly blend our extensive experience with a dedication to perfection, presenting an array of bespoke staffing talents and incisive consultancy prowess that defies convention. '}/>
        <ApproachCart imgURL={wedding} headline={'Elevated Consultancy: '} text={'Elevate your venture through our comprehensive consultancy services, an avant-garde approach to refining your hospitality enterprise. Our adept consultants meticulously analyze every facet of your business, offering insights and strategies that enhance efficiency, amplify guest satisfaction, and catalyze profitability.'}/>

      </div>
    
    
    </div>
  )
}

export default Approach