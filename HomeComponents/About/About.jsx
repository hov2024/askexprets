import React from 'react'
import { IoStar } from "react-icons/io5";
import { FaSmile } from "react-icons/fa";
import aboutBg from '../../../img/about-bg.png';
import aboutImges from '../../../img/about-Image.png';
import styles from '../../../style/About/About.module.css';


const About = () => {
    
  return (
    <div className={styles.about}>
        <div className="container">
            <div className={styles['about-box']}>

                <div className={styles['about-left']}>
                    <h4 className={styles['about-content']}>ABOUT US</h4>
                    <h1 className={styles['about-title']}>About our Consuting Agency Team</h1>
                    <h5 className={styles['about-subtitle']}>We create experiences and build products that make business grow</h5>
                    <p className={styles['about-text']}>
                        Get help from Alex Moore, a professional business coach with advanced experience on growth and 
                        business scaling.
                    </p>
                    <hr className={styles['about-line']} />

                    <div className={styles['about-info-box']}>
                        <div className={styles['about-info-left']}>
                            <div className={styles['about-info-left-box']}>
                              <IoStar size={20} color='#FFCC4A'/>  400+
                            </div>
                            <h3 className={styles['about-info-text']}>Business Services</h3>
                        </div>

                        <div className={styles['about-info-line']}></div>

                        <div className={styles['about-info-right']}>
                            <div className={styles['about-info-right-box']}>
                              <FaSmile size={20} color='#4EAF4E' /> 100+
                            </div>
                            <h3 className={styles['about-info-text']}>Happy Customer</h3>
                        </div>
                    </div>
                </div>

                <div className={styles['about-right']}>
                    <div className={styles['about-right-info']}>
                        <img src={aboutImges} className={styles['about-right-bg']} alt="" />
                        <img src={aboutBg} alt="" className={styles['about-right-img']} />
                        <div className={styles['about-marketing']}>
                            <div className={styles['about-marketing-num']}>
                                50+
                            </div>
                            <p className={styles['about-marketing-text']}>Market <br /> Experiences</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About