"use client";

import React, { JSX, useState } from "react";
import TeacherSidebar from "@/Components/Teacherdas/TeacherSidebar";
import DashboardCard from "@/Components/Studentdas/DashboardCard";
import {
  BookOpenIcon,
  ArrowUpOnSquareIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

interface Book {
  title: string;
  author: string;
  category: string;
  cover: string;
  pdfUrl: string;
  type: "Free" | "Premium";
}

export default function TeacherLibrary(): JSX.Element {
  const [search, setSearch] = useState<string>("");

  const books: Book[] = [
    {
      title: "Introduction to Algorithms",
      author: "Thomas H. Cormen",
      category: "Computer Science",
      cover:
        "https://m.media-amazon.com/images/I/81dQwQlmAXL._AC_UF1000,1000_QL80_.jpg",
      pdfUrl: "/books/algorithms.pdf",
      type: "Premium",
    },
    {
      title: "Artificial Intelligence: A Modern Approach",
      author: "Stuart Russell",
      category: "AI",
      cover:
        "https://m.media-amazon.com/images/I/71HMyqG6MRL._AC_UF1000,1000_QL80_.jpg",
      pdfUrl: "/books/ai-modern.pdf",
      type: "Premium",
    },
    {
      title: "Operating System Concepts",
      author: "Abraham Silberschatz",
      category: "Operating Systems",
      cover:
        "https://m.media-amazon.com/images/I/71W-KjE3RSL._AC_UF1000,1000_QL80_.jpg",
      pdfUrl: "/books/os-concepts.pdf",
      type: "Free",
    },
    {
      title: "Database Management Systems",
      author: "Raghu Ramakrishnan",
      category: "Databases",
      cover:
        "https://m.media-amazon.com/images/I/71O1tLzHNuL._AC_UF1000,1000_QL80_.jpg",
      pdfUrl: "/books/dbms.pdf",
      type: "Free",
    },
    {
      title: "Deep Learning",
      author: "Ian Goodfellow",
      category: "AI",
      cover:
        "https://m.media-amazon.com/images/I/81H5Q1W7AfL._AC_UF1000,1000_QL80_.jpg",
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
      <TeacherSidebar />

      {/* Animated Background */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-orange-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-18 right-10 w-64 h-64 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>

      {/* Main Content */}
      <div className="flex-1 bg-white/70 overflow-auto backdrop-blur-lg rounded-3xl p-8 shadow-md border border-gray-100 relative z-10">
        {/* Header */}
        <h1 className="text-2xl font-bold mb-2">Teacher Library</h1>
        <p className="text-gray-500 mb-8">
          Access all library books and upload new educational materials.
        </p>

        {/* Teacher Info */}
        <div className="flex items-center gap-4 mb-8">
          <img
            src="https://i.pravatar.cc/100?img=15"
            alt="Teacher"
            className="w-16 h-16 rounded-full"
          />
          <div>
            <h2 className="text-xl font-semibold">Prof. Ahmed Khan</h2>
            <p className="text-gray-500 text-sm">Faculty ID: TCH4521</p>
          </div>
        </div>

        {/* Upload Section */}
        <div className="flex flex-col md:flex-row justify-between items-center bg-gradient-to-r from-orange-100 to-yellow-100 p-5 rounded-2xl mb-8 shadow-sm">
          <div>
            <h2 className="text-lg font-semibold mb-1">Upload a New Book</h2>
            <p className="text-gray-600 text-sm">
              Share your own notes, research papers, or reference materials with
              students.
            </p>
          </div>

          <button className="flex items-center gap-2 px-5 py-2 mt-3 md:mt-0 rounded-xl bg-orange-100 text-orange-700 hover:bg-orange-200 transition text-sm font-medium">
            <ArrowUpOnSquareIcon className="w-5 h-5" />
            Upload Book
          </button>
        </div>

        {/* Search Bar */}
        <div className="relative mb-8">
          <MagnifyingGlassIcon className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search for a book..."
            className="pl-10 pr-4 py-2 rounded-xl border border-gray-200 bg-white/70 focus:outline-none focus:ring-2 focus:ring-orange-400 shadow-sm w-full"
          />
        </div>

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

              <a
                href={book.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-orange-100 text-orange-700 py-2 rounded-xl hover:bg-orange-200 transition text-sm font-medium"
              >
                <BookOpenIcon className="inline w-5 h-5 mr-1" />
                Open Book
              </a>
            </DashboardCard>
          ))}
        </div>
      </div>
    </div>
  );
}
