"use client";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import ServicesPage from "@/components/Services/ServicesPage";

export default function page() {
  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: "#ffffff", color: "#0A2145" }}
      id="top"
    >
      <NavBar />
      <div className="pt-20">
        <ServicesPage />
      </div>
      <Footer />
    </div>
  );
}
