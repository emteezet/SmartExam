"use client";

import React from "react";
import Link from "next/link";
import { PRIMARY_TEXT, ACCENT_BG, ACCENT_BG_HOVER } from "../components/ui/colors";

const SubjectSelector = () => {
  const subjects = [
    {
      id: "javascript",
      name: "JavaScript",
      description: "Master JavaScript programming fundamentals",
      icon: "💛",
      questionCount: 10,
      difficulty: "Beginner",
    },
    {
      id: "python",
      name: "Python",
      description: "Learn Python programming from scratch",
      icon: "🐍",
      questionCount: 12,
      difficulty: "Beginner",
    },
    {
      id: "geography",
      name: "Geography",
      description: "Test your knowledge of world geography",
      icon: "🌍",
      questionCount: 15,
      difficulty: "Intermediate",
    },
    {
      id: "cybersecurity",
      name: "Cybersecurity",
      description: "Network security and protection concepts",
      icon: "🔒",
      questionCount: 8,
      difficulty: "Advanced",
    },
    {
      id: "history",
      name: "History",
      description: "Explore historical events and periods",
      icon: "📜",
      questionCount: 10,
      difficulty: "Intermediate",
    },
    {
      id: "biology",
      name: "Biology",
      description: "Understanding life sciences",
      icon: "🧬",
      questionCount: 14,
      difficulty: "Intermediate",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className={`text-4xl md:text-5xl font-bold ${PRIMARY_TEXT} mb-4`}>
            Choose Your Subject
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Select a subject to begin your exam. Each subject contains multiple questions to test your knowledge.
          </p>
        </div>

        {/* Subjects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {subjects.map((subject) => (
            <Link key={subject.id} href={`/exam/${subject.id}`}>
              <div className="group h-full bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-6 cursor-pointer border border-gray-100">
                {/* Icon */}
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {subject.icon}
                </div>

                {/* Subject Name */}
                <h3 className={`text-xl font-bold ${PRIMARY_TEXT} mb-2`}>
                  {subject.name}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {subject.description}
                </p>

                {/* Meta Info */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span>📝 {subject.questionCount} Questions</span>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    subject.difficulty === "Beginner"
                      ? "bg-green-100 text-green-700"
                      : subject.difficulty === "Intermediate"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-red-100 text-red-700"
                  }`}>
                    {subject.difficulty}
                  </span>
                </div>

                {/* CTA Button */}
                <button
                  className={`w-full ${ACCENT_BG} ${ACCENT_BG_HOVER} text-white font-semibold py-2 px-4 rounded-lg transition-all duration-200 transform group-hover:scale-105`}
                >
                  Start Exam →
                </button>
              </div>
            </Link>
          ))}
        </div>

        {/* Info Section */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8 border border-gray-100">
          <h2 className={`text-2xl font-bold ${PRIMARY_TEXT} mb-4`}>
            How it works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-3xl font-bold text-emerald-500 mb-2">1</div>
              <h3 className="font-semibold text-gray-800 mb-2">Choose Subject</h3>
              <p className="text-gray-600 text-sm">
                Select from our wide range of subjects to test your knowledge.
              </p>
            </div>
            <div>
              <div className="text-3xl font-bold text-emerald-500 mb-2">2</div>
              <h3 className="font-semibold text-gray-800 mb-2">Take Exam</h3>
              <p className="text-gray-600 text-sm">
                Answer questions within the time limit. Each question has multiple choices.
              </p>
            </div>
            <div>
              <div className="text-3xl font-bold text-emerald-500 mb-2">3</div>
              <h3 className="font-semibold text-gray-800 mb-2">Get Results</h3>
              <p className="text-gray-600 text-sm">
                Receive instant results with your score and performance breakdown.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubjectSelector;
