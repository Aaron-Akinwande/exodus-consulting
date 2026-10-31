import React from "react";
import Strip from "@/components/Strip";

export default function ContactPage() {
  return (
    <div style={{ backgroundColor: "#ffffff" }}>
      {/* Header */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 pt-10 pb-12 lg:pt-14">
        <div
          className="text-sm mb-4 uppercase"
          style={{ letterSpacing: "0.2em", color: "#D25A14" }}
        >
          Contact
        </div>
        <h1
          className="text-5xl md:text-6xl lg:text-7xl font-light mb-6 max-w-[14ch]"
          style={{ lineHeight: "1.1", color: "#0A2145" }}
        >
          Start a <span className="italic" style={{ color: "#4A9EA6" }}>conversation</span>
        </h1>
        <p className="text-lg md:text-xl max-w-[60ch]" style={{ color: "#5a6b85" }}>
          If you are navigating growth, complexity, or execution challenges,
          we can help you design the systems required to support your
          strategy.
        </p>
      </section>

      {/* CTA Grid */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 pb-10">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Primary CTA */}
          <div
            className="p-10 md:p-12 text-center"
            style={{ backgroundColor: "#0A2145", color: "#ffffff" }}
          >
            <div
              className="text-xs uppercase mb-5"
              style={{ letterSpacing: "0.15em", color: "#D25A14" }}
            >
              Primary Option
            </div>
            <h2 className="text-2xl md:text-3xl font-light mb-5">
              Start with a Diagnostic
            </h2>
            <p className="text-base mb-8" style={{ color: "#c3cfe0" }}>
              Begin with a comprehensive assessment of your organizational
              operating system to identify key leverage points for
              improvement.
            </p>
            <a target="_blank" href="https://calendly.com/exodusconsulting/30min">
              <button
                className="px-10 py-3.5 text-sm font-medium cursor-pointer transition-all duration-300"
                style={{
                  backgroundColor: "#D25A14",
                  color: "#ffffff",
                  letterSpacing: "0.05em",
                }}
              >
                Start Diagnostic
              </button>
            </a>
          </div>

          {/* Secondary CTA */}
          <div
            className="p-10 md:p-12 text-center"
            style={{ backgroundColor: "#f1f5f9" }}
          >
            <div
              className="text-xs uppercase mb-5"
              style={{ letterSpacing: "0.15em", color: "#D25A14" }}
            >
              Alternative Option
            </div>
            <h2
              className="text-2xl md:text-3xl font-light mb-5"
              style={{ color: "#0A2145" }}
            >
              Schedule a Conversation
            </h2>
            <p className="text-base mb-8" style={{ color: "#5a6b85" }}>
              Connect with our team to discuss your specific challenges and
              explore how we can support your organization&apos;s needs.
            </p>
            <a target="_blank" href="https://calendly.com/exodusconsulting/30min">
              <button
                className="px-10 py-3.5 text-sm font-medium cursor-pointer transition-all duration-300"
                style={{
                  border: "1px solid #4A9EA6",
                  color: "#4A9EA6",
                  letterSpacing: "0.05em",
                }}
              >
                Schedule Now
              </button>
            </a>
          </div>
        </div>
        <p className="mt-8 text-base" style={{ color: "#5a6b85" }}>
          Or write to us directly at{" "}
          <a
            href="mailto:hello@exodusconsults.com"
            style={{ color: "#0A2145", borderBottom: "1px solid #D25A14" }}
          >
            hello@exodusconsults.com
          </a>
        </p>
      </section>

      {/* Trust Indicators */}
      <section
        className="py-20 px-6 lg:px-12"
        style={{ borderTop: "1px solid #e3e8ef" }}
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 text-center">
          <div>
            <div
              className="text-5xl md:text-6xl font-light mb-2"
              style={{ color: "#D25A14" }}
            >
              48hr
            </div>
            <div className="text-lg font-medium" style={{ color: "#5a6b85" }}>
              Response Time
            </div>
          </div>
          <div>
            <div
              className="text-5xl md:text-6xl font-light mb-2"
              style={{ color: "#D25A14" }}
            >
              8+
            </div>
            <div className="text-lg font-medium" style={{ color: "#5a6b85" }}>
              Years across EMEA, LATAM
              <br />& Globally Distributed Teams
            </div>
          </div>
          <div>
            <div
              className="text-5xl md:text-6xl font-light mb-2"
              style={{ color: "#D25A14" }}
            >
              100%
            </div>
            <div className="text-lg font-medium" style={{ color: "#5a6b85" }}>
              Confidential
            </div>
          </div>
        </div>
      </section>

      {/* Engagement Types */}
      <Strip />
    </div>
  );
}
