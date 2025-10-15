"use client";

import React, { InputHTMLAttributes } from "react";

interface ButtonStyleCheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  label: string;
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  variant?: "primary" | "secondary" | "danger";
  disabled?: boolean;
  className?: string;
}

const ButtonStyleCheckbox: React.FC<ButtonStyleCheckboxProps> = ({
  label,
  checked,
  onCheckedChange,
  variant = "primary",
  disabled = false,
  className = "",
  ...props
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled) return;
    onCheckedChange?.(e.target.checked);
  };

  const baseClasses =
    "flex items-center justify-center w-full py-1.5 rounded-xl text-sm  transition-colors duration-200 cursor-pointer select-none";

  const variantClasses: Record<string, string> = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary:
      "bg-white text-gray-500 border border-gray-300 hover:bg-gray-50  ",
    danger: "bg-red-600 text-white hover:bg-red-700",
  };

  return (
    <label
      className={`${baseClasses} ${variantClasses[variant]} ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      } ${className}`}
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={handleChange}
        disabled={disabled}
        className="hidden"
        {...props}
      />
      <span className="flex items-center gap-2">
        <span
          className={`w-4 h-4 border-2 rounded-sm flex-shrink-0 ${
            checked ? "bg-blue-600 border-blue-600" : "bg-white border-gray-300"
          }`}
        />
        {label}
      </span>
    </label>
  );
};

export default ButtonStyleCheckbox;
