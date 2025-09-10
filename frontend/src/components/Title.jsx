  import React from 'react'

  const Title = ({title, subtitle}) => {
    return (
      <div className="flex flex-col justify-center items-center text-center">
    <h1
      className="text-primary font-bold mt-3
    text-3xl sm:text-4xl md:text-5xl lg:text-5xl
    leading-[clamp(2.5rem, 4.5vw + 1rem, 5rem)]"
    >
    {title}
  </h1>
  <p
  className=" text-primary mt-2
    text-[clamp(1rem, 1vw + 0.75rem, 2rem)]
    leading-[clamp(1.5rem, 1.5vw + 0.75rem, 2.5rem)]"
  >
  {subtitle}
  </p>
</div>
    )
  }

  export default Title
