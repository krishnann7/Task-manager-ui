"use client";

import React from "react";
import Button from "./Button";
import Checkbox from "./Checkbox";
import QuickAccess from "./sidebar-components/QuickAccess";
import Input from "./Input";
import Dropdown from "./Dropdown";

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
      `}
    >
      {/* <div className="p-2.5">
        <div className="font-bold text-sm">Quick Access</div>
        <div className="pt-2.5">
          <Button label="Add New Initiative" />
        </div>
        <div className="pt-2.5">
          <Button label="Team Update Page" variant="secondary" />
        </div>
        <div className="pt-2.5">
          <Checkbox label="Light / Dark" variant="secondary" />
        </div>
        <div className="mt-2.5 border-b-1 border-dashed border-gray-300"></div>
      </div> */}
      <QuickAccess />
      <div className="p-2.5">
        <Input placeholder="Search (title, tags, description)" />
        <Dropdown options={options} />
        <Dropdown options={options} />
      </div>
    </div>
  );
};

export default Sidebar;
