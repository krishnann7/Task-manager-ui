"use client";

import React from "react";
import Button from "./Button";
import Checkbox from "./Checkbox";
import QuickAccess from "./sidebar-components/QuickAccess";
import Input from "./Input";
import Dropdown from "./Dropdown";
import SidebarFilters from "./sidebar-components/SidebarFilters";
import SyncComponent from "./sidebar-components/SyncComponent";

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  const options = [
    { label: "Option 1", value: "1" },
    { label: "Option 2", value: "2" },
    { label: "Option 3", value: "3" },
  ];

  return (
    <div
      className={`ml-2.5 rounded-xl
        fixed top-0 left-0 h-[98%] w-64
        bg-white border border-gray-200 shadow-lg
        transform ${isOpen ? "translate-x-0" : "-translate-x-full"}
        transition-transform duration-300
        md:translate-x-0 md:static md:block 
         overflow-y-auto sidebar-scroll
      `}
    >
      <QuickAccess />
      <SidebarFilters />
      <SyncComponent />
    </div>
  );
};

export default Sidebar;
