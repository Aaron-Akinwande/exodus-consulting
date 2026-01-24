import { Menu, X } from "lucide-react";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";


export default function NavBar() {
  const pathname = usePathname();

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
    { name: " Home", href: "/" },
    { name: "How We Work", href: "/how-we-work" },
    { name: "Our Services", href: "/services" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/#contact" },
    // { name: "What We Do", href: "#what-we-do" },
    // { name: "Framework", href: "#framework" },
    // { name: "Approach", href: "#approach" },
    // { name: "Practice Areas", href: "#practices" },
  ];
  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled ? "shadow-lg" : ""
      }`}
      style={{
        backgroundColor: "rgba(10, 31, 68)",
        borderBottom: "1px solid rgba(217, 217, 217)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-24">
          <div className="flex items-center space-x-3 rounded-lg overflow-hidden">
            <a href="#top" aria-label="Back to top">
              <Image
                src="/whiteSmallLogo.png"
                alt="exodus-logo"
                width={120}
                height={80}
              />
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-12">
            {navigation.map((item) => {
              const isActive = pathname === item.href;

              return (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm transition-all duration-300"
                  style={{
                    letterSpacing: "0.05em",
                    color: "#D9D9D9",
                    opacity: isActive ? 1 : 0.6,
                    borderBottom: isActive ? "2px solid #D9D9D9" : "none",
                    paddingBottom: "4px",
                  }}
                >
                  {item.name}
                </a>
              );
            })}
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
            {navigation.map((item) => {
              const isActive = pathname === item.href;

              return (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-lg"
                  style={{
                    letterSpacing: "0.05em",
                    color: "#D9D9D9",
                    opacity: isActive ? 1 : 0.7,
                  }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
