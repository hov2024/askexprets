import React from 'react'
import contactImg from '../../img/contact-Image.png'
import styles from '../../style/PageComponentsStyle/Contact.module.css'


const Contact = () => {
  return (
    <div className={styles['contact']}>
        <div className="container">
            <div className={styles['contact-block']}>
                <div className={styles['contact-box']}>
                    <div className={styles['contact-info']}>
                        <h4 className={styles['contact-title']}>Contact</h4>
                        <h5 className={styles['contact-subtitle']}>Ready To Talk?</h5>
                        <p className={styles['contact-text']}>Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque. Massa placerat duis ultricies lacus sed turpis. Pellentesque  pellentesque habitant morbi tristique.</p>
                       <form action="">
                            <div className={styles['contact-form-box']}>
                                <input type="text" placeholder='your mail address' />
                                <button className={styles['contact-btn']}>Send Message</button>
                            </div>
                       </form>
                    </div>
                    <div className={styles['contact-img-block']}>
                        <img src={contactImg} alt="contactBg" className={styles['contact-img']} />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact