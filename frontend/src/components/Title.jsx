import React from 'react'

const Title = ({title, subtitle}) => {
  return (
    <div className='flex flex-col justify-center items-center text-center mt-100'>
      <h1 className='xl:leading-[90px] xl:text-[60px] md:leading-[60px] md:text-[40px] leading-[50px] text-[30px] text-black-100 font-medium'>{title}</h1>
      <p className='md:text-xl md:leading-7 text-base mt-2'>{subtitle}</p>
    </div>
  )
}

export default Title
