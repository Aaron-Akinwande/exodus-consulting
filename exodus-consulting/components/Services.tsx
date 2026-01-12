import React from 'react'

export default function Services() {
  return (
    <section
      id="what-we-do"
      className="py-32 px-6 lg:px-12"
      style={{ backgroundColor: "rgba(216, 207, 196, 0.05)" }}
    >
      <div className="max-w-7xl mx-auto">
        <div
          className="text-sm mb-6"
          style={{ letterSpacing: "0.15em", color: "#D15B12" }}
        >
          TRANSFORMATIONS
        </div>
        <h2
          className="text-4xl md:text-5xl lg:text-6xl font-light mb-20 max-w-3xl"
          style={{ color: "#ffffff" }}
        >
          What We Solve
        </h2>
        <div className="grid md:grid-cols-3 gap-1">
          {[
            {
              num: "01",
              title: "From Reactive HR",
              subtitle: "Intentional People Systems",
              desc: "Moving beyond firefighting to proactive, strategic people architecture that enables growth.",
            },
            {
              num: "02",
              title: "From Founder-Led Chaos",
              subtitle: "Structured Operating System",
              desc: "Building the governance, decision rights, and execution discipline that scales beyond the founder.",
            },
            {
              num: "03",
              title: "From Risk Exposure",
              subtitle: "Compliance & Governance",
              desc: "Creating clarity, documentation, and enterprise-grade systems that mitigate organizational risk.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-12 transition-all duration-500"
              style={{
                backgroundColor: "#0A1F44",
                border: "1px solid rgba(217, 217, 217, 0.1)",
              }}
            >
              <div
                className="text-5xl font-thin mb-6"
                style={{ color: "rgba(209, 91, 18, 0.3)" }}
              >
                {item.num}
              </div>
              <h3
                className="text-xl font-normal mb-4"
                style={{ lineHeight: "1.4", color: "#ffffff" }}
              >
                {item.title} →<br />
                <span style={{ color: "rgba(217, 217, 217, 0.7)" }}>
                  {item.subtitle}
                </span>
              </h3>
              <p
                className="text-sm"
                style={{
                  lineHeight: "1.6",
                  color: "rgba(217, 217, 217, 0.6)",
                }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
