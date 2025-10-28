"use client";

import React, { useState } from "react";
import Sidebar from "@/Components/Studentdas/Sidebar";
import { motion } from "framer-motion";

interface Tutorial {
  title: string;
  category: string;
  instructor: string;
  videoUrl: string;
}

export default function Tutorials() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const tutorials: Tutorial[] = [
    {
      title: "React for Beginners",
      category: "Web Development",
      instructor: "Kamran Ali",
      videoUrl: "https://www.youtube.com/embed/Ke90Tje7VS0",
    },
    {
      title: "Node.js Crash Course",
      category: "Web Development",
      instructor: "Ahmad Khan",
      videoUrl: "https://www.youtube.com/embed/fBNz5xF-Kx4",
    },
    {
      title: "Android Development with Kotlin",
      category: "App Development",
      instructor: "Sarah Malik",
      videoUrl: "https://www.youtube.com/embed/F9UC9DY-vIU",
    },
    {
      title: "Introduction to Machine Learning",
      category: "AI & ML",
      instructor: "Bilal Iqbal",
      videoUrl: "https://www.youtube.com/embed/GwIo3gDZCVQ",
    },
    {
      title: "Cyber Security Basics",
      category: "Cyber Security",
      instructor: "Nadia Rehman",
      videoUrl: "https://www.youtube.com/embed/9d0GSNlvJ2E",
    },
  ];

  const filteredTutorials = tutorials.filter((tut) => {
    const matchesSearch = tut.title
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesFilter = filter === "All" || tut.category === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="flex min-h-screen p-6 gap-6 relative">
      <Sidebar />

      {/* Soft Animated Background */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>

      {/* Main Content */}
      <div className="flex-1 bg-white/70 backdrop-blur-lg rounded-3xl p-8 shadow-md border border-gray-100 relative z-10">
        <h1 className="text-2xl font-bold mb-2">Tutorials</h1>
        <p className="text-gray-500 mb-8">
          Learn from high-quality tutorials across multiple fields.
        </p>

        {/* Search + Filter */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <input
            type="text"
            placeholder="Search tutorials..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="px-4 py-2 rounded-xl border border-gray-200 bg-white/70 focus:outline-none focus:ring-2 focus:ring-indigo-400 shadow-sm w-full md:w-1/3"
          />

          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="px-4 py-2 rounded-xl border border-gray-200 bg-white/70 focus:outline-none focus:ring-2 focus:ring-indigo-400 shadow-sm w-full md:w-1/4"
          >
            <option>All</option>
            <option>Web Development</option>
            <option>App Development</option>
            <option>AI & ML</option>
            <option>Cyber Security</option>
          </select>
        </div>

        {/* Tutorials Grid */}
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
          {filteredTutorials.map((tut) => (
            <motion.div
              key={tut.title}
              whileHover={{ scale: 1.03 }}
              className="bg-white p-4 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition"
            >
              <iframe
                className="w-full h-40 rounded-xl mb-3"
                src={tut.videoUrl}
                title={tut.title}
                allowFullScreen
              ></iframe>

              <h3 className="font-semibold text-lg mb-1">{tut.title}</h3>
              <p className="text-sm text-gray-500 mb-2">
                Category: {tut.category}
              </p>
              <p className="text-sm text-gray-500">Instructor: {tut.instructor}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
