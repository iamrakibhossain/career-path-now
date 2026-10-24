import { useRef } from 'react'
import { useGSAP } from '../../Animations/gsapSetup'
import { serviceIntro } from './service.animation'
import styles from './Service.module.css'
import { GiBriefcase } from "react-icons/gi";
import Button from '../common/Button/Button'

const Service = ({ id, title, texts, items, images, reverse = false }) => {
  const root = useRef()

  useGSAP(() => {
    serviceIntro(root.current, reverse)
  }, { scope: root })

  return (
    <section ref={root} id={id}>
        <div className={`${styles.Service} ${reverse ? styles.reverse : ''}`}>
            <div className={`svc-left ${styles.left}`}>
                <div className={`svc-circle ${styles.circle}`}></div>
                <div className={styles.imgbox}>
                    <div className={styles.titleBar}>
                        <span className={`${styles.dot} ${styles.red}`}></span>
                        <span className={`${styles.dot} ${styles.yellow}`}></span>
                        <span className={`${styles.dot} ${styles.green}`}></span>
                    </div>
                    <div className={styles.imgcontainer}>
                        <img className={`svc-img ${styles.img1}`} src={images[0]} alt="" />
                        <img className={`svc-img ${styles.img2}`} src={images[1]} alt="" />
                        <img className={`svc-img ${styles.img3}`} src={images[2]} alt="" />
                    </div>
                </div>
            </div>

            <div className={`svc-right ${styles.right}`}>
                <h2 className="svc-title">{title}</h2>
                {texts.map((text, index) => (
                    <p key={index} className="svc-text">{text}</p>
                ))}
                <div className={styles.iconContainer}>
                    {items.map((item) => (
                        <div key={item} className={`svc-item ${styles.iconbox}`}>
                            <div className={styles.icon}><GiBriefcase /></div>
                            <p>{item}</p>
                        </div>
                    ))}
                </div>
                <div className="svc-btn">
                    <Button>Get Started</Button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Service