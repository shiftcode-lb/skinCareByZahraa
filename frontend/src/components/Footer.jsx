import React from "react";
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className="relative flex flex-col items-center justify-center w-full py-6 bg-primary text-white/70">
      <div
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="flex items-center flex-col justify-center text-2xl font-semibold text-background fancy cursor-pointer"
      >
        <img src={assets.logo} className="h-20 mr-3 sm:h-17" alt="Skincare Logo"/>
        SkinCare By Zahraa
      </div>
      
      <span className="block text-sm text-center text-background mt-5">
        © {new Date().getFullYear()} <a href="https://shiftcode.org" target="_blank" rel="noopener noreferrer" >ShiftCode</a>. All Rights Reserved.
      </span>
    </div>
  );
};

export default Footer;
