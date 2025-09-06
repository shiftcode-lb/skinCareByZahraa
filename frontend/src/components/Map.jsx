import React from "react";
import Title from "./Title";
import appartment from "../assets/images/appartment.png";
import RoundTitle from "./RoundTitle";

const Map = () => {
  return (
      <div className="px-3 sm:px-4 md:px-11 lg:px-12 xl:px-12 2xl:px-16 my-10 max-w-screen-xl mx-auto">
          <RoundTitle 
          title="Location"
          />
          <Title
            title={"Location and Contact"}
            subtitle={"Visit our location! Welcome"}
          />
          <div className="flex flex-col md:flex-row gap-10 w-full mt-10">
            {/* Info Card */}
            <div className="h-full md:w-1/2 w-full">
              <div className="rounded-lg bg-primary shadow flex flex-col h-full">
                
                {/* Hours */}
                <div className="px-6 py-3">
                  <h3 className="text-lg text-coprimary font-bold">Hours</h3>
                  <p className="text-sm text-background">Mon - Fri: 9am - 5pm</p>
                  <p className="text-sm text-background">Sat: 10am - 4pm</p>
                  <p className="text-sm text-background">Sunday: Closed</p>
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
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
            {/* Google Map */}
            <div className="rounded-lg overflow-hidden md:w-1/2 w-full">
              <iframe
                title="Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1501.8309530950376!2d35.5118759013247!3d33.866560896667515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151f1772f0a21219%3A0x92f7948b53648eb2!2sKanj%20Clinic!5e0!3m2!1sen!2slb!4v1756735437815!5m2!1sen!2slb"
                className="w-full h-full min-h-[350px]"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
  );
};

export default Map;
