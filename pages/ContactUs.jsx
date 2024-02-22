import React from 'react'
import NavTop from '../components/Navbar/NavTop'
import NavBottom from '../components/Navbar/NavBottom'
import Banrer from '../components/ContactComponents/Banner'
import Communion from '../components/ContactComponents/Communion'
import Contact from '../components/HomeComponents/Contact/Contact'
import Footer from '../components/Footer/Footer'

const ContactUs = () => {
  return (
    <>
      <NavTop />
      <NavBottom />
      <Banrer/>
      <Communion />
      <Contact />
      <Footer />
    </>
  )
}

export default ContactUs