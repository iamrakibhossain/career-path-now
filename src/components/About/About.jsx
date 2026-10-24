import { useRef } from 'react'
import { useGSAP } from '../../Animations/gsapSetup'
import { aboutIntro } from './about.animation'
import styles from './About.module.css'
import icon from '../../assets/icons/Vector.svg'
import Button from '../common/Button/Button'

const About = () => {
  const root = useRef()

  useGSAP(() => {
    aboutIntro(root.current)
  }, { scope: root })

  return (
    <section ref={root} className={styles.About}>
        <div className={styles.aboutUs}>
            <div className={`about-heading ${styles.topHeading}`}>
                <h1>About Us</h1>
                <p>Skilline is one powerful online software suite that combines all the tools needed to run a successful school or office.</p>
            </div>
            <div className={`about-cards ${styles.cardbox}`}>
                <div className={`about-card ${styles.card}`}>
                    <div className={styles.icon}>
                        <img src={icon} alt="" />
                    </div>
                    <div className={styles.text}>
                        <h1>Mission</h1>
                        <p>Tailored career solutions, industry-leading assessments, and expert counseling.</p>
                    </div>
                </div>

                <div className={`about-card ${styles.card}`}>
                    <div className={styles.icon}>
                        <img src={icon} alt="" />
                    </div>
                    <div className={styles.text}>
                        <h1>Values</h1>
                        <p>Tailored career solutions, industry-leading assessments, and expert counseling.</p>
                    </div>
                </div>
                <div className={`about-card ${styles.card}`}>
                    <div className={styles.icon}>
                        <img src={icon} alt="" />
                    </div>
                    <div className={styles.text}>
                        <h1>Unique Selling Points</h1>
                        <p>Tailored career solutions, industry-leading assessments, and expert counseling.</p>
                    </div>
                </div>
            </div>
            <div className={`about-circle ${styles.cercle}`}></div>
            <div className="about-btn">
                <Button className={styles.aboutBtn}>Learn More</Button>
            </div>

        </div>

    </section>
  )
}

export default About