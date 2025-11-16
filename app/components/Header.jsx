"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { PRIMARY_TEXT, ACCENT_BG, ACCENT_BG_HOVER } from "./ui/colors";

const Header = () => {
  const [open, setOpen] = useState(false);
  const items = ["Features", "Pricing", "Exams", "Support"];
  const menuRef = useRef(null);
  const headerRef = useRef(null);
  const [menuTop, setMenuTop] = useState(0);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };

    // When menu opens, add ESC handler, lock body scroll, and trap focus
    let prevOverflow;
    let prevActiveElement = null;
    const focusableSelector =
      'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

    const onTab = (e) => {
      if (e.key !== "Tab") return;
      const menu = menuRef.current;
      if (!menu) return;
      const focusable = Array.from(
        menu.querySelectorAll(focusableSelector)
      ).filter((el) => el.offsetParent !== null);
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    if (open) {
      prevOverflow = document.body.style.overflow;
      prevActiveElement = document.activeElement;
      window.addEventListener("keydown", onKey);
      window.addEventListener("keydown", onTab);
      document.body.style.overflow = "hidden";

      // move focus into the menu
      requestAnimationFrame(() => {
        const menu = menuRef.current;
        if (!menu) return;
        const focusable = Array.from(
          menu.querySelectorAll(focusableSelector)
        ).filter((el) => el.offsetParent !== null);
        if (focusable.length) focusable[0].focus();
      });

      // compute menu top offset so the menu is fixed under the header
      const updateTop = () => {
        const hdr = headerRef.current;
        if (hdr) {
          const rect = hdr.getBoundingClientRect();
          setMenuTop(rect.bottom + window.scrollY);
        } else {
          setMenuTop(0);
        }
      };
      updateTop();
      window.addEventListener("resize", updateTop);
      window.addEventListener("scroll", updateTop);

      return () => {
        window.removeEventListener("keydown", onKey);
        window.removeEventListener("keydown", onTab);
        window.removeEventListener("resize", updateTop);
        window.removeEventListener("scroll", updateTop);
        document.body.style.overflow = prevOverflow || "";
        if (prevActiveElement && prevActiveElement.focus)
          prevActiveElement.focus();
      };
    }

    // cleanup if effect runs when not open
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("keydown", onTab);
    };
  }, [open]);

  return (
    <header ref={headerRef} className="bg-white shadow-md relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/" className="flex items-center space-x-2">
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
                SmartExam
              </span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 flex items-center md:hidden">
            <button
              onClick={() => setOpen(!open)}
              aria-expanded={open}
              aria-label="Toggle menu"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {open ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          <nav className="hidden md:flex space-x-10">
            {items.map((item) =>
              item === "Exams" ? (
                <Link
                  key={item}
                  href="/exam"
                  className={`${PRIMARY_TEXT} text-base font-medium hover:font-semibold transition duration-200 ease-in-out`}
                >
                  {item}
                </Link>
              ) : (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`${PRIMARY_TEXT} text-base font-medium hover:font-semibold transition duration-200 ease-in-out`}
                >
                  {item}
                </a>
              )
            )}
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

        {/* Backdrop (click to close) - starts below header so header isn't blurred */}
        <div
          className="fixed left-0 right-0 bottom-0 bg-black backdrop-blur-md z-40"
          style={{
            top: menuTop ? `${menuTop}px` : "0px",
            opacity: open ? 0.5 : 0,
            transition: "opacity 200ms ease",
            pointerEvents: open ? "auto" : "none",
          }}
          aria-hidden={!open}
          onClick={() => setOpen(false)}
        />

        {/* Mobile menu panel (animated, overlays content) - fixed under header */}
        <div
          ref={menuRef}
          role="dialog"
          aria-modal={open}
          className="md:hidden fixed left-0 right-0 bg-white shadow-lg overflow-hidden z-50"
          style={{
            top: menuTop ? `${menuTop}px` : "0px",
            maxHeight: open ? "600px" : "0px",
            opacity: open ? 1 : 0,
            transform: open ? "translateY(0)" : "translateY(-12px)",
            transition:
              "max-height 300ms ease, opacity 200ms ease, transform 200ms ease",
            willChange: "transform, opacity",
          }}
          aria-hidden={!open}
        >
          <div className="space-y-1 px-2 pt-2 pb-3">
            {items.map((item) =>
              item === "Exams" ? (
                <Link
                  key={item}
                  href="/exam"
                  onClick={() => setOpen(false)}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50"
                >
                  {item}
                </Link>
              ) : (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setOpen(false)}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50"
                >
                  {item}
                </a>
              )
            )}

            <Link
              href="/signin"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50"
              onClick={() => setOpen(false)}
            >
              Sign In
            </Link>
            <Link
              href="/register"
              className={`block mt-1 px-3 py-2 rounded-md text-base font-medium text-white ${ACCENT_BG} ${ACCENT_BG_HOVER}`}
              onClick={() => setOpen(false)}
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
