"use client";
import React from "react";
import { FlipWords } from "../ui/flip-words";
import { assets } from "../assets/assets";

const Hero = () => {
  const words = ["GLOW", "CONFIDENCE", "RADIANCE", "BEAUTY"]
  return (
    <div className="flex flex-col gap-10 justify-center  md:flex-row items-center min-h-[80vh] relative
    w-full mx-auto px-3 sm:px-4 md:px-11 lg:px-13 xl:px-12 2xl:px-16 max-w-screen-xl z-30">
      
      <img src={assets.back1} alt="background image" 
      className="absolute left-[-30px] sm:left-[-100px] sm:top-[50vh] top-[38vh] -translate-y-1/2 lg:w-[20%] md:w-[30%] w-[40%] opacity-30 pointer-events-none select-none"
      />
      {/* Content */}
      <div className="relative mx-auto text-center text-primary -0">
        <h1
          className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          style={{ lineHeight: "1.2" }}
        >
          Reveal Your{" "}
          <br />
          <FlipWords words={words} />
        </h1>

        <p className="mx-auto mb-8 text-xl md:text-3xl">
          Professional skincare treatments to help you glow with confidence and embrace
          your natural beauty.
        </p>
        <div className="flex justify-center items-center mt-8">
  <button
    onClick={() => {
      const section = document.getElementById("book-now");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }}
    className="relative flex items-center justify-center px-6 py-3 border-2 cursor-pointer border-primary rounded-full text-background text-lg font-semibold bg-primary hover:bg-[#6f5e4b] hover:border-primary shadow-lg transform hover:scale-105 transition duration-500"
  >
    <span className="relative">Book Now</span>
    <span className="absolute inset-0 rounded-full bg-primary opacity-50 animate-ping"></span>
  </button>
</div>

      </div>

      {/* Scroll Down */} 
      <div className="absolute bottom-[-5px] left-1/2 transform -translate-x-1/2 animate-bounce">
  <button
    onClick={() => {
      const section = document.getElementById("process");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }}
    className="cursor-pointer bg-transparent border-none outline-none"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-10 w-10 text-primary"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19 9l-7 7-7-7"
      />
    </svg>
  </button>
</div>

    </div>
  )
}

export default Hero
