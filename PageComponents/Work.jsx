import React from 'react'
import { Link } from 'react-router-dom';
import styles from '../../style/PageComponentsStyle/Work.module.css';
import workImg1 from '../../img/work-img-1.png'
import workImg2 from '../../img/work-img-2.png'
import workImg3 from '../../img/work-img-3.png'
import workImg4 from '../../img/work-img-4.png'
import workImg5 from '../../img/work-img-5.png'
import workImg6 from '../../img/work-img-6.png'
import workImg7 from '../../img/work-img-7.png'


const Work = () => {
   
  return (
    <div className={styles['work']}>
       <div className={styles['work-bg']}>
            <div className="container">
                <div className={styles['work-title-box']}>
                    <div>
                        <h4 className={styles['work-title']}>Work</h4>
                        <h5 className={styles['work-subtitle']}>My latest project</h5>
                    </div>
                    <Link to='/work'>
                        <button className='btn-orange'>More Work</button>
                    </Link>
                </div>
                <div className={styles['work-content-box']}>
                    <div className={styles['work-content-1']}>
                        <img src={workImg1} alt='workImg'/>
                        <div className={styles['work-info']}>
                            <label
                                className={styles['work-info-plus']}>
                                <input 
                                    accept='image/*' 
                                    hidden type='file'   
                                />
                                <button className={styles['work-info-btn']} >+</button>
                            </label>
                            <div className={styles['work-info-content']}>
                                <h3 className={styles['work-info-title']}>Taxes & Efficiency</h3>
                                <h4 className={styles['work-info-subtitle']}>Business</h4>
                            </div>
                        </div>
                    </div>
                    <div className={styles['work-content-2']}>
                        <img src={workImg2} alt='workImg1' />
                    </div>
                    <div className={styles['work-content-3']}>
                        <img src={workImg3} alt='workImg2' />
                    </div>
                    <div className={styles['work-content-4']}>
                        <img src={workImg4} alt='workImg3' />
                    </div>
                    <div className={styles['work-content-5']}>
                        <img src={workImg5} alt='workImg4' />
                    </div>
                    <div className={styles['work-content-6']}>
                        <img src={workImg6} alt='workImg5' />
                    </div>
                    <div className={styles['work-content-7']}>
                        <img src={workImg7} alt='workImg6' />
                    </div>
                </div>
            </div>
       </div>
    </div>
  )
}

export default Work