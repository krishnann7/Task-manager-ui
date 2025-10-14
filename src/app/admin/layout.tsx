"use client";

import React, { useState, ReactNode } from "react";
import Sidebar from "@/components/Sidebar";

interface AdminLayoutProps {
  children: ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex h-screen">
      <Sidebar isOpen={isOpen} />

      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div className="flex-1 ml-0 md:ml-64">
        {/* Mobile toggle button */}
        <div className="md:hidden p-2">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 bg-gray-200 rounded"
          >
            {isOpen ? "Close" : "Open"}
          </button>
        </div>

        <div className="p-4">{children}</div>
      </div>
    </div>
  );
}
