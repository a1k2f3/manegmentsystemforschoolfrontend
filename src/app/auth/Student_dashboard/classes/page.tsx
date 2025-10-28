"use client";

import React, { JSX, useState } from "react";
import Sidebar from "@/Components/Studentdas/Sidebar";
import DashboardCard from "@/Components/Studentdas/DashboardCard";
import { CalendarDaysIcon, MapPinIcon, ClockIcon } from "@heroicons/react/24/outline";

interface ClassItem {
  title: string;
  instructor: string;
  day: string;
  time: string;
  room: string;
}

export default function Classes(): JSX.Element {
  const [search, setSearch] = useState<string>("");
  const [filter, setFilter] = useState<string>("All Days");

  const classesList: ClassItem[] = [
    { title: "Database Systems", instructor: "Dr. Sarah Malik", day: "Monday", time: "9:00 AM - 10:30 AM", room: "Lab 2" },
    { title: "Software Engineering", instructor: "Prof. Ahmed Khan", day: "Tuesday", time: "11:00 AM - 12:30 PM", room: "Room 204" },
    { title: "Operating Systems", instructor: "Dr. Asad Iqbal", day: "Wednesday", time: "10:00 AM - 11:30 AM", room: "Room 105" },
    { title: "Artificial Intelligence", instructor: "Dr. Hira Fatima", day: "Thursday", time: "9:00 AM - 10:30 AM", room: "Lab 5" },
    { title: "Computer Networks", instructor: "Mr. Bilal Ahmed", day: "Friday", time: "1:00 PM - 2:30 PM", room: "Lab 3" },
    { title: "Calculus III", instructor: "Dr. Nadia Rehman", day: "Monday", time: "2:00 PM - 3:30 PM", room: "Room 110" },
  ];

  // Filter + Search logic
  const filteredClasses = classesList.filter((cls) => {
    const matchesSearch = cls.title.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === "All Days" || cls.day === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="flex min-h-screen p-6 gap-6 relative">
      {/* Sidebar */}
      <Sidebar />

      {/* Animated Background */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-18 right-10 w-64 h-64 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>

      {/* Main Content */}
      <div className="flex-1 bg-white/70 backdrop-blur-lg rounded-3xl p-8 shadow-md border border-gray-100 relative z-10">
        {/* Header */}
        <h1 className="text-2xl font-bold mb-2">My Classes</h1>
        <p className="text-gray-500 mb-8">
          Check your class schedule, instructors, and rooms.
        </p>

        {/* Student Info */}
        <div className="flex items-center gap-4 mb-8">
          <img
            src="https://i.pravatar.cc/100"
            alt="Profile"
            className="w-16 h-16 rounded-full"
          />
          <div>
            <h2 className="text-xl font-semibold">Aisha Rahman</h2>
            <p className="text-gray-500 text-sm">ERA1112256</p>
          </div>
        </div>

        {/* Search + Filter */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search classes..."
            className="px-4 py-2 rounded-xl border border-gray-200 bg-white/70 focus:outline-none focus:ring-2 focus:ring-purple-400 shadow-sm w-full md:w-1/3"
          />

          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="px-4 py-2 rounded-xl border border-gray-200 bg-white/70 focus:outline-none focus:ring-2 focus:ring-purple-400 shadow-sm w-full md:w-1/4"
          >
            <option>All Days</option>
            <option>Monday</option>
            <option>Tuesday</option>
            <option>Wednesday</option>
            <option>Thursday</option>
            <option>Friday</option>
          </select>
        </div>

        {/* Classes Grid */}
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
          {filteredClasses.map((cls) => (
            <DashboardCard key={cls.title} title={cls.title}>
              <p className="text-gray-600 mb-2">
                Instructor: {cls.instructor}
              </p>
              <div className="flex flex-col gap-2 text-gray-600 text-sm">
                <div className="flex items-center gap-2">
                  <CalendarDaysIcon className="w-5 h-5 text-purple-500" />
                  <span>{cls.day}</span>
                </div>
                <div className="flex items-center gap-2">
                  <ClockIcon className="w-5 h-5 text-blue-500" />
                  <span>{cls.time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPinIcon className="w-5 h-5 text-green-500" />
                  <span>{cls.room}</span>
                </div>
              </div>
            </DashboardCard>
          ))}
        </div>
      </div>
    </div>
  );
}
