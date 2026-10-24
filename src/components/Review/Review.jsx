import styles from './Review.module.css'
import { reviews } from '../../data/reviews';
import { IoArrowForward } from "react-icons/io5";
import { IoArrowBackOutline } from "react-icons/io5";

const Review = () => {
  return (
    <section id="reviews">
        <div className={styles.reviews}>
            <h1>Reviews from our customers</h1>
            <p>CareerPathNow has got more than 100k positive ratings from our users around the world. </p>
            <div className={styles.reviewsCard}>
              {reviews.map((item, index) =>(
                <div key={index} className={styles.cards}>

                  <div className={styles.card}>

                      <div className={styles.imgbox}>
                        <img src={item.image} alt="" />
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
            <div className={styles.arrow}>
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