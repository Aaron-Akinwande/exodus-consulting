import React from "react";

const dims = [
  { letter: "A", title: "Aspiration", desc: "Where we win" },
  { letter: "L", title: "Leadership", desc: "Who decides and owns" },
  { letter: "I", title: "Infrastructure", desc: "Systems and governance" },
  { letter: "G", title: "Growth Enablers", desc: "Talent and incentives" },
  { letter: "N", title: "Narrative", desc: "Culture and shared meaning" },
];

export default function Align() {
  return (
    <section
      id="framework"
      className="py-24 lg:py-28 px-6 lg:px-12 text-center"
      style={{ backgroundColor: "#0A2145", color: "#ffffff" }}
    >
      <div className="max-w-7xl mx-auto">
        <div
          className="text-sm mb-4 uppercase"
          style={{ letterSpacing: "0.2em", color: "#D25A14" }}
        >
          Proprietary Methodology
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-3">
          The ALIGN Framework
          <sup className="text-xl md:text-2xl" style={{ color: "#D25A14" }}>
            ™
          </sup>
        </h2>
        <p className="mb-12" style={{ color: "#aebbd1" }}>
          Five dimensions behind every engagement
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3.5">
          {dims.map((d, idx) => (
            <div
              key={idx}
              className="p-7 transition-colors duration-200 border border-white/[0.16] bg-[#12294f] hover:border-[#4A9EA6]"
            >
              <span
                className="block text-5xl font-light mb-3"
                style={{ color: "#4A9EA6", lineHeight: 1 }}
              >
                {d.letter}
              </span>
              <b className="block font-normal mb-1">{d.title}</b>
              <i className="not-italic text-xs" style={{ color: "#aebbd1" }}>
                {d.desc}
              </i>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
