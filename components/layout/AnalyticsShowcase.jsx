"use client";

import React from "react";
import { TrendingUp, Activity, Zap, Target } from "lucide-react";
import { PRIMARY_TEXT } from "../ui/colors";

const AnalyticsShowcase = () => {
  const analytics = [
    {
      icon: TrendingUp,
      title: "Score Improvement",
      description: "Track your progress with detailed score trends",
      stat: "+45% avg improvement",
    },
    {
      icon: Activity,
      title: "Topic Mastery",
      description: "See which topics you've mastered",
      stat: "87% mastery on average",
    },
    {
      icon: Zap,
      title: "Speed vs Accuracy",
      description: "Optimize your exam strategy",
      stat: "2x faster completion",
    },
    {
      icon: Target,
      title: "Weak Areas",
      description: "AI identifies your problem areas",
      stat: "Custom study plans",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-indigo-50 to-emerald-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${PRIMARY_TEXT}`}>
            Smart Analytics That Matter
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get detailed insights into your performance and know exactly what to
            focus on next.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {analytics.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <Icon className="h-10 w-10 text-emerald-500 mb-4" />
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">{item.description}</p>
                <p className="text-sm font-bold text-emerald-600">
                  {item.stat}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 bg-white rounded-xl p-8 shadow-lg border-l-4 border-emerald-500">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">
                50,000+
              </div>
              <p className="text-gray-600">Students Trained</p>
            </div>
            <div className="text-center border-l border-r border-gray-200">
              <div className="text-4xl font-bold text-emerald-600 mb-2">
                98%
              </div>
              <p className="text-gray-600">Exam Interface Match</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">
                4.9/5
              </div>
              <p className="text-gray-600">Average Rating</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnalyticsShowcase;
