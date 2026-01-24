import React, { useState } from "react";
import {  Check, ChevronRight, Minus } from "lucide-react";
import { alignDimensions, engagementModels, osLayers, processSteps } from "./Constants";

export default function Content() {
  const [selectedDimension, setSelectedDimension] = useState(0);



  return (
    <div className="min-h-screen ">
      {/* Hero */}
      <section className="px-12 py-32 bg-linear-to-br from-white via-slate-50 to-white relative overflow-hidden">
        <div className="absolute top-[10%] right-[-10%] w-150 h-150 bg-teal-500/8 rounded-full pointer-events-none blur-3xl"></div>
        <div className="absolute bottom-[20%] left-[-15%] w-125 h-125 bg-slate-900/4 rounded-full pointer-events-none blur-3xl"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-4xl">
            <div className="inline-block mb-8 px-5 py-2 bg-orange-600/8 rounded text-orange-600 text-xs font-semibold tracking-widest">
              OUR APPROACH
            </div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-light leading-tight mb-8 text-slate-900 tracking-tight">
              How We Work
            </h1>
            <div className="h-0.5 w-20 bg-orange-600 mb-8"></div>
            <p className="text-2xl font-light leading-relaxed text-slate-900/80 max-w-3xl">
              Designing the systems that make strategy executable
            </p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="px-12 py-32 bg-white">
        <div className="max-w-5xl mx-auto">
          <p className="text-xl leading-relaxed text-slate-900 mb-10 font-light">
            EXODUS works with leadership teams to design and embed
            organizational operating systems that enable strategy to translate
            into sustained performance. Our engagements are diagnostic-led,
            modular, and grounded in execution, ensuring clarity at the top and
            coherence across the organization.
          </p>
          <div className="p-10 bg-teal-500/6 border-l-4 border-teal-500">
            <p className="text-lg leading-relaxed text-slate-900 italic font-normal">
              Our work is guided by ALIGN, EXODUS&apos; proprietary organizational
              operating system methodology.
            </p>
          </div>
        </div>
      </section>

      {/* ALIGN Methodology Hero */}
      <section className="px-12 py-32 bg-linear-to-b from-slate-900 to-slate-800 relative">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="text-xs tracking-widest text-orange-600 mb-6 font-semibold">
            PROPRIETARY METHODOLOGY
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-light mb-8 text-white tracking-tight">
            The ALIGN Methodology
          </h2>
          <div className="h-px w-30 bg-orange-600 mx-auto mb-10"></div>
          <p className="text-xl max-w-4xl mx-auto font-light leading-relaxed text-white/85">
            A structured way to diagnose, design, and embed the systems that
            enable strategy to translate into sustained performance. ALIGN
            ensures that aspiration, leadership, infrastructure, growth
            enablers, and narrative are deliberately aligned, so execution is
            consistent rather than accidental.
          </p>
        </div>
      </section>

      {/* ALIGN Dimensions Interactive */}
      <section className="px-12 pb-32 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-5 gap-0.5 mb-0.5 bg-white/5">
            {alignDimensions.map((dim, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedDimension(idx)}
                className={`p-10 transition-all duration-500 text-center ${
                  selectedDimension === idx
                    ? "bg-white"
                    : "bg-slate-800 hover:bg-slate-700"
                }`}
              >
                <div
                  className={`text-6xl font-thin mb-4 transition-all duration-500 ${
                    selectedDimension === idx ? "" : "text-white/20"
                  }`}
                  style={{
                    color: selectedDimension === idx ? dim.color : undefined,
                  }}
                >
                  {dim.letter}
                </div>
                <div
                  className={`text-sm tracking-wide transition-all duration-500 ${
                    selectedDimension === idx
                      ? "font-semibold text-slate-900"
                      : "font-normal text-white/70"
                  }`}
                >
                  {dim.name}
                </div>
              </button>
            ))}
          </div>

          <div className="bg-white p-16 min-h-100">
            <div
              className={`border-l-8 pl-12 mb-12`}
              style={{ borderColor: alignDimensions[selectedDimension].color }}
            >
              <h3 className="text-5xl font-light mb-5 text-slate-900 tracking-tight">
                {alignDimensions[selectedDimension].name}
              </h3>
              <p
                className="text-xl mb-7 italic font-normal leading-normal"
                style={{ color: alignDimensions[selectedDimension].color }}
              >
                {alignDimensions[selectedDimension].tagline}
              </p>
              <p className="text-base leading-relaxed text-slate-900/80 font-light">
                {alignDimensions[selectedDimension].description}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h4 className="text-xs font-bold tracking-widest text-orange-600 mb-6">
                  WHAT THIS ADDRESSES
                </h4>
                <div className="flex flex-col gap-4">
                  {alignDimensions[selectedDimension].addresses.map(
                    (item, i) => (
                      <div key={i} className="flex gap-4 items-start">
                        <Minus
                          size={18}
                          className="text-slate-900/30 mt-1 shrink-0"
                        />
                        <span className="text-sm text-slate-900/70 leading-relaxed font-light">
                          {item}
                        </span>
                      </div>
                    ),
                  )}
                </div>
              </div>

              <div>
                <h4
                  className="text-xs font-bold tracking-widest mb-6"
                  style={{ color: alignDimensions[selectedDimension].color }}
                >
                  WHAT CHANGES
                </h4>
                <div className="flex flex-col gap-4">
                  {alignDimensions[selectedDimension].changes.map((item, i) => (
                    <div key={i} className="flex gap-4 items-start">
                      <Check
                        size={18}
                        className="mt-1 shrink-0"
                        style={{
                          color: alignDimensions[selectedDimension].color,
                        }}
                      />
                      <span className="text-sm text-slate-900 leading-relaxed font-normal">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-0.5 p-12 bg-teal-500/10 border-l-4 border-teal-500 text-center">
            <p className="text-xl italic text-white leading-relaxed font-light">
              Together, these five dimensions form an integrated organizational
              operating system that enables clarity at the top and coherence
              across the organization.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="px-12 py-32 bg-linear-to-br from-slate-50 via-white to-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="text-xs tracking-widest text-orange-600 mb-5 font-semibold">
              CORE PRINCIPLES
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 text-slate-900 tracking-tight">
              Our Engagement Philosophy
            </h2>
            <div className="h-px w-20 bg-orange-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-900/8">
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
                className="p-12 bg-white transition-all duration-300 hover:shadow-lg"
              >
                <h3 className="text-lg font-medium mb-4 text-orange-600 tracking-tight">
                  {principle.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-900/75 font-light">
                  {principle.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OS Layers */}
      <section className="px-12 py-32 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="text-xs tracking-widest text-orange-600 mb-5 font-semibold">
              ORGANIZATIONAL OS LAYERS
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-5 text-slate-900 tracking-tight">
              Six Operating System Layers
            </h2>
            <div className="h-px w-20 bg-orange-600 mx-auto mb-7"></div>
            <p className="text-lg max-w-3xl mx-auto text-slate-900/70 font-light leading-relaxed">
              Aligned to the ALIGN methodology. Each layer can be engaged
              independently or as part of a broader operating system
              partnership.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {osLayers.map((layer, idx) => (
              <div
                key={idx}
                className="p-12 bg-slate-50 border border-slate-900/8 transition-all duration-300 hover:shadow-md"
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
      <section className="px-12 py-32 bg-linear-to-br from-slate-50 via-white to-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="text-xs tracking-widest text-orange-600 mb-5 font-semibold">
              ENGAGEMENT OPTIONS
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-slate-900 tracking-tight">
              Three Engagement Models
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {engagementModels.map((model, idx) => (
              <div
                key={idx}
                className={`p-14 bg-white relative transition-all duration-300 ${
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

      {/* The Diagnostic */}
      <section className="px-12 py-32 bg-slate-900">
        <div className="max-w-5xl mx-auto">
          <div className="p-16 bg-white/3 border-2 border-orange-600/30">
            <h2 className="text-4xl md:text-5xl font-light mb-8 text-white tracking-tight">
              The EXODUS Diagnostic
            </h2>
            <p className="text-xl leading-relaxed text-white/90 mb-8 font-light">
              Every engagement begins with the EXODUS Diagnostic, powered by the
              ALIGN methodology.
            </p>
            <p className="text-base leading-relaxed text-white/75 mb-10 font-light">
              The diagnostic combines questionnaires, leadership interviews,
              document reviews, and staff inputs to produce both quantitative
              and qualitative insights. It highlights execution risks,
              identifies root causes, and prioritizes interventions between
              quick wins and longer-term strategic initiatives.
            </p>
            <div className="p-8 bg-orange-600/12 border-l-4 border-orange-600">
              <p className="text-lg text-white font-normal leading-relaxed">
                Diagnostic findings determine scope, sequencing, and the
                selection of add-ons.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="px-12 py-32 bg-linear-to-b from-white to-slate-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <div className="text-xs tracking-widest text-orange-600 mb-5 font-semibold">
              OUR PROCESS
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-5 text-slate-900 tracking-tight">
              Our Engagement Process
            </h2>
            <div className="h-px w-20 bg-orange-600 mx-auto mb-7"></div>
            <p className="text-lg text-slate-900/70 font-light">
              A clear, structured approach to every engagement
            </p>
          </div>

          <div className="grid gap-10">
            {processSteps.map((step, i) => (
              <div key={i} className="flex gap-8 items-start">
                <div className="w-20 h-20 shrink-0 flex items-center justify-center border-2 border-orange-600/20 text-orange-600 text-2xl font-light bg-white">
                  {step.num}
                </div>
                <div className="flex-1 pt-3">
                  <h3 className="text-2xl font-medium mb-4 text-slate-900 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-base leading-relaxed text-slate-900/75 font-light">
                    {step.desc}
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
