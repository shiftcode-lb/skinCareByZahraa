import React from 'react'
import { assets } from '../assets/assets'
const Quote = () => {
  return (
    <div className='w-full mx-auto px-3 sm:px-4 md:px-11 lg:px-13 xl:px-12 2xl:px-16 max-w-screen-xl'>
      <div className="lg:w-[100%] w-full text-center mx-auto bg-black-200 lg:py-[70px] lg:px-20 py-10 px-10 lg:rounded-[40px] rounded-[30px] fadeInUp bg-primary"
                data-delay="0.2">
                <h3 className="md:text-3xl md:leading-[48px] text-2xl leading-11 text-coprimary fancy-heavy">
                    Your skin tells your story, and it deserves the best care. At Skin Care by Zahraa,
                    every treatment is designed with love, science, and precision — to help you restore balance, 
                    enhance radiance, and feel as confident on the outside as you are within.
                </h3>
                <div className="pt-12.5 flex flex-col items-center">
                    <img src={assets.logo} alt="founder" title="founder"
                        className="w-20 h-20 rounded-full" />
                    <h2 className="pt-2.5 lg:text-3xl text-2xl text-coprimary fancy-heavy">Zahraa Attallah</h2>
                </div>
            </div>
    </div>
  )
}

export default Quote
