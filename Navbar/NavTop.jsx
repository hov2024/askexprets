import React from 'react'
import { IoTimeOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import styles from '../../style/NavBar/NavTop.module.css'

const NavTop = () => {
  return (
    <div className={styles.navTop}>
        <div className='container'>
            <div className={styles["nav-box"]}>
                <div className={styles["nav-time"]}>
                    <IoTimeOutline size={25} color='#FFCC4A'/>
                    <p className={styles["nav-time-text"]}>Monday - Friday8AM - 9PM</p>
                </div>
                <div className={styles["nav-adress"]}>
                    <IoLocationOutline size={25} color='FFCC4A' />
                    <p className={styles["nav-adress-text"]}>725 Park Ave, New York</p>
                </div>
                <div className={styles["nav-soc"]}>
                    <button> <FaInstagram size={20} color='#fff'/> </button>
                    <button> <FaFacebook size={20} color='#fff'/> </button>
                    <button> <FaTwitter size={20} color='#fff'/> </button>
                    <button> <FaLinkedin size={20} color='#fff'/> </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NavTop