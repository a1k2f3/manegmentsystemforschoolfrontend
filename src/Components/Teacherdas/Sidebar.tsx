"use client";

import { useRouter, usePathname } from "next/navigation";
import {
  HomeIcon,
  UserIcon,
  BookOpenIcon,
  ClipboardIcon,
  Cog6ToothIcon,
  BuildingLibraryIcon,
  AcademicCapIcon,
  PresentationChartBarIcon,
  UserGroupIcon
} from "@heroicons/react/24/outline";

const menuItems = [
  { title: "Dashboard", icon: HomeIcon, path: "/auth/teacherDashboard" },
  { title: "Profile", icon: UserIcon, path: "/auth/teacherDashboard/profile" },
  { title: "Classes", icon: PresentationChartBarIcon, path: "/auth/teacherDashboard/classes" },
  { title: "Courses", icon: BookOpenIcon, path: "/auth/teacherDashboard/courses" },
  { title: "Grades", icon: ClipboardIcon, path: "/auth/teacherDashboard/grades" },
  { title: "Attendance", icon: UserGroupIcon, path: "/auth/teacherDashboard/markAttendance" },
  { title: "Tutorials", icon: AcademicCapIcon, path: "/auth/teacherDashboard/tutorials" },
  { title: "Library", icon: BuildingLibraryIcon, path: "/auth/teacherDashboard/library" },
  { title: "Settings", icon: Cog6ToothIcon, path: "/auth/teacherDashboard/settings" },
];

export default function TeacherSidebar() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="w-64 bg-white/70 backdrop-blur-lg rounded-3xl shadow-lg p-5 border border-gray-100 flex flex-col gap-4 relative z-10">
      {/* Logo */}
      <div className="flex items-center gap-2 mb-6">
        <div className="text-2xl font-bold text-orange-600">EDULINK</div>
      </div>

      {/* Menu Items */}
      {menuItems.map(({ title, icon: Icon, path }) => {
        const isActive = pathname === path;
        return (
          <button
            key={title}
            onClick={() => router.push(path)}
            className={`flex items-center gap-3 px-4 py-2 rounded-xl text-gray-700 hover:bg-orange-100 transition-all duration-300 ${
              isActive ? "bg-orange-500 text-white shadow-md scale-[1.02]" : ""
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