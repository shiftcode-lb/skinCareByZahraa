import React from 'react'

const Title = ({title, subtitle}) => {
  return (
    <div className='flex flex-col justify-center items-center text-center'>
      <h1 className='font-ballet xl:leading-[90px] xl:text-[55px] md:leading-[60px] fancy-heavy
      md:text-[40px] leading-[50px] text-[30px] text-primary font-medium mt-3'>{title}</h1>
      <p className='md:text-lg md:leading-7 text-base mt-2 text-primary'>{subtitle}</p>
    </div>
  )
}

export default Title
