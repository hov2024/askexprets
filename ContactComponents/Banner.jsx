import React from 'react'
import styles from '../../style/ContactComponentsStyle/Banner.module.css'

const Banner = () => {
  return (
    <div className={styles['banner']}>
        <div className="container">
            <div className={styles['banner-content']}>
                <h4 className='yellow-title '>Contactus</h4>
                <h5 className='subtitle'>Feel Free To Reach Us</h5>
            </div>
        </div>
    </div>
  )
}

export default Banner