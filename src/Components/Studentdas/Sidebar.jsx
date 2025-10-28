"use client";

import { useRouter, usePathname } from "next/navigation";
import {
  HomeIcon,
  UserIcon,
  BookOpenIcon,
  ClipboardIcon,
  Cog6ToothIcon,BuildingLibraryIcon,
  AcademicCapIcon,
   PresentationChartBarIcon
} from "@heroicons/react/24/outline";

const menuItems = [
  { title: "Dashboard", icon: HomeIcon, path: "/auth/student_dashboard" },
  { title: "Profile", icon: UserIcon, path: "/auth/student_dashboard/profile" },
  { title: "Grades", icon: ClipboardIcon, path: "/auth/student_dashboard/grades" },
  { title: "Courses", icon: BookOpenIcon, path: "/auth/student_dashboard/courses" },
  { title: "Tutorials", icon: AcademicCapIcon, path: "/auth/student_dashboard/tutorials" },
  { title: "Library", icon:BuildingLibraryIcon, path: "/auth/student_dashboard/library" },
  { title: "Classes", icon:  PresentationChartBarIcon, path: "/auth/student_dashboard/classes" },
  { title: "Settings", icon: Cog6ToothIcon, path: "/auth/student_dashboard/settings" },
];

export default function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="w-64 bg-white/70 backdrop-blur-lg rounded-3xl shadow-lg p-5 border border-gray-100 flex flex-col gap-4 relative z-10">
      {/* Logo */}
      <div className="flex items-center gap-2 mb-6">
        <div className="text-2xl font-bold text-blue-600">EDULINK</div>
      </div>

      {/* Menu Items */}
      {menuItems.map(({ title, icon: Icon, path }) => {
        const isActive = pathname === path;
        return (
          <button
            key={title}
            onClick={() => router.push(path)}
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
