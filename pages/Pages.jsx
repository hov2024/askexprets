import React from 'react'
import Footer from '../components/Footer/Footer'
import {  
  About, 
  Banner, 
  Cart, 
  Contact, 
  Experiance, 
  Nav, 
  Reazume, 
  Services, 
  Slider, 
  Statistics, 
  Team, 
  Work, 
  YourPlan 
} from '../components/PageComponents'


const Pages = () => {
  return (
    <>
      <Nav />
      <Banner />
      <Cart />
      <About />
      <Services />
      <Experiance />
      <Work />
      <Reazume />
      <Statistics />
      <Slider />
      <Team />
      <YourPlan />
      <Contact />
      <Footer />
    </>
  )
}

export default Pages