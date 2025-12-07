"use client";

import React from "react";
import Header from "../common/Header";
import Hero from "./Hero";
import Features from "./Features";
import Pricing from "./Pricing";
import FinalCTA from "./FinalCTA";
import Footer from "../common/Footer";

const Landing = () => (
  <div className="font-sans bg-gray-50 text-gray-800">
    <Header />
    <main>
      <Hero />
      <Features />
      <Pricing />
      <FinalCTA />
    </main>
    <Footer />
  </div>
);

export default Landing;
