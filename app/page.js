import Image from 'next/image'
import styles from './page.module.css'
import NavBar from '../components/NavBar.js'
// import homePagePicture from '../public/homePagePicture.jpg' 
import Link from 'next/link.js'
import About from '../components/About/About.js'
import Approach from '../components/Approach/Approach.js'
import Hero from '../components/Hero/Hero.js'


export default function Home() {
  return (
    <main className={styles.main}>
      <Hero/>
      <Approach/>
      <About/>

      
    </main>
  )
}
