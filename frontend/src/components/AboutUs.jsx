import React from "react";
import RoundTitle from "../components/RoundTitle";
import Title from "../components/Title";

const AboutUs = () => {
  return (
    <div className="px-3 sm:px-4 md:px-11 lg:px-12 xl:px-12 2xl:px-16 my-10 max-w-screen-xl mx-auto" id="about">
      <RoundTitle title="About Me" />
      <Title
        title="Your Skin, Our Passion"
        subtitle="Helping you achieve natural beauty with science-backed treatments"
      />
      {/* Bio / Info */}
    <p className="mb-8 mt-6 max-w-3xl text-primary text-center mx-auto text-xl">
        I'm a certified skin expert from <span className="text-primary font-semibold">Usek University</span>.
        Over the years, I’ve trained with leading institutions such as 
        <span className="text-primary font-semibold"> Bioage Skincare Solutions</span>, 
        <span className="text-primary font-semibold"> Mira Training Center</span>, 
        <span className="text-primary font-semibold"> Zena Cosmetics</span>, and 
        <span className="text-primary font-semibold"> Dermaceutic</span>. 
        I’ve also had the privilege of training under 
        <span className="text-primary font-semibold"> Dr. Diana Mezher</span> and 
        <span className="text-primary font-semibold"> Dr. Rahaf Al-Haroun</span>.
    </p>

      {/* Stats Section */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-10">
        <div className="rounded-lg border-2 border-borderColor bg-background p-6 text-center">
          <h4 className="mb-2 text-3xl font-bold text-primary">5+</h4>
          <p className="text-primary">Years Experience</p>
        </div>
        <div className="rounded-lg border-2 border-borderColor bg-background p-6 text-center">
          <h4 className="mb-2 text-3xl font-bold text-primary">500+</h4>
          <p className="text-primary">Happy Clients</p>
        </div>
        <div className="rounded-lg border-2 border-borderColor bg-background p-6 text-center">
          <h4 className="mb-2 text-3xl font-bold text-primary">99%</h4>
          <p className="text-primary">Customer Satisfaction</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
