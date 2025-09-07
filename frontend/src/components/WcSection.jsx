import React from "react";
import RoundTitle from "./RoundTitle";
import Title from "./Title";
import { useNavigate } from "react-router-dom";

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
      desc: "Book a one-on-one consultation with our experts to get personalized skincare advice anytime, anywhere.",
      button: "Explore More",
      link: "/consultation",
    },
  ];

  return (
    <div className="mx-auto px-3 sm:px-4 md:px-11 lg:px-13 xl:px-12 2xl:px-16 max-w-screen-xl">
      <RoundTitle title="We provide" />
      <Title title="Workshop & Online Consultation" />

      {/* Cards Grid */}
      <div className="grid md:grid-cols-2 gap-8 mt-10" >
        {wc.map((item, i) => (
          <div
            data-aos="fade-up" data-aos-delay="300"
            key={i}
            className="w-full h-[250px] bg-background rounded-2xl border-2 border-borderColor shadow-2xl p-6 flex flex-col 
            justify-between transition-transform duration-500 hover:scale-103" 
          >
            <div>
              <h2 className="text-2xl font-bold text-primary mb-3">{item.title}</h2>
              <p className="text-primary">{item.desc}</p>
            </div>
            <button
              onClick={() => {
                navigate(item.link);
                window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              className="mt-6 w-full py-2 bg-primary text-background rounded-lg font-semibold transition hover:scale-103 active:scale-95 cursor-pointer"
            >
              {item.button}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WcSection;
