"use client";
import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-white to-green-100 overflow-hidden">
      {/* Background glow circles */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-green-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>

      {/* Card */}
      <div className="relative bg-white/20 backdrop-blur-2xl border border-white/30 shadow-2xl rounded-3xl p-16 w-[380px] text-center transition-all duration-300 hover:shadow-[0_0_40px_rgba(59,130,246,0.3)]">
        {/* Logo */}
        <div className="flex flex-col items-center mb-6">
          <div className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-500 tracking-wide">
            EDU<span className="text-blue-700">LINK</span>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-8 drop-shadow-sm">
          Welcome to EduLink
        </h2>

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-5">
          <div className="relative">
            <input
              type="text"
              placeholder="Email / ID"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full py-3 px-8 rounded-full border border-gray-400 focus:border-transparent focus:ring-2 focus:ring-blue-400 outline-none text-gray-700 bg-white/60 placeholder-gray-500"
            />
          </div>

          <div className="relative">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full py-3 px-8 rounded-full border border-gray-400 focus:border-transparent focus:ring-2 focus:ring-blue-400 outline-none text-gray-700 bg-white/60 placeholder-gray-500"
            />
          </div>

          <div className="flex items-center justify-between text-sm text-gray-600">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="accent-blue-500" />
              <span>Remember me</span>
            </label>
            <a href="#" className="text-blue-500 hover:underline font-medium">
              Forgot Password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full py-3 text-white rounded-full bg-gradient-to-r from-blue-500 to-green-400 hover:scale-105 hover:shadow-[0_0_20px_rgba(59,130,246,0.6)] transition-all duration-300 font-semibold shadow-md"
          >
            LOGIN
          </button>
        </form>

        {/* Footer */}
        {/* <div className="mt-8 text-gray-700 text-sm flex justify-center gap-8">
          <button className="flex flex-col items-center hover:text-blue-500 transition">
            <span className="text-lg">🎓</span>
            <span>Student</span>
          </button>
          <button className="flex flex-col items-center hover:text-green-500 transition">
            <span className="text-lg">👩‍🏫</span>
            <span>Faculty</span>
          </button>
        </div> */}
      </div>
    </div>
  );
}
