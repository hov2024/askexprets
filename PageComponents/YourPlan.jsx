import React from 'react'

import styles from '../../style/PageComponentsStyle/YourPlan.module.css'
import YourPlanCollaps from './YourPlanCollaps'

const YourPlan = () => {
  return (
    <div className={styles['your-plan']}>
        <div className="container">
            <div className={styles['yourplan-box']}>

                <div className={styles['yourplan-title-block']}>
                    <h4 className={styles['yourplan-title']}>Choose Your Plan</h4>
                    <h5 className={styles['yourplan-subtitle']}>Save With Our Pricing Packages</h5>
                    <p className={styles['yourplan-text']}>Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque. Massa placerat duis ultricies lacus sed turpis. Pellentesque pulvinar pellentesque habitant morbi tristique.</p>
                    <div className={styles['yourplan-choice-box']}>
                        <div className={styles['yourplan-choice']}>
                            <label>
                                <input className={styles['yourplan-choice-input']} type="radio" id="html" name="fav_language" value="Monthly" />
                                <span className={styles['yourplan-choice-input-style']}></span>
                                Monthly
                            </label>
                        </div>
                        <div className={styles['yourplan-choice']}>
                            <label>
                                <input className={styles['yourplan-choice-input-1']} type="radio" id="html" name="fav_language" value="Yearly" />
                                <span className={styles['yourplan-choice-input-style-1']}></span>
                                Yearly
                            </label>
                        </div>
                    </div>
                </div>

                <div className={styles['standart-plan-box']}>
                    <div className={styles['standart-plan']}>
                        <div className={styles['standart-plan-top']}>
                           <div className={styles['standart-plan-top-box']}>
                                <h4 className={styles['standart-plan-top-title']}>Standard Plan</h4>
                                <h5 className={styles['standart-plan-top-subtitle']}>The argument in favor of using to filler text goes something.</h5>
                                <div className={styles['standart-plan-price-box']}>
                                    <p className={styles['standart-plan-price']}>$56</p>
                                    <p className={styles['standart-plan-price-text']}>Monthly</p>
                                </div>
                           </div>
                        </div>
                        <div className={styles['standart-plan-button']}>
                            <YourPlanCollaps />
                        </div>
                        <button className={styles['btn-get']}>Get This Plan</button>
                    </div>
                    <div className={styles['standart-plan']}>
                        <div className={styles['standart-plan-top']}>
                            <div className={styles['standart-plan-top-box']}>
                                <h4 className={styles['standart-plan-top-title']}>Standard Plan</h4>
                                <h5 className={styles['standart-plan-top-subtitle']}>The argument in favor of using to filler text goes something.</h5>
                                <div className={styles['standart-plan-price-box']}>
                                    <p className={styles['standart-plan-price']}>$75</p>
                                    <p className={styles['standart-plan-price-text-gren']}>Monthly</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles['standart-plan-button']}>
                            <YourPlanCollaps />
                        </div>
                        <button className={styles['btn-get-while']}>Get This Plan</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default YourPlan

