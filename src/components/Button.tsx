"use client";

import React, { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  icon?: ReactNode;
  loading?: boolean;
  variant?: "primary" | "secondary" | "danger";
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  label,
  icon,
  loading = false,
  variant = "primary",
  className = "",
  disabled,
  ...props
}) => {
  const baseClasses =
    "flex items-center justify-center w-full py-1.5 rounded-xl text-sm font-bold transition-colors duration-200 cursor-pointer";

  const variantClasses: Record<string, string> = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 shadow-md",
    secondary:
      "bg-white text-gray-800 border border-gray-300 hover:bg-gray-50 shadow-lg shadow-gray-400/40",
    danger: "bg-red-600 text-white hover:bg-red-700 shadow-md",
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${className} ${
        disabled || loading ? "opacity-50 cursor-not-allowed" : ""
      }`}
      disabled={disabled || loading}
      {...props}
    >
      {loading && (
        <span className="h-4 w-4 border-2 border-gray-500 rounded-full animate-spin"></span>
      )}
      {icon && !loading && icon}
      {!loading && label}
    </button>
  );
};

export default Button;
