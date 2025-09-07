import React from "react";
import RoundTitle from "./RoundTitle";
import Title from "./Title";
import Tabs from "./Tabs";
import PriceCard from "./PriceCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { assets } from "../assets/assets";

const Pricing = () => {
  const scrollToBookNow = () => {
    const section = document.getElementById("book-now");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  const facials = [
    { title: "Facials – Package 1", price: 40, description: "Deep Cleaning + HydraFacial + Smart Peel + Soothing Mask" },
    { title: "Facials – Package 2", price: 40, description: "Deep Cleaning + HydraFacial + Soothing Mask + Vitamin Mask" },
  ];
  
  const microneedlingAndPeels = [
    { title: "Bundle 1", price: 60, description: "Deep Cleaning + Full Face Microneedling with mix vitamins + pro retinol or threadfill" },
    { title: "Bundle 2", price: 60, description: "Deep Cleaning + Smart Peel + Full Face Microneedling with mix vitamins + pro retinol or threadfill" },
    { title: "Bundle 3", price: 60, description: "Pure Algae Peel treatment for skin renewal" },
    { title: "Bundle 4", price: 50, description: "Deep Cleaning + Light Algae Peeling + Mix Vitamins + Pro Retinol Peel" },
    { title: "Bundle 5", price: 60, description: "TCA Peel for deep skin rejuvenation" },
  ];

  const glowSkin = [
    { title: "Glow Skin Treatment – Package 1", price: 50, description: "Deep Cleaning + Smart Peel + Soothing Mask + Vitamin Mask + Eye Mask" },
    { title: "Glow Skin Treatment – Package 2", price: 50, description: "Facial & Skin Treatment + Deep Cleaning + Acne or Repair or Rosacea Treatment" },
  ];

  // New bundle treatments
  const bundle = [
    { title: "Bundle 1", price: 80, description: "Deep Cleaning + Smart Peel + Microneedling + Exosomes + Meso Skin Booster" },
    { title: "Bundle 2", price: 100, description: "Deep Cleaning + Microneedling + Meso Cocktail + TCA Peel + Exosomes" },
  ];
  

  const renderPriceCards = (items) => (
    <>
      {/* Grid for medium and larger screens */}
      <div className="hidden sm:grid gap-6 sm:grid-cols-2 lg:grid-cols-2 w-full mt-12">
        {items.map((item, i) => (
          <PriceCard
            key={i}
            title={item.title}
            price={item.price}
            period="/session"
            buttonText="Book Now"
            onBook={scrollToBookNow}
            features={item.description.split(" + ")}
          />
        ))}
      </div>

      {/* Swiper for small screens */}
      <div className="sm:hidden mt-6">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          onBook={scrollToBookNow}
          grabCursor={true}
        >
          {items.map((item, i) => (
            <SwiperSlide key={i} className="h-full flex">
              <PriceCard
                title={item.title}
                price={item.price}
                period="/session"
                buttonText="Book Now"
                onBook={scrollToBookNow}
                features={item.description.split(" + ")}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );

  const tabs = [
    { id: "facials", label: "Facials", content: renderPriceCards(facials) },
    { id: "glow", label: "Glow Skin Treatment", content: renderPriceCards(glowSkin) },
    { id: "microneedling", label: "Microneedling & Peels", content: renderPriceCards(microneedlingAndPeels) },
    { id: "bundle", label: "Bundle", badge: "New", content: renderPriceCards(bundle) }, // updated bundle
  ];

  return (
    <div className="relative px-3 sm:px-4 md:px-11 lg:px-12 xl:px-12 2xl:px-16 my-10 max-w-screen-xl mx-auto" id="pricing">
      <img src={assets.back2} 
      className="absolute right-0 top-2/5 -translate-y-1/2 
      lg:w-[20%] md:w-[30%] w-[40%] opacity-30 pointer-events-none"
      />
      <RoundTitle title="Our Treatments & Prices" />
      <Title
        title="Invest in Your Skin"
        subtitle="Transparent, tailored pricing for every treatment"
      />
      <Tabs tabs={tabs} />
    </div>
  );
};

export default Pricing;
