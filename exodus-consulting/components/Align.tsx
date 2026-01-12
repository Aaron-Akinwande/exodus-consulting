import React from 'react'

export default function Align() {
  return (
    <section id="framework" className="py-32 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div
            className="text-sm mb-6"
            style={{ letterSpacing: "0.15em", color: "#D15B12" }}
          >
            PROPRIETARY METHODOLOGY
          </div>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-light mb-6"
            style={{ color: "#ffffff" }}
          >
            The ALIGN Framework™
          </h2>
          <p
            className="text-xl max-w-3xl mx-auto font-light"
            style={{ color: "rgba(217, 217, 217, 0.8)" }}
          >
            Five enterprise-critical dimensions that anchor every engagement
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-1 mb-16">
          {[
            {
              letter: "A",
              title: "Aspiration",
              desc: "What are we trying to win at, and what does the strategy demand?",
              color: "#D15B12",
            },
            {
              letter: "L",
              title: "Leadership",
              desc: "Who decides, who owns outcomes, and how accountability flows?",
              color: "#4CA2A8",
            },
            {
              letter: "I",
              title: "Infrastructure",
              desc: "Structures, processes, systems, and governance",
              color: "#C5A880",
            },
            {
              letter: "G",
              title: "Growth Enablers",
              desc: "Talent, capability, performance, and incentives",
              color: "#4CA2A8",
            },
            {
              letter: "N",
              title: "Narrative",
              desc: "Culture, behaviors, and shared meaning",
              color: "#D15B12",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-8 transition-all duration-500"
              style={{
                backgroundColor: "#0d2550",
                border: "1px solid rgba(217, 217, 217, 0.1)",
              }}
            >
              <div
                className="text-6xl font-thin mb-6"
                style={{ color: `${item.color}40` }}
              >
                {item.letter}
              </div>
              <h4
                className="font-medium mb-3 text-lg"
                style={{ color: "#ffffff" }}
              >
                {item.title}
              </h4>
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

        <div className="text-center">
          <p
            className="text-lg italic font-light inline-block text-left pl-6"
            style={{
              color: "rgba(217, 217, 217, 0.8)",
              borderLeft: "2px solid #D15B12",
            }}
          >
            Misalignment across any dimension creates
            <br />
            execution drag, people risk, and leadership fatigue.
          </p>
        </div>
      </div>
    </section>
  );
}
