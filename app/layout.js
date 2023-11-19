import './globals.css'
import { Inter, Open_Sans, Roboto } from 'next/font/google'
import NavBar from '../components/NavBar.js'
import Footer from '../components/Footer/Footer.js'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Vipers solutions',
  description: 'Making your bussiness run swiftly',
}

const openSans = Roboto({
  subsets: ['latin'],
  display: 'swap',
  weight: '400'
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <>
<NavBar/>
{children}
<Footer/>
        </></body>
    </html>
  )
}
