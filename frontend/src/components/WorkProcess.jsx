// WorkProcess.jsx
import React from "react";
import ProcessCard from "./ProcessCard";
import RoundTitle from "./RoundTitle";
import Title from "./Title";
import { assets } from "../assets/assets";

const WorkProcess = () => {
  const steps = [
    {
      icon: "ri-drop-fill",
      step: "01",
      title: "Consultation",
      desc: "Analyze your skin type and choose the best treatments for healthy, radiant skin",
    },
    {
      icon: "ri-contacts-fill",
      step: "02",
      title: "Treatment",
      desc: "Receive personalized skincare services like facials, peels, or microneedling for visible results",
      shape: assets.arrow1,
    },
    {
      icon: "ri-leaf-fill",
      step: "03",
      title: "Aftercare",
      desc: "Get advice on post-treatment care, products, and routines to maintain glowing skin",
      shape: assets.arrow2,
    },
  ];

  return (

      <div className="px-3 sm:px-4 md:px-11 lg:px-13 xl:px-12 2xl:px-16 max-w-screen-xl mx-auto">
        {/* Section Header */}
        <RoundTitle title="Work Process" />
        <Title
          title="How We Care for Your Skin"
          subtitle="Step-by-step process to healthy, glowing skin"
        />

        {/* Steps Grid */}
        <div className="grid lg:grid-cols-3 gap-x-6 gap-y-12.5 lg:pt-15 pt-0 relative mt-10">
          {steps.map((item, i) => (
            <ProcessCard key={i} {...item} />
          ))}
        </div>
      </div>
  );
};

export default WorkProcess;
