// ProcessCard.jsx
import React from "react";

const ProcessCard = ({ icon, step, title, desc, shape }) => {
  return (
    <div className="flex flex-col items-center text-center relative sm:px-[25px] px-0">
      {shape && (
        <div className="absolute top-0 left-[-110px] opacity-50 lg:block hidden">
          <img src={shape} alt="shape" />
        </div>
      )}

      {/* Icon + Step number */}
      <div className="lg:w-[65px] lg:h-[65px] w-12.5 h-12.5 rounded-full flex items-center justify-center border border-[rgba(0,0,0,.08)] relative">
        <i className={`${icon} text-[25px]`}></i>
        <div className="overlay-list absolute -right-2 -top-2 bg-primary flex justify-center items-center text-background lg:w-7.5 lg:h-7.5 w-6 h-6 rounded-full">
          <span className="lg:font-medium text-sm ">{step}</span>
        </div>
      </div>

      {/* Title + Description */}
      <div className="lg:pt-6 pt-5">
        <h3 className="lg:text-[32px] text-[26px] lg:leading-[30px] font-bold text-primary">
          {title}
        </h3>
        <p className="text-lg font-medium leading-7 lg:mt-[22px] mt-4">{desc}</p>
      </div>
    </div>
  );
};

export default ProcessCard;
