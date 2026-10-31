"use client";
import Footer from "@/components/Footer";
import Content from "@/components/HowWeWork/Content";
import NavBar from "@/components/NavBar";

export default function page() {
  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: "#ffffff", color: "#0A2145" }}
    >
      <NavBar />
      <div>
        <Content />
      </div>
      <Footer />
    </div>
  );
}
