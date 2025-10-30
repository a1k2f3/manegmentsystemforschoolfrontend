"use client";

import React, { useState } from "react";
import TeacherSidebar from "@/Components/Teacherdas/TeacherSidebar";
import { motion } from "framer-motion";
import { PencilSquareIcon, TrashIcon, PlusIcon } from "@heroicons/react/24/outline";

interface Tutorial {
  id: number;
  title: string;
  category: string;
  instructor: string;
  videoUrl: string;
}

export default function TeacherTutorials() {
  const [tutorials, setTutorials] = useState<Tutorial[]>([
    {
      id: 1,
      title: "React for Beginners",
      category: "Web Development",
      instructor: "Kamran Ali",
      videoUrl: "https://www.youtube.com/embed/Ke90Tje7VS0",
    },
    {
      id: 2,
      title: "Intro to Cyber Security",
      category: "Cyber Security",
      instructor: "Kamran Ali",
      videoUrl: "https://www.youtube.com/embed/9d0GSNlvJ2E",
    },
  ]);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState<Tutorial>({
    id: 0,
    title: "",
    category: "Web Development",
    instructor: "Kamran Ali",
    videoUrl: "",
  });

  const filteredTutorials = tutorials.filter((tut) => {
    const matchesSearch = tut.title
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesFilter = filter === "All" || tut.category === filter;
    return matchesSearch && matchesFilter;
  });
  // Handle Add/Edit form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isEditing) {
      setTutorials((prev) =>
        prev.map((tut) =>
          tut.id === formData.id ? { ...formData } : tut
        )
      );
      setIsEditing(false);
    } else {
      const newTutorial: Tutorial = {
        ...formData,
        id: Date.now(),
      };
      setTutorials((prev) => [...prev, newTutorial]);
    }

    setFormData({
      id: 0,
      title: "",
      category: "Web Development",
      instructor: "Kamran Ali",
      videoUrl: "",
    });
  };

  // Edit a tutorial
  const handleEdit = (tut: Tutorial) => {
    setFormData(tut);
    setIsEditing(true);
  };

  // Delete a tutorial
  const handleDelete = (id: number) => {
    setTutorials((prev) => prev.filter((tut) => tut.id !== id));
  };

  return (
    <div className="flex min-h-screen p-6 gap-6 relative">
      <TeacherSidebar />

      {/* Background */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>

      {/* Main Content */}
      <div className="flex-1 bg-white/70 backdrop-blur-lg rounded-3xl p-8 shadow-md border border-gray-100 relative z-10">
        <h1 className="text-2xl font-bold mb-2">Manage Tutorials</h1>
        <p className="text-gray-500 mb-8">
          Create, edit, and delete tutorial videos for students.
        </p>

        {/* Add/Edit Tutorial Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl p-6 shadow-md mb-10 border"
        >
          <h2 className="text-xl font-semibold mb-4">
            {isEditing ? "Edit Tutorial" : "Add New Tutorial"}
          </h2>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              placeholder="Tutorial Title"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              required
              className="px-4 py-2 rounded-xl border border-gray-200 focus:ring-2 focus:ring-purple-400"
            />

            <select
              value={formData.category}
              onChange={(e) =>
                setFormData({ ...formData, category: e.target.value })
              }
              className="px-4 py-2 rounded-xl border border-gray-200 focus:ring-2 focus:ring-purple-400"
            >
              <option>Web Development</option>
              <option>App Development</option>
              <option>AI & ML</option>
              <option>Cyber Security</option>
            </select>

            <input
              type="text"
              placeholder="YouTube Embed URL"
              value={formData.videoUrl}
              onChange={(e) =>
                setFormData({ ...formData, videoUrl: e.target.value })
              }
              required
              className="px-4 py-2 rounded-xl border border-gray-200 focus:ring-2 focus:ring-purple-400"
            />

            <input
              type="text"
              value={formData.instructor}
              readOnly
              className="px-4 py-2 rounded-xl border border-gray-200 bg-gray-100 cursor-not-allowed"
            />
          </div>

          <button
            type="submit"
            className="flex items-center gap-2 px-5 py-2 bg-purple-500 text-white rounded-xl hover:bg-purple-600 transition"
          >
            <PlusIcon className="w-5 h-5" />
            {isEditing ? "Update Tutorial" : "Add Tutorial"}
          </button>
        </form>

        {/* Search + Filter */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <input
            type="text"
            placeholder="Search tutorials..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="px-4 py-2 rounded-xl border border-gray-200 bg-white/70 focus:ring-2 focus:ring-purple-400 shadow-sm w-full md:w-1/3"
          />

          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="px-4 py-2 rounded-xl border border-gray-200 bg-white/70 focus:ring-2 focus:ring-purple-400 shadow-sm w-full md:w-1/4"
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
              key={tut.id}
              whileHover={{ scale: 1.03 }}
              className="bg-white p-4 rounded-2xl shadow-md border hover:shadow-lg transition relative"
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
              <p className="text-sm text-gray-500 mb-4">
                Instructor: {tut.instructor}
              </p>

              {/* Actions */}
              <div className="flex justify-end gap-3">
                <button
                  onClick={() => handleEdit(tut)}
                  className="p-2 bg-blue-100 rounded-full hover:bg-blue-200"
                >
                  <PencilSquareIcon className="w-5 h-5 text-blue-600" />
                </button>
                <button
                  onClick={() => handleDelete(tut.id)}
                  className="p-2 bg-red-100 rounded-full hover:bg-red-200"
                >
                  <TrashIcon className="w-5 h-5 text-red-600" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
