import React, { useEffect } from 'react'
import Footer from '../components/Footer'
import BookNow from '../components/BookNow'
import WorkshopContent from '../components/WorkshopContent'
import Title from '../components/Title'
import Map from '../components/Map'

const Workshop = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  return (
    <div className='mt-30'>
        <Title
        title="Workshop"
        />
      <WorkshopContent />
      <BookNow
      title="Reserve Your Workshop Spot"
      description="Join our hands-on skincare workshop — learn facials, microneedling, and more with live model practice."
      note="Send your full name and preferred date for scheduling your workshop session."
      />
      <Map />
      <Footer />
    </div>
  )
}

export default Workshop
