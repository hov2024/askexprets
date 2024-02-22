import React, { useState } from 'react'
import styles from '../../../style/Services/Services.module.css'
import { servicesContents1 } from './data'

const Services = () => {
    const [index, setIndex] = useState(1);
    

    const servicesContent1 = servicesContents1.map((content, i) => {
        return (
            <div 
                key={content.id} 
                className={styles['services-content']}
                onClick={() => setIndex(i)}
                style={
                    {backgroundColor: index === i  ? '#181818' : '#EBEBEB'}
                }>
                <img src={content.servicesIcon} alt="Icon" className={styles['content-icon']} />
                <h3 
                    className={styles['content-title']}
                    style={{
                        color: index === i ? '#FFFFFF' : '#181818'
                    }}>
                        {content.servicesContentsTitle}
                </h3>
                <p 
                    className={styles['content-text']}
                    style={{
                        color: index === i ? '#FFFFFF' : '#181818'
                    }}>
                        {content.servicesContentsText}
                </p>
            </div>
        )
    })

  return (
   <section className={styles.services}>
    <div className='container'>
        <div className={styles['services-info-title']}>
            <h4 className={styles['services-title']}>Services</h4>
            <h2 className={styles['services-subtitle']}>Get Control Over Your Business I take your finance to next level</h2>
        </div>
        <div className={styles['services-box']}>
            {servicesContent1}
        </div>
    </div>
   </section>
  )
}

export default Services