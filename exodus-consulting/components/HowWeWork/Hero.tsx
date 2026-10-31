import React from "react";

const pills = ["Diagnostic-led", "Modular", "Grounded in execution"];

export default function Hero() {
  return (
    <section
      className="px-6 lg:px-12 pt-32 pb-20 lg:pt-36 lg:pb-24"
      style={{ backgroundColor: "#0A2145", color: "#ffffff" }}
    >
      <div className="max-w-7xl mx-auto">
        <div
          className="text-xs mb-4 uppercase"
          style={{ letterSpacing: "0.2em", color: "#D25A14" }}
        >
          How We Work
        </div>
        <h1
          className="text-5xl md:text-6xl lg:text-7xl font-light max-w-[16ch] mb-6"
          style={{ lineHeight: "1.1" }}
        >
          Designing the systems that make strategy executable
        </h1>
        <p
          className="text-lg md:text-xl max-w-[62ch] mb-8"
          style={{ color: "#c3cfe0" }}
        >
          EXODUS works with leadership teams to design and embed
          organizational operating systems that enable strategy to translate
          into sustained performance, ensuring clarity at the top and
          coherence across the organization.
        </p>
        <div className="flex gap-2.5 flex-wrap">
          {pills.map((p) => (
            <span
              key={p}
              className="rounded-full px-4.5 py-2 text-xs uppercase"
              style={{
                border: "1px solid rgba(255,255,255,0.4)",
                letterSpacing: "0.12em",
              }}
            >
              {p}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
