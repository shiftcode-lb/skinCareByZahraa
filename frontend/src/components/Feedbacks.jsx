import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import feedback1 from "../assets/images/feedbacks/feedback1.jpeg";
import feedback2 from "../assets/images/feedbacks/feedback2.jpeg";
import feedback3 from "../assets/images/feedbacks/feedback3.jpeg";
import feedback4 from "../assets/images/feedbacks/feedback4.jpeg";
import feedback5 from "../assets/images/feedbacks/feedback5.jpeg";
import feedback6 from "../assets/images/feedbacks/feedback6.jpeg";

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

  // Handle drag end to decide direction
  const handleDragEnd = (event, info) => {
    if (info.offset.x < -100) {
      nextSlide(); // swiped left → next
    } else if (info.offset.x > 100) {
      prevSlide(); // swiped right → previous
    }
  };

  return (
    <section className="flex flex-col items-center py-10 px-3 sm:px-4 md:px-11 lg:px-13 xl:px-12 2xl:px-16">
      {/* Title Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3">
          What Our Clients Say
        </h2>
        <p className="text-gray-600 text-lg max-w-xl mx-auto">
          Real stories and feedbacks from people who trusted us.
        </p>
      </motion.div>

      {/* Carousel Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative w-full md:w-1/2 h-[380px] overflow-hidden rounded-2xl shadow-xl border border-borderColor"
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

        {/* Controls */}
        <button
          onClick={prevSlide}
          className="absolute cursor-pointer left-4 top-1/2 -translate-y-1/2 text-black rounded-full p-3 bg-white shadow"
        >
          ◀
        </button>
        <button
          onClick={nextSlide}
          className="absolute cursor-pointer right-4 top-1/2 -translate-y-1/2 text-black rounded-full p-3 bg-white shadow"
        >
          ▶
        </button>
      </motion.div>

      {/* Dots */}
      <div className="mt-6 flex justify-center gap-2">
        {slideData.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
              current === index ? "bg-gray-800 scale-110" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default Feedbacks;
