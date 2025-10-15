"use client";

import Image from "next/image";
import React from "react";

interface HeaderProps {
  title?: string;
  rightContent?: React.ReactNode;
}

export default function Header({ title, rightContent }: HeaderProps) {
  return (
    <header className="w-full h-16 px-4 flex items-center    ">
      {/* <h1 className="text-lg font-semibold">{title}</h1> */}
      <div className="flex items-center ">
        <Image src="/logo.png" alt="Logo" width={120} height={40} />
      </div>
      <div className="flex flex-col ml-2">
        <div className="font-semibold">
          Bizz Express - Tech Initiative Tracker
        </div>
        <div className="text-xs text-gray-400">Start + DUration</div>
      </div>
    </header>
  );
}
