import React from "react";
import { CheckCircle } from "lucide-react";

const WorkshopContent = () => {
  const sections = [
    {
      title: "Workshop Topics",
      items: [
        "The Aesthetics of a Skin Expert",
        "Skincare Consultation Techniques",
      ],
    },
    {
      title: "Cosmetic Treatments",
      items: ["Facials", "Microneedling", "Peeling"],
    },
    {
      title: "All About Facials",
      items: [
        "Protocols",
        "Brands",
        "Deep Cleaning Steps",
        "Hydrafacial Techniques",
      ],
    },
    {
      title: "Combination Treatments",
      items: [
        "Learn how to combine treatments for enhanced results tailored to each client.",
      ],
    },
    {
      title: "Microneedling",
      items: ["Pre and Post-Care", "Meso Brands", "Protocols"],
    },
    {
      title: "Workshop Includes",
      items: [
        "In-depth explanation",
        "Hands-on training",
        "Practice with live models",
        "Printed PDF with all notes",
        "Certificate of Attendance",
      ],
      withIcons: true,
    },
  ];

  return (
    <section className="px-6 md:px-12 lg:px-24 py-12 text-primary">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold">
          Intensive Training for Beginner Skin Experts
        </h2>
        <p className="mt-2 text-lg text-gray-700">
          One full-day private session (10 AM – 6 PM) with live model practice
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-2 gap-8">
        {sections.map((section, i) => (
          <div
            key={i}
            className="p-6 bg-white rounded-2xl shadow-lg border-2 border-borderColor hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-xl font-semibold pb-2 mb-4 border-b-1 border-borderColor">{section.title}</h3>
            <ul className="space-y-2 text-gray-700">
              {section.items.map((item, idx) => (
                <li
                  key={idx}
                  className={`flex items-start gap-2 ${
                    section.withIcons ? "pl-1" : ""
                  }`}
                >
                  {section.withIcons && (
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                  )}
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Price + Note */}
      <div className="mt-12 text-center">
        <p className="text-xl font-semibold text-primary">
          Training Cost: <span className="text-secondary">$250</span>
        </p>
        <p className="mt-2 text-gray-700 italic">
          * This training is for beginners, but you should have a basic
          foundation in skincare.
        </p>
      </div>
    </section>
  );
};

export default WorkshopContent;
