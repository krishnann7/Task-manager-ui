"use client";

import React from "react";

interface DropdownOption {
  label: string;
  value: string | number;
}

interface DropdownProps {
  label?: string;
  options: DropdownOption[];
  value?: string | number;
  onChange?: (value: string | number) => void;
  className?: string;
  error?: string;
}

const Dropdown: React.FC<DropdownProps> = ({
  label,
  options,
  value,
  onChange,
  className = "",
  error,
}) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-semibold mb-1">{label}</label>
      )}
      <select
        className={`text-xs w-full px-3 py-2 border border-gray-300 rounded-xl shadow-sm bg-white
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200
        ${error ? "border-red-500" : ""} ${className}`}
        value={value}
        onChange={(e) => onChange && onChange(e.target.value)}
      >
        <option value="">Select an option</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </div>
  );
};

export default Dropdown;
