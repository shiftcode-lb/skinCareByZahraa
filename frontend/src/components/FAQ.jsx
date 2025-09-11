import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Title from "./Title";
import RoundTitle from "./RoundTitle";
import { assets } from "../assets/assets";

const faqsData = [
  {
    question: "How long does a facial treatment typically last?",
    answer:
      "A facial session usually lasts between 45-90 minutes depending on your skin type, condition, and the type of treatment.",
  },
  {
    question: "How often should I get a facial?",
    answer:
      "Ideally every month, but it depends on your skin type, goals, and budget.",
  },
  {
    question: "What are the benefits of facials?",
    answer: `• Deep cleansing of pores
• Exfoliation of dead skin
• Improved blood circulation
• Hydration and skin nourishment
• Stress relief and relaxation
• Glowing, refreshed skin`,
  },
  {
    question: "What should I avoid after a facial?",
    answer: `• Sun exposure
• Makeup for 24 hours
• Harsh skincare products (like retinoids or exfoliants)
• Touching your face`,
  },
  {
    question: "Are facials safe during pregnancy?",
    answer: "Yes, pregnancy facials are customized with safe ingredients.",
  },
  {
    question: "Are facials safe during your period?",
    answer:
      "Yes, but it's preferable to avoid the first days of the cycle to prevent pain and skin sensitivity.",
  },
  {
    question: "Are facials safe while on Roaccutane?",
    answer:
      "Gentle hydrating facials are safe during Roaccutane. Avoid microneedling, chemical peels, and laser treatments during this period.",
  },
  {
    question: "How many sessions do I need to see real results?",
    answer:
      "For skin concerns like pigmentation, acne, or aging, 4-6 treatment sessions are recommended to see significant improvement.",
  },
  {
    question: "Time to wait between injections & skin treatments",
    answer: `• Botox, filler, skin booster & skin treatment: 14 days
• Laser & skin treatment: 14 days
• Solarium/tanning: 7-10 days
• Skin shaving or waxing: 7 days
• Active ingredients (retinol, AHA, BHA): stop using 5-7 days before treatment`,
  },
  {
    question: "Is microneedling suitable for all skin types?",
    answer: `Microneedling may not be suitable for:
• Very sensitive or reactive skin (rosacea flare-ups)
• Skin with active acne, eczema, psoriasis, or infection
• People on blood thinning medication or Roaccutane
• Pregnancy and breastfeeding`,
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);


  return (
    <div className="flex flex-col justify-center items-center relative
    w-full mx-auto px-3 sm:px-4 md:px-11 lg:px-13 xl:px-12 2xl:px-16 max-w-screen-xl" id="faq">
  <RoundTitle 
  title="FAQ"
  />
  <Title
    title="Frequently Asked Questions"
    subtitle="Proactively answering FAQs boosts user confidence and cuts down on support tickets"
  />

  <div className="w-full flex flex-col items-center gap-6 mt-10">
    {faqsData.map((faq, index) => (
      <div
        key={index}
        className="w-full"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div
          className="flex items-center justify-between w-full border border-borderColor p-4 rounded cursor-pointer"
          onClick={() => setOpenIndex(openIndex === index ? null : index)}
        >
          <h2 className="text-sm w-full text-center text-primary">{faq.question}</h2>

          <div className="ml-4 flex-shrink-0">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`transition-all duration-500 ease-in-out ${
                openIndex === index ? "rotate-180" : ""
              }`}
            >
              <path
                d="m4.5 7.2 3.793 3.793a1 1 0 0 0 1.414 0L13.5 7.2"
                stroke="#86735d"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        <p
          className={`text-sm text-primary px-4 transition-all text-center duration-500 ease-in-out ${
            openIndex === index
              ? "opacity-100 max-h-[300px] translate-y-0 pt-4"
              : "opacity-0 max-h-0 -translate-y-2"
          }`}
        >
          {faq.answer}
        </p>
      </div>
    ))}
  </div>
</div>
  );
};

export default FAQ;
