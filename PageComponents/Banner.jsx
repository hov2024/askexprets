import React from 'react'
import { SlNotebook } from "react-icons/sl";
import styles from  "../../style/PageComponentsStyle/Banner.module.css"

const Banner = () => {
  return (
    <div className='banner'>
        <div className="container">
            <div className={styles['banner-content']}>
                <h3 className={styles['banner-content-title']}>Hello’ i Am </h3>
                <h4 className={styles['banner-content-subtitle']}>Adam Buschemia Business Consultant</h4>
                <p className={styles['banner-content-text']}>Get help from Alex Moore, a professional business coach with advanced experience on growth and business scaling.vvv</p>
                <div className={styles["btn-box"]}>
                  <button className={styles["btn-while"]}>
                    <div className={styles["btn-green"]}>
                      <SlNotebook size={20} />
                    </div>
                    Book a Meeting
                  </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner