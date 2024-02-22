import React, { useState } from 'react'
import Slider from "react-slick";
import { useCollapse } from 'react-collapsed';
import { servicesSlider } from '../../data/slider';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from '../../style/PageComponentsStyle/Services.module.css';


const Services = () => {
    const [isExpanded, setExpanded] = useState(false)
    const { getCollapseProps, getToggleProps} = useCollapse()

    const NextArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <div
            className={className}
            style={
                { ...style, 
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center", 
                    padding: "45px",
                    background: "#181818",
                    borderRadius: '50%',
                    fontSize: '20px',
                    boxShadow: '0px 24px 42px 0px #B9B9B940'
                }
                
            }
            onClick={onClick}
            />
        );
    }

    const PrevArrow = (props) => {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={
                { ...style, 
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center", 
                    padding: "45px",
                    background: "#181818",
                    borderRadius: '50%',
                    fontSize: '20px',
                    boxShadow: '0px 24px 42px 0px #B9B9B940',
                    zIndex: "999"
                }
            }
            onClick={onClick}
          />
        );
      }

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3.3,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
    };

    const slider = servicesSlider.map((item) => {
        return (
            <div className={styles['slider-block']} key={item.id}>
               <div>
                    <img src={item.imgSlide} alt='sliderImg' />
                    <h4 className={styles['slider-title']}>{item.slideTitle}</h4>
                    <p className={styles['slider-text']}>{item.slideText}</p>
                    <p className={styles['slider-text']} {...getCollapseProps()}>
                        {item.slideTextShow}
                    </p>
                    <button 
                        className='btn-while'
                        {...getToggleProps({
                            onClick: () => setExpanded((prevExpanded) => !prevExpanded)
                        })}>
                        {isExpanded ?  'Read Less' : item.slideBtn}
                    </button>
               </div>
            </div>
        )
    })

  return (
    <div className={styles.services}>
        <div className="container">
            <div className={styles['servies-title-block']}>
                <h4 className={styles['services-title']}>Services</h4>
                <h5 className={styles['servies-subtitle']}>
                    Get Control Over Your Business I take your finance to next level
                </h5>
            </div>
            <Slider {...settings}>
                {slider}
            </Slider>
        </div>
    </div>
  )
}

export default Services