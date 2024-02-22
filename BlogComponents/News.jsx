import React from 'react'
import newsImg1 from '../../img/news-img-1.png'
import newsImg2 from '../../img/news-img-2.png'
import newsImg3 from '../../img/news-img-3.png'
import newsImg4 from '../../img/news-img-4.png'
import newsImg5 from '../../img/news-img-5.png'
import newsImg6 from '../../img/news-img-6.png'
import commentUser1 from '../../img/blog-user-1.png'
import commentUser2 from '../../img/blog-user-2.png'

import styles from '../../style/BlogComponentsStyle/News.module.css'
import { Link } from 'react-router-dom'


const News = () => {
  return (
    <div className={styles['news']}>
        <div className="container">
            <div className={styles['news-title-box']}>
                <div className={styles['news-title']}>
                    <h4 className='green-title'>Blog</h4>
                    <h5 className='subtitle'>Take a look at our latest articles & resources</h5>
                </div>
                <Link to='/'>
                    <button className='btn-orange'>More News</button>
                </Link>
            </div>
            <div className={styles['news-box']}>
                <div className={styles['news-block']}>
                    <img src={newsImg1} alt="" className={styles['blog-img']} />
                    <h3 className={styles['news-content-title']}>Consulting Fees Study 2019 (And How To Raise Your Rates)</h3>
                    <p className={styles['news-content-text']}>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.</p>
                    <div className={styles['news-comment-box']}>
                        <div className={styles['news-comment']}>
                            <img src={commentUser1} alt="User-Comment"  />
                            <p className={styles['user-name']}>John Carter</p>
                            <p className={styles['comment-data']}>September 1, 2022</p>
                        </div>
                        <button className='btn-black'>Read More</button>
                    </div>
                </div>
                <div className={styles['news-block']}>
                    <img src={newsImg2} alt="" className={styles['blog-img']} />
                    <h3 className={styles['news-content-title']}>What is growth hacking and how to apply it to your startup</h3>
                    <p className={styles['news-content-text']}>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.</p>
                    <div className={styles['news-comment-box']}>
                        <div className={styles['news-comment']}>
                            <img src={commentUser2} alt="User-Comment"  />
                            <p className={styles['user-name']}>John Carter</p>
                            <p className={styles['comment-data']}>September 1, 2022</p>
                        </div>
                        <button className='btn-while'>Read More</button>
                    </div>
                </div>
                <div className={styles['news-block']}>
                    <img src={newsImg3} alt="" className={styles['blog-img']} />
                    <h3 className={styles['news-content-title']}>Five Steps to Implement Motivation in Management</h3>
                    <p className={styles['news-content-text']}>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.</p>
                    <div className={styles['news-comment-box']}>
                        <div className={styles['news-comment']}>
                            <img src={commentUser1} alt="User-Comment"  />
                            <p className={styles['user-name']}>John Carter</p>
                            <p className={styles['comment-data']}>September 1, 2022</p>
                        </div>
                        <button className='btn-while'>Read More</button>
                    </div>
                </div>
                <div className={styles['news-block']}>
                    <img src={newsImg4} alt="" className={styles['blog-img']} />
                    <h3 className={styles['news-content-title']}>Team Identifiers, Benefits, and How to Build One that Works</h3>
                    <p className={styles['news-content-text']}>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.</p>
                    <div className={styles['news-comment-box']}>
                        <div className={styles['news-comment']}>
                            <img src={commentUser2} alt="User-Comment"  />
                            <p className={styles['user-name']}>John Carter</p>
                            <p className={styles['comment-data']}>September 1, 2022</p>
                        </div>
                        <button className='btn-while'>Read More</button>
                    </div>
                </div>
                <div className={styles['news-block']}>
                    <img src={newsImg5} alt="" className={styles['blog-img']} />
                    <h3 className={styles['news-content-title']}>Professional Development Goals: Steps and Examples</h3>
                    <p className={styles['news-content-text']}>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.</p>
                    <div className={styles['news-comment-box']}>
                        <div className={styles['news-comment']}>
                            <img src={commentUser1} alt="User-Comment"  />
                            <p className={styles['user-name']}>Nayra Melson</p>
                            <p className={styles['comment-data']}>September 1, 2022</p>
                        </div>
                        <button className='btn-while'>Read More</button>
                    </div>
                </div>
                <div className={styles['news-block']}>
                    <img src={newsImg6} alt="" className={styles['blog-img']} />
                    <h3 className={styles['news-content-title']}>A Guide on What to Bring on the First Day of Work</h3>
                    <p className={styles['news-content-text']}>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.</p>
                    <div className={styles['news-comment-box']}>
                        <div className={styles['news-comment']}>
                            <img src={commentUser2} alt="User-Comment"  />
                            <p className={styles['user-name']}>John Carter</p>
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

export default News