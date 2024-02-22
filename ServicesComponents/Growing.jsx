import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import procIcon1 from '../../img/proc-icon-1.png'
import procIcon2 from '../../img/proc-icon-2.png'
import procIcon3 from '../../img/procces-icon-3.png'
import procIcon4 from '../../img/procces-icon-4.png'
import styles from '../../style/ServicesComponentsStyle/Growing.module.css'
const Growing = () => {
  return (
    <div className={styles['growing']}>
        <div className="container">
            <div className={styles['growing-title-box']}>
                <div className={styles['growing-title-block']}>
                    <h3 className='yellow-title'>Growing with our Clients</h3>
                    <h4 className='subtitle'>Our core values & principles</h4>
                    <p className='text-style'>Capitalize on low hanging fruit to identify a ballpark value added activity beta test. Override the digital divide with additional from DevOps.</p>
                </div>
                <button className='btn-black'>Get in touch</button>
            </div>
            <div className={styles['growing-box']}>
                <div className={styles['growing-content']}>
                    <img src={procIcon1} alt="Icon-1" />
                    <h4 className={styles['growing-title-content']}>Creative Ideas</h4>
                    <p className={styles['growing-text-content']}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget accumsan augue Donec aliquam.</p>
                    <div className={styles['growing-btn-box']}>
                        <button className={styles['growing-btn']}>
                            Read More
                            <FaArrowRightLong size={13} color='#141414'/>
                        </button>
                    </div>
                </div>
                <div className={styles['growing-content']}>
                    <img src={procIcon3} alt="Icon-1" />
                    <h4 className={styles['growing-title-content']}>Best Features</h4>
                    <p className={styles['growing-text-content']}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <div className={styles['growing-btn-box']}>
                        <button className={styles['growing-btn']}>
                            Read More
                            <FaArrowRightLong size={13} color='#141414'/>
                        </button>
                    </div>
                </div>
                <div className={styles['growing-content']}>
                    <img src={procIcon4} alt="Icon-1" />
                    <h4 className={styles['growing-title-content']}>Experience</h4>
                    <p className={styles['growing-text-content']}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget accumsan augue Donec aliquam.</p>
                    <div className={styles['growing-btn-box']}>
                        <button className={styles['growing-btn']}>
                            Read More
                            <FaArrowRightLong size={13} color='#141414'/>
                        </button>
                    </div>
                </div>
                <div className={styles['growing-content']}>
                    <img src={procIcon2} alt="Icon-1" />
                    <h4 className={styles['growing-title-content']}>Easy Solutions</h4>
                    <p className={styles['growing-text-content']}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <div className={styles['growing-btn-box']}>
                        <button className={styles['growing-btn']}>
                            Read More
                            <FaArrowRightLong size={13} color='#141414'/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Growing