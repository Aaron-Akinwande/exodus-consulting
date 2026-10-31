import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function CTA() {
  return (
    <section
      id="contact"
      className="relative text-center py-28 lg:py-36 px-6 lg:px-12 overflow-hidden"
    >
      <Image
        src="/images/cta-skyline.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
        style={{ objectPosition: "50% 55%" }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(rgba(10,33,69,.78),rgba(10,33,69,.9))",
        }}
      />
      <div className="max-w-4xl mx-auto relative z-10">
        <h2
          className="text-5xl md:text-6xl lg:text-7xl font-light mb-5"
          style={{ lineHeight: "1.15", color: "#ffffff" }}
        >
          Ready to Build{" "}
          <span className="italic" style={{ color: "#7cc4ca" }}>
            Your Operating System?
          </span>
        </h2>
        <p className="text-xl mb-10 font-light" style={{ color: "#c3cfe0" }}>
          Let&apos;s discuss how EXODUS can help your organization move from
          complexity to clarity.
        </p>
        <a
          target="_blank"
          href="https://calendly.com/exodusconsulting/30min"
          className="inline-flex items-center justify-center rounded-sm px-10 py-5 font-medium transition-all duration-300"
          style={{
            backgroundColor: "#D25A14",
            color: "#ffffff",
            letterSpacing: "0.05em",
          }}
        >
          <span>Schedule a Consultation</span>
          <ArrowRight className="ml-3" size={20} />
        </a>
      </div>
    </section>
  );
}
