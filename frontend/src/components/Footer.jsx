import React from "react";
// import skincare from "../assets/images/skincare.png";

const Footer = () => {
  return (
    <footer className="bg-gray-50 px-6 md:px-20 py-10">
      <div className="container mx-auto">
        {/* First row: three-column grid */}
        <div className="grid justify-around grid-cols-1 lg:grid-cols-3 items-center text-center lg:text-left gap-4">
          {/* Left: copyright */}
          <div className="text-gray-700 text-sm">
            &copy; 2025{" "}
            <a href="https://shiftcode.org" className="text-primary font-semibold">
              ShiftCode
            </a>
            . All Rights Reserved.
          </div>

          {/* Center: email */}
          <div className="text-gray-700 text-sm lg:text-center">
            Email:{" "}
            <a href="mailto:info@shiftcode.org" className="text-primary">
              atallahzahraa7@gmail.com
            </a>
          </div>

          {/* Right: social icons */}
          <div className="flex justify-end gap-4">
            <p className="text-gray-700 text-sm lg:text-center">For more inquiries:</p>
            <a
              href="https://www.instagram.com/skin.care.by.zahraa/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-pink-500 transition-colors transform hover:-translate-y-1"
            >
              <i className="fa-brands fa-instagram text-2xl"></i>
            </a>
            <a
              href="https://wa.me/96176873779"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#25D366] hover:text-green-600 transition-colors transform hover:-translate-y-1"
            >
              <i className="fa-brands fa-whatsapp text-2xl"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
