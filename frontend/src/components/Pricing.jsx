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
    { title: "Basic Facial", price: "40", description: "Deep Cleaning + Soothing Mask" },
    { title: "Glow Skin Treatment", price: "50", description: "Basic Facial + Smart Peel" },
  ];
  
  const microneedlingAndPeels = [
    { title: "Bundle 1", price: "70-90", description: "Facial + Microneedling + Mesotherapy Vitamins" },
    { title: "Bundle 2", price: "60-90", description: "Facial + Algee Peeling + Vitamins" },
  ];

  const medicalFacial = [
    { title: "Facial+ Skin Treatment", price: "50-80", description: "Acne Treatment + Rosacea Treatment + Skin Repair + Add on Vitamins" }
  ];

  const bundle = [
    { title: "Bundle 1", price: "80", description: "Deep Cleaning + Smart Peel + Microneedling + Exosomes + Meso Skin Booster" },
    { title: "Bundle 2", price: "100", description: "Deep Cleaning + Microneedling + Meso Cocktail + TCA Peel + Exosomes" },
  ];

  const renderPriceCards = (items) => (
    <>
      <div className={`hidden sm:flex flex-wrap justify-center gap-6 w-full mt-12`}>
        {items.map((item, i) => (
          <div key={i} className="w-full sm:w-[calc(50%-12px)] max-w-sm">
            <PriceCard
              title={item.title}
              price={item.price}
              period="/session"
              buttonText="Book Now"
              onBook={scrollToBookNow}
              features={item.description.split(" + ")}
            />
          </div>
        ))}
      </div>

      <div className="sm:hidden mt-6">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={items.length > 1}
          grabCursor={true}
        >
          {items.map((item, i) => (
            <SwiperSlide key={i} className="h-full flex justify-center">
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
    { id: "glow", label: "Medical Facial", content: renderPriceCards(medicalFacial) },
    { id: "microneedling", label: "Microneedling & Peels", content: renderPriceCards(microneedlingAndPeels) },
    { id: "bundle", label: "Signature Glow Facial", content: renderPriceCards(bundle) }, 
  ];

  return (
    <div className="relative px-3 sm:px-4 md:px-11 lg:px-12 xl:px-12 2xl:px-16 my-10 max-w-screen-xl mx-auto" id="pricing">
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