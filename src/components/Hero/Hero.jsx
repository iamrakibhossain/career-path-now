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
  return (
    <section className={styles.Home}>
        <div className={styles.heroLeft}>
            <div className={styles.heroTxt}>
                <h1><span>Career </span>Path Now</h1>
                 <p>CareerPathNow is a renowned career counselling organization that helps individuals make informed decisions about their career paths.</p>
            </div>

            <div className={styles.heroBtn}>
                <Button>Get Started</Button>
                <div className={styles.playicon}>
                    <img src={icons} alt="Play" />
                </div>
                <span>Learn More</span>
            </div>
            
            <div className={styles.heroBottomImg}>
                <div className={styles.ImgItem1}><img src={img5} alt="" /></div>
                <div className={styles.ImgItem2}><img src={img6} alt="" /></div>
                <div className={styles.ImgItem3}><img src={img7} alt="" /></div>
                <p>10K+ satisfied students</p>
            </div>
        </div>


        <div className={styles.heroRight}>
            <div className={styles.yellowBox}></div>

            <img className={styles.heroImg} src={images} alt="Hero" />

            <div className={styles.RightTxtBox}>
                <div className={styles.txt}>
                    <h2>Our Happy Users</h2>
                    <p>200+ Online User</p>
                    <div className={styles.icon}>+</div>
                </div>
                <div className={styles.txt}>
                    <h2>27k</h2>
                    <p>Member Joined</p>
                    <div className={styles.imageBox}>
                        <img className={styles.img1} src={img1} alt="" />
                        <img className={styles.img2} src={img2} alt="" />
                        <img className={styles.img3} src={img3} alt="" />
                        <img className={styles.img4} src={img4} alt="" />
                    </div>
                </div>
                <div className={styles.txt}>
                    <h2>27k</h2>
                    <p>Member Joined</p>
                    <div className={styles.imageBox}>
                        <img className={styles.img1} src={img1} alt="" />
                        <img className={styles.img2} src={img2} alt="" />
                        <img className={styles.img3} src={img3} alt="" />
                        <img className={styles.img4} src={img4} alt="" />
                    </div>
                </div>
            </div>
            
            
            
        </div>
    </section>
  )
}

export default Hero