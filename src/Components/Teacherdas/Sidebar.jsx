"use client";
import { useState } from "react";
import { useRouter, usePathname } from "next/navigation"; // ✅ for navigation + active detection
import {
  HomeIcon,
  UserIcon,
  BookOpenIcon,
  ClipboardIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";

const menuItems = [
  { title: "Dashboard", icon: HomeIcon, path: "/auth/teacherDashboard" },
  { title: "Profile", icon: UserIcon, path: "/auth/teacherDashboard/profile" },
  { title: "MarkGrades", icon: ClipboardIcon, path: "/auth/teacherDashboard/grades" },
  { title: "Courses", icon: BookOpenIcon, path: "/auth/teacherDashboardcourses" },
  { title: "Settings", icon: Cog6ToothIcon, path: "/auth/teacherDashboard/settings" },
];

export default function Sidebar() {
  const router = useRouter();
  const pathname = usePathname(); // ✅ detects current route

  return (
    <div className="w-64 bg-white/70 backdrop-blur-lg rounded-3xl shadow-lg p-5 border border-gray-100 flex flex-col gap-4">
      {/* Logo */}
      <div className="flex items-center gap-2 mb-6">
        <div className="text-2xl font-bold text-blue-600">EDULINK</div>
      </div>

      {/* Menu */}
      {menuItems.map(({ title, icon: Icon, path }) => {
        const isActive = pathname === path; // ✅ check current route
        return (
          <button
            key={title}
            onClick={() => router.push(path)} // ✅ navigate on click
            className={`flex items-center gap-3 px-4 py-2 rounded-xl text-gray-700 hover:bg-blue-100 transition-all duration-300 ${
              isActive ? "bg-blue-500 text-white shadow-md scale-[1.02]" : ""
            }`}
          >
            <Icon className="w-5 h-5" />
            {title}
          </button>
        );
      })}
    </div>
  );
}
