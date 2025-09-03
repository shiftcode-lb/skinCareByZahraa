import React from 'react'
// import { assets } from '../assets/assets'
import Title from '../components/Title'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Workshop from '../components/Workshop'
import Quote from '../components/Quote'
import Footer from '../components/Footer'
import Map from '../components/Map'
import Feedbacks from '../components/Feedbacks'
import FAQ from '../components/FAQ'

const Home = () => {
  return (
    <div className='text-2xl font-bold'>
      <Hero />
      <Quote />
      <Services />
      <FAQ />
      <Feedbacks />
      <Map />
      <Footer />
    </div>
  )
}

export default Home
