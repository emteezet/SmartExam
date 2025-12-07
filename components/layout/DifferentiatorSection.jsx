"use client";

import React from "react";
import {
  CheckCircle,
  Brain,
  Zap,
  Smartphone,
  Shield,
  Users,
} from "lucide-react";
import { ACCENT_BG, PRIMARY_TEXT } from "../ui/colors";

const DifferentiatorSection = () => {
  const differentiators = [
    {
      icon: CheckCircle,
      title: "Most Accurate Questions",
      description: "Real past questions from JAMB, WAEC & NECO",
    },
    {
      icon: Brain,
      title: "AI Study Plan",
      description: "Personalized learning paths based on your performance",
    },
    {
      icon: Zap,
      title: "Real Exam Pressure",
      description: "Timed simulations match actual exam conditions",
    },
    {
      icon: Smartphone,
      title: "Works on Low Data",
      description: "Optimized for slow internet connections",
    },
    {
      icon: Shield,
      title: "Accessibility First",
      description: "Designed for visually impaired students",
    },
    {
      icon: Users,
      title: "Expert Verified",
      description: "All answers verified by certified teachers",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${PRIMARY_TEXT}`}>
            Why Choose SmartExam?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're not just another CBT platform. Here's what sets us apart from
            the competition.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentiators.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-xl border-2 border-gray-100 hover:border-indigo-300 transition-all duration-300 hover:shadow-lg"
              >
                <Icon
                  className={`h-12 w-12 ${ACCENT_BG} text-white rounded-lg p-2 mb-4`}
                />
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DifferentiatorSection;
