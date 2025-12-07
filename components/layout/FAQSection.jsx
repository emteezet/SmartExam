"use client";

import React from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { PRIMARY_TEXT, ACCENT_BG } from "../ui/colors";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = React.useState(null);

  const faqs = [
    {
      question: "Are these questions authentic past exam questions?",
      answer:
        "Yes! All our questions are real past questions from JAMB, WAEC, and NECO. We verify every question with certified teachers to ensure accuracy.",
    },
    {
      question: "Can I use SmartExam on my phone?",
      answer:
        "Absolutely! Our platform is fully responsive and works perfectly on phones, tablets, and computers. You can even sync your progress across devices.",
    },
    {
      question: "Is offline mode available?",
      answer:
        "Yes, we have offline mode support. Download exams on your device and practice without internet. Your scores will sync once you're back online.",
    },
    {
      question: "How much does it cost?",
      answer:
        "Basic access is completely free! Premium plans start at ₦2,999/month for unlimited access to all questions and advanced analytics.",
    },
    {
      question: "Can schools register for bulk accounts?",
      answer:
        "Yes! We offer special school pricing with features like teacher dashboards, student management, and custom exams. Contact us for details.",
    },
    {
      question: "How long are my test scores kept?",
      answer:
        "Your test history is kept indefinitely. You can review any past exam, see your progress, and use our analytics to improve.",
    },
    {
      question: "Do you offer explanations for answers?",
      answer:
        "Yes! Every question comes with detailed step-by-step explanations. Some questions also have video explanations.",
    },
    {
      question: "Can I take timed practice exams?",
      answer:
        "Yes! You can practice in timed mode (matching real exam conditions) or untimed mode for learning. Both modes are available.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${PRIMARY_TEXT}`}>
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Get answers to common questions about SmartExam
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="border border-gray-200 rounded-lg overflow-hidden hover:border-emerald-300 transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full p-4 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-800 text-left">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`h-5 w-5 text-gray-600 transition-transform ${
                    openIndex === idx ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === idx && (
                <div className="p-4 bg-gray-50 border-t border-gray-200">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <Link href="/support">
            <button
              className={`${ACCENT_BG} text-white font-bold py-3 px-8 rounded-lg hover:opacity-90 transition`}
            >
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
