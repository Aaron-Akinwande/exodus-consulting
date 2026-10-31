import Image from "next/image";
import React from "react";

const pills = ["Diagnostic-led", "Modular", "Grounded in execution"];

export default function Hero() {
  return (
    <section
      className="px-6 lg:px-12 pt-32 pb-20 lg:pt-36 lg:pb-24"
      style={{ backgroundColor: "#0A2145", color: "#ffffff" }}
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.1fr_.9fr] gap-12 lg:gap-14 items-center">
        <div>
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
            organizational operating systems that enable strategy to
            translate into sustained performance, ensuring clarity at the top
            and coherence across the organization.
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
        <div className="relative mr-0 lg:mr-6">
          <div
            className="absolute pointer-events-none"
            style={{ inset: "28px -22px -22px 28px", border: "1px solid #4A9EA6" }}
          />
          <div className="relative overflow-hidden" style={{ aspectRatio: "4/5" }}>
            <Image
              src="/images/how-we-work-hero-v2.jpg"
              alt="Team collaborating around a table during a strategy session"
              fill
              sizes="(min-width: 1024px) 420px, 100vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
