import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import tips from "../assets/images/tips.png";

const faqs = [
  {
    question: "How secure is my financial data on your platform?",
    answer:
      "Our childcare center is open from 7:00 AM to 6:00 PM, Monday through Friday. We offer flexible scheduling options to accommodate working families.",
  },
  {
    question: "How does the subscription work?",
    answer:
      "Our childcare center is open from 7:00 AM to 6:00 PM, Monday through Friday. We offer flexible scheduling options to accommodate working families.",
  },
  {
    question: "How much do your plans cost?",
    answer:
      "Our childcare center is open from 7:00 AM to 6:00 PM, Monday through Friday. We offer flexible scheduling options to accommodate working families.",
  },
  {
    question: "How quickly can You deliver designs for our business?",
    answer:
      "Our childcare center is open from 7:00 AM to 6:00 PM, Monday through Friday. We offer flexible scheduling options to accommodate working families.",
  },
  {
    question: "Can I request revisions to the designs provided?",
    answer:
      "Our childcare center is open from 7:00 AM to 6:00 PM, Monday through Friday. We offer flexible scheduling options to accommodate working families.",
  },
  {
    question: "What types of designs does Designpro specialize in?",
    answer:
      "Our childcare center is open from 7:00 AM to 6:00 PM, Monday through Friday. We offer flexible scheduling options to accommodate working families.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="px-6 md:px-20 py-10 lg:pt-20 pt-10">
      <div className="container mx-auto">
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
          <h2 className="xl:text-[60px] md:text-[40px] text-[32px] text-black-100 font-medium leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="md:text-lg text-sm mt-1 text-gray-600">
            Helping you make the best skincare choices?
          </p>
        </motion.div>

        {/* Layout */}
        <div className="grid lg:grid-cols-[33%_auto] md:grid-cols-2 grid-cols-1 gap-6">
          {/* Left card */}
          <motion.div
            className="p-8 rounded-[15px] bg-black-200 text-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <img
              src={tips}
              alt="founder"
              title="founder"
              className="max-w-[120px] max-h-[120px] mx-auto"
            />
            <h2 className="text-secondary lg:text-[26px] text-2xl lg:leading-[1.2] py-2">
              Contact me!
            </h2>
            <a
              href="https://wa.me/96176873779"
              className="btn bg-primary text-secondary border-primary hover:bg-black-200 hover:text-white text-sm py-2 px-4"
            >
              Direct Message! <i className="ri-video-chat-line"></i>
            </a>
            <p className="black text-sm mt-2">
              Prefer to email?{" "}
              <a href="mailto:atallahzahraa7@gmail.com" className="text-primary">
                atallahzahraa7@gmail.com
              </a>
            </p>
          </motion.div>

          {/* FAQ Accordion */}
          <div className="flex flex-col gap-3 lg:pl-5">
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
      </div>
    </section>
  );
};

export default FAQ;
