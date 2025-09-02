import React from 'react'

const Title = ({title, subtitle}) => {
  return (
    <div className='flex flex-col justify-center items-center text-center mt-10'>
      <h1 className='font-ballet xl:leading-[90px] xl:text-[55px] md:leading-[60px]
      md:text-[40px] leading-[50px] text-[30px] text-primary font-medium'>{title}</h1>
      <p className='md:text-xl md:leading-7 text-base mt-2 text-primary'>{subtitle}</p>
    </div>
  )
}

export default Title
