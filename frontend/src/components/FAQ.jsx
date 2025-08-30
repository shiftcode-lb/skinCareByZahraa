import React, { useState } from "react";
import tips from '../assets/images/tips.png'

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
    <section id="faqs" className="px-20 py-10 lg:pt-20 pt-10">
      <div className="container mx-auto">
        <div className="text-center pb-10">
          <h3 className="border border-[#bebebe] py-2 px-4 rounded-2xl text-sm inline-block font-normal mb-2">
            <i className="ri-arrow-right-up-line text-primary"></i>
            FAQs
          </h3>
          <h2 className="xl:text-[60px] md:text-[40px] text-[32px] text-black-100 font-medium leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="md:text-lg text-sm mt-1">Helping you make the best skincare choices?</p>
        </div>

        <div className="grid lg:grid-cols-[33%_auto] md:grid-cols-2 grid-cols-1 gap-6">
          <div className="p-8 rounded-[15px] bg-black-200 text-center">
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
              <a href="mailto:hello@designpro.com" className="text-primary">
                atallahzahraa7@gmail.com
              </a>
            </p>
          </div>

          <div className="flex flex-col gap-3 lg:pl-5">
            {faqs.map((faq, index) => (
              <div key={index} className="accordion-item">
                <h2
                  onClick={() => toggleAccordion(index)}
                  className="accordion-header flex justify-between items-center text-base rounded-lg border border-[#ccc] py-3 px-4 font-medium cursor-pointer"
                >
                  {faq.question}
                  <span className="inline-block w-[11px] h-[11px] rounded-full bg-secondary shrink-0">
                    {openIndex === index ? "-" : "+"}
                  </span>
                </h2>
                <div
                  className={`accordion-body overflow-hidden transition-all duration-500 px-4 ${
                    openIndex === index ? "max-h-80 opacity-100 py-2" : "max-h-0 opacity-0 py-0"
                  }`}
                >
                  <p className="mb-2 text-sm">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
