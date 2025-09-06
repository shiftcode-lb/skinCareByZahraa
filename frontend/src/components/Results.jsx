import React, { useState, useEffect, useRef } from "react";
import RoundTitle from "./RoundTitle";
import Title from "./Title";
import { assets } from "../assets/assets";


const Result= () => {
  const slides = [
  {
    title: "Acne Removal",
    image: assets.acne,
    // overlay: "from-violet-500/40 to-purple-500/40",
  },
  {
    title: "HydraFacial",
    image: assets.hydrafacial,
    // overlay: "from-fuchsia-500/40 to-pink-500/40",
  },
  {
    title: "Facial",
    image: assets.facial,
    // overlay: "from-pink-500/40 to-rose-500/40",
  },
  {
    title: "Microneedling",
    image: assets.micro,
    // overlay: "from-pink-500/40 to-rose-500/40",
  },
];


  const [current, setCurrent] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const autoAdvanceTimer = useRef(null);

  const resetAutoAdvance = () => {
    if (autoAdvanceTimer.current) clearInterval(autoAdvanceTimer.current);
    autoAdvanceTimer.current = setInterval(() => {
      nextSlide();
    }, 5000);
  };

  useEffect(() => {
    resetAutoAdvance();
    return () => clearInterval(autoAdvanceTimer.current);
  }, [current]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleSwipe = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) nextSlide();
      else prevSlide();
    }
  };

  return (
    <div className="mx-auto px-3 sm:px-4 md:px-11 lg:px-13 xl:px-12 2xl:px-16 max-w-screen-xl">
      {/* Background effects */}
      <RoundTitle 
      title="Before & After"
      />
      <Title 
      title="Real Transformations, Real Confidence"
      subtitle="Visible results from personalized skincare treatments"
      />
      <div className="flex items-center justify-center overflow-hidden relative mt-10">
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-900/20 via-purple-900/20 to-fuchsia-900/20" />
        <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-violet-500/10 rounded-full filter blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-fuchsia-500/10 rounded-full filter blur-3xl" />
      </div>

      <div className="w-full max-w-6xl mx-auto relative">
        {/* Progress bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-white/10 rounded-full overflow-hidden z-20">
          <div
            className="progress-bar absolute top-0 left-0 h-full bg-gradient-to-r from-coprimary to-primary transition-all duration-500"
            style={{ width: `${((current + 1) / slides.length) * 100}%` }}
          />
        </div>

        {/* Nav buttons */}
        <button
          className="nav-button absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center z-20 text-white bg-white/10 backdrop-blur-md hover:bg-white/20 hover:scale-110 active:scale-95 transition"
          onClick={prevSlide}
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          className="nav-button absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center z-20 text-white bg-white/10 backdrop-blur-md hover:bg-white/20 hover:scale-110 active:scale-95 transition"
          onClick={nextSlide}
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Slides */}
        <div
          className="carousel-track relative h-[400px] sm:h-[500px] md:h-[600px] overflow-hidden"
          onTouchStart={(e) => (touchStartX.current = e.changedTouches[0].screenX)}
          onTouchEnd={(e) => {
            touchEndX.current = e.changedTouches[0].screenX;
            handleSwipe();
          }}
        >
          {slides.map((slide, index) => {
            let classes =
              "carousel-item absolute top-0 left-0 w-full h-full opacity-0 scale-90 translate-z-[-200px] transition-all duration-500";

            if (index === current) {
              classes = "carousel-item active absolute top-0 left-0 w-full h-full opacity-100 scale-100 translate-z-0";
            } else if (index === (current + 1) % slides.length) {
              classes = "carousel-item next absolute top-0 left-0 w-full h-full opacity-70 scale-90 translate-x-full -z-10";
            } else if (index === (current - 1 + slides.length) % slides.length) {
              classes = "carousel-item prev absolute top-0 left-0 w-full h-full opacity-70 scale-90 -translate-x-full -z-10";
            }

            return (
              <div key={index} className={classes}>
                <div className="w-full h-full p-4 sm:p-8">
                  <div className="w-full h-full rounded-xl sm:rounded-2xl overflow-hidden relative group">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${slide.overlay} mix-blend-overlay`} />
                    <div className="absolute inset-x-0 bottom-0 p-4 sm:p-8 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                      <h3 className="text-white text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3">
                        {slide.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Indicators */}
        <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-1 sm:gap-2 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-8 sm:w-12 h-1 sm:h-1.5 rounded-full transition-colors ${
                index === current ? "bg-white/40" : "bg-white/20 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
      </div>
       </div>
    </div>
  );
}

export default Result;