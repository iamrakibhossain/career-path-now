import { useRef } from 'react'
import { useGSAP } from '../../Animations/gsapSetup'
import { reviewIntro } from './review.animation'
import styles from './Review.module.css'
import { reviews } from '../../data/reviews';
import { IoArrowForward } from "react-icons/io5";
import { IoArrowBackOutline } from "react-icons/io5";

const Review = () => {
  const root = useRef()

  useGSAP(() => {
    reviewIntro(root.current)
  }, { scope: root })

  return (
    <section ref={root} id="reviews">
        <div className={styles.reviews}>
            <h1 className="rv-title">Reviews from our customers</h1>
            <p className="rv-text">CareerPathNow has got more than 100k positive ratings from our users around the world. </p>

            <div className={`rv-list ${styles.reviewsCard}`}>
              {reviews.map((item, index) =>(
                <div key={index} className={`rv-card ${styles.cards}`}>
                  <div className={styles.card}>
                      <div className={styles.imgbox}>
                        <img className="rv-avatar" src={item.image} alt="" />
                        <div className={styles.imgtext}>
                          <p className={styles.name}>{item.name}</p>
                          <p className={styles.role}>{item.role}</p>
                        </div>
                      </div>
                      <p className={styles.text}>{item.text}</p>
                    </div>
                </div>
              ))}
            </div>

            <div className={`rv-arrow ${styles.arrow}`}>
                <IoArrowBackOutline />
                <div className={styles.Forward}>
                  <IoArrowForward />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Review