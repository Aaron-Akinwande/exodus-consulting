import Image from "next/image";
import React from "react";
import { processSteps } from "./Constants";

export default function Diagnostic() {
  return (
    <div>
      {/* The EXODUS Diagnostic */}
      <section style={{ backgroundColor: "#0A2145", color: "#ffffff" }}>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center px-6 lg:px-12 py-20 lg:py-24">
          <div>
            <div
              className="text-sm mb-4 uppercase"
              style={{ letterSpacing: "0.2em", color: "#D25A14" }}
            >
              The EXODUS Diagnostic
            </div>
            <h2 className="text-4xl md:text-5xl font-light mb-5">
              Every engagement begins here
            </h2>
            <p className="mb-4 text-lg" style={{ color: "#c3cfe0" }}>
              Powered by the ALIGN methodology, the diagnostic combines
              questionnaires, leadership interviews, document reviews, and
              staff inputs to produce both quantitative and qualitative
              insights.
            </p>
            <p className="mb-4 text-lg" style={{ color: "#c3cfe0" }}>
              It highlights execution risks, identifies root causes, and
              prioritizes interventions between quick wins and longer-term
              strategic initiatives.
            </p>
            <p className="text-lg" style={{ color: "#c3cfe0" }}>
              Findings determine scope, sequencing, and the selection of
              add-ons.
            </p>
          </div>
          <div className="relative" style={{ aspectRatio: "4/3" }}>
            <Image
              src="/images/diagnostic-analyst.jpg"
              alt="Analyst reviewing diagnostic dashboards"
              fill
              sizes="(min-width: 1024px) 560px, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 lg:py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div
            className="text-sm mb-4 uppercase"
            style={{ letterSpacing: "0.2em", color: "#D25A14" }}
          >
            Our Process
          </div>
          <h2
            className="text-4xl md:text-5xl font-light mb-14"
            style={{ color: "#0A2145" }}
          >
            A clear, structured path
          </h2>

          <div className="grid md:grid-cols-5 gap-8 md:gap-6">
            {processSteps.map((step, idx) => (
              <div
                key={step.num}
                className="relative pt-8"
                style={{ borderTop: "1px solid #e3e8ef" }}
              >
                <div
                  className="absolute -top-4 left-0 w-8 h-8 rounded-full flex items-center justify-center text-sm"
                  style={{ backgroundColor: "#D25A14", color: "#ffffff" }}
                >
                  {idx + 1}
                </div>
                <b
                  className="block font-normal text-lg mb-1.5"
                  style={{ color: "#0A2145" }}
                >
                  {step.title}
                </b>
                <span className="text-sm" style={{ color: "#5a6b85" }}>
                  {step.desc}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section
        className="text-center py-20 px-6 lg:px-12"
        style={{ backgroundColor: "#0A2145", color: "#ffffff" }}
      >
        <h2 className="text-3xl md:text-4xl font-light mb-7">
          Begin with a diagnostic
        </h2>
        <a
          href="/contact"
          className="inline-flex items-center justify-center rounded-sm px-8 py-4 font-medium transition-all duration-300"
          style={{
            backgroundColor: "#D25A14",
            color: "#ffffff",
            letterSpacing: "0.05em",
          }}
        >
          Start with a Diagnostic →
        </a>
      </section>
    </div>
  );
}
