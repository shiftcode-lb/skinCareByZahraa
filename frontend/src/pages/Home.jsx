import React from 'react'
// import { assets } from '../assets/assets'
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from '../components/Hero'
import Services from '../components/Services'
import Quote from '../components/Quote'
import Footer from '../components/Footer'
import Map from '../components/Map'
import Feedbacks from '../components/Feedbacks'
import FAQ from '../components/FAQ'
import WorkProcess from '../components/WorkProcess'
import BookNow from '../components/BookNow'
import Pricing from '../components/Pricing'
import Result from '../components/Results'
import WcSection from '../components/WcSection'
import AboutUs from '../components/AboutUs'

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    // Restore scroll position when coming back to home page
    if (location.pathname === "/") {
      const savedPosition = sessionStorage.getItem('returnScrollPosition');
      if (savedPosition) {
        setTimeout(() => {
          window.scrollTo({
            top: parseInt(savedPosition),
            behavior: 'smooth'
          });
          sessionStorage.removeItem('returnScrollPosition');
        }, 100);
      }
    }
  }, [location]);
  return (
    <div className=' '>
      <Hero />
      <Quote />
      <AboutUs />
      <Pricing />
      <WorkProcess />
      <Services />
      <WcSection />
      <Result />
      <Feedbacks />
      <FAQ />
      <Map />
      <BookNow />
      <Footer />
    </div>
  )
}

export default Home
