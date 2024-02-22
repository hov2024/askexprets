import React from 'react'
import { TfiEmail } from "react-icons/tfi";
import { BsTelephone } from "react-icons/bs";
import { PiUsersThreeDuotone } from "react-icons/pi";
import aboutImg from '../../img/about-me-img.png'
import styles from '../../style/PageComponentsStyle/About.module.css'


const About = () => {
  return (
    <div className={styles.about}>
        <div className="container">
            <div className={styles['about-box']}>
                <div className={styles['about-content']}>
                    <h4 className={styles['about-title']}>About Me</h4>
                    <h4 className={styles['about-subtitle']}>About our Consuting Agency Team</h4>
                    <p className={styles['about-text']}>We create experiences and build products that make business grow</p>
                    <p className={styles['about-text-info']}>Get help from Alex Moore, a professional business coach with advanced experience on growth and business scaling.</p>
                    <div className={styles['about-contact']}>
                        <div className={styles['about-maile-box']}>
                            <div className={styles['about-mail-icon']}>
                                <TfiEmail size={17} color='#C7981F' />
                            </div>
                            <p className={styles['about-mail-adress']}>Buschemia@gmailcom</p>
                        </div>
                        <div className={styles['about-tel-box']}>
                            <div className={styles['about-tel-icon']}>
                                <BsTelephone  size={17} color='#37A437'/>
                            </div>
                            <p className={styles['about-tel-num']}>(001) 5648 6584</p>
                        </div>
                        <button className='btn-black'>Make An Appointment</button>
                    </div>
                </div>
                <div className={styles['about-info-img']}>
                    <img src={aboutImg} className={styles['about-img']} alt="" />
                    <div className={styles.yellow}></div>
                    <div className={styles['about-info-box']}>
                        <PiUsersThreeDuotone  size={67} color='#141414'/>
                        <div className={styles['about-info-content']}>
                            <h3>1,542</h3>
                            <p>Satisfied Clients</p>
                        </div>
                    </div>
                    <div className={styles.green}></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About