"use client";

import TableWrapper from "@/components/TableWrapper";
import Tabs from "@/components/Tabs";
import React, { useState } from "react";

export default function InitiativesPage() {
  const tabs = [
    { id: "table", label: "Table" },
    { id: "kanban", label: "Kanban" },
    { id: "timeline", label: "Timeline" },
  ];

  const [activeTab, setActiveTab] = useState("table");

  // Example columns for the table
  const columns = [
    { key: "id", label: "#" },
    { key: "title", label: "Title" },
    { key: "status", label: "Status" },
    { key: "assigned", label: "Assigned" },
    { key: "start", label: "Start" },
    { key: "due", label: "Due" },
    { key: "closed", label: "Closed" },
    { key: "priority", label: "Priority" },
    { key: "link", label: "link" },
    { key: "Tags", label: "Tags" },
    { key: "Actions", label: "Actions" },
  ];

  // Example data for each tab
  const tableData = [
    {
      id: 1,
      title: "Unified Client Portal",
      status: "Open",
      assigned: "Darsh",
      start: "24-09-2025",
      due: "02-09-2026",
      priority: "High",
    },
    {
      id: 2,
      title: "Practice Management",
      status: "Open",
      assigned: "Niraj",
      start: "24-10-2025",
      due: "02-09-2026",
      priority: "High",
    },
    {
      id: 3,
      title: "Interactive Tools/ Calculators (Package + Gate)",
      status: "Open",
      assigned: "Unassigned",
      start: "24-10-2025",
      due: "02-09-2026",
      priority: "High",
      link: "open",
      tags: 0,
    },
    {
      id: 4,
      title: "Lead Magnets & Email Nurturing",
      status: "Open",
      assigned: "Unassigned",
      start: "24-10-2025",
      due: "02-09-2026",
      priority: "High",
      link: "open",
      tags: 0,
    },
    {
      id: 5,
      title: "Online Payment & E-Sign",
      status: "Open",
      assigned: "Unassigned",
      start: "24-10-2025",
      due: "02-09-2026",
      priority: "High",
      link: "open",
      tags: 0,
    },
    {
      id: 6,
      title: "Lead Magnets & Email Nurturing",
      status: "Open",
      assigned: "Unassigned",
      start: "24-10-2025",
      due: "02-09-2026",
      priority: "High",
      link: "open",
      tags: 0,
    },
    {
      id: 7,
      title: "CA Certification for BizzXperts",
      status: "Open",
      assigned: "Unassigned",
      start: "24-10-2025",
      due: "02-09-2026",
      priority: "High",
      link: "open",
      tags: 0,
    },
    {
      id: 8,
      title: "Client Onboarding Automation",
      status: "Open",
      assigned: "Unassigned",
      start: "24-10-2025",
      due: "02-09-2026",
      priority: "High",
      link: "open",
      tags: 0,
    },
    {
      id: 9,
      title: "Client Onboarding Automation",
      status: "Open",
      assigned: "Unassigned",
      start: "24-10-2025",
      due: "02-09-2026",
      priority: "High",
      link: "open",
      tags: 0,
    },
    {
      id: 10,
      title: "Client Onboarding Automation",
      status: "Open",
      assigned: "Unassigned",
      start: "24-10-2025",
      due: "02-09-2026",
      priority: "High",
      link: "open",
      tags: 0,
    },
    {
      id: 11,
      title: "Client Onboarding Automation",
      status: "Open",
      assigned: "Unassigned",
      start: "24-10-2025",
      due: "02-09-2026",
      priority: "High",
      link: "open",
      tags: 0,
    },
  ];

  const kanbanData = [
    {
      id: 1,
      title: "Website UX & Conversion",
      status: "In Progress",
      assigned: "Niraj",
      start: "24-11-2025",
      due: "02-09-2026",
      priority: "Medium",
    },
  ];

  const timelineData = [
    {
      id: 1,
      title: "Content Marketing",
      status: "Open",
      assigned: "Unassigned",
      start: "24-12-2025",
      due: "02-09-2026",
      priority: "Medium",
    },
  ];

  const getActiveData = () => {
    switch (activeTab) {
      case "kanban":
        return kanbanData;
      case "timeline":
        return timelineData;
      default:
        return tableData;
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <Tabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />

      <div className="flex-1">
        <TableWrapper columns={columns} data={getActiveData()} />
      </div>
    </div>
  );
}
