import React from 'react'
import NavTop from "../components/Navbar/NavTop"
import NavBottom from "../components/Navbar/NavBottom"
import Footer from "../components/Footer/Footer"
import { Banner, Growing, OurVison, History, Team, BookNow } from '../components/ServicesComponents'


const Services = () => {
  return (
    <>
      <NavTop />
      <NavBottom />
      <Banner />
      <OurVison />
      <Growing />
      <History />
      <Team />
      <BookNow />
      <Footer />
    </>
  )
}

export default Services