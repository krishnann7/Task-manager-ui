import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

// Reusable render logic that can be shared across tables
export const defaultRenderCell = (
  key: string,
  value: any,
  row: Record<string, any>
) => {
  // Common: Bold title
  if (key === "title") {
    return (
      <>
        <div>
          <span className="font-bold text-sm text-gray-900">{value} </span>{" "}
          <br />
          <span className=" text-gray-600">{row.description || ""} </span>
        </div>
      </>
    );
  }

  // Common: Colored status badge
  if (key === "status") {
    const statusStyles: Record<string, string> = {
      Open: "text-blue-700 bg-blue-100",
      Closed: "text-green-700 bg-green-100",
      "In Progress": "text-yellow-700 bg-yellow-100",
      Pending: "text-orange-700 bg-orange-100",
    };

    const colorClasses = statusStyles[value] || "text-gray-700 bg-gray-100";

    return (
      <span
        className={`px-3 py-1 text-xs rounded-xl font-medium ${colorClasses}`}
      >
        {value}
      </span>
    );
  }

  // Common: Action buttons
  if (key === "Actions") {
    return (
      <div className="flex gap-2">
        <button className="text-blue-600 hover:text-blue-800">
          <FontAwesomeIcon icon={faEdit} />
        </button>
        <button className="text-red-600 hover:text-red-800">
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    );
  }

  // Default
  return value;
};
