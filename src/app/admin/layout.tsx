"use client";

import React, { ReactNode } from "react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

interface AdminLayoutProps {
  children: ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <div className="h-screen bg-gray-100 ">
      {/* Sidebar */}
      <div className="w-64 fixed h-full">
        <Sidebar isOpen={true} />
      </div>

      {/* Main content */}
      <main className="ml-64 h-full flex flex-col px-3">
        {/* Header */}
        <Header title="Dashboard" />

        {/* Page content */}
        <div className="flex-1 p-4 overflow-y-auto">{children}</div>
      </main>
    </div>
  );
}
