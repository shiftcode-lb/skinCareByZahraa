import React from "react";
import Title from "./Title";
import RoundTitle from "./RoundTitle";

const Services = () => {

  const cards = [
  {
    icon: "ri-magic-fill",
    title: "Facials",
    desc: "Deep cleansing and nourishing care to refresh, hydrate, and restore skin balance.",
  },
  {
    icon: "ri-sun-foggy-fill",
    title: "Glow Skin Treatment",
    desc: "Brightening therapy that boosts hydration, evens tone, and enhances natural radiance.",
  },
  {
    icon: "ri-hearts-fill",
    title: "Microneedling",
    desc: "Collagen-boosting treatment that reduces fine lines, scars, and uneven skin texture.",
  },
  {
    icon: "ri-drop-fill",
    title: "Peels",
    desc: "Exfoliating solutions that unclog pores, smooth texture, and renew the skin’s surface.",
  },
  {
    icon: "ri-leaf-fill",
    title: "Pure Algae Peel",
    desc: "Natural peel rich in minerals that detoxifies, calms, and revitalizes without harsh chemicals.",
  },
  {
    icon: "ri-fire-fill",
    title: "TCA Peel",
    desc: "Advanced peel targeting deeper layers to improve pigmentation, wrinkles, and skin tone.",
  },
];

  return (
  <div className="px-3 sm:px-4 md:px-11 lg:px-13 xl:px-12 2xl:px-16 max-w-screen-xl mx-auto">
      <RoundTitle 
      title="Services"
      />
      <Title 
      title="Glow, Heal & Transform"
      subtitle="From facials to advanced skincare — expert care for every skin journey"
      />

      {/* Grid Section */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-7 gap-y-7.5  mt-10 w-full">
        {cards.map((item, i) => (
          <div
            key={i}
            className="text-center py-12 px-7.5 rounded-[15px] border border-[#bebebe] hover:border-primary bg-primary
            transition-all duration-500 shadow-sm">
            <i className={`${item.icon} text-[50px] text-coprimary`}></i>
            <h4 className="lg:text-2xl text-xl font-semibold my-3 fancy text-background">{item.title}</h4>
            <div className="lg:text-base text-sm text-background">{item.desc}</div>
          </div>
        ))}
      </div>
  </div>
);
}

export default Services;
