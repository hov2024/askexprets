import React from 'react'
import { BsTelephone } from "react-icons/bs";
import { IoLocationOutline, IoTimeOutline } from "react-icons/io5";
import styles from '../../../style/Contact/Contact.module.css'
import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <div className={styles['contact-us']}>
        <div className="container">
            <div className={styles['contact-box']}>
                <div className={styles['contact-content']}>
                    <h3 className={styles['contact-title']}>Proccess</h3>
                    <h4 className={styles['contact-subtitle']}>Contact Us. It’s Easy.</h4>
                    <p className={styles['contact-text']}>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative.</p>
                    <div className={styles['contact-info-box']}>
                        <div className={styles['contact-info-tel']}>
                            <BsTelephone size={23} color='#DEAA27'/>
                        </div>
                        <div className={styles['contact-info']}>
                            <p className={styles['contact-info-text']}>Call Today</p>
                            <p className={styles['contact-info-num-tel']}>+1 800 100 900</p>
                        </div>
                    </div>

                    <div className={styles['contact-info-box']}>
                        <div className={styles['contact-info-time']}>
                            <IoTimeOutline size={23} color='#4EAF4E'/>
                        </div>
                        <div className={styles['contact-info']}>
                            <p className={styles['contact-info-text']}>Monday To Friday</p>
                            <p className={styles['contact-info-num-tel']}>9AM - 5PM</p>
                        </div>
                    </div>

                    <div className={styles['contact-info-box']}>
                        <div className={styles['contact-info-locashon']}>
                            <IoLocationOutline size={23} color='#181818'/>
                        </div>
                        <div className={styles['contact-info']}>
                            <p className={styles['contact-info-text']}>USA Office</p>
                            <p className={styles['contact-info-num-tel']}>195 Devonshire St Boston, MA 02110</p>
                        </div>
                    </div>
                </div>
                <div className={styles['contact-form']}>
                    <ContactForm />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact