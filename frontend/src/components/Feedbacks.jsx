import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import feedback1 from "../assets/images/feedbacks/feedback1.jpeg";
import feedback2 from "../assets/images/feedbacks/feedback2.jpeg";
import feedback3 from "../assets/images/feedbacks/feedback3.jpeg";
import feedback4 from "../assets/images/feedbacks/feedback4.jpeg";
import feedback5 from "../assets/images/feedbacks/feedback5.jpeg";
import feedback6 from "../assets/images/feedbacks/feedback6.jpeg";
import RoundTitle from "./RoundTitle";
import Title from "./Title";
import { assets } from "../assets/assets";

const slideData = [
  { title: "Mystic Mountains", src: feedback1 },
  { title: "Urban Dreams", src: feedback2 },
  { title: "Neon Nights", src: feedback3 },
  { title: "Desert Whispers", src: feedback4 },
  { title: "Desert Whispers", src: feedback5 },
  { title: "Desert Whispers", src: feedback6 },
];

const Feedbacks = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === slideData.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slideData.length - 1 : prev - 1));
  };

  //after 4 sec it slides by itself
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000); // change slide every 4s
    return () => clearInterval(interval);
  }, []);

  // Handle drag end to decide direction
  const handleDragEnd = (event, info) => {
    if (info.offset.x < -100) {
      nextSlide(); // swiped left → next
    } else if (info.offset.x > 100) {
      prevSlide(); // swiped right → previous
    }
  };

  return (
    <section className="flex flex-col items-center px-3 sm:px-4 md:px-11 lg:px-13 xl:px-12 2xl:px-16 relative">
      <img
      src={assets.back4}
      alt="background image"
      className="absolute right-[0px] sm:right-[0px] top-5/5 -translate-y-1/2 
      lg:w-[20%] md:w-[30%] w-[40%] opacity-30 pointer-events-none select-none"
    />
      {/* Title Section */}
      <RoundTitle 
      title="Feedbacks"
      />
      <Title 
      title="What Our Clients Say"
      subtitle="See why clients love their skincare journey with us"
      />

      {/* Carousel Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative w-full md:w-1/2 h-[380px] overflow-hidden rounded-2xl shadow-xl border border-borderColor mt-10 "
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={slideData[current].src}
            src={slideData[current].src}
            alt={slideData[current].title}
            className="w-full h-full object-contain rounded-2xl"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.6 }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.3}
            onDragEnd={handleDragEnd}
          />
        </AnimatePresence>
      </motion.div>

      {/* Dots */}
      <div className="mt-6 flex justify-center gap-2">
        {slideData.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
              current === index ? "bg-[#8e7b66]" : "bg-[#c4b494]"
            }`}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default Feedbacks;
