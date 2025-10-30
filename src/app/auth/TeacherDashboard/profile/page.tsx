"use client";
import Sidebar from "@/Components/Teacherdas/TeacherSidebar";
import React from "react";
// import Sidebar from "@/app/Components/Teacherdas/Sidebar";

export default function Profileteach() {
  return (
    <>
      <div className="flex min-h-screen bg-gradient-to-br from-blue-50 to-white">
        <Sidebar/>
        <div className="flex-1 p-6">
          <div className="relative bg-white rounded-3xl shadow-2xl p-8 w-full max-w-4xl mx-auto border border-blue-100">
            {/* Blue glowing effects */}
            <div className="absolute -inset-1 bg-white rounded-3xl blur-lg opacity-20 animate-pulse"></div>
            <div className="absolute -inset-0.5  rounded-3xl blur-sm opacity-30"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-8">
                Profile
              </h2>
              
              <div className="flex flex-col md:flex-row gap-8">
                {/* Profile Image Section */}
                <div className="flex-shrink-0 text-center">
                  <div className="relative inline-block">
                    <div className="absolute -inset-1 bg-white rounded-full blur opacity-75 animate-pulse"></div>
                    <img
                      src="/profile.jpg"
                      alt="Profile"
                      className="relative w-32 h-32 rounded-full border-4 border-white shadow-xl mx-auto"
                    />
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-gray-800">Prof. David Chen</h3>
                  <p className="text-sm text-gray-600 font-medium">Professor of Computer Science</p>
                  <p className="text-xs text-blue-600 bg-blue-50 px-3 py-1 rounded-full inline-block mt-1 border border-blue-200">FAC12345S</p>
                </div>

                {/* Content Section */}
                <div className="flex-1 space-y-6">
                  {/* Contact Information */}
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300">
                    <h4 className="font-bold text-lg mb-3 text-gray-800 flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      Contact Information
                    </h4>
                    <ul className="text-sm space-y-2">
                      <li className="flex items-center gap-3 p-2 rounded-lg hover:bg-blue-50 transition-colors">
                        <span className="text-blue-500">📧</span>
                        <span className="text-gray-700">dchen@edulink.edu</span>
                      </li>
                      <li className="flex items-center gap-3 p-2 rounded-lg hover:bg-blue-50 transition-colors">
                        <span className="text-blue-500">📞</span>
                        <span className="text-gray-700">+1 555 531-123-5677</span>
                      </li>
                      <li className="flex items-center gap-3 p-2 rounded-lg hover:bg-blue-50 transition-colors">
                        <span className="text-blue-500">🏢</span>
                        <span className="text-gray-700">Room 405, Tech Building</span>
                      </li>
                    </ul>
                  </div>

                  {/* Grid Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white rounded-2xl p-5 shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                      <h5 className="font-bold mb-3 text-gray-800 flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        Course Catalog
                      </h5>
                      <p className="text-sm text-gray-600 bg-blue-50 rounded-lg p-3 border border-blue-100">
                        Financial Education, 10:00 AM - Tech Building
                      </p>
                    </div>

                    <div className="bg-white rounded-2xl p-5 shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                      <h5 className="font-bold mb-3 text-gray-800 flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        Office Hours
                      </h5>
                      <p className="text-sm text-gray-600 bg-blue-50 rounded-lg p-3 border border-blue-100">
                        Mon & Wed, 10:00 AM - 12:00 PM
                      </p>
                    </div>

                    <div className="bg-white rounded-2xl p-5 shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                      <h5 className="font-bold mb-3 text-gray-800 flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        Research Focus
                      </h5>
                      <p className="text-sm text-gray-600 bg-blue-50 rounded-lg p-3 border border-blue-100">
                        Advanced Machine Learning & Neural Networks
                      </p>
                    </div>

                    <div className="bg-white rounded-2xl p-5 shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                      <h5 className="font-bold mb-3 text-gray-800 flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        About Me
                      </h5>
                      <p className="text-sm text-gray-600 bg-blue-50 rounded-lg p-3 border border-blue-100">
                        Passionate about AI, software design, and computer education.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}