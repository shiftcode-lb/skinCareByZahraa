import React from 'react'

const RoundTitle = ({title}) => {
  return (
    <div>
      <h3 className="border border-[#bebebe] py-2 px-4 rounded-2xl text-sm inline-block font-normal mb-2">
            <i className="ri-arrow-right-up-line text-primary"></i> {title}
        </h3> 
    </div>
  )
}

export default RoundTitle
