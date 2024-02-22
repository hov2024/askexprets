import React from 'react'
import NavTop from '../components/Navbar/NavTop'
import NavBottom from '../components/Navbar/NavBottom'
import Footer from '../components/Footer/Footer'
import  Contact  from '../components/PageComponents/Contact'
import Banner from '../components/BlogComponents/Banner'
import News from '../components/BlogComponents/News'

const Blog = () => {
  return (
    <div>
       <NavTop />
       <NavBottom />
        <Banner />
        <News />
       <Contact />
       <Footer /> 
    </div>
  )
}

export default Blog