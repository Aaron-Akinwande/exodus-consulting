"use client";

import Align from "@/components/Home/Align";
import CTA from "@/components/Home/CTA";
import Footer from "@/components/Footer";
import Hero from "@/components/Home/Hero";
import NavBar from "@/components/NavBar";
import ProblemStatement from "@/components/Home/ProblemStatement";
import Services from "@/components/Home/Services";
import Strip from "@/components/Strip";

export default function Home() {
  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: "#ffffff", color: "#0A2145" }}
      id="top"
    >
      {/* Navigation */}
      <NavBar />

      {/* Hero Section */}
      <Hero />

      {/* Engagement Stats */}
      <Strip />

      {/* Problem Statement */}
      <ProblemStatement />

      {/* What We Do */}
      <Services />

      {/* ALIGN Framework */}
      <Align />

      {/* CTA Section */}
      <CTA />

      {/* Footer */}
      <Footer />
    </div>
  );
}
