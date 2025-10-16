"use client";

import React from "react";

interface Column {
  key: string;
  label: string;
}

interface TableWrapperProps {
  columns: Column[];
  data: Record<string, any>[];
  renderCell?: (
    key: string,
    value: any,
    row: Record<string, any>
  ) => React.ReactNode;
}

export default function TableWrapper({
  columns,
  data,
  renderCell,
}: TableWrapperProps) {
  return (
    <div className="overflow-x-auto bg-gray-50 shadow rounded-lg border border-gray-200 p-3">
      <table className="min-w-full text-sm text-left border-collapse">
        <thead className=" text-gray-700 uppercase text-xs bg-white">
          <tr>
            {columns.map((col) => (
              <th key={col.key} className="px-4 py-2 whitespace-nowrap">
                {col.label}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.length > 0 ? (
            data.map((row, idx) => (
              <tr
                key={idx}
                className={`border-t border-gray-200 hover:bg-gray-50 transition-colors duration-150 ${
                  idx % 2 === 0 ? "bg-gray-100" : "bg-gray-200"
                }`}
              >
                {columns.map((col) => (
                  <td
                    key={col.key}
                    className={`px-4 py-1.5 whitespace-nowrap text-gray-800 text-xs`}
                  >
                    {renderCell
                      ? renderCell(col.key, row[col.key], row)
                      : row[col.key]}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={columns.length}
                className="text-center py-6 text-gray-500"
              >
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
