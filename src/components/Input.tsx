"use client";

import React, { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  className?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  error,
  className = "",
  ...props
}) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-semibold mb-1">{label}</label>
      )}
      <input
        className={`w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none 
        focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200
        ${error ? "border-red-500" : ""} ${className}`}
        {...props}
      />
      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </div>
  );
};

export default Input;
