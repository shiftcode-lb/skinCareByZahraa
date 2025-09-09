import React, { useEffect } from 'react'
import Footer from '../components/Footer'
import BookNow from '../components/BookNow'
import WorkshopContent from '../components/WorkshopContent'
import Title from '../components/Title'
import OnlineConsContent from '../components/OnlineConsContent'

const Consultation = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className='mt-10'>
        <Title
        title="Online Consultation"
        />
      <OnlineConsContent />
      <BookNow
      title="Book Your Online Consultation"
      description="Get a personalized skincare session through Zoom — customized routine based on your skin type and condition."
      note="Send your full name, preferred date, and time for your consultation session."
      />
      <Footer />
    </div>
    </div>
  )
}

export default Consultation