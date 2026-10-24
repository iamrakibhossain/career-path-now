import {useRef} from 'react'
import { useGSAP } from '../../Animations/gsapSetup'
import { fromIntro } from './from.animatiom'

import styles from './From.module.css'
import Button from '../common/Button/Button'

const From = () => {
    const root = useRef()
    useGSAP(() => {
        fromIntro(root.current)
    }, { scope: root })

  return (
    <section ref={root} id="From" className={styles.From}>
        <div className={`from ${styles.from}`}>
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
        <div className={styles.bgClip}>
            <div className={`bgcolor1 ${styles.bgcolor1}`}></div>
            <div className={`bgcolor2 ${styles.bgcolor2}`}></div>
        </div>

    </section>
  )
}

export default From