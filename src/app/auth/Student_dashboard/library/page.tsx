"use client";

import React, { useState, JSX } from "react";
import Sidebar from "@/Components/Studentdas/Sidebar";
import DashboardCard from "@/Components/Studentdas/DashboardCard";
import { BookOpenIcon, LockClosedIcon, CurrencyDollarIcon } from "@heroicons/react/24/outline";

interface Book {
  title: string;
  author: string;
  category: string;
  cover: string;
  pdfUrl: string;
  type: "Free" | "Premium";
}

export default function Library(): JSX.Element {
  const [isMember, setIsMember] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");

  const books: Book[] = [
    {
      title: "Introduction to Algorithms",
      author: "Thomas H. Cormen",
      category: "Computer Science",
      cover: "https://m.media-amazon.com/images/I/81dQwQlmAXL._AC_UF1000,1000_QL80_.jpg",
      pdfUrl: "/books/algorithms.pdf",
      type: "Premium",
    },
    {
      title: "Artificial Intelligence: A Modern Approach",
      author: "Stuart Russell",
      category: "AI",
      cover: "https://m.media-amazon.com/images/I/71HMyqG6MRL._AC_UF1000,1000_QL80_.jpg",
      pdfUrl: "/books/ai-modern.pdf",
      type: "Premium",
    },
    {
      title: "Operating System Concepts",
      author: "Abraham Silberschatz",
      category: "Operating Systems",
      cover: "https://m.media-amazon.com/images/I/71W-KjE3RSL._AC_UF1000,1000_QL80_.jpg",
      pdfUrl: "/books/os-concepts.pdf",
      type: "Free",
    },
    {
      title: "Database Management Systems",
      author: "Raghu Ramakrishnan",
      category: "Databases",
      cover: "https://m.media-amazon.com/images/I/71O1tLzHNuL._AC_UF1000,1000_QL80_.jpg",
      pdfUrl: "/books/dbms.pdf",
      type: "Free",
    },
    {
      title: "Deep Learning",
      author: "Ian Goodfellow",
      category: "AI",
      cover: "https://m.media-amazon.com/images/I/81H5Q1W7AfL._AC_UF1000,1000_QL80_.jpg",
      pdfUrl: "/books/deep-learning.pdf",
      type: "Premium",
    },
  ];

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex min-h-screen p-6 gap-6 relative">
      {/* Sidebar */}
      <Sidebar />

      {/* Background */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-18 right-10 w-64 h-64 bg-green-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>

      {/* Main Section */}
      <div className="flex-1 bg-white/70 backdrop-blur-lg rounded-3xl p-8 shadow-md border border-gray-100 relative z-10">
        {/* Header */}
        <h1 className="text-2xl font-bold mb-2">Digital Library</h1>
        <p className="text-gray-500 mb-8">
          Browse and read books. Unlock premium content by becoming a member.
        </p>

        {/* Membership Section */}
        <div className="flex flex-col md:flex-row justify-between items-center bg-gradient-to-r from-blue-100 to-green-100 p-5 rounded-2xl mb-8 shadow-sm">
          <div>
            <h2 className="text-lg font-semibold mb-1">Library Membership</h2>
            <p className="text-gray-600 text-sm">
              {isMember
                ? "You are a premium member! Enjoy unlimited access."
                : "Unlock access to premium books and documents by subscribing."}
            </p>
          </div>

          <button
            onClick={() => setIsMember(!isMember)}
            className={`flex items-center gap-2 px-5 py-2 mt-3 md:mt-0 rounded-xl transition text-sm font-medium ${
              isMember
                ? "bg-green-100 text-green-700 hover:bg-green-200"
                : "bg-blue-100 text-blue-700 hover:bg-blue-200"
            }`}
          >
            <CurrencyDollarIcon className="w-5 h-5" />
            {isMember ? "Membership Active" : "Buy Membership"}
          </button>
        </div>

        {/* Search Bar */}
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for a book..."
          className="px-4 py-2 rounded-xl border border-gray-200 bg-white/70 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm w-full mb-8"
        />

        {/* Books Grid */}
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
          {filteredBooks.map((book) => (
            <DashboardCard key={book.title} title={book.title}>
              <img
                src={book.cover}
                alt={book.title}
                className="w-full h-40 object-cover rounded-lg mb-3"
              />
              <p className="text-gray-600 text-sm mb-1">Author: {book.author}</p>
              <p className="text-gray-500 text-xs mb-3">{book.category}</p>

              {/* Access Control */}
              {book.type === "Free" || isMember ? (
                <a
                  href={book.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-blue-100 text-blue-700 py-2 rounded-xl hover:bg-blue-200 transition text-sm font-medium"
                >
                  <BookOpenIcon className="inline w-5 h-5 mr-1" />
                  Open Book
                </a>
              ) : (
                <div className="flex flex-col items-center text-center text-gray-500 mt-2">
                  <LockClosedIcon className="w-6 h-6 text-gray-400 mb-1" />
                  <p className="text-xs mb-2">Premium book — membership required</p>
                  <button
                    onClick={() => setIsMember(true)}
                    className="px-3 py-1 text-sm rounded-lg bg-green-100 text-green-700 hover:bg-green-200 transition"
                  >
                    Upgrade Membership
                  </button>
                </div>
              )}
            </DashboardCard>
          ))}
        </div>
      </div>
    </div>
  );
}
