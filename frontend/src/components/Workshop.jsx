import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Workshop = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { margin: "-100px", amount: 0.2 });

  // Animation variants for cards
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  const cards = [
    {
      icon: "ri-magic-fill",
      title: "Cosmetic Treatments",
      desc: "Facials, Microneedling, Peeling",
    },
    {
      icon: "ri-emotion-happy-fill",
      title: "All About Facial",
      desc: "Protocols, Brands, Deep Cleaning Steps, Hydrafacial Techniques",
    },
    {
      icon: "ri-contrast-drop-fill",
      title: "Microneedling",
      desc: "Pre and Post-Care, Meso Brands, Protocols",
    },
    {
      icon: "ri-shape-fill",
      title: "Combination Treatments",
      desc: "Integrated advanced methods for professional results.",
    },
    {
      icon: "ri-book-2-fill",
      title: "Training Details",
      desc: "In-depth explanation and hands-on training, practice with live models, printed PDF with all notes and certificate of attendance.",
    },
    {
      icon: "ri-book-2-fill",
      title: "Notes",
      desc: "The cost of the training is 250$, private session from 10 am till 6 pm with practice on models, suitable for beginners with some skincare basics.",
    },
  ];

  return (
    <motion.section
      ref={sectionRef}
      id="workshop"
      initial={{ opacity: 0 }}
      animate={{ opacity: isInView ? 1 : 0 }}
      transition={{ duration: 0.8 }}
      className="lg:pt-25 pt-15 bg-gray-50"
    >
      <div className="container px-3 sm:px-4 md:px-11 lg:px-13 xl:px-12 2xl:px-16 max-w-screen-x">
        {/* Section Header */}
        <motion.div
          className="text-center pb-15"
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="border border-[#bebebe] py-2.5 px-5 rounded-3xl md:text-base text-sm inline-block font-normal mb-[5px]">
            <i className="ri-sparkling-fill text-primary"></i> Skincare Training
          </h3>
          <h2 className="xl:leading-[80px] xl:text-[60px] md:leading-[50px] md:text-[40px] leading-[40px] text-[32px] text-black-100 font-semibold">
            Intensive Skincare Workshop
          </h2>
          <p className="md:text-lg text-base mt-2 text-gray-600 max-w-3xl mx-auto">
            The Aesthetic of a Skin Expert Skincare Consultation Techniques
          </p>
        </motion.div>

        {/* Grid Section */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-x-6 gap-y-7.5 max-w-6xl mx-auto">
          {cards.map((item, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="text-center py-12 px-7.5 rounded-[15px] border border-[#bebebe] hover:border-primary transition-all duration-500 shadow-sm"
            >
              <i className={`${item.icon} text-[50px] text-primary`}></i>
              <h4 className="lg:text-2xl text-xl font-semibold my-3">
                {item.title}
              </h4>
              <div className="lg:text-base text-sm text-gray-700">{item.desc}</div>
            </motion.div>
          ))}

          {/* Location Card Centered */}
          <motion.div
            key="location-card"
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="col-span-full flex justify-center"
          >
            <div className="w-full md:w-1/3 text-center py-8 px-6 rounded-[15px] border border-[#bebebe] hover:border-primary transition-all duration-500 shadow-sm flex flex-col items-center gap-4 bg-white">
              <h4 className="lg:text-2xl text-xl font-semibold mb-2">
                Location & Contact
              </h4>
              <p className="text-gray-700 text-center">
                Chiah, Asaad l Asaad Street, Kanj – 1st floor, بناية النصر, clinic
              </p>
              <p className="text-gray-700 text-center">
                Phone: <strong>76 873 779</strong>
              </p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Chiah,+Asaad+l+Asaad+Street,+Kanj"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-600 text-4xl hover:text-red-700 transition-colors"
                title="Open in Google Maps"
              >
                <i className="ri-google-map-line"></i>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Workshop;
