"use client";

import React from "react";

interface Column {
  key: string;
  label: string;
}

interface TableWrapperProps {
  columns: Column[];
  data: Record<string, any>[];
}

export default function TableWrapper({ columns, data }: TableWrapperProps) {
  return (
    <div className="overflow-x-auto bg-white shadow rounded-lg border-1 border-gray-200 p-3">
      <table className="min-w-full text-sm text-left border-collapse">
        <thead className="bg-gray-100 text-gray-700 uppercase text-xs">
          <tr>
            {columns.map((col) => (
              <th key={col.key} className="px-4 py-1 text-xs whitespace-nowrap">
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
                className="border-t border-gray-200  hover:bg-gray-50 transition-colors duration-150"
              >
                {columns.map((col) => (
                  <td
                    key={col.key}
                    className="px-4 py-3 whitespace-nowrap text-gray-800 text-xs"
                  >
                    {row[col.key]}
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
