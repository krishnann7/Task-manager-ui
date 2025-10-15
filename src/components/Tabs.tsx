"use client";

import React from "react";

interface Tab {
  id: string;
  label: string;
}

interface TabsProps {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

export default function Tabs({ tabs, activeTab, onTabChange }: TabsProps) {
  return (
    // <div className="flex items-center gap-3 border-b border-gray-200 mb-4 bg-blue-100">
    //   <div className=" ">
    //     {tabs.map((tab) => (
    //       <button
    //         key={tab.id}
    //         onClick={() => onTabChange(tab.id)}
    //         className={`py-3 px-4 text-xs  font-medium font-semibold transition-all duration-200
    //         ${
    //           activeTab === tab.id
    //             ? "border-b-2 border-blue-500 text-blue-600"
    //             : "text-gray-500 hover:text-gray-700"
    //         }`}
    //       >
    //         {tab.label}
    //       </button>
    //     ))}
    //   </div>
    // </div>
    <>
      <div className="py-3 bg-blue-100 flex justify-between">
        <div className=" p-1 bg-white text-sm rounded-full">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`py-2 px-10 text-xs  font-medium font-semibold transition-all duration-200
            ${
              activeTab === tab.id
                ? "bg-blue-600 text-white rounded-full"
                : "text-gray-500 hover:text-gray-700"
            }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
