import React from 'react'
// import { assets } from '../assets/assets'
import Title from '../components/Title'
import Footer from '../components/Footer'
import FAQ from '../components/FAQ'
import Workshop from '../components/Workshop'
import Feedbacks from '../components/Feedbacks'
import Map from '../components/Map'
import Result from '../components/Results'

const Home = () => {
  return (
    <div className='text-2xl font-bold'>
      <Title 
      title="Services"
      subtitle="asdasdadasahjdyjuashdikujasuhjdajkbghdad"
      />
      <Feedbacks/>
      <Result/>
      <FAQ/>
      <Workshop/>
      <Map/>
      <Footer/>
    </div>
  )
}

export default Home
