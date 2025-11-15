"use client";

import React from "react";
import Link from "next/link";
import { PRIMARY_TEXT, ACCENT_BG, ACCENT_BG_HOVER } from "./ui/colors";

const Header = () => (
  <header className="bg-white shadow-md">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
        <div className="flex justify-start lg:w-0 lg:flex-1">
          <a href="#" className="flex items-center space-x-2">
            <svg
              className={`h-8 w-auto ${PRIMARY_TEXT}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.042 12.042 0 001.07 11.24a10.998 10.998 0 006.107 8.35c.106.052.213.102.321.15H17.5a2.5 2.5 0 000-5c-1.396 0-2.5-1.104-2.5-2.5V7.5a2.5 2.5 0 00-5 0v3.5a1 1 0 002 0V7.5a.5.5 0 011 0V11a.5.5 0 001 0V7.5a2.5 2.5 0 00-5 0v3.5a1 1 0 002 0v-.5a.5.5 0 011 0V12h.5a.5.5 0 010 1H9m15-7a3 3 0 11-6 0 3 3 0 016 0z"
              ></path>
            </svg>
            <span className={`text-xl font-bold ${PRIMARY_TEXT}`}>
              CBT Exam Portal
            </span>
          </a>
        </div>

        <nav className="hidden md:flex space-x-10">
          {["Features", "Pricing", "Exams", "Support"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`text-base font-medium text-gray-500 hover:text-indigo-600 transition duration-150`}
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
          <Link
            href="/signin"
            className={`whitespace-nowrap text-base font-medium ${PRIMARY_TEXT} hover:text-indigo-900 px-4 py-2 transition duration-150`}
          >
            Sign In
          </Link>
          <Link
            href="/register"
            className={`ml-4 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-lg shadow-lg text-base font-medium text-white ${ACCENT_BG} ${ACCENT_BG_HOVER} transition duration-150 transform hover:scale-[1.02]`}
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
