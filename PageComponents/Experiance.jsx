import React from 'react'

import styles from '../../style/PageComponentsStyle/Experiance.module.css'

const Experiance = () => {
  return (
    <div className={styles.experiance}>
        <div className="container">
            <div className={styles['experiance-box']}>
                <div className={styles['experiance-title-block']}>
                    <h3 className={styles['experiance-title']}>Experiance</h3>
                    <h4 className={styles['experiance-subtitle']}>More than 25 years of experience</h4>
                    <p className={styles['experiance-text']}>3000+ our clients are insured around the World</p>
                </div>
                <div className={styles['experiance-info-box']}>
                    <div className={styles['experiance-info']}>
                        <div className={styles['experiance-info-border']}>
                            <div className={styles['experiance-info-border-bold']}>
                                <div className={styles['experiance-info-border-blue']}></div>    
                            </div>
                        85%</div>
                        <p className={styles['experiance-info-text']}>Consistency</p>
                    </div>
                    <div className={styles['experiance-info']}>
                        <div className={styles['experiance-info-border']}>
                            <div className={styles['experiance-info-border-bold']}>
                                <div className={styles['experiance-info-border-blue']}></div>    
                            </div>
                        95%</div>
                        <p className={styles['experiance-info-text']}>Improvement</p>
                    </div>
                    <div className={styles['experiance-info']}>
                        <div className={styles['experiance-info-border']}>
                            <div className={styles['experiance-info-border-bold']}>
                                <div className={styles['experiance-info-border-blue']}></div>    
                            </div>
                        90%</div>
                        <p className={styles['experiance-info-text']}>Branching</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Experiance