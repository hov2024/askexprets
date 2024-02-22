import React from 'react'

import styles from '../../style/BlogComponentsStyle/Banner.module.css'

const Banner = () => {
  return (
    <div className={styles['banner']}>
        <div className="container">
            <div className={styles['banner-content']}>
                <h4 className='yellow-title '>Blog</h4>
                <h5 className='subtitle'>Latest Blogs & News</h5>
            </div>
        </div>
    </div>
  )
}

export default Banner