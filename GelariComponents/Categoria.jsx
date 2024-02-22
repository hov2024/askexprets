import React, { useEffect, useRef, useState } from 'react'

import styles from '../../style/GelariComponentsStyle/Categoria.module.css'
import { gallariyImg } from '../../data/gallary'


const Categoria = () => {
    const ref = useRef()
    const [sidbar, setSidbar] = useState(false);

    useEffect(() => {
        document.body.addEventListener('click', (e) => {
           if (e.target.contains(ref.current)) {
             setSidbar(false)
           }
        })
    }, [ref, sidbar])

  const gallaryImges = gallariyImg.map((gallary, id) => {
    return (
      <div className={styles['gallaty-block']}  key={id}>
          <img src={gallary.img} alt="gallariImg"/>
      </div>
    )
  })

  return (
    <div className={styles['categoria']}>
        <div className='container'>
            <div className={styles['categoria-gallary-block']}>
              <div className={styles['categoria-gallary-box']}>
                <button 
                  onClick={() => setSidbar(!sidbar)}
                  className={'btn-gallari' }>
                All</button>
                <button 
                   className={'btn-gallari' }>
                    Taxes & Efficiency
                </button>
                <button className={styles['categoria-gallary']}>Investment banking</button>
                <button className={styles['categoria-gallary']}>Financial Plan</button>
                <button className={styles['categoria-gallary']}>Audit & Evaluation</button>
              </div>
            </div>
            <div className={styles['gallary-box']}>
              {gallaryImges}
            </div>
        </div>
    </div>
  )
}

export default Categoria