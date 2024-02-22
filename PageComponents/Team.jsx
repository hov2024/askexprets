import React from 'react'
import styles from '../../style/PageComponentsStyle/Team.module.css'
import clienImg1 from '../../img/team-clien-1.png'
import clienImg2 from '../../img/team-clien-2.png'
import clienImg3 from '../../img/team-clien-3.png'
import clienImg4 from '../../img/team-clien-4.png'
import clienImg5 from '../../img/team-clien-5.png'
import clienImg6 from '../../img/team-clien-6.png'
import { Link } from 'react-router-dom'

const Team = () => {
   
  return (
    <div className={styles.team}>
        <div className={styles['team-bg']}>
            <div className="container">
                <div className={styles['team-title-box']}>
                    <h4 className={styles['team-title']}>Our Team</h4>
                    <h5 className={styles['team-subtitle']}>Trusted by some Biggest Names</h5>
                    <Link to='/team'>
                        <button className='btn-orange'>View Team Detail</button>
                    </Link>
                </div>
            </div>
        </div>
        <div className={styles['team-client']}>
            <div className="container">
                <div className={styles['team-cline-box']}>
                    <img src={clienImg1} alt="clienImg" className={styles['clien-team-img']} />
                    <img src={clienImg2} alt="clienImg" className={styles['clien-team-img']} />
                    <img src={clienImg3} alt="clienImg" className={styles['clien-team-img']} />
                    <img src={clienImg4} alt="clienImg" className={styles['clien-team-img']} />
                    <img src={clienImg5} alt="clienImg" className={styles['clien-team-img']} />
                    <img src={clienImg6} alt="clienImg" className={styles['clien-team-img']} />
                </div>
            </div>
        </div>    
    </div>
  )
}

export default Team