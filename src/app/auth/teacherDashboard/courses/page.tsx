"use client";

import React, { JSX, useState } from "react";
import TeacherSidebar from "@/Components/Teacherdas/Sidebar";
import DashboardCard from "@/Components/Studentdas/DashboardCard";
import ProgressBar from "@/Components/Studentdas/ProgressBar";

interface Course {
  title: string;
  instructor: string;
  progress: number;
  status: "Ongoing" | "Completed" | "Upcoming";
}

export default function Courses(): JSX.Element {
  const [search, setSearch] = useState<string>("");
  const [filter, setFilter] = useState<string>("All Courses");

  const courses: Course[] = [
    {
      title: "Database Systems",
      instructor: "Dr. Sarah Malik",
      progress: 90,
      status: "Ongoing",
    },
    {
      title: "Software Engineering",
      instructor: "Prof. Ahmed Khan",
      progress: 80,
      status: "Ongoing",
    },
    {
      title: "Operating Systems",
      instructor: "Dr. Asad Iqbal",
      progress: 100,
      status: "Completed",
    },
    {
      title: "Artificial Intelligence",
      instructor: "Dr. Hira Fatima",
      progress: 60,
      status: "Ongoing",
    },
    {
      title: "Computer Networks",
      instructor: "Mr. Bilal Ahmed",
      progress: 40,
      status: "Upcoming",
    },
    {
      title: "Calculus III",
      instructor: "Dr. Nadia Rehman",
      progress: 85,
      status: "Ongoing",
    },
  ];

  // Filter + Search logic
  const filteredCourses = courses.filter((course) => {
    const matchesSearch = course.title
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesFilter =
      filter === "All Courses" || course.status === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="flex min-h-screen p-6 gap-6 relative">
      {/* Sidebar */}
      <TeacherSidebar />
      {/* Soft Animated Background */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-18 right-10 w-64 h-64 bg-green-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>

      {/* Main Content */}
      <div className="flex-1 bg-white/70 backdrop-blur-lg rounded-3xl p-8 shadow-md border border-gray-100 relative z-10">
        {/* Header */}
        <h1 className="text-2xl font-bold mb-2">My Courses</h1>
        <p className="text-gray-500 mb-8">
          View your enrolled and completed courses.
        </p>

        {/* Profile Section */}
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

        {/* Search + Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search courses..."
            className="px-4 py-2 rounded-xl border border-gray-200 bg-white/70 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm w-full md:w-1/3"
          />

          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="px-4 py-2 rounded-xl border border-gray-200 bg-white/70 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm w-full md:w-1/4"
          >
            <option>All Courses</option>
            <option>Ongoing</option>
            <option>Completed</option>
            <option>Upcoming</option>
          </select>
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
          {filteredCourses.map((course) => (
            <DashboardCard key={course.title} title={course.title}>
              <p className="text-gray-600 mb-2">
                Instructor: {course.instructor}
              </p>
              <ProgressBar percent={course.progress}/>

              <div className="flex justify-between items-center mt-4">
                {/* Status Badge */}
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    course.status === "Ongoing"
                      ? "bg-green-100 text-green-700"
                      : course.status === "Completed"
                      ? "bg-blue-100 text-blue-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {course.status}
                </span>

                {/* View Button */}
                <button className="px-4 py-1.5 bg-blue-100 text-blue-700 rounded-xl hover:bg-blue-200 transition text-sm">
                  View Details
                </button>
              </div>
            </DashboardCard>
          ))}
        </div>
      </div>
    </div>
  );
}
