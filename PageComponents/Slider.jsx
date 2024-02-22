import React from 'react'
import { GrFormPreviousLink } from "react-icons/gr";
import { GrFormNextLink } from "react-icons/gr";
import userImg from '../../img/user-1.png'
import userImg1 from '../../img/user-2.png'
import userImg2 from '../../img/user-3.png'
import styles from '../../style/PageComponentsStyle/Slider.module.css'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Slider = () => {
  return (
    <div className={styles.slider}>
        <div className="container">
            <Swiper
              
                grabCursor={true}
                loop={true}
                spaceBetween={50}
                slidesPerView={3}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 200,
                    modifier: 2.5
                }}
                pagination={{el: '.swiper-pagination', clickable: true}}
                navigation={{
                    nextEl: '.button-next',
                    prevEl: '.button-prev',
                    clickable: true
                }}
                modules={[EffectCoverflow, Pagination, Navigation]}    
                >
                <SwiperSlide>
                    <div className={styles['slider-block']}>
                        <div className={styles['slider-users-block']}>
                            <div className={styles['slider-users-box']}>
                                <img src={userImg} alt="user-1" />
                                <div className={styles['slider-user']}>
                                    <p className={styles['slider-user-name']}>Kathleen Smith</p>
                                    <p className={styles['slider-user-profesia']}>Web Designer</p>
                                </div>
                            </div>
                            <div className={styles['user-info']}>
                                <p className={styles['user-info-text']}>
                                Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque. Massa placerat duis ultricies lacus  turpis.  pellentesque habitant morbil.
                                </p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles['slider-block']}>
                        <div className={styles['slider-users-block']}>
                            <div className={styles['slider-users-box']}>
                                <img src={userImg1} alt="user-1" />
                                <div className={styles['slider-user']}>
                                    <p className={styles['slider-user-name']}>John Martin</p>
                                    <p className={styles['slider-user-profesia']}>Web Designer</p>
                                </div>
                            </div>
                            <div className={styles['user-info']}>
                                <p className={styles['user-info-text']}>
                                Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque. Massa placerat duis ultricies lacus  turpis.  pellentesque aservices, and become a multinational firm, offering solutions Worldwide.
                                </p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles['slider-block']}>
                        <div className={styles['slider-users-block']}>
                            <div className={styles['slider-users-box']}>
                                <img src={userImg2} alt="user-1" />
                                <div className={styles['slider-user']}>
                                    <p className={styles['slider-user-name']}>Natalia Duke</p>
                                    <p className={styles['slider-user-profesia']}>Web Designer</p>
                                </div>
                            </div>
                            <div className={styles['user-info']}>
                                <p className={styles['user-info-text']}>
                                Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque. Massa placerat duis ultricies lacus  turpis.  pellentesque habitant morbil.
                                </p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles['slider-block']}>
                        <div className={styles['slider-users-block']}>
                            <div className={styles['slider-users-box']}>
                                <img src={userImg} alt="user-1" />
                                <div className={styles['slider-user']}>
                                    <p className={styles['slider-user-name']}>Kathleen Smith</p>
                                    <p className={styles['slider-user-profesia']}>Web Designer</p>
                                </div>
                            </div>
                            <div className={styles['user-info']}>
                                <p className={styles['user-info-text']}>
                                Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque. Massa placerat duis ultricies lacus  turpis.  pellentesque habitant morbil.
                                </p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

            <div className={styles['slider-box']}>
                <div className='button-prev slider-arrow'>
                    <div className={styles['slider-icon-black']}>
                        <GrFormPreviousLink size={20} color='#fff' />
                    </div>
                    <p>Prev</p>
                </div>
                <div className='button-next slider-arrow'>
                    <p>Next</p>
                    <div className={styles['slider-icon-yellow']}>
                        <GrFormNextLink size={20} color='#181818' />
                    </div>
                </div>
                <div className="swiper-pagination"></div>
            </div>
        </div>
    </div>
  )
}

export default Slider