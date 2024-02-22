import React from 'react'
import NavTop from '../components/Navbar/NavTop'
import NavBottom from '../components/Navbar/NavBottom'
import Contact from '../components/HomeComponents/Contact/Contact'
import Footer from '../components/Footer/Footer'
import Banner from '../components/GelariComponents/Banner'
import Categoria from '../components/GelariComponents/Categoria'

const Gelari = () => {
  return (
    <>
        <NavTop />
        <NavBottom />
        <Banner />
        <Categoria />
        <Contact />
        <Footer />
    </>
  )
}

export default Gelari