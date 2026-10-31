import React, { useState } from "react";
import { alignDimensions } from "./Constants";

export default function Align() {
  const [selected, setSelected] = useState(0);
  const dim = alignDimensions[selected];

  return (
    <section className="py-20 lg:py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div
          className="text-sm mb-4 uppercase"
          style={{ letterSpacing: "0.2em", color: "#D25A14" }}
        >
          The ALIGN Methodology
        </div>
        <h2
          className="text-4xl md:text-5xl font-light mb-5"
          style={{ color: "#0A2145" }}
        >
          Five dimensions, deliberately aligned
        </h2>
        <p className="max-w-[68ch] mb-9 text-lg" style={{ color: "#5a6b85" }}>
          ALIGN is EXODUS&apos; proprietary organizational operating system
          methodology. It provides a structured way to diagnose, design, and
          embed the systems that enable strategy to translate into sustained
          performance, so execution is consistent rather than accidental.
        </p>

        <div className="grid lg:grid-cols-[280px_1fr] gap-7 items-start">
          <div className="flex lg:flex-col flex-wrap gap-0 border-t lg:border-t-0 border-[#e3e8ef]">
            {alignDimensions.map((d, idx) => (
              <button
                key={d.letter}
                onClick={() => setSelected(idx)}
                className="text-left px-5 py-4 text-lg lg:text-xl font-light transition-colors duration-200"
                style={{
                  borderLeft: `3px solid ${
                    idx === selected ? "#D25A14" : "#e3e8ef"
                  }`,
                  backgroundColor: idx === selected ? "#0A2145" : "transparent",
                  color: idx === selected ? "#ffffff" : "#0A2145",
                }}
              >
                {d.letter} {d.name}
              </button>
            ))}
          </div>

          <div className="bg-white border border-[#e3e8ef] p-7 lg:p-9 grid md:grid-cols-2 gap-8">
            <div className="md:col-span-2">
              <h3
                className="text-3xl font-light mb-2"
                style={{ color: "#0A2145" }}
              >
                {dim.name}
              </h3>
              <p className="mb-3" style={{ color: "#5a6b85" }}>
                {dim.tagline}
              </p>
              <p style={{ color: "#5a6b85" }}>{dim.description}</p>
            </div>
            <div>
              <h4
                className="text-xs font-normal uppercase mb-3"
                style={{ letterSpacing: "0.16em", color: "#D25A14" }}
              >
                What this addresses
              </h4>
              <ul>
                {dim.addresses.map((item, i) => (
                  <li
                    key={i}
                    className="py-2.5 text-sm"
                    style={{ borderTop: "1px solid #e3e8ef", color: "#0A2145" }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4
                className="text-xs font-normal uppercase mb-3"
                style={{ letterSpacing: "0.16em", color: "#D25A14" }}
              >
                What changes
              </h4>
              <ul>
                {dim.changes.map((item, i) => (
                  <li
                    key={i}
                    className="py-2.5 text-sm"
                    style={{ borderTop: "1px solid #e3e8ef", color: "#0A2145" }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <p
          className="italic text-xl font-light mt-9 max-w-[60ch]"
          style={{ color: "#0A2145" }}
        >
          Together, these five dimensions form an integrated organizational
          operating system that enables clarity at the top and coherence
          across the organization.
        </p>
      </div>
    </section>
  );
}
