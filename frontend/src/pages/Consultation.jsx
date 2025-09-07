import React from 'react'
import Footer from '../components/Footer'
import BookNow from '../components/BookNow'
import WorkshopContent from '../components/WorkshopContent'
import Title from '../components/Title'

const Consultation = () => {
  return (
    <div>
      <div className='mt-30'>
        <Title
        title="Online Consultation"
        />
      <WorkshopContent />
      <BookNow />
      <Footer />
    </div>
    </div>
  )
}

export default Consultation