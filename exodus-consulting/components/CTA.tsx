import { ArrowRight } from "lucide-react";
import React from "react";

export default function CTA() {
  return (
    <section id="contact" className="pb-28 px-6 lg:px-12 relative">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2
          className="text-5xl md:text-6xl lg:text-7xl font-light mb-8"
          style={{ lineHeight: "1.2", color: "#ffffff" }}
        >
          Ready to Build
          <br />
          Your Operating System?
        </h2>
        <p
          className="text-xl mb-12 font-light"
          style={{ color: "rgba(217, 217, 217, 0.8)" }}
        >
          Let&apos;s discuss how EXODUS can help your organization
          <br />
          move from complexity to clarity.
        </p>
        <a
          target="_blank"
          href="https://calendly.com/exodusconsulting26/30min"
          className="inline-flex items-center justify-center rounded-lg px-12 py-6 font-medium transition-all duration-300"
          style={{
            backgroundColor: "#D15B12",
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
