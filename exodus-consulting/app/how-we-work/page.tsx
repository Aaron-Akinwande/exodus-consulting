"use client";
import Footer from "@/components/Footer";
import Content from "@/components/HowWeWork/Content";
import NavBar from "@/components/NavBar";

export default function page() {
  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: "#0A1F44", color: "#D9D9D9" }}
    >
      <NavBar />
      <div>
        <Content />
      </div>
      <Footer />
    </div>
  );
}
