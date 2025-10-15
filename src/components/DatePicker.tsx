"use client";

import React from "react";

interface DatePickerProps {
  label?: string;
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
  error?: string;
}

const DatePicker: React.FC<DatePickerProps> = ({
  label,
  value,
  onChange,
  className = "",
  error,
}) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-xs pl-2 text-gray-500  mb-1">
          {label}
        </label>
      )}
      <input
        type="date"
        value={value}
        onChange={(e) => onChange && onChange(e.target.value)}
        className={`w-full px-3 py-2 border border-gray-300 rounded-xl shadow-sm bg-white text-xs
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200
        ${error ? "border-red-500" : ""} ${className}`}
      />
      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </div>
  );
};

export default DatePicker;
