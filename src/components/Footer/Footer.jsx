import styles from './Footer.module.css'
import { AiFillInstagram } from "react-icons/ai";
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";

const Footer = () => {
  return (
    <footer>
        <div className={styles.footer}>
            <div className={styles.text}>
                <h2>CareerPathNow</h2>
                <p>Address of the organization</p>
                <p>+01 (787)-8765456</p>
            </div>
            <div className={styles.text}>
                <p>Find Us On Social Media:</p>
                <div className={styles.icons}>
                    <TiSocialFacebook className={styles.icon} />
                    <TiSocialTwitter className={styles.icon} />
                    <AiFillInstagram className={styles.icon}/>

                </div>
            </div>
            <div className={styles.text}>
                <p>We’re Always Happy To Help</p>
                <p>CareerPathNow@gmail.com</p>
            </div>
        </div>
        <hr />
        <p className={styles.copyright}>Copyright © 2024 CareerPathNow</p>
    </footer>
  )
}

export default Footer