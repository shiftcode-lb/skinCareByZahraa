import React from "react";

const BookNow = () => {
  return (
    <div className="px-3 sm:px-4 md:px-11 lg:px-13 xl:px-12 2xl:px-16 my-12 max-w-screen-xl mx-auto" id="book-now">
      <div className="bg-gradient-to-r from-coprimary/90 to-primary/90 rounded-2xl p-8 md:p-12 flex flex-col items-center text-center w-full" >
        <h2 className="text-3xl font-bold mb-4 text-black fancy-heavy">
          Glow Starts Here
        </h2>
        <p className="text-xl max-w-2xl mx-auto mb-6 text-black fancy">
          Book your personalized skincare session today — where beauty meets science, and self-care becomes a ritual
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* WhatsApp */}
          <a
            href="https://wa.me/96176873779"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary hover:bg-[#6f5e4b] text-white font-bold py-4 px-8 rounded-full transition-colors flex items-center justify-center gap-2"
          >
            <i className="fa-brands fa-whatsapp text-lg"></i>
            WhatsApp Us
          </a>

        </div>
        <p className="text-sm max-w-2xl mx-auto mt-6 text-black">
          <span className="font-extrabold">Note:</span> Please send your full name,date and time that works with you, and I send you the available spots
        </p>
      </div>
    </div>
  );
};

export default BookNow;
