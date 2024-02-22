import React from 'react'

import styles from '../../style/GelariComponentsStyle/Banner.module.css'

const Banner = () => {
  return (
    <div className={styles['banner']}>
        <div className="container">
            <div className={styles['banner-content']}>
                <h4 className='yellow-title'>Case Studies</h4>
                <h5 className='subtitle'>Case Studies</h5>
            </div>
        </div>
    </div>
  )
}

export default Banner