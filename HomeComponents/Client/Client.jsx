import React from 'react'
import styles from '../../../style/Client/Client.module.css'
import { clientLogo } from './data'


const Client = () => {

    const logoImg = clientLogo.map((client) => {
        return (
            <img key={client.id} src={client.logoImg} alt="Logo-Client" className={styles['client-logo']} />
        )
    })

  return (
    <div className={styles.client}>
        <div className='container'>
            <div className={styles['client-box']}>
                {logoImg}
            </div>
        </div>
    </div>
  )
}

export default Client