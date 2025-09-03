import React from "react";
import Title from "./Title";
import RoundTitle from "./RoundTitle";

const Workshop = () => {

  const cards = [
    {
      icon: "ri-magic-fill",
      title: "Cosmetic Treatments",
      desc: "Facials, Microneedling, Peeling",
    },
    {
      icon: "ri-emotion-happy-fill",
      title: "All About Facial",
      desc: "Protocols, Brands, Deep Cleaning Steps, Hydrafacial Techniques",
    },
    {
      icon: "ri-contrast-drop-fill",
      title: "Microneedling",
      desc: "Pre and Post-Care, Meso Brands, Protocols",
    },
    {
      icon: "ri-shape-fill",
      title: "Combination Treatments",
      desc: "Integrated advanced methods for professional results.",
    },
    {
      icon: "ri-book-2-fill",
      title: "Training Details",
      desc: "practice with live models, printed PDF with all notes and certificate of attendance.",
    },
    {
      icon: "ri-book-2-fill",
      title: "Notes",
      desc: " private session from 10 am till 6 pm with practice on models, suitable for beginners with some skincare basics.",
    },
  ];

  return (
  <div className="px-3 sm:px-4 md:px-11 lg:px-13 xl:px-12 2xl:px-16">
    <div>
      <RoundTitle 
      title="Services"
      />
      <Title 
      title="Glow, Heal & Transform"
      subtitle="From facials to advanced skincare — expert care for every skin journey"
      />

      {/* Grid Section */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-x-6 gap-y-7.5 max-w-6xl mx-auto mt-10">
        {cards.map((item, i) => (
          <div
            key={i}
            className="text-center py-12 px-7.5 rounded-[15px] border border-[#bebebe] hover:border-primary bg-primary
            transition-all duration-500 shadow-sm">
            <i className={`${item.icon} text-[50px] text-coprimary`}></i>
            <h4 className="lg:text-2xl text-xl font-semibold my-3">{item.title}</h4>
            <div className="lg:text-base text-sm text-background">{item.desc}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);
}

export default Workshop;
