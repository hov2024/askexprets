import React from 'react'
import styles from '../../../style/Comment/Comment.module.css'
import CommentSlide from './CommentSlide'


const Comment = () => {
  return (
    <div className={styles.comment}>
        <div className="container">
            <div className={styles['comment-title-box']}>
                <h4 className={styles['comment-title']}>Client Feedback</h4>
            </div>
            <CommentSlide/>
        </div>
    </div>
  )
}

export default Comment