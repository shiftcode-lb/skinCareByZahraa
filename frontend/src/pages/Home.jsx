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
import WorkProcess from '../components/WorkProcess'
import BookNow from '../components/BookNow'
import Pricing from '../components/Pricing'
import Result from '../components/Results'

const Home = () => {
  return (
    <div className=' '>
      <Hero />
      <Quote />
      <WorkProcess />
      <Services />
      <Result />
      <Feedbacks />
      <FAQ />
      <Pricing />
      <Map />
      <BookNow />
      <Footer />
    </div>
  )
}

export default Home
