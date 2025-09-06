  import React from 'react'

  const Title = ({title, subtitle}) => {
    return (
      <div className="flex flex-col justify-center items-center text-center">
  <h1
    className="font-ballet fancy-heavy text-primary font-medium mt-3
      text-[clamp(2rem, 4vw + 1rem, 3.5rem)]
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
