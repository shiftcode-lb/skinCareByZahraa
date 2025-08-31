import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Workshop = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { margin: "-100px", amount: 0.2 }); 
  // margin = trigger offset, amount = how much of section must be visible

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <motion.section
      id="workshop"
      ref={sectionRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: isInView ? 1 : 0 }} // fades in/out depending on scroll
      transition={{ duration: 0.8 }}
      className="lg:pt-25 pt-15 bg-gray-50"
    >
      <div className="container">
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
            Learn, practice, and master professional skincare techniques in our
            3-day intensive training designed for beginner skin experts.
          </p>
        </motion.div>

        {/* Grid Section */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-x-6 gap-y-7.5 max-w-6xl mx-auto">
          {[
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
              desc: "3 full days of hands-on training with 9 live models, PDF notes, and certificate of attendance (24 hours).",
            },
            {
              icon: "ri-map-pin-2-fill",
              title: "Location & Contact",
              desc: (
                <>
                  <p className="mb-2">
                    Chiah, Asaad l Asaad Street, Kanj – 1st floor, بناية النصر,
                    clinic
                  </p>
                  <p className="mb-4">
                    Phone: <strong>76 873 779</strong>
                  </p>
                  <a
                    href="https://wa.me/96176873779"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-600 px-6 py-2 text-sm font-medium text-white shadow-md transition-all duration-300 hover:bg-green-700 hover:shadow-lg active:scale-95"
                  >
                    <i className="ri-whatsapp-line text-base"></i>
                    <span>Book via WhatsApp</span>
                  </a>
                </>
              ),
            },
          ].map((item, i) => (
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
              <div className="lg:text-base text-sm text-gray-700">
                {item.desc}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Workshop;
