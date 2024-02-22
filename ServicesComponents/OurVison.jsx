import React from 'react'
import ourVisionImg from '../../img/ourVision-img.png'
import iconOk from '../../img/ok-Icon.png'
import styles from '../../style/ServicesComponentsStyle/OurVision.module.css'
const OurVison = () => {
  return (
    <div className={styles['ourVision']}>
        <div className="container">
            <div className={styles['our-vision-box']}>
                <div className={styles['our-vision-content']}>
                    <h4 className='green-title'>OUR VISION</h4>
                    <h5 className='subtitle'>Turn your ideas into reality.</h5>
                    <p className='text-style'>Capitalize on low hanging fruit to identify a ballpark value added activity beta test. Override the digital divide with additional from DevOps.</p>
                    <div className={styles['our-vision-info']}>
                        <img src={iconOk} alt="iconOk" />
                        <p className={styles['our-vision-info-text']}>
                            Bring to the table win-win survival strategies to ensure 
                            proactive domination. At the end of the day.
                        </p>
                    </div>
                    <div className={styles['our-vision-info']}>
                        <img src={iconOk} alt="iconOk" />
                        <p className={styles['our-vision-info-text']}>
                            Capitalize on low hanging fruit to identify a ballpark value 
                            added activity to beta test override the digital.
                        </p>
                    </div>
                </div>
                <div className={styles['our-vison-img']}>
                    <img src={ourVisionImg} alt="ourVision" />
                </div>
            </div>
            <div className={styles['our-vision-static-box']}>
                <div className={styles['our-vision-static']}>
                    <h3>1128+</h3>
                    <p>Successful Work</p>
                </div>
                <div className={styles['our-vision-static']}>
                    <h3>908+</h3>
                    <p>Team member</p>
                </div>
                <div className={styles['our-vision-static']}>
                    <h3>258+</h3>
                    <p>Happy Customers</p>
                </div>
                <div className={styles['our-vision-static']}>
                    <h3>564+</h3>
                    <p>Creative Idea</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OurVison