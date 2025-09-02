import React from "react";
import Title from "./Title";
import appartment from "../assets/images/appartment.png";

const Map = () => {
  return (
    <section className="bg-gray-100">
      <div className="max-w-6xl mx-auto py-6 px-4 sm:px-6 lg:py-8 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center">
          <Title
            title={"Location and Contact"}
            subtitle={"Visit our location! Welcome"}
          />
        </div>

        {/* Map + Info Grid */}
        <div className="mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            
            {/* Google Map */}
            <div className="rounded-lg overflow-hidden h-full">
              <iframe
                title="Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1501.8309530950376!2d35.5118759013247!3d33.866560896667515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151f1772f0a21219%3A0x92f7948b53648eb2!2sKanj%20Clinic!5e0!3m2!1sen!2slb!4v1756735437815!5m2!1sen!2slb"
                className="w-full h-full min-h-[350px]"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>

            {/* Info Card */}
            <div className="h-full">
              <div className="rounded-lg bg-white shadow flex flex-col h-full">
                
                {/* Hours */}
                <div className="px-6 py-3 border-t border-gray-200">
                  <h3 className="text-base font-medium text-gray-900">Hours</h3>
                  <p className="text-sm text-gray-600">Mon - Fri: 9am - 5pm</p>
                  <p className="text-sm text-gray-600">Sat: 10am - 4pm</p>
                  <p className="text-sm text-gray-600">Sunday: Closed</p>
                </div>

                {/* Contact */}
                <div className="px-6 py-3 border-t border-gray-200">
                  <h3 className="text-base font-medium text-gray-900">Contact</h3>
                  <p className="text-sm text-gray-600">
                    Email:{" "}
                    <a
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=atallahzahraa7@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      atallahzahraa7@gmail.com
                    </a>
                  </p>
                  <p className="text-sm text-gray-600">
                    Phone:{" "}
                    <a
                      href="https://wa.me/96176873779"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 hover:underline"
                    >
                      +961 76 873 779
                    </a>
                  </p>
                </div>

                {/* Address */}
                <div className="px-6 py-3 border-t border-gray-200 flex-1">
                  <h3 className="text-base font-medium text-gray-900">
                    Our Address
                  </h3>
                  <p className="text-sm text-gray-600">
                    Chiah, Asaad l Asaad Street, Kanj – 1st floor, بناية النصر,
                    clinic
                  </p>
                </div>

                {/* Image */}
                <div className="border-t border-gray-200">
                  <img
                    src={appartment}
                    alt="Location"
                    className="w-full h-32 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;
