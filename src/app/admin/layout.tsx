"use client";

import React, { useState, ReactNode } from "react";
import Sidebar from "@/components/Sidebar";

interface AdminLayoutProps {
  children: ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar: always visible on md+ screens, toggle on mobile */}
      <div
        className={`fixed md:static top-0 left-0 h-full z-40 transition-transform duration-300 
        ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        <Sidebar isOpen={true} />
      </div>

      {/* Overlay only visible when sidebar is open on mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-40 md:hidden z-30"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Main content area */}
      <div className="flex-1 flex flex-col md:ml-64 transition-all duration-300">
        {/* Mobile toggle button */}
        <div className="md:hidden p-2">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 bg-gray-200 rounded font-medium shadow-sm"
          >
            {isOpen ? "Close" : "Menu"}
          </button>
        </div>

        <div className="flex-1 p-4 overflow-y-auto">{children}</div>
      </div>
    </div>
  );
}
