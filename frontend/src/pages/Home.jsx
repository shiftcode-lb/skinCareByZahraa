import React from 'react'
import { assets } from '../assets/assets'
import Title from '../components/Title'
import  Hero from '../components/Hero'
import Quote from '../components/Quote'
import Services from '../components/Services'

const Home = () => {
  return (
    <div className='text-2xl font-bold'>
      <Hero />
      <Quote />
      <Services />
    </div>
  )
}

export default Home
