"use client";

import React from "react";

const Footer = () => (
  <footer className="bg-gray-800">
    <div className="max-w-7xl mx-auto py-8 px-4 overflow-hidden sm:px-6 lg:px-8">
      <nav
        className="-mx-5 -my-2 flex flex-wrap justify-center"
        aria-label="Footer"
      >
        {["About", "Privacy", "Terms", "Contact"].map((item) => (
          <div key={item} className="px-5 py-2">
            <a href="#" className="text-base text-gray-400 hover:text-gray-300">
              {item}
            </a>
          </div>
        ))}
      </nav>
      <p className="mt-8 text-center text-base text-gray-400">
        &copy; {new Date().getFullYear()} SmartExam. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
