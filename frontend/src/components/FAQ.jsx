import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Title from "./Title";

const faqs = [
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

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="px-6 md:px-20 py-10 lg:pt-20 pt-10">
      <div className="container mx-auto px-3 sm:px-4 md:px-11 lg:px-13 xl:px-12 2xl:px-16 max-w-screen-x">
        {/* Section Header */}
        <motion.div
          className="text-center pb-10"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h3 className="border border-[#bebebe] py-2 px-4 rounded-2xl text-sm inline-block font-normal mb-2">
            <i className="ri-arrow-right-up-line text-primary"></i> FAQs
          </h3> 
          <Title title={'Frequently Asked Questions'} subtitle={'Helping you make the best skincare choices?'}/>

        </motion.div>

          {/* FAQ Accordion */}
          <div className="flex  flex-col gap-3 lg:pl-5">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="accordion-item"
              >
                {/* Question */}
                <h2
                  onClick={() => toggleAccordion(index)}
                  className="accordion-header flex justify-between items-center text-base rounded-lg border border-[#ccc] py-3 px-4 font-medium cursor-pointer hover:bg-gray-50 transition"
                >
                  {faq.question}
                  <span className="w-[11px] h-[11px] rounded-full bg-secondary shrink-0 text-white flex items-center justify-center">
                    {openIndex === index ? "-" : "+"}
                  </span>
                </h2>

                {/* Answer with AnimatePresence */}
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      className="accordion-body px-4"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4 }}
                    >
                      <p className="mb-2 text-sm py-2">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
    </section>
  );
};

export default FAQ;
