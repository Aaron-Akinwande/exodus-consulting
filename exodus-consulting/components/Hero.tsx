import { ArrowRight } from 'lucide-react';
import React from 'react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center px-6 lg:px-12">
      <div className="max-w-7xl mx-auto w-full pt-24">
        <div className="max-w-5xl">
          <div
            className="inline-block mb-8 px-4 py-2 rounded-full text-xs"
            style={{
              border: "1px solid rgba(217, 217, 217, 0.3)",
              letterSpacing: "0.15em",
              color: "rgba(217, 217, 217, 0.8)",
            }}
          >
            STRATEGY & PEOPLE ADVISORY
          </div>
          <h1
            className="text-6xl md:text-7xl lg:text-8xl font-light mb-8"
            style={{ lineHeight: "1.1", color: "#ffffff" }}
          >
            Your OS for
            <br />
            <span className="font-normal italic" style={{ color: "#4CA2A8" }}>
              Growth and
            </span>
            <br />
            Organizational
            <br />
            Excellence
          </h1>
          <div className="flex items-center space-x-8 mb-12">
            <div
              className="h-px w-16"
              style={{ backgroundColor: "#D15B12" }}
            ></div>
            <p
              className="text-xl md:text-2xl font-light"
              style={{ letterSpacing: "0.05em", color: "#D9D9D9" }}
            >
              Precision. People. Performance.
            </p>
          </div>
          <p
            className="text-lg md:text-xl mb-12 max-w-3xl font-light"
            style={{ lineHeight: "1.8", color: "rgba(217, 217, 217, 0.8)" }}
          >
            We operate at the intersection of strategy, people, systems, and
            execution—helping leadership teams design the organizational
            operating systems that make business strategy truly executable.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-10 py-5 font-medium transition-all duration-300"
              style={{
                backgroundColor: "#D15B12",
                color: "#ffffff",
                letterSpacing: "0.05em",
              }}
            >
              <span>Start a Conversation</span>
              <ArrowRight className="ml-3" size={20} />
            </a>
            <a
              href="#what-we-do"
              className="inline-flex items-center justify-center px-10 py-5 font-medium transition-all duration-300"
              style={{
                border: "1px solid rgba(217, 217, 217, 0.4)",
                color: "#D9D9D9",
                letterSpacing: "0.05em",
              }}
            >
              Explore Our Approach
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
