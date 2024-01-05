import styles from './NavBar.module.css'
import Link from 'next/link.js'
import Image from 'next/image.js'
import Logo from '../public/logo1.png'

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      
        <ul className={styles.navUl}>
        <Image className={styles.Logo} src={Logo} alt='Vipers London Limited Logo'/>

            <li className={styles.navLi}><Link className={styles.navLink} href='#ourApproach'>Our Approach</Link></li>
            <li className={styles.navLi}><Link className={styles.navLink} href='#specials'>Specialization</Link></li>
            <li className={styles.navLi}><Link className={styles.navLink} href='#form'>Contact</Link></li>

        </ul>
    </nav>
  )
}

export default NavBar