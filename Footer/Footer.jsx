import React from 'react'
import logo from "../../img/logo.png"
import styles from '../../style/Footer/Footer.module.css'

const Footer = () => {
  return (
    <div className={styles['footer']}>
        <div className="container">
            <div className={styles['footer-box']}>
                <div className={styles['footer-logo']}>
                    <img src={logo} alt="Footer-Logo" />
                    <p className={styles['footer-logo-text']}> Fb. /Ig. /Tw. /Be. </p>
                </div>
                <div className={styles['footer-line']}></div>

               <div className={styles['footer-list-box']}>
                <ul className={styles['footer-list']}>
                        <h3 className={styles['footer-list-title']}>Product</h3>
                        <div className={styles['footer-list-line']}></div>
                        <li className={styles['footer-item']}>
                            <p className={styles['footer-link']}>Service</p>
                        </li>
                        <li className={styles['footer-item']}>
                            <p className={styles['footer-link']}>FAQ</p>
                        </li>
                        <li className={styles['footer-item']}>
                            <p className={styles['footer-link']}>Single Service</p>
                        </li>
                        <li className={styles['footer-item']}>
                            <p className={styles['footer-link']}>Get Quote</p>
                        </li>
                        <li className={styles['footer-item']}>
                            <p className={styles['footer-link']}>Prices</p>
                        </li>
                    </ul>

                    <ul className={styles['footer-list']}>
                        <h3 className={styles['footer-list-title']}>Company</h3>
                        <div className={styles['footer-list-line']}></div>

                        <li className={styles['footer-item']}>
                            <p className={styles['footer-link']}>About</p>
                        </li>
                        <li className={styles['footer-item']}>
                            <p className={styles['footer-link']}>News</p>
                        </li>
                        <li className={styles['footer-item']}>
                            <p className={styles['footer-link']}>Contacts</p>
                        </li>
                        <li className={styles['footer-item']}>
                            <p className={styles['footer-link']}>Testimonials</p>
                        </li>
                        <li className={styles['footer-item']}>
                            <p className={styles['footer-link']}>Our team</p>
                        </li>
                        <li className={styles['footer-item']}>
                            <p className={styles['footer-link']}>Our approach</p>
                        </li>
                    </ul>

                    <ul className={styles['footer-list']}>
                        <h3 className={styles['footer-list-title']}>Address</h3>
                        <div className={styles['footer-list-line']}></div>
                        <p className={styles['footer-adress']}>1700 W Blancke St, kiyev port south USA, America</p>
                        <button className='btn-while'>Book an Appoinment</button>
                    </ul>
               </div>

            </div>
        </div>
    </div>
  )
}

export default Footer