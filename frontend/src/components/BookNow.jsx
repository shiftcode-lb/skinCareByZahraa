import React from "react";

const BookNow = ({
  title = "Glow Starts Here",
  description = "Book your personalized skincare session today — where beauty meets science, and self-care becomes a ritual",
  note = "Please send your full name, date and time that works with you, and I send you the available spots",
}) => {
  const whatsappLink = "https://wa.me/96176873779"; // same for all

  return (
    <div
      className="w-full mx-auto px-3 sm:px-4 md:px-11 lg:px-13 xl:px-12 2xl:px-16 max-w-screen-xl mt-10"
      id="book-now"
      data-aos="fade-up"
      data-aos-delay="300"
    >
      <div className="text-primary bg-background border-primary border-2 rounded-2xl flex flex-col items-center text-center p-8 md:p-12 mb-10 shadow-xl hover:shadow-2xl transition-shadow duration-300">
        <h2 className="text-3xl font-bold mb-4 text-primary">{title}</h2>
        <p className="text-xl max-w-2xl mx-auto mb-6 text-primary">{description}</p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* WhatsApp */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary hover:bg-[#6f5e4b] text-white font-bold py-4 px-8 rounded-full transition-colors flex items-center justify-center gap-2"
          >
            <i className="fa-brands fa-whatsapp text-lg"></i>
            WhatsApp Us
          </a>
        </div>

        <p className="text-sm max-w-2xl mx-auto mt-6 text-primary">
          <span className="font-extrabold">Note:</span> {note}
        </p>
      </div>
    </div>
  );
};

export default BookNow;
