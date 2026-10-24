import { useRef } from 'react'
import { useGSAP } from '../../Animations/gsapSetup'
import { navbarIntro } from './navbar.animation'

import styles from './Navbar.module.css'
import Button from '../common/Button/Button'

const navlinks = [
  { title: "Home", path: '#home' },
  { title: "About US", path: '#about' },
  { title: "Services", path: '#services' },
  { title: "Contact", path: '#contact' },
]

const Navbar = () => {

  const root = useRef()
  
  useGSAP(() => {
    navbarIntro(root.current)
  }, { scope: root })

  return (
    <nav ref={root} className={styles.navbar}>
      <h1 className={`nav-logo ${styles.logo}`}>CareerPathNow</h1>

      <ul className={styles.menu}>
        {navlinks.map((link) => (
          <li key={link.title} className="nav-item">
            <a href={link.path}>{link.title}</a>
          </li>
        ))}
      </ul>

      <div className="nav-actions">
        <a href="#signin">Sign In</a>
        <Button variant="light">Free Trial</Button>
      </div>
    </nav>
  )
}

export default Navbar