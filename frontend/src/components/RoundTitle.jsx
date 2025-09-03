import React from 'react'

const RoundTitle = ({title}) => {
  return (
    <div className='flex flex-col justify-center items-center text-center mt-10'>
      <h3 className="border border-borderColor py-2.5 px-5 rounded-3xl md:text-base 
      text-sm inline-block font-normal mb-[5px] text-primary">
        <i className="ri-sparkling-fill "></i> {title}
      </h3>
    </div>
  )
}

export default RoundTitle
