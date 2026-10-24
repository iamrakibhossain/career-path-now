import { useRef } from 'react'
import { useGSAP } from '../../Animations/gsapSetup'
import { footerIntro } from './footer.animation'
import styles from './Footer.module.css'
import { AiFillInstagram } from "react-icons/ai";
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";

const Footer = () => {
  const root = useRef()

  useGSAP(() => {
    footerIntro(root.current)
  }, { scope: root })

  return (
    <footer ref={root}>
        <div className={styles.footer}>
            <div className={`ft-col ${styles.text}`}>
                <h2>CareerPathNow</h2>
                <p>Address of the organization</p>
                <p>+01 (787)-8765456</p>
            </div>
            <div className={`ft-col ${styles.text}`}>
                <p>Find Us On Social Media:</p>
                <div className={styles.icons}>
                    <TiSocialFacebook className={`ft-icon ${styles.icon}`} />
                    <TiSocialTwitter className={`ft-icon ${styles.icon}`} />
                    <AiFillInstagram className={`ft-icon ${styles.icon}`} />
                </div>
            </div>
            <div className={`ft-col ${styles.text}`}>
                <p>We’re Always Happy To Help</p>
                <p>CareerPathNow@gmail.com</p>
            </div>
        </div>
        <hr className="ft-line" />
        <p className={`ft-copy ${styles.copyright}`}>Copyright © 2024 CareerPathNow</p>
    </footer>
  )
}

export default Footer