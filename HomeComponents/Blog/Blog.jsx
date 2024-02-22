import React from 'react'
import { Link } from 'react-router-dom';
import blogImg1 from '../../../img/blog-img-1.png'
import blogImg2 from '../../../img/blog-img-2.png'
import commentUser1 from '../../../img/blog-user-1.png'
import commentUser2 from '../../../img/blog-user-2.png'
import styles from '../../../style/Blog/Blog.module.css'

const Blog = () => {
  return (
    <div className={styles['blog']}>
        <div className="container">
            <div className={styles['blog-title-box']}>
                <div className={styles['blog-title-left']}>
                    <h3 className={styles['blog-title']}>Blog</h3>
                    <h4 className={styles['blog-subtitle']}>Take a look at our latest articles & resources</h4>
                </div>
                <Link to='/blog'>
                    <button className='btn-orange'>More News</button>
                </Link>
            </div>
            <div className={styles['blog-box']}>
                <div className={styles['blog-left']}>
                    <img src={blogImg1} alt="" className={styles['blog-img']} />
                    <h3 className={styles['blog-content-title']}>Consulting Fees Study 2019 (And How To Raise Your Rates)</h3>
                    <p className={styles['blog-content-text']}>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.</p>
                    <div className={styles['blog-comment-box']}>
                        <div className={styles['blog-comment']}>
                            <img src={commentUser1} alt="User-Comment"  />
                            <p className={styles['user-name']}>John Carter</p>
                            <p className={styles['comment-data']}>September 1, 2022</p>
                        </div>
                        <button className='btn-black'>Read More</button>
                    </div>
                </div>
                <div className={styles['blog-right']}>
                    <img src={blogImg2} alt="" className={styles['blog-img']} />
                    <h3 className={styles['blog-content-title']}>What is growth hacking and how to apply it to your startup</h3>
                    <p className={styles['blog-content-text']}>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.</p>
                    <div className={styles['blog-comment-box']}>
                        <div className={styles['blog-comment']}>
                            <img src={commentUser2} alt="User-Comment"  />
                            <p className={styles['user-name']}>Nayra Melson</p>
                            <p className={styles['comment-data']}>September 1, 2022</p>
                        </div>
                        <button className='btn-while'>Read More</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Blog