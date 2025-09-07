import React, { useState } from "react";

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div className="tabs">
      {/* Tab Headers */}
      <div className="flex gap-3 flex-wrap justify-center text-sm sm:text-base mt-10">
  {tabs.map((tab) => (
    <button
      key={tab.id}
      onClick={() => setActiveTab(tab.id)}
      className={`text-center my-2 inline-block w-36 sm:w-44 rounded-full px-4 py-2 font-semibold transition-all duration-200 text-primary cursor-pointer  border border-borderColor
        ${
          activeTab === tab.id
            ? "bg-[var(--color-coprimary)] text-primary"
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

      {/* Tab Content */}
      <div className="mt-6">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={activeTab === tab.id ? "block" : "hidden"}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
