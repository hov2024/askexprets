import React, { useState } from 'react'
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa6";
import videoImg from '../../img/video-bg.png'
import video from '../../video/video1.mp4'
import styles from '../../style/ServicesComponentsStyle/History.module.css'


const History = () => {

    const [play, setPlay] = useState({
        autoPlay: false
    })

    const {
        autoPlay
    } = play

    const handlePlay = () => {
        setPlay({
            ...play,
            autoPlay: !play.autoPlay
        })
    }

  return (
    <div className={styles['history']}>
        <div className="container">
            <div className={styles['history-title-box']}>
                <h4 className='green-title'>Our History</h4>
                <h5 className='subtitle'>Better Website Means A User Experience</h5>
                <p className='text-style'>Ippsum is the result of synergy between our teams and our customers. Our company culture is focused on excellent productivity, customer satisfaction, respect for team and individual achievements.</p>
            </div>
            <div className={styles['history-info']}>
                <video 
                     className={styles['history-video']}
                     poster={videoImg}
                     controls
                     autoPlay={autoPlay}
                >
                    <source src={video}/>
                </video>
                <div 
                    className={styles['history-video-controler']}
                    onClick={handlePlay}
                >
                   { !autoPlay ? <FaPlay size={22} color='#3B3A5D' /> : <FaPause size={22} color='#3B3A5D' /> }
                </div>
            </div>
        </div>
    </div>
  )
}

export default History