"use client";

import Align from "@/components/Home/Align";
import CTA from "@/components/Home/CTA";
import Footer from "@/components/Footer";
import Hero from "@/components/Home/Hero";
import NavBar from "@/components/NavBar";
import ProblemStatement from "@/components/Home/ProblemStatement";
import Services from "@/components/Home/Services";
// import Align from "@/components/HowWeWork/Align";

export default function Home() {
  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: "#0A1F44", color: "#D9D9D9" }}
      id="top"
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
      {/* <Align /> */}
      <Align />

      {/* CTA Section */}
      <CTA />

      {/* Footer */}
      <Footer />
    </div>
  );
}
