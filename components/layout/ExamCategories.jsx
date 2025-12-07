"use client";

import React from "react";
import Link from "next/link";
import { PRIMARY_TEXT, ACCENT_BG } from "../ui/colors";

const ExamCategories = () => {
  const exams = [
    {
      id: "jamb",
      name: "JAMB/UTME",
      icon: "📚",
      description: "1,000+ past questions",
      subjects: ["English", "Mathematics", "Physics", "Chemistry"],
    },
    {
      id: "waec",
      name: "WAEC",
      icon: "🎓",
      description: "500+ verified questions",
      subjects: ["English", "Mathematics", "Biology", "Physics"],
    },
    {
      id: "neco",
      name: "NECO",
      icon: "📖",
      description: "400+ exam questions",
      subjects: ["English", "Mathematics", "History", "Geography"],
    },
    {
      id: "post-utme",
      name: "Post-UTME",
      icon: "🏆",
      description: "University entrance exams",
      subjects: ["Reasoning", "Subject Tests"],
    },
    {
      id: "recruitment",
      name: "Recruitment CBT",
      icon: "💼",
      description: "Civil service exams",
      subjects: ["CUSTOMS", "Immigration", "FRSC", "Police"],
    },
    {
      id: "schools",
      name: "School Exams",
      icon: "🏫",
      description: "Internal & common entrance",
      subjects: ["Custom exams", "Tutors control"],
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${PRIMARY_TEXT}`}>
            What You Can Practice
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Prepare for any exam with our comprehensive question bank across
            multiple exam types.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {exams.map((exam) => (
            <Link href="/exam" key={exam.id}>
              <div className="group p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1">
                <div className="text-4xl mb-4">{exam.icon}</div>
                <h3
                  className={`text-xl font-bold mb-2 ${PRIMARY_TEXT} group-hover:text-emerald-500 transition`}
                >
                  {exam.name}
                </h3>
                <p className="text-gray-600 mb-3">{exam.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exam.subjects.map((subject, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full"
                    >
                      {subject}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExamCategories;
