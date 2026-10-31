import React from "react";
import { engagementModels, osLayers } from "./Constants";

const approach = [
  {
    num: "01",
    title: "Engagement Philosophy",
    desc: "We meet organizations where they are, while building the systems required for sustainable performance. We prioritize clarity, practicality, and long-term impact over generic solutions or off-the-shelf frameworks.",
  },
  {
    num: "02",
    title: "Client Partnership Model",
    desc: "We co-create with leadership teams, reflecting organizational context, growth stage, and strategic priorities. Each engagement starts with a structured ALIGN diagnostic, so recommendations are relevant, prioritized, and executable.",
  },
  {
    num: "03",
    title: "Modular by Design",
    desc: "Engage on a single ALIGN dimension or across several. As priorities evolve, targeted add-ons let you scale the work as value becomes clear.",
  },
];

const dotLevels = [2, 4, 5];
const minHeights = ["lg:min-h-[340px]", "lg:min-h-[410px]", "lg:min-h-[470px]"];

export default function Philosophy() {
  return (
    <div>
      {/* Our Approach */}
      <section
        id="os-layers-approach"
        className="py-20 lg:py-24 px-6 lg:px-12"
        style={{ backgroundColor: "#f1f5f9" }}
      >
        <div className="max-w-7xl mx-auto">
          <div
            className="text-sm mb-4 uppercase"
            style={{ letterSpacing: "0.2em", color: "#D25A14" }}
          >
            Our Approach
          </div>
          <h2
            className="text-4xl md:text-5xl font-light mb-12"
            style={{ color: "#0A2145" }}
          >
            Built with you, scaled as value shows
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {approach.map((item) => (
              <div key={item.num}>
                <b
                  className="block font-extralight mb-3"
                  style={{ fontSize: "56px", color: "#4A9EA6", lineHeight: 1 }}
                >
                  {item.num}
                </b>
                <h3
                  className="text-2xl font-normal mb-2"
                  style={{ color: "#0A2145" }}
                >
                  {item.title}
                </h3>
                <p className="text-sm" style={{ color: "#5a6b85" }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OS Layers */}
      <section className="py-20 lg:py-24 px-6 lg:px-12" id="os-layers">
        <div className="max-w-7xl mx-auto">
          <div
            className="text-sm mb-4 uppercase"
            style={{ letterSpacing: "0.2em", color: "#D25A14" }}
          >
            Operating System Layers
          </div>
          <h2
            className="text-4xl md:text-5xl font-light mb-4"
            style={{ color: "#0A2145" }}
          >
            Six layers, engaged alone or together
          </h2>
          <p className="max-w-[68ch] mb-8 text-lg" style={{ color: "#5a6b85" }}>
            Our work is organized across six operating system layers aligned
            to the ALIGN methodology.
          </p>

          <div>
            {osLayers.map((layer, idx) => (
              <div
                key={layer.name}
                className="grid grid-cols-1 md:grid-cols-[60px_1.2fr_1fr] gap-y-2 md:gap-x-6 items-start py-6"
                style={{ borderTop: "1px solid #e3e8ef" }}
              >
                <small
                  className="text-xs"
                  style={{ color: "#D25A14", letterSpacing: "0.14em" }}
                >
                  {String(idx + 1).padStart(2, "0")}
                </small>
                <div>
                  <h3
                    className="text-xl font-normal mb-1"
                    style={{ color: "#0A2145" }}
                  >
                    {layer.name}
                  </h3>
                  <p className="text-sm" style={{ color: "#5a6b85" }}>
                    {layer.focus}
                  </p>
                </div>
                <div className="text-sm" style={{ color: "#0A2145" }}>
                  <strong>Typical outputs:</strong> {layer.outputs.join(", ")}
                  .
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section
        className="py-20 lg:py-24 px-6 lg:px-12"
        style={{ backgroundColor: "#f1f5f9" }}
      >
        <div className="max-w-7xl mx-auto">
          <div
            className="text-sm mb-4 uppercase"
            style={{ letterSpacing: "0.2em", color: "#D25A14" }}
          >
            Engagement Models
          </div>
          <h2
            className="text-4xl md:text-5xl font-light mb-12"
            style={{ color: "#0A2145" }}
          >
            Three ways to engage
          </h2>

          <div className="grid lg:grid-cols-3 gap-6 lg:items-end">
            {engagementModels.map((model, idx) => (
              <div
                key={model.name}
                className={`bg-white p-7 flex flex-col ${minHeights[idx]}`}
                style={{
                  border: "1px solid #e3e8ef",
                  borderTop: "4px solid #D25A14",
                }}
              >
                <small
                  className="text-xs"
                  style={{ color: "#D25A14", letterSpacing: "0.14em" }}
                >
                  {String(idx + 1).padStart(2, "0")}
                </small>
                <h3
                  className="text-2xl font-normal mt-2 mb-2"
                  style={{ color: "#0A2145" }}
                >
                  {model.name}
                </h3>
                <p
                  className="text-sm font-medium mb-3"
                  style={{ color: "#4A9EA6", letterSpacing: "0.02em" }}
                >
                  {model.scope}
                </p>
                <p className="text-sm mb-4" style={{ color: "#5a6b85" }}>
                  {model.description}
                </p>
                <div
                  className="text-sm pt-4 mt-auto"
                  style={{ borderTop: "1px solid #e3e8ef", color: "#0A2145" }}
                >
                  <strong>Ideal for:</strong> {model.ideal}
                </div>
                <div
                  className="mt-3.5 text-sm"
                  style={{ color: "#D25A14", letterSpacing: "0.3em" }}
                >
                  {"●".repeat(dotLevels[idx]) +
                    "○".repeat(5 - dotLevels[idx])}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
