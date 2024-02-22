import React from 'react'
import contactImg from '../../img/contact-Image-1.png'
import { BsTelephone } from "react-icons/bs";
import { MdMail } from "react-icons/md";
import { GrLocation } from "react-icons/gr";
import styles from '../../style/ContactComponentsStyle/Communion.module.css'
const Communion = () => {
  return (
    <div className={styles['communion']}>
        <div className="container">
           <div className={styles['communion-box']}>
                <div className={styles['communion-left']}>
                    <img src={contactImg} alt="communion-img" />
                </div>
                <div className={styles['communion-right']}>
                    <h4 className='green-title'>Let’s talk</h4>
                    <h5 className='subtitle'>Get In Touch With Us</h5>
                    <p className='text-style'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                    <div className={styles['contact-communion']}>
                        <div className={styles['contact-box']}>
                            <button className={styles['btn-tel-contact']}>
                                <BsTelephone color='#FFFFFF' size={18}/>
                            </button>
                            <div className={styles['contact-info']}>
                                <p className={styles['contect-tel-text']}>Have Any Question?</p>
                                <p className={styles['contect-tel']}>Free +01 238 543 987</p>
                            </div>
                        </div>
                        <div className={styles['contact-box']}>
                            <button className={styles['btn-tel-contact']}>
                                <MdMail color='#FFFFFF' size={18}/>
                            </button>
                            <div className={styles['contact-info']}>
                                <p className={styles['contect-tel-text']}>Write Email</p>
                                <p className={styles['contect-tel']}>Info@consultalk.com</p>
                            </div>
                        </div>
                        <div className={styles['contact-box']}>
                            <button className={styles['btn-tel-contact']}>
                                <GrLocation color='#FFFFFF' size={18}/>
                            </button>
                            <div className={styles['contact-info']}>
                                <p className={styles['contect-tel-text']}>Visit Anytime</p>
                                <p className={styles['contect-tel']}>King Street, Prior Lake, New York.</p>
                            </div>
                        </div>
                    </div>
                </div>
           </div>
        </div>
    </div>
  )
}

export default Communion