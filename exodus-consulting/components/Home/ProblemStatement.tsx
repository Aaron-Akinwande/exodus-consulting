import { Minus } from 'lucide-react';
import React from 'react'

export default function ProblemStatement() {
  return (
    <section className="py-32 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <div
              className="text-sm mb-6"
              style={{ letterSpacing: "0.15em", color: "#D15B12" }}
            >
              THE CHALLENGE
            </div>
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-light mb-8"
              style={{ lineHeight: "1.2", color: "#ffffff" }}
            >
              When Business
              <br />
              Ambition Outgrows
              <br />
              <span className="italic" style={{ color: "#4CA2A8" }}>
                Internal Systems
              </span>
            </h2>
          </div>
          <div className="space-y-8 pt-8">
            {[
              "Strategy is clear but execution is inconsistent",
              "Growth has outpaced structure and decision-making",
              "People systems are fragmented or overly manual",
              "Leadership carries too many decisions personally",
              "Compliance risk increases with scale or multi-country operations",
            ].map((text, i) => (
              <div key={i} className="flex items-start space-x-4">
                <Minus
                  className="mt-1 shrink-0"
                  size={20}
                  style={{ color: "rgba(209, 91, 18, 0.5)" }}
                />
                <p
                  className="text-lg"
                  style={{ color: "rgba(217, 217, 217, 0.7)" }}
                >
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div
          className="mt-20 pt-12"
          style={{ borderTop: "1px solid rgba(217, 217, 217, 0.1)" }}
        >
          <p
            className="text-2xl md:text-3xl font-light max-w-4xl"
            style={{ color: "#ffffff" }}
          >
            We help organizations move from complexity to clarity,
            <br />
            and from intent to{" "}
            <span className="italic" style={{ color: "#D15B12" }}>
              impact
            </span>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
