import React from 'react'

import styles from '../../style/ServicesComponentsStyle/Banner.module.css'

const Banner = () => {
  return (
    <div className={styles['banner']}>
        <div className="container">
            <div className={styles['banner-block']}>
               <div className={styles['banner-title']}>
                    <h4 className="yellow-title">Services</h4>
                    <h5 className="subtitle">Creative Services For Boost Your Business Growth</h5>
               </div>
            </div>
        </div>
    </div>
  )
}

export default Banner