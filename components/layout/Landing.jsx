"use client";

import React from "react";
import Header from "../common/Header";
import Hero from "./Hero";
import Features from "./Features";
import DifferentiatorSection from "./DifferentiatorSection";
import ExamCategories from "./ExamCategories";
import AnalyticsShowcase from "./AnalyticsShowcase";
import Testimonials from "./Testimonials";
import FAQSection from "./FAQSection";
import Footer from "../common/Footer";

const Landing = () => (
  <div className="font-sans bg-gray-50 text-gray-800">
    <Header />
    <main>
      <Hero />
      <Features />
      <DifferentiatorSection />
      <ExamCategories />
      <AnalyticsShowcase />
      <Testimonials />
      <FAQSection />
    </main>
    <Footer />
  </div>
);

export default Landing;
