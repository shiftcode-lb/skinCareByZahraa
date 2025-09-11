import React from "react";

const PriceCard = ({ title, price, period, buttonText, features, onBook }) => {
  return (
    <div className="bg-white border-2 rounded-lg shadow-md w-full h-[495px] max-w-sm mx-auto border-borderColor " data-aos="fade-up" data-aos-delay="300">
      <div className="p-6">
        <div className="flex items-center">
          <h2 className="text-xl uppercase font-bold leading-6 text-primary">
            {title}
          </h2>
        </div>
        <p className="my-4 text-4xl font-bold tracking-tight text-gray-900">
          ${price}
          <span className="text-base font-medium text-gray-500 ml-1">
            {period}
          </span>
        </p>
        <div className="relative">
          <div className="flex-col">
            <button onClick={onBook ? onBook : () => {}} className="text-sm shadow-lg mt-3 block w-full rounded-md 
            bg-primary hover:bg-[#6f5e4b] hover:border-primary transform hover:scale-101 transition duration-200 py-2 text-center  font-semibold text-background cursor-pointer ">
              {buttonText}
            </button>
          </div>
        </div>
      </div>
      <div className="px-6 pt-6 pb-8 border-t-2 border-borderColor">
        <h3 className="text-sm font-medium text-gray-900">What's included</h3>
        <ul role="list" className="mt-6 space-y-4">
          {features.map((feature, i) => (
            <li key={i} className="flex space-x-3 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-primary">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
              <span className=" text-primary text-sm  md:text-">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PriceCard;
