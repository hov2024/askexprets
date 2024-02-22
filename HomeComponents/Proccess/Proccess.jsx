import React from 'react'
import styles from '../../../style/Proccess/Proccess.module.css'
import { growingData } from './data';

const Proccess = () => {

    const groutItems = growingData.map((item) => {
        return (
            <div className={styles['proccess-right-block']} key={item.id}>
                <img src={item.growingIcon} className={styles['groud-icon']} alt="Icon-groud" />
                <h4 className={styles['groud-title']}>{item.growingTitle}</h4>
                <p className={styles['groud-text']}>{item.growingText}</p>
            </div>
        )
    })

  return (
    <div className={styles.proccess}>
        <div className="container">
            <div className={styles['proccess-box']}>
                <div className={styles['proccess-left']}>
                    <h4 className={styles['proccess-left-title']}>Proccess</h4>
                    <h2 className={styles['proccess-subtitle']}>There have some easy steps to join with us!</h2>
                    <p className={styles['proccess-text', 'proccess-left-text' ]}>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.</p>
                    <hr />
                    <ol className={styles['proccess-list']}>
                        <li className={styles['proccess-item']}>
                            <p className={styles['proccess-item-title']}>Setup Account</p>
                            <p className={styles['proccess-item-text']}>We understand the importance of approaching each work integrally.</p>
                        </li>
                        <hr />
                        <li className={styles['proccess-item']}>
                            <p className={styles['proccess-item-title']}>Consult with us</p>
                            <p className={styles['proccess-item-text']}>Increase social reach and productivity with our App Directory, a collection.</p>
                        </li>
                        <hr />
                        <li className={styles['proccess-item']}>
                            <p className={styles['proccess-item-title']}>Payment & Boost</p>
                            <p className={styles['proccess-item-text']}>We encourage every team member to be a whole person. We have a flexible.</p>
                        </li>
                    </ol>
                </div>
                <div className={styles['proccess-right']}>
                    <h4 className={styles['proccess-right-title']}>Growing with our clients</h4>
                    <h2 className={styles['proccess-subtitle']}>30 Years of Experience</h2>
                    <p className={styles['proccess-text']}>
                    Capitalize on low hanging fruit to identify a ballpark value added activity beta test. Override the digital divide with additional from DevOps.<br/><br/>
                    Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.
                    </p>

                    <div className={styles['proccess-right-box']}>
                       {groutItems}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Proccess