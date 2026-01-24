"use client"
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";

export default function page() {
  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: "#0A1F44", color: "#D9D9D9" }}
      id="top"
    >
      <NavBar />
      <section className="relative min-h-screen flex items-center px-6 lg:px-12 pt-2"></section>
      <Footer />
    </div>
  );
}
