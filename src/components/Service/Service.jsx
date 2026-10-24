import styles from './Service.module.css'
import { GiBriefcase } from "react-icons/gi";
import Button from '../common/Button/Button'


const Service = ({ id, title, texts, items, images, reverse = false }) => {
  return (
    <section id={id}>
        <div className={`${styles.Service} ${reverse ? styles.reverse : ''}`}>
            <div className={styles.left}>
                <div className={styles.circle}></div>
                <div className={styles.imgbox}>
                    <div className={styles.titleBar}>
                        <span className={`${styles.dot} ${styles.red}`}></span>
                        <span className={`${styles.dot} ${styles.yellow}`}></span>
                        <span className={`${styles.dot} ${styles.green}`}></span>
                    </div>
                    <div className={styles.imgcontainer}>
                        <img className={styles.img1} src={images[0]} alt="" />
                        <img className={styles.img2} src={images[1]} alt="" />
                        <img className={styles.img3} src={images[2]} alt="" />

                    </div>
                </div>
            </div>
            <div className={styles.right}>
                <h2>{title}</h2>
                {texts.map((text, index) => (
                    <p key={index}>{text}</p>
                ))}
                <div className={styles.iconContainer}>
                    {items.map((item) => (
                        <div key={item} className={styles.iconbox}>
                            <div className={styles.icon}><GiBriefcase /></div>
                            <p>{item}</p>
                        </div>
                    ))}
                </div>
                <Button>Get Started</Button>
                
            </div>
        </div>

    </section>
  )
}

export default Service