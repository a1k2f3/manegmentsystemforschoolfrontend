"use client";
import { useRouter, usePathname } from "next/navigation";
import { Home, User, BookOpen, Settings } from "lucide-react";

const Sidebar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const menu = [
    { name: "Dashboard", icon: <Home size={20} />, path: "/student/dashboard" },
    { name: "Profile", icon: <User size={20} />, path: "/student/profile" },
    { name: "Courses", icon: <BookOpen size={20} />, path: "/student/courses" },
    { name: "Settings", icon: <Settings size={20} />, path: "/student/settings" },
  ];

  return (
    <div className="w-64 bg-white/70 backdrop-blur-lg border-r border-gray-200 p-5 rounded-r-3xl shadow-md">
      <h1 className="text-2xl font-bold mb-8 text-blue-700">EDULINK</h1>

      <ul className="space-y-3">
        {menu.map((item, i) => {
          const isActive = pathname === item.path;
          return (
            <li key={i}>
              <button
                onClick={() => router.push(item.path)} // ✅ route navigation
                className={`flex items-center gap-3 w-full text-left p-3 rounded-xl cursor-pointer transition-all duration-200 
                  ${
                    isActive
                      ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-[0_0_15px_rgba(59,130,246,0.6)] scale-[1.02]"
                      : "hover:bg-blue-100 text-gray-700"
                  }`}
              >
                <span
                  className={`transition-transform duration-200 ${
                    isActive ? "scale-110" : ""
                  }`}
                >
                  {item.icon}
                </span>
                <span className="font-medium">{item.name}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
