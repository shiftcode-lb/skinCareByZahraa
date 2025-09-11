import React from "react";
import RoundTitle from "./RoundTitle";
import Title from "./Title";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const WcSection = () => {
  const navigate = useNavigate();

  const wc = [
    {
      title: "Workshop",
      desc: "Join our professional workshops, enhance your skills, and receive a certification upon completion.",
      button: "Explore More",
      link: "/workshop",
    },
    {
      title: "Online Consultation",
      desc: "Book a one-on-one consultation with me to get personalized skincare advice anytime, anywhere.",
      button: "Explore More",
      link: "/consultation",
    },
  ];

  const handleNavigate = (link) => {
    // Save current scroll position before navigating
    sessionStorage.setItem('returnScrollPosition', window.scrollY.toString());
    navigate(link);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="mx-auto px-3 sm:px-4 md:px-11 lg:px-13 xl:px-12 2xl:px-16 max-w-screen-xl relative" id="workshop">
      <img src={assets.back3} alt="" 
          className="absolute left-0 top-2/5 -translate-y-1/2 
            lg:w-[20%] md:w-[30%] w-[40%] opacity-30 pointer-events-none select-none"
          />
      <RoundTitle title="We provide" />
      <Title title="Workshop & Online Consultation" />

      {/* Cards Grid */}
      <div className="grid md:grid-cols-2 gap-8 mt-10" >
        {wc.map((item, i) => (
          <div
            data-aos="fade-up" data-aos-delay="300"
            key={i}
            className="w-full h-[250px] bg-background rounded-2xl border-2 border-borderColor shadow-xl p-6 flex flex-col 
            justify-between " 
          >
            <div>
              <h2 className="text-2xl font-bold text-primary mb-3">{item.title}</h2>
              <p className="text-primary">{item.desc}</p>
            </div>
            <button
              onClick={() => handleNavigate(item.link)}
              className="text-md mt-6 w-full py-2 bg-primary text-background rounded-lg font-semibold 
              transition hover:scale-101 active:scale-95 cursor-pointer hover:bg-[#6f5e4b]"
            >
              {item.button}
              <i className="fa-solid fa-arrow-right text-sm px-2"></i>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WcSection;