import { Menu, X } from "lucide-react";
import Image from "next/image";
import React, { useState, useEffect } from "react";

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = [
    { name: "What We Do", href: "#what-we-do" },
    // { name: "Approach", href: "#approach" },
    { name: "Framework", href: "#framework" },
    // { name: "Practice Areas", href: "#practices" },
    { name: "Contact", href: "#contact" },
  ];
  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled ? "shadow-lg" : ""
      }`}
      style={{
        backgroundColor: scrolled ? "rgba(10, 31, 68, 0.95)" : "transparent",
        borderBottom: scrolled ? "1px solid rgba(217, 217, 217, 0.1)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-24">
          <div className="flex items-center space-x-3">
            <Image
              src={"/blueSmallLogo.png"}
              alt={"exodus-logo"}
              width={150}
              height={100}
            />
          </div>

          <div className="hidden md:flex items-center space-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm transition-colors duration-300 hover:opacity-100"
                style={{
                  letterSpacing: "0.05em",
                  color: "#D9D9D9",
                  opacity: 0.7,
                }}
              >
                {item.name}
              </a>
            ))}
          </div>

          <button
            className="md:hidden"
            style={{ color: "#D9D9D9" }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div
          className="md:hidden"
          style={{
            backgroundColor: "rgba(10, 31, 68, 0.98)",
            borderTop: "1px solid rgba(217, 217, 217, 0.1)",
          }}
        >
          <div className="px-6 py-8 space-y-6">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-lg"
                style={{ letterSpacing: "0.05em", color: "#D9D9D9" }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
