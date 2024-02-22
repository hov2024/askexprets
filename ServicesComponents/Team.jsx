import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import styles from '../../style/ServicesComponentsStyle/Team.module.css'
import { Link } from 'react-router-dom';

const Team = () => {
  return (
    <div className={styles['team']}>
        <div className="container">
            <h3 className='yellow-title'>Our team</h3>
            <h4 className='subtitle'>We champion the bold to achieve the extraordinary</h4>
            <p className='text-style'>Ippsum is the result of synergy between our teams and our customers. Our company culture is focused on excellent productivity, customer satisfaction, respect for team.</p>
            <div className={styles['team-box']}>
                <div className={styles['team-block']}>
                    <div className={`${styles.teamImg} ${styles.teamCeoManager}`}>
                        <p className={styles['team-specialist']}>CEO at Company</p>
                    </div>
                    <div className={styles['team-info']}>
                        <h4 className={styles['team-specialist-name']}>Sarah Jasmine</h4>
                        <p className={styles['team-specialist-info']}>Leverage agile frameworks to provide a robust synopsis for high level overviews.</p>
                        <div className={styles['team-specialist-soc']}>
                            <Link to='https://www.instagram.com/' target='_blank'>
                                <FaInstagram className={styles['soc-link']} size={24} />
                            </Link>
                            <Link to='https://www.facebook.com/?locale=ru_RU' target='_blank'>
                                <FaFacebook className={styles['soc-link']} size={24} />
                            </Link>
                            <Link to='https://twitter.com/?lang=ru' target='_blank'>
                                <FaTwitter  className={styles['soc-link']} size={24} />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className={styles['team-block']}>
                    <div  className={`${styles.teamImg} ${styles.teamManager}`}>
                        <p className={styles['team-specialist-balck']}>Manager</p>
                    </div>
                    <div className={styles['team-info']}>
                        <h4 className={styles['team-specialist-name']}>John Carter</h4>
                        <p className={styles['team-specialist-info']}>Leverage agile frameworks to provide a robust synopsis for high level overviews.</p>
                        <div className={styles['team-specialist-soc']}>
                            <Link to='https://www.instagram.com/' target='_blank'>
                                <FaInstagram className={styles['soc-link']} size={24} />
                            </Link>
                            <Link to='https://www.facebook.com/?locale=ru_RU' target='_blank'>
                                <FaFacebook className={styles['soc-link']} size={24} />
                            </Link>
                            <Link to='https://twitter.com/?lang=ru' target='_blank'>
                                <FaTwitter className={styles['soc-link']} size={24} />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className={styles['team-block']}>
                    <div  className={`${styles.teamImg} ${styles.teamManager2}`}>
                        <p className={styles['team-specialist-balck']}>CEO at Company</p>
                    </div>
                    <div className={styles['team-info']}>
                        <h4 className={styles['team-specialist-name']}>Daisy Stella</h4>
                        <p className={styles['team-specialist-info']}>Leverage agile frameworks to provide a robust synopsis for high level overviews.</p>
                        <div className={styles['team-specialist-soc']}>
                            <Link to='https://www.instagram.com/' target='_blank' >
                                <FaInstagram  size={24} className={styles['soc-link']}/>
                            </Link>
                            <Link to='https://www.facebook.com/?locale=ru_RU' target='_blank'>
                                <FaFacebook  size={24} className={styles['soc-link']}/>
                            </Link>
                            <Link to='https://twitter.com/?lang=ru' target='_blank'>
                                <FaTwitter  size={24} className={styles['soc-link']}/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Team