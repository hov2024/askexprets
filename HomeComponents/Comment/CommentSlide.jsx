import React, { useEffect, useState } from 'react'
import { GrLinkPrevious } from "react-icons/gr";
import { GrLinkNext } from "react-icons/gr"
import { slideUser } from './slider.Data'
import styles from '../../../style/Comment/Comment.module.css'
import './comment.css'


const CommentSlide = () => {
    const [people] = useState(slideUser);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const lastIndex = people.length - 1;
        if (index < 0) {
            setIndex(lastIndex)
        }
        if(index > lastIndex) {
            setIndex(0)
        }
    }, [index, people])

    useEffect(() => {
        let slider = setInterval(() => {
            setIndex(index + 1)
        }, 5000)
        return () => {
            clearInterval(slider)
        }
    }, [index])

    return (
        <section className='section'>
           <div className='section-center'>
                {people.map((item, indexPeople) => {
                    const {id, userComment, userImg, userName, userProfesi} = item
                    let position = 'nextSlide';
                    if (indexPeople === index) {
                        position = 'activeSlide'
                    }
                    if (indexPeople === index - 1 || (index === 0 && indexPeople === people.length -1)) {
                        position = 'lastSlide'
                    }
                    return (
                        <article className={position} key={id}>
                            <p className={styles['comment-text']}>{userComment}</p>
                            <img src={userImg} alt="" className='person-img'/>
                            <h4 className='user-name'>{userName}</h4>
                            <p className='ser-profesia'>{userProfesi}</p>
                        </article>
                    )
                })}
                <button className='prev btn' onClick={() => setIndex(index - 1)}>
                    <div className={styles['btn-icon']}>
                        <GrLinkPrevious color='#fff' size={20} />
                    </div> 
                    Prev
                </button>
                <button className='next btn' onClick={() => setIndex(index + 1)}>
                    Next
                    <div className={styles['btn-icon-next']}>
                        <GrLinkNext color='#000' size={20} />
                    </div>  
                </button>
           </div>
        </section>
    )
}

export default CommentSlide