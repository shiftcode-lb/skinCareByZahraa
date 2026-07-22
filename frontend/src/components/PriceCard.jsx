import React from "react";

const PriceCard = ({ title, price, period, buttonText, features, onBook }) => {
  return (
    <div 
      className="bg-white border-2 rounded-lg shadow-md w-full h-[450px] max-w-sm mx-auto border-borderColor flex flex-col justify-between" 
      data-aos="fade-up" 
      data-aos-delay="300"
    >
      <div>
        <div className="p-6 pb-4">
          <div className="flex items-center">
            <h2 className="text-xl uppercase font-bold leading-6 text-primary">
              {title}
            </h2>
          </div>
          <p className="my-3 text-4xl font-bold tracking-tight text-primary">
            ${price}
            <span className="text-base font-medium text-gray-900 ml-1">
              {period}
            </span>
          </p>
        </div>

        <div className="px-6 pt-4 border-t-2 border-borderColor">
          <h3 className="text-sm font-medium text-gray-900">What's included</h3>
          <ul role="list" className="mt-4 space-y-3">
            {features.map((feature, i) => (
              <li key={i} className="flex space-x-3 items-center">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  strokeWidth="1.5" 
                  stroke="currentColor" 
                  className="w-5 h-5 text-primary shrink-0"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-primary text-sm">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="p-6 pt-0 mt-auto">
        <button 
          onClick={onBook ? onBook : () => {}} 
          className="text-base shadow-lg block w-full rounded-md bg-primary hover:bg-[#6f5e4b] hover:border-primary transform hover:scale-[1.02] transition duration-200 py-3 text-center font-bold text-background cursor-pointer"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default PriceCard;