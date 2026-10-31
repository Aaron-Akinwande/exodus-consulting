import React from "react";

const items = [
  { label: "Diagnostic Sprints", value: "4 to 6 weeks" },
  { label: "Design Engagements", value: "8 to 12 weeks" },
  { label: "Transformation Programs", value: "6 to 12 months" },
  { label: "Executive Advisory", value: "Retainer" },
];

export default function Strip() {
  return (
    <section
      style={{
        backgroundColor: "#f1f5f9",
        borderTop: "1px solid #e3e8ef",
        borderBottom: "1px solid #e3e8ef",
      }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4">
        {items.map((item, idx) => (
          <div
            key={idx}
            className={`px-5 py-6 text-sm border-[#e3e8ef] ${
              idx === 0 || idx === 2 ? "border-l-0" : "border-l"
            } ${idx === 2 ? "md:border-l" : ""}`}
            style={{ color: "#5a6b85" }}
          >
            <b
              className="block font-normal text-lg mb-1"
              style={{ color: "#0A2145" }}
            >
              {item.label}
            </b>
            {item.value}
          </div>
        ))}
      </div>
    </section>
  );
}
