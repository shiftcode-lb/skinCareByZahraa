import React from 'react'
import Footer from '../components/Footer'
import BookNow from '../components/BookNow'
import WorkshopContent from '../components/WorkshopContent'
import Title from '../components/Title'
import Map from '../components/Map'

const Workshop = () => {
  return (
    <div className='mt-30'>
        <Title
        title="Workshop"
        />
      <WorkshopContent />
      <BookNow />
      <Map />
      <Footer />
    </div>
  )
}

export default Workshop
