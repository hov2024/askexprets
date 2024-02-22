import React from 'react'
import { PiUsersThree } from "react-icons/pi";
import { PiUsersFourThin } from "react-icons/pi";
import statisticsIcon1 from '../../img/statistics-icon-1.png'
import statisticsIcon2 from '../../img/statistics-icon-2.png'
import styles from '../../style/PageComponentsStyle/Statistics.module.css'

const Statistics = () => {
  return (
    <div className={styles['statistics']}>
        <div className="container">
            <div className={styles['statistics-box']}>
                <div className={styles['statistics-info']}>
                    <PiUsersThree size={54} color='#4EAF4E'/>
                    <div className={styles['statistics-info-box']}>
                        <p className={styles['statistics-info-number']}>1,542+</p>
                        <p className={styles['statistics-info-text']}>Satisfied Clients</p>
                    </div>
                </div>
                <div className={styles['statistics-info']}>
                    <PiUsersFourThin size={54} color='#4EAF4E'/>
                    <div className={styles['statistics-info-box']}>
                        <p className={styles['statistics-info-number']}>182</p>
                        <p className={styles['statistics-info-text']}>Expert Team</p>
                    </div>
                </div>
                <div className={styles['statistics-info']}>
                    <img src={statisticsIcon1} alt="statisticsIcon1" />
                    <div className={styles['statistics-info-box']}>
                        <p className={styles['statistics-info-number']}>285</p>
                        <p className={styles['statistics-info-text']}>Activate Products</p>
                    </div>
                </div>
                <div className={styles['statistics-info']}>
                    <img src={statisticsIcon2} alt="statisticsIcon2" />
                    <div className={styles['statistics-info-box']}>
                        <p className={styles['statistics-info-number']}>28+</p>
                        <p className={styles['statistics-info-text']}>Awards Winning</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Statistics