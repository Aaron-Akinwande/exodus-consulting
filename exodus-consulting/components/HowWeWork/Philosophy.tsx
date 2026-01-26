import React from "react";
import { engagementModels, osLayers } from "./Constants";
import { ChevronRight } from "lucide-react";

export default function Philosophy() {
  return (
    <div>
      {" "}
      {/* Philosophy */}
      {/* <section className="px-12 py-20 ">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="text-xs tracking-widest text-orange-600 mb-5 font-semibold">
              CORE PRINCIPLES
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 tracking-tight">
              Our Engagement Philosophy
            </h2>
            <div className="h-px w-20 bg-orange-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px ">
            {[
              {
                title: "Meet You Where You Are",
                desc: "Engagements designed to meet organizations where they are, while building systems for sustainable performance",
              },
              {
                title: "Clarity Over Generic Solutions",
                desc: "We prioritize clarity, practicality, and long-term impact over generic solutions or off-the-shelf frameworks",
              },
              {
                title: "Intentional Execution",
                desc: "Our work focuses on deliberate alignment across ALIGN dimensions so execution becomes intentional rather than accidental",
              },
              {
                title: "Co-Creation Partnership",
                desc: "We work in close partnership with leadership teams, co-creating solutions that reflect organizational context and priorities",
              },
              {
                title: "Diagnostic-Led",
                desc: "Each engagement is grounded in structured diagnostics, ensuring recommendations are relevant, prioritized, and executable",
              },
              {
                title: "Modular by Design",
                desc: "All engagements are modular. Engage on a single dimension or across multiple, expanding as priorities evolve",
              },
            ].map((principle, i) => (
              <div
                key={i}
                className="p-12 border transition-all duration-300 hover:shadow-lg"
              >
                <h3 className="text-lg font-medium mb-4 text-orange-600 tracking-tight">
                  {principle.title}
                </h3>
                <p className="text-sm leading-relaxed font-light">
                  {principle.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section> */}
      {/* OS Layers */}
      <section className="px-12 py-20 ">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="text-xs tracking-widest text-orange-600 mb-5 font-semibold">
              ORGANIZATIONAL OS LAYERS
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-5  tracking-tight">
              Six Operating System Layers
            </h2>
            <div className="h-px w-20 bg-orange-600 mx-auto mb-7"></div>
            <p className="text-lg max-w-3xl mx-auto  font-light leading-relaxed">
              Aligned to the ALIGN methodology. Each layer can be engaged
              independently or as part of a broader operating system
              partnership.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {osLayers.map((layer, idx) => (
              <div
                key={idx}
                className="p-12 bg-slate-300 border border-slate-900/8 transition-all duration-300 hover:shadow-md"
              >
                <div className="flex items-start gap-5 mb-6">
                  <div className="w-14 h-14 bg-orange-600 text-white flex items-center justify-center text-xl font-light shrink-0">
                    {idx + 1}
                  </div>
                  <h3 className="text-xl font-medium text-slate-900 leading-snug mt-2">
                    {layer.name}
                  </h3>
                </div>
                <p className="text-sm text-slate-900 mb-6 leading-relaxed opacity-70 font-light">
                  {layer.focus}
                </p>
                <div className="pt-6 border-t border-slate-900/10">
                  <h4 className="text-xs font-bold tracking-widest text-teal-500 mb-4">
                    TYPICAL OUTPUTS
                  </h4>
                  {layer.outputs.map((output, i) => (
                    <div key={i} className="flex gap-3 mb-3">
                      <ChevronRight
                        size={16}
                        className="text-teal-500 mt-0.5 shrink-0"
                      />
                      <span className="text-sm text-slate-900 leading-normal font-light">
                        {output}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Engagement Models */}
      <section className="px-12 py-20 ">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="text-xs tracking-widest text-orange-600 mb-5 font-semibold">
              ENGAGEMENT OPTIONS
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight">
              Three Engagement Models
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {engagementModels.map((model, idx) => (
              <div
                key={idx}
                className={`p-14 bg-slate-300 relative transition-all duration-300 ${
                  model.popular
                    ? "border-2 border-orange-600"
                    : "border border-slate-900/10"
                }`}
              >
                {model.popular && (
                  <div className="absolute top-6 right-6 px-4 py-1.5 bg-orange-600 text-white text-xs font-bold tracking-wider rounded-sm">
                    MOST COMMON
                  </div>
                )}
                <h3 className="text-2xl font-normal mb-4 text-slate-900 tracking-tight">
                  {model.name}
                </h3>
                <p className="text-sm text-teal-500 mb-5 font-medium tracking-wide">
                  {model.scope}
                </p>
                <p className="text-base leading-relaxed text-slate-900 mb-7 opacity-75 font-light">
                  {model.description}
                </p>
                <div className="p-6 bg-teal-500/6 border-l-4 border-teal-500">
                  <p className="text-sm text-slate-900 leading-relaxed font-light">
                    <strong className="text-teal-500 font-semibold">
                      Ideal for:
                    </strong>{" "}
                    {model.ideal}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
