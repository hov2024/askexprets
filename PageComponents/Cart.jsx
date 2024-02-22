import React from 'react'
import styles from '../../style/PageComponentsStyle/Cart.module.css'
import { useNavigate } from 'react-router'


const Cart = () => {

    const navigate = useNavigate()

    const handleClickServices = () => {
        navigate('/services')
    }

  return (
    <div className='cart'>
        <div className="container">
            <div className={styles['cart-box']}>
                <div className={styles['cart-block']}>
                    <div className={styles['cart-info']}>
                        <h3 className={styles['cart-block-title']}>Finance & Restructuring</h3>
                        <p className={styles['cart-block-text']}>Get help from Alex Moore, a professional business coach with advanced experience on growth and business scaling.</p>
                        <button onClick={handleClickServices} className='btn-while'>Our Services</button>
                    </div>    
                </div>
                <div className={styles['cart-block']}>
                  <div className={styles['cart-info']}>
                    <h3 className={styles['cart-block-title']}>Our Approach</h3>
                    <p className={styles['cart-block-text']}>Get help from Alex Moore, a professional business coach with advanced experience on growth and business scaling.</p>
                    <button className='btn-while'>More About </button>
                  </div>
                </div>
                <div className={styles['cart-block']}>
                    <div className={styles['cart-info']}>
                        <h3 className={styles['cart-block-title-while']}>Consultalk Result</h3>
                        <p className={styles['cart-block-text-while']}>Get help from Alex Moore, a professional business coach with advanced experience on growth and business scaling.</p>
                        <button className='btn-black'>Explore Our Solution</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cart