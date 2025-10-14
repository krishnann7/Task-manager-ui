"use client";

import React, { useState, ReactNode } from "react";
import Sidebar from "@/components/Sidebar";
import { FaBars, FaTimes } from "react-icons/fa";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar isOpen={isOpen} />

      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Main content */}
      <div className="flex-1 ml-0 md:ml-64">
        {/* Mobile toggle button */}
        <div className="md:hidden p-2">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 bg-gray-200 rounded"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Page content */}
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
