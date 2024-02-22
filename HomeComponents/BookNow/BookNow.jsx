import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import contentImg from '../../../img/bookNow-img.png'
import contentImg1 from '../../../img/bookNow-img-2.png'
import styles from '../../../style/BookNow/BookNow.module.css'

const BookNow = () => {
  return (
    <div className={styles.bookNow}>
        <div className="container">
           <div className={styles['bookNow-content']}>
                <div className={styles['bookNow-box']}>
                    <div className={styles['bookNow-left']}>
                        <h3 className={styles['bookNow-left-title']}>Book Now</h3>
                        <h4 className={styles['bookNow-left-subtitle']}>Better Consult, <span>Better</span> Results</h4>
                        <p className={styles['bookNow-left-text']}>Our software development agency has a growth up to 30% per each year. If you are result-oriented, not afraid to take initiative – drop us a note and join our team!</p>
                        <button className={styles["tel-number"]} type="submit"> <FaPhoneAlt /> + (888) 452 1505</button>
                    </div>
                    <div className={styles['bookNow-right']}>
                        <img src={contentImg} alt='contentImg' className={styles['bookNow-right-img']} />
                    </div>
                    <img src={contentImg1} alt='contentImg1'  className={styles['bookNow-right-img1']}/>
                </div>
           </div>
        </div>
    </div>
  )
}

export default BookNow