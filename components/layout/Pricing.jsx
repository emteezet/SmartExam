"use client";

import React from "react";
import Link from "next/link";
import { Star, Check } from "lucide-react";
import {
  PRIMARY_BG,
  ACCENT_BG,
  ACCENT_BG_HOVER,
  PRIMARY_TEXT,
  ACCENT_TEXT,
} from "../ui/colors";

const PriceCard = ({ title, price, perks, featured }) => (
  <div
    className={`relative flex flex-col rounded-2xl p-8 border ${
      featured ? "border-indigo-200 shadow-2xl" : "border-gray-200"
    } bg-white`}
  >
    {featured && (
      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
        <div className="inline-flex items-center gap-2 bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow">
          <Star className="w-4 h-4" />
          Recommended
        </div>
      </div>
    )}

    <div className="mt-6 text-center">
      <h3 className={`text-xl font-semibold ${PRIMARY_TEXT}`}>{title}</h3>
      <div className="mt-4 flex items-baseline justify-center gap-2">
        <span className="text-4xl font-extrabold text-gray-900">{price}</span>
        <span className="text-sm text-gray-500">/month</span>
      </div>
      <p className="mt-3 text-sm text-gray-500">
        Billed monthly. Cancel anytime.
      </p>

      <ul className="mt-6 space-y-3 text-sm text-gray-600">
        {perks.map((p) => (
          <li key={p} className="flex items-start gap-3">
            <Check className={`w-5 h-5 mt-1 text-green-500 flex-shrink-0`} />
            <span>{p}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6">
        <Link
          href="/register"
          className={`inline-flex items-center justify-center w-full py-3 px-4 rounded-lg text-white font-medium ${
            featured ? PRIMARY_BG : ACCENT_BG
          } ${
            featured ? "hover:bg-indigo-700" : ACCENT_BG_HOVER
          } transition duration-150`}
        >
          {featured ? "Get Pro" : "Start Free"}
        </Link>
      </div>
    </div>
  </div>
);

const Pricing = () => {
  const tiers = [
    {
      title: "Starter",
      price: "$0",
      perks: ["100 practice questions", "Basic analytics", "Community support"],
      featured: false,
    },
    {
      title: "Pro",
      price: "$9.99",
      perks: [
        "Unlimited practice",
        "Detailed analytics",
        "Timed exams",
        "Progress tracking",
      ],
      featured: true,
    },
    {
      title: "Enterprise",
      price: "Contact",
      perks: ["Team management", "Custom content", "Priority support"],
      featured: false,
    },
  ];

  return (
    <section id="pricing" className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-10">
          <h2
            className={`text-base font-semibold tracking-wide uppercase ${ACCENT_TEXT}`}
          >
            Pricing
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Simple pricing for teams of all sizes
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Choose a plan that fits your study needs. Upgrade or cancel anytime.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-1 md:grid-cols-3">
          {tiers.map((t) => (
            <PriceCard key={t.title} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
