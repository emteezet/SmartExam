"use client";

import React from "react";
import { ChartBar, Smartphone, CheckCircle } from "lucide-react";
import { PRIMARY_BG, ACCENT_TEXT } from "./ui/colors";

const FeatureItem = ({ icon: Icon, title, description }) => (
  <div className="relative p-6 bg-gray-50 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
    <dt>
      <div
        className={`absolute flex items-center justify-center h-12 w-12 rounded-full ${PRIMARY_BG} text-white shadow-md`}
      >
        <Icon className="h-6 w-6" aria-hidden="true" />
      </div>
      <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
        {title}
      </p>
    </dt>
    <dd className="mt-2 ml-16 text-base text-gray-500">{description}</dd>
  </div>
);

const Features = () => {
  const featureData = [
    {
      icon: ChartBar,
      title: "Instant Performance Analytics",
      description:
        "Get immediate results and detailed breakdown of your strengths and weaknesses by topic area.",
    },
    {
      icon: Smartphone,
      title: "Access Anytime, Anywhere",
      description:
        "Seamlessly switch between desktop and mobile devices. Your progress is always synchronized.",
    },
    {
      icon: CheckCircle,
      title: "High-Quality Question Bank",
      description:
        "Thousands of questions, regularly updated and verified by subject matter experts to match current standards.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2
            className={`${ACCENT_TEXT} text-base font-semibold tracking-wide uppercase`}
          >
            Why Choose Us?
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            A Platform Built for Your Success
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
            {featureData.map((feature) => (
              <FeatureItem key={feature.title} {...feature} />
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};

export default Features;
