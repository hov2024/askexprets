import React from 'react'

import styles from '../../../style/Market/Market.module.css';
import { marketContents } from './marketData';
import { Link } from 'react-router-dom';

const Market = () => {

    const marketContent = marketContents.map((item, id) => {
        return (
            <div key={id} className={styles['market-content']}>
                <img src={item.imges} alt='marketImg' className={styles['market-content-img']}/>
            </div>
        )
    });

  return (
    <>
        <div className={styles['market']}>
            <div className={styles['market-blocks']}>
                <div className="container">
                    <div className={styles['market-box-title']}>
                        <div className={styles['market-block-title']}>
                            <h4 className={styles['market-title']}>Proccess</h4>
                            <h4 className={styles['market-subtitle']}>
                                Our client, global analytical techno company, wanted to build market.
                            </h4>
                        </div>
                       <Link to='/gelari'>
                        <button className='btn-orange'>More Gallery</button>
                       </Link>
                    </div>
                    <div className={styles['market-box']}>
                    {marketContent}
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className={styles['market-reting-box']}>
                <div className={styles['market-reting']}>
                    <h4 className={styles['market-reting-num']}>1128+</h4>
                    <p className={styles['market-reting-text']}>Successful Work</p>
                </div>
                <div className={styles['market-reting']}>
                    <h4 className={styles['market-reting-num']}>908+</h4>
                    <p className={styles['market-reting-text']}>Team member</p>
                </div>
                <div className={styles['market-reting']}>
                    <h4 className={styles['market-reting-num']}>258+</h4>
                    <p className={styles['market-reting-text']}>Happy Customers</p>
                </div>
                <div className={styles['market-reting']}>
                    <h4 className={styles['market-reting-num']}>564+</h4>
                    <p className={styles['market-reting-text']}>Creative Idea</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Market