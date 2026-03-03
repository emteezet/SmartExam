"use client";

import React from "react";
import Link from "next/link";
import {
  PRIMARY_TEXT,
  PRIMARY_BG,
  PRIMARY_HOVER,
  PRIMARY_BG_BORDER,
  ACCENT_BG,
  ACCENT_TEXT,
} from "../ui/colors";

const Hero = () => (
  <div className="relative overflow-hidden pt-10 sm:pt-16 lg:pt-20 pb-10 md:pb-28 bg-gradient-to-br from-indigo-50 via-white to-emerald-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center lg:text-left lg:grid lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-6 xl:col-span-6 relative z-10">
          <span
            className={`inline-block px-4 py-1.5 text-sm font-semibold rounded-full text-white ${ACCENT_BG} uppercase tracking-wider mb-6 shadow-lg`}
          >
            🎯 Nigeria's #1 CBT Platform
          </span>
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl mb-6 leading-tight">
            <span className="block">Practice CBT the</span>
            <span className={`block ${PRIMARY_TEXT}`}>Smart Way</span>
          </h1>
          <p className="mt-4 max-w-md mx-auto text-base text-gray-600 sm:text-lg md:mt-6 md:text-xl lg:mx-0 leading-relaxed">
            Prepare for JAMB, WAEC & NECO with AI-powered study plans, real exam
            interfaces, and deep performance analytics. Join 50,000+ successful
            exam candidates.
          </p>

          <div className="mt-10 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                href="/auth/signup"
                className={`flex-1 inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-lg shadow-xl text-white ${ACCENT_BG} hover:opacity-90 transition duration-150 transform hover:scale-[1.02]`}
              >
                Start Practicing Free
              </Link>
              <Link
                href="/support"
                className={`flex-1 inline-flex items-center justify-center px-8 py-4 border-2 border-indigo-600 text-base font-bold rounded-lg ${PRIMARY_TEXT} bg-white hover:bg-indigo-50 transition duration-150`}
              >
                Try Demo Exam
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 lg:mt-0 lg:col-span-6 xl:col-span-6 flex justify-center items-center">
          <div
            className={`w-full max-w-lg p-6 bg-white rounded-xl shadow-2xl ${PRIMARY_BG_BORDER}`}
          >
            <svg
              className={`mx-auto h-48 w-48 ${ACCENT_TEXT}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 018.618 3.04A12.042 12.042 0 0021 12c0 4.29-2.22 8.163-5.618 10.016A11.916 11.916 0 0112 22c-2.906 0-5.66-.92-7.882-2.984A12.042 12.042 0 003 12c0-4.29 2.22-8.163 5.618-10.016z"
              ></path>
            </svg>
            <div className="text-center mt-4">
              <p className={`text-lg font-semibold ${PRIMARY_TEXT}`}>
                Simulated Test Environment
              </p>
              <p className="text-sm text-gray-500">
                Practice under real-time exam constraints.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Hero;
