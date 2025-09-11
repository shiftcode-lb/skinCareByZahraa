import React from "react";
import { CheckCircle } from "lucide-react";

const OnlineConsContent = () => {
  const sections = [
    {
      title: "Session Details",
      items: [
        "Session lasts 30–45 minutes",
        "Conducted through Zoom meeting",
        "Customized skincare routine based on skin type & condition",
        "Discussion about skin concerns & general lifestyle notes",
      ],
    },
    {
      title: "Notes Before The Session",
      items: [
        "Send clear full-face pictures",
        "Send detailed pictures of cheeks, forehead, and chin",
        "Take pictures during the day with good lighting",
        "Send pictures of all your skincare products",
        "Products will be reviewed and discussed during the session",
      ],
      withIcons: true,
    },
  ];

  return (
    <section className="mx-auto px-3 sm:px-4 md:px-11 lg:px-13 xl:px-12 2xl:px-16 max-w-screen-xl py-10 text-primary">
      {/* Cards */}
      <div className="grid md:grid-cols-2 gap-8">
        {sections.map((section, i) => (
          <div
            key={i}
            className="p-6 bg-white rounded-2xl shadow-lg border border-borderColor hover:shadow-2xl transition-shadow duration-300"
          >
            <h3 className="text-lg md:text-xl font-semibold mb-4 pb-2 border-b-1 border-borderColor">{section.title}</h3>
            <ul className="space-y-2 text-gray-700 max-w-[95%] sm:max-w-[90%] md:max-w-full">
              {section.items.map((item, idx) => (
                <li
                  key={idx}
                  className={`flex items-start gap-2 ${
                    section.withIcons ? "pl-1" : ""
                  }`}
                >
                  {section.withIcons && (
                    <CheckCircle className="w-3 h-3 sm:w-5 sm:h-5 text-primary sm:mt-0.5 mt-1.5 flex-shrink-0" />
                  )}
                  <span className="text-sm sm:text-base leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Price Note */}
      <div className="mt-12 text-center">
        <p className="text-lg sm:text-xl font-semibold text-primary">
          Online Consultation – Starting at{" "}
          <span className="text-secondary">$40</span>
        </p>
        <p className="mt-2 text-gray-700 italic text-sm sm:text-base">
          * Follow-up sessions available for 20$.
        </p>
      </div>
    </section>
  );
};

export default OnlineConsContent;
