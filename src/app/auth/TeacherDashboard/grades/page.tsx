"use client";

import React, { useState } from "react";
import Sidebar from "@/Components/Teacherdas/Sidebar";
import { motion } from "framer-motion";
import { PencilSquareIcon, CheckCircleIcon } from "@heroicons/react/24/outline";

interface Student {
  id: number;
  name: string;
  rollNo: string;
  quiz: number;
  assignment: number;
  homework: number;
  test: number;
}

export default function TeacherGrades() {
  const [students, setStudents] = useState<Student[]>([
    { id: 1, name: "Aisha Rahman", rollNo: "ERA1112256", quiz: 0, assignment: 0, homework: 0, test: 0 },
    { id: 2, name: "Ahmed Khan", rollNo: "ERA1112257", quiz: 0, assignment: 0, homework: 0, test: 0 },
    { id: 3, name: "Sara Malik", rollNo: "ERA1112258", quiz: 0, assignment: 0, homework: 0, test: 0 },
  ]);

  const [editingId, setEditingId] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    quiz: 0,
    assignment: 0,
    homework: 0,
    test: 0,
  });

  // Begin editing
  const handleEdit = (student: Student) => {
    setEditingId(student.id);
    setFormData({
      quiz: student.quiz,
      assignment: student.assignment,
      homework: student.homework,
      test: student.test,
    });
  };

  // Save updated marks
  const handleSave = (id: number) => {
    setStudents((prev) =>
      prev.map((s) =>
        s.id === id ? { ...s, ...formData } : s
      )
    );
    setEditingId(null);
  };

  // Calculate total marks
  const calculateTotal = (student: Student) =>
    student.quiz + student.assignment + student.homework + student.test;

  return (
    <div className="flex min-h-screen p-6 gap-6 relative">
      <Sidebar />

      {/* Soft Background */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>

      {/* Main Content */}
      <div className="flex-1 bg-white/70 backdrop-blur-lg rounded-3xl p-8 shadow-md border border-gray-100 relative z-10">
        <h1 className="text-2xl font-bold mb-2">Grade Students</h1>
        <p className="text-gray-500 mb-8">
          Mark grades for quizzes, assignments, homework, and tests.
        </p>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white/80 rounded-2xl shadow-md overflow-hidden">
            <thead>
              <tr className="bg-gray-100 text-gray-700 text-left">
                <th className="py-3 px-4">Student</th>
                <th className="py-3 px-4">Roll No</th>
                <th className="py-3 px-4">Quiz (10)</th>
                <th className="py-3 px-4">Assignment (10)</th>
                <th className="py-3 px-4">Homework (10)</th>
                <th className="py-3 px-4">Test (40)</th>
                <th className="py-3 px-4">Total (70)</th>
                <th className="py-3 px-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <motion.tr
                  key={student.id}
                  whileHover={{ scale: 1.01 }}
                  className="border-b hover:bg-gray-50 transition"
                >
                  <td className="py-3 px-4 font-medium">{student.name}</td>
                  <td className="py-3 px-4 text-gray-500">{student.rollNo}</td>

                  {editingId === student.id ? (
                    <>
                      <td className="py-3 px-4">
                        <input
                          type="number"
                          min="0"
                          max="10"
                          value={formData.quiz}
                          onChange={(e) =>
                            setFormData({ ...formData, quiz: Number(e.target.value) })
                          }
                          className="w-16 px-2 py-1 border rounded-md text-center"
                        />
                      </td>
                      <td className="py-3 px-4">
                        <input
                          type="number"
                          min="0"
                          max="10"
                          value={formData.assignment}
                          onChange={(e) =>
                            setFormData({ ...formData, assignment: Number(e.target.value) })
                          }
                          className="w-16 px-2 py-1 border rounded-md text-center"
                        />
                      </td>
                      <td className="py-3 px-4">
                        <input
                          type="number"
                          min="0"
                          max="10"
                          value={formData.homework}
                          onChange={(e) =>
                            setFormData({ ...formData, homework: Number(e.target.value) })
                          }
                          className="w-16 px-2 py-1 border rounded-md text-center"
                        />
                      </td>
                      <td className="py-3 px-4">
                        <input
                          type="number"
                          min="0"
                          max="40"
                          value={formData.test}
                          onChange={(e) =>
                            setFormData({ ...formData, test: Number(e.target.value) })
                          }
                          className="w-16 px-2 py-1 border rounded-md text-center"
                        />
                      </td>
                      <td className="py-3 px-4 font-semibold text-gray-800">
                        {formData.quiz + formData.assignment + formData.homework + formData.test}
                      </td>
                      <td className="py-3 px-4 text-center">
                        <button
                          onClick={() => handleSave(student.id)}
                          className="flex items-center gap-1 px-3 py-1 bg-green-100 text-green-700 rounded-md hover:bg-green-200 mx-auto"
                        >
                          <CheckCircleIcon className="w-4 h-4" />
                          Save
                        </button>
                      </td>
                    </>
                  ) : (
                    <>
                      <td className="py-3 px-4">{student.quiz}</td>
                      <td className="py-3 px-4">{student.assignment}</td>
                      <td className="py-3 px-4">{student.homework}</td>
                      <td className="py-3 px-4">{student.test}</td>
                      <td className="py-3 px-4 font-semibold text-gray-800">
                        {calculateTotal(student)}
                      </td>
                      <td className="py-3 px-4 text-center">
                        <button
                          onClick={() => handleEdit(student)}
                          className="flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-700 rounded-md hover:bg-blue-200 mx-auto"
                        >
                          <PencilSquareIcon className="w-4 h-4" />
                          Edit
                        </button>
                      </td>
                    </>
                  )}
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
