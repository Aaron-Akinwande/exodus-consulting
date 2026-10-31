"use client";

import AboutPage from "@/components/About/AboutPage";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";

export default function page() {
  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: "#ffffff", color: "#0A2145" }}
      id="top"
    >
      <NavBar />
      <div className="pt-20">
        <AboutPage />
      </div>
      <Footer />
    </div>
  );
}
