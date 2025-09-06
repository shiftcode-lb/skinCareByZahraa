import React from "react";
import RoundTitle from "./RoundTitle";
import Title from "./Title";
import Tabs from "./Tabs";

const Pricing = () => { 
  const tabs = [
    {
      id: "facials",
      label: "Facials",
      content: <p>Facial treatment price list goes here...</p>,
    },
    {
      id: "glow",
      label: "Glow Skin Treatment",
      content: <p>Glow skin treatment price list goes here...</p>,
    },
    {
      id: "microneedling",
      label: "Microneedling & Peels",
      content: <p>Microneedling & Peels price list goes here...</p>,
    },
    {
      id: "bundle",
      label: "Bundle",
      badge: "New", // 👈 this adds the "New" badge
      content: <p>Bundle packages price list goes here...</p>,
    },
  ];

  return (
    <div className="px-3 sm:px-4 md:px-11 lg:px-12 xl:px-12 2xl:px-16 my-10 max-w-screen-xl mx-auto">
      <RoundTitle title="Our Treatments & Prices" />
      <Title
        title="Invest in Your Skin"
        subtitle="Transparent, tailored pricing for every treatment"
      />
      <Tabs tabs={tabs}/>
    </div>
  );
};

export default Pricing ;
