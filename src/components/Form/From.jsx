import styles from './From.module.css'
import Button from '../common/Button/Button'

const From = () => {
  return (
    <section id="From">
        <div className={styles.from}>
            <div className={styles.text}>
                <h1>Let's work together to grow your business</h1>
                <p>Sollicitudin ac orci phasellus egestas tellus rutrum. Lacus viverra vitae congue eu consequat ac. <br/> Nulla pharetra diam sit amet nisl suscipit.</p>
            </div>
            <div className={styles.frombox}>
                <input type="text" placeholder='First Name' />
                <input type="text" placeholder='Last Name' />
                <input type="email" placeholder='Email Address'  />
                <input type="number" placeholder='Phone Number'  />
                <textarea className={styles.Description}  placeholder='Description' ></textarea>
            </div>
            <Button>Contact Us</Button>
        </div>

    </section>
  )
}

export default From