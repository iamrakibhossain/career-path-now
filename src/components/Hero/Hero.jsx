import { useRef } from 'react'
import { useGSAP } from '../../Animations/gsapSetup'
import { heroIntro } from './hero.animation'

import styles from './Hero.module.css'
import icons from '../../assets/icons/play.svg'
import images from '../../assets/images/Images.png'
import img1 from '../../assets/images/img1.svg'
import img2 from '../../assets/images/img2.svg'
import img3 from '../../assets/images/img3.svg'
import img4 from '../../assets/images/img4.svg'
import img5 from '../../assets/images/img5.svg'
import img6 from '../../assets/images/img6.svg'
import img7 from '../../assets/images/img7.svg'
import Button from '../common/Button/Button';

const Hero = () => {

  const root = useRef()

  useGSAP(() => {
    heroIntro(root.current)
  }, { scope: root })

  return (
    <section ref={root} className={styles.Home}>
        <div className={`heroLeft ${styles.heroLeft}`}>
            <div className={styles.heroTxt}>
                <h1><span>Career </span>Path Now</h1>
                 <p>CareerPathNow is a renowned career counselling organization that helps individuals make informed decisions about their career paths.</p>
            </div>

            <div className={styles.heroBtn}>
                <Button>Get Started</Button>
                <div className={`hero-avatar ${styles.playicon}`}>
                    <img src={icons} alt="Play" />
                </div>
                <span>Learn More</span>
            </div>
            
            <div className={styles.heroBottomImg}>
                <div className={`hero-avatar ${styles.ImgItem1}`}><img src={img5} alt="" /></div>
                <div className={`hero-avatar ${styles.ImgItem2}`}><img src={img6} alt="" /></div>
                <div className={`hero-avatar ${styles.ImgItem3}`}><img src={img7} alt="" /></div>
                <p>10K+ satisfied students</p>
            </div>
        </div>


        <div className={`heroRight ${styles.heroRight}`}>
            <div className={styles.yellowBox}></div>

            <div className={styles.imgClip}>
                <img className={`hero-img ${styles.heroImg}`} src={images} alt="Hero" />
            </div>

            <div className={`hero-card ${styles.RightTxtBox}`}>
                <div className={styles.txt}>
                    <h2>Our Happy Users</h2>
                    <p>200+ Online User</p>
                    <div className={`hero-avatar ${styles.icon}`}>+</div>
                </div>
                <div className={styles.txt}>
                    <h2>27k</h2>
                    <p>Member Joined</p>
                    <div className={`hero-card ${styles.imageBox}`}>
                        <img className={`hero-avatar ${styles.img1}`} src={img1} alt="" />
                        <img className={`hero-avatar ${styles.img2}`} src={img2} alt="" />
                        <img className={`hero-avatar ${styles.img3}`} src={img3} alt="" />
                        <img className={`hero-avatar ${styles.img4}`} src={img4} alt="" />
                    </div>
                </div>
                <div className={styles.txt}>
                    <h2>27k</h2>
                    <p>Member Joined</p>
                    <div className={`hero-card ${styles.imageBox}`}>
                        <img className={`hero-avatar ${styles.img1}`} src={img1} alt="" />
                        <img className={`hero-avatar ${styles.img2}`} src={img2} alt="" />
                        <img className={`hero-avatar ${styles.img3}`} src={img3} alt="" />
                        <img className={`hero-avatar ${styles.img4}`} src={img4} alt="" />
                    </div>
                </div>
            </div>
            
            
            
        </div>
    </section>
  )
}

export default Hero