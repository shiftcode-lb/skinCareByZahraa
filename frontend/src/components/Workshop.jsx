import React from "react";

const Workshop = () => {
  return (
    <section
      id="workshop"
      className="bg-gray-50 py-12 px-6 md:px-20"
    >
      <div className="max-w-5xl mx-auto text-center mb-8">
        <h3 className="border border-[#bebebe] py-2 px-4 rounded-2xl text-xs inline-block font-normal mb-3">
          <i className="ri-sparkling-fill text-primary"></i> Skincare Training
        </h3>
        <h2 className="text-2xl md:text-3xl font-semibold text-black-100 mb-4">
          Intensive Skincare Workshop
        </h2>
        <p className="md:text-base text-gray-600">
          Learn, practice, and master professional skincare techniques in our
          3-day intensive training designed for beginner skin experts.
        </p>
      </div>

      {/* Content Wrapper */}
      <div className="max-w-5xl mx-auto space-y-8 pr-2">
        {/* Workshop Topics */}
        <div className="bg-white shadow-md rounded-2xl p-6 text-left space-y-4">
          <h3 className="text-lg font-semibold text-primary mb-2">
            Workshop Topics
          </h3>

          <div>
            <h4 className="text-base font-semibold text-black-100 mb-1">
              Cosmetic Treatments
            </h4>
            <p className="text-gray-700 text-sm">Facials, Microneedling, Peeling</p>
          </div>

          <div>
            <h4 className="text-base font-semibold text-black-100 mb-1">
              All About Facial
            </h4>
            <p className="text-gray-700 text-sm">
              Protocols, Brands, Deep Cleaning Steps, Hydrafacial Techniques
            </p>
          </div>

          <div>
            <h4 className="text-base font-semibold text-black-100 mb-1">
              Microneedling
            </h4>
            <p className="text-gray-700 text-sm">
              Pre and Post-Care, Meso Brands, Protocols
            </p>
          </div>

          <div>
            <h4 className="text-base font-semibold text-black-100 mb-1">
              Combination Treatments
            </h4>
            <p className="text-gray-700 text-sm">
              Integrated advanced methods for professional results.
            </p>
          </div>
        </div>

        {/* Training Details */}
        <div className="bg-white shadow-md rounded-2xl p-6 text-left space-y-4">
          <h3 className="text-lg font-semibold text-primary mb-2">
            Training Details
          </h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
            <li>3 full days of in-depth explanation and hands-on training</li>
            <li>Practice with 9 live models</li>
            <li>Printed PDF with all workshop notes</li>
            <li>Certificate of Attendance (24 hours of training)</li>
          </ul>

          {/* Location + Map */}
          <div className="space-y-2 text-sm">
            <div className="flex items-start gap-2">
              <i className="ri-map-pin-line text-primary text-base"></i>
              <p className="text-gray-700 leading-snug">
                <strong>Location:</strong> Chiah, Asaad l Asaad Street, Kanj –
                1st floor, بناية النصر, clinic
              </p>
            </div>

            <div className="flex items-center gap-2">
              <i className="ri-phone-line text-primary text-base"></i>
              <p className="text-gray-700">
                <strong>Phone:</strong> 76 873 779
              </p>
            </div>
          </div>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/96176873779"
            className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-green-600 px-6 py-2 text-xs font-medium text-white shadow-md transition-all duration-300 hover:bg-green-700 hover:shadow-lg active:scale-95"
          >
            <i className="ri-whatsapp-line text-base"></i>
            <span>Book via WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Workshop;
