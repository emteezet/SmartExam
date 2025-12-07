"use client";

import React from "react";
import { Star } from "lucide-react";
import { PRIMARY_TEXT, ACCENT_BG } from "../ui/colors";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Chioma Okafor",
      role: "JAMB Candidate 2024",
      image: "👩‍🎓",
      text: "SmartExam helped me score 285/400! The practice interface is exactly like the real exam. Highly recommended!",
      rating: 5,
    },
    {
      name: "Tunde Ibrahim",
      role: "WAEC Student",
      image: "👨‍🎓",
      text: "I improved my Physics score from C6 to A1 in just 2 months. The detailed explanations are game-changing.",
      rating: 5,
    },
    {
      name: "Mrs. Adeyemi",
      role: "School Principal",
      image: "👩‍💼",
      text: "Our students' exam performance improved significantly. The teacher dashboard is excellent for tracking progress.",
      rating: 5,
    },
    {
      name: "Amara Nwosu",
      role: "NECO Candidate",
      image: "👩‍🎓",
      text: "The AI study plan identified my weak areas. Now I focus on what really matters. Best investment ever!",
      rating: 5,
    },
    {
      name: "Dr. Adebayo",
      role: "Private Tutor",
      image: "👨‍🏫",
      text: "I recommend SmartExam to all my students. It saves me time and they learn faster.",
      rating: 5,
    },
    {
      name: "Onyeka Chukwu",
      role: "Post-UTME Candidate",
      image: "👨‍🎓",
      text: "Got admitted to my dream university! SmartExam's practice tests prepared me perfectly.",
      rating: 5,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${PRIMARY_TEXT}`}>
            Trusted by Students & Schools
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join thousands of successful exam candidates who aced their tests
            with SmartExam.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="p-6 bg-gray-50 rounded-xl border-l-4 border-emerald-500 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="text-4xl mr-3">{testimonial.image}</div>
                <div>
                  <h4 className="font-bold text-gray-800">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <p className="text-gray-700 italic">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
