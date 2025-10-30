"use client";
import TeacherSidebar from "@/Components/Teacherdas/TeacherSidebar";
import { useState } from "react";

export default function Attendance() {
  const [students, setStudents] = useState([
    { id: "S001", name: "Jane Doe", status: "Present", time: "8:55 AM" },
    { id: "S002", name: "Raj Patel", status: "Absent", time: "8:55 AM" },
    { id: "S003", name: "Aisha Chen", status: "Absent", time: "9:00 AM" },
    { id: "S005", name: "Sofia Rodriguez", status: "Present", time: "8:57 AM" },
  ]);

  const updateStatus = (id, newStatus) => {
    setStudents((prev) =>
      prev.map((s) =>
        s.id === id ? { ...s, status: newStatus } : s
      )
    );
  };

  const handleSubmit = () => {
    console.log("Attendance Submitted ✅", students);
    alert("Attendance Submitted Successfully!");
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <TeacherSidebar />

      <div className="flex-1 p-6 lg:p-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-extrabold bg-clip-text text-transparent bg-blue-600 animate-pulse">
              Attendance
            </h1>
            <p className="text-gray-600 mt-1">Daily Attendance Record</p>
          </div>
          <div className="flex gap-3">
            <input
              type="date"
              className="px-4 py-2.5 border border-gray-200 rounded-xl bg-white/70 backdrop-blur-sm shadow-lg focus:ring-4 focus:ring-blue-300 focus:outline-none transition-all duration-300"
            />
            <select className="px-4 py-2.5 border border-gray-200 rounded-xl bg-white/70 backdrop-blur-sm shadow-lg focus:ring-4 focus:ring-purple-300 focus:outline-none transition-all duration-300">
              <option>CS 101 - Intro to Programming</option>
            </select>
          </div>
        </div>

        {/* Glow Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
          <GlowCard title="Total Enrolled" value="45" color="from-blue-500 to-cyan-500" />
          <GlowCard title="Absent" value="38" color="from-orange-500 to-red-500" />
          <GlowCard title="Late" value="5" color="from-yellow-500 to-amber-500" />
        </div>

        {/* Table */}
        <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden border border-white/20">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-blue-500 text-white">
                  <th className="p-4 text-left font-semibold">Name</th>
                  <th className="p-4 text-left font-semibold">ID</th>
                  <th className="p-4 text-left font-semibold">Status</th>
                  <th className="p-4 text-left font-semibold">Check-in Time</th>
                </tr>
              </thead>
              <tbody>
                {students.map((s, index) => (
                  <tr
                    key={s.id}
                    className={`border-b border-gray-100 hover:bg-gradient-to-r hover:from-blue-50/50 hover:to-purple-50/50 transition-all duration-300 ${
                      index % 2 === 0 ? "bg-white" : "bg-gray-50/50"
                    }`}
                  >
                    <td className="p-4 font-medium text-gray-800">{s.name}</td>
                    <td className="p-4 text-gray-600">{s.id}</td>

                    <td className="p-4">
                      <select
                        value={s.status}
                        onChange={(e) => updateStatus(s.id, e.target.value)}
                        className={`px-4 py-1.5 rounded-full text-sm font-medium cursor-pointer transition-all duration-300 shadow-md hover:shadow-xl transform hover:scale-105 ${
                          s.status === "Present"
                            ? "bg-gradient-to-r from-green-400 to-emerald-500 text-black"
                            : s.status === "Absent"
                            ? "bg-gradient-to-r from-red-400 to-rose-500 text-black"
                            : "bg-gradient-to-r from-yellow-400 to-amber-500 text-black"
                        }`}
                      >
                        <option value="Present">Present</option>
                        <option value="Absent">Absent</option>
                        <option value="Late">Late</option>
                      </select>
                    </td>

                    <td className="p-4 text-gray-600">{s.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end mt-8">
          <button
            onClick={handleSubmit}
            className="group relative overflow-hidden px-8 py-3 bg-blue-500 text-white font-semibold rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            <span className="relative z-10">Submit Attendance</span>
            <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          </button>
        </div>
      </div>
    </div>
  );
}

// Glow Card Component
function GlowCard({ title, value, color }) {
  return (
    <div
      className={`relative p-6 rounded-2xl bg-gradient-to-br ${color} text-white shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden`}
    >
      <div className="absolute inset-0 bg-white/20 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <h3 className="text-sm font-medium opacity-90">{title}</h3>
        <p className="text-3xl font-bold mt-2 drop-shadow-lg">{value}</p>
      </div>
      <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white/10 rounded-full blur-3xl"></div>
    </div>
  );
}