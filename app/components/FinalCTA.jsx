"use client";

import React from "react";
import Link from "next/link";
import { PRIMARY_BG_50, ACCENT_BG, ACCENT_BG_HOVER } from "./ui/colors";

const FinalCTA = () => (
  <div className={PRIMARY_BG_50}>
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
      <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        <span className="block text-indigo-900">
          Ready to boost your score?
        </span>
        <span className="block text-white">Start your free trial today.</span>
      </h2>
      <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
        <div className="inline-flex rounded-lg shadow-xl">
          <Link
            href="/register"
            className={`inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-lg text-white ${ACCENT_BG} ${ACCENT_BG_HOVER} transition duration-150 transform hover:scale-[1.02]`}
          >
            Get Started Free
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default FinalCTA;
