import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <section className="relative px-6 lg:px-12 pt-32 pb-16 lg:pt-36 lg:pb-20">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.15fr_.85fr] gap-12 lg:gap-14 items-center">
        <div>
          <div
            className="inline-block mb-7 px-4 py-2 rounded-full text-xs uppercase"
            style={{
              border: "1px solid #0A2145",
              letterSpacing: "0.18em",
              color: "#0A2145",
            }}
          >
            Strategy &amp; People Advisory
          </div>
          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-light mb-2"
            style={{ lineHeight: "1.08", color: "#0A2145" }}
          >
            Your OS for{" "}
            <span className="font-normal italic" style={{ color: "#4A9EA6" }}>
              Growth and
            </span>{" "}
            Organizational Excellence
          </h1>
          <div className="flex items-center gap-4 mt-7 mb-6">
            <div
              className="h-px w-10"
              style={{ backgroundColor: "#D25A14" }}
            ></div>
            <p
              className="text-lg md:text-xl font-light"
              style={{ letterSpacing: "0.04em", color: "#0A2145" }}
            >
              Precision. People. Performance.
            </p>
          </div>
          <p
            className="text-base md:text-lg mb-8 max-w-[44ch] font-light"
            style={{ lineHeight: "1.7", color: "#5a6b85" }}
          >
            We help leadership teams design the operating systems that make
            strategy executable.
          </p>
          <div className="flex flex-col sm:flex-row gap-3.5 flex-wrap">
            <a
              target="_blank"
              href="https://calendly.com/exodusconsulting/30min"
              className="inline-flex items-center justify-center rounded-sm px-7 py-4 font-medium transition-all duration-300"
              style={{
                backgroundColor: "#D25A14",
                color: "#ffffff",
                letterSpacing: "0.05em",
              }}
            >
              <span>Start a Conversation</span>
              <ArrowRight className="ml-3" size={18} />
            </a>
            <a
              href="#what-we-do"
              className="inline-flex items-center justify-center rounded-sm px-7 py-4 font-medium transition-all duration-300"
              style={{
                border: "1px solid #0A2145",
                color: "#0A2145",
                letterSpacing: "0.05em",
              }}
            >
              Explore Our Approach
            </a>
          </div>
        </div>
        <div className="relative mr-0 lg:mr-6">
          <div
            className="absolute pointer-events-none"
            style={{ inset: "28px -22px -22px 28px", border: "1px solid #4A9EA6" }}
          />
          <div className="relative overflow-hidden" style={{ aspectRatio: "4/5" }}>
            <Image
              src="/images/hero-conversation.jpg"
              alt="Consultant in conversation with colleagues"
              fill
              sizes="(min-width: 1024px) 480px, 100vw"
              className="object-cover"
              style={{ objectPosition: "50% 32%" }}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
