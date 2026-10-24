import styles from './About.module.css'
import icon from '../../assets/icons/Vector.svg'
import Button from '../common/Button/Button'

const About = () => {
  return (
    <section className={styles.About}>
        <div className={styles.aboutUs}>
            <div className={styles.topHeading}>
                <h1>About Us</h1>
                <p>Skilline is one powerful online software suite that combines all the tools needed to run a successful school or office.</p>
            </div>
            <div className={styles.cardbox}>
                <div className={styles.card}>
                    <div className={styles.icon}>
                        <img src={icon} alt="" />
                    </div>
                    <div className={styles.text}>
                        <h1>Mission</h1>
                        <p>Tailored career solutions, industry-leading assessments, and expert counseling.</p>
                    </div>
                </div>

                <div className={styles.card}>
                    <div className={styles.icon}>
                        <img src={icon} alt="" />
                    </div>
                    <div className={styles.text}>
                        <h1>Values</h1>
                        <p>Tailored career solutions, industry-leading assessments, and expert counseling.</p>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.icon}>
                        <img src={icon} alt="" />
                    </div>
                    <div className={styles.text}>
                        <h1>Unique Selling Points</h1>
                        <p>Tailored career solutions, industry-leading assessments, and expert counseling.</p>
                    </div>
                </div>
            </div>
            <div className={styles.cercle}></div>
            <Button className={styles.aboutBtn}>Learn More</Button>

        </div>

    </section>
  )
}

export default About