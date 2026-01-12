"use client";

import Align from "@/components/Align";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import ProblemStatement from "@/components/ProblemStatement";
import Services from "@/components/Services";

export default function Home() {
  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: "#0A1F44", color: "#D9D9D9" }}
    >
      {/* Navigation */}
      <NavBar />

      {/* Hero Section */}
      <Hero />

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
