import React, { useState } from "react";

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div className="tabs">
      <div className="flex gap-3 flex-wrap justify-center text-sm sm:text-base mt-10">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`text-center my-2 inline-block w-36 sm:w-44 rounded-full px-4 py-2 font-semibold transition-all duration-300 text-primary cursor-pointer border border-borderColor
              ${
                activeTab === tab.id
                  ? "bg-[var(--color-coprimary)] text-primary shadow-sm"
                  : "bg-background bg-opacity-10 text-[var(--color-coprimary)] hover:bg-opacity-95"
              }`}
          >
            {tab.label}
            {tab.badge && (
              <span className="ml-2 inline-block rounded-full bg-white bg-opacity-30 px-2 py-1 text-[10px] font-medium border border-borderColor">
                {tab.badge}
              </span>
            )}
          </button>
        ))}
      </div>

      <div className="mt-6 relative">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <div
              key={tab.id}
              className={`transition-all duration-500 ease-in-out ${
                isActive
                  ? "opacity-100 translate-y-0 scale-100 relative pointer-events-auto z-10"
                  : "opacity-0 translate-y-4 scale-95 absolute inset-0 pointer-events-none z-0"
              }`}
            >
              {tab.content}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Tabs;