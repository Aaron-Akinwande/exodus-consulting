import React, { useState } from 'react'
import { alignDimensions } from './Constants';
import { Check, Minus } from 'lucide-react';

export default function Align() {
  const [selectedDimension, setSelectedDimension] = useState(0);

  return (
    <div>
      {/* ALIGN Methodology Hero */}
      <section className="px-12 py-20 bg-linear-to-b  relative">
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
      <section className="px-12 pb-32 ">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-5 gap-0.5  bg-white/5">
            {alignDimensions.map((dim, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedDimension(idx)}
                className={`p-10 transition-all duration-500 text-center ${
                  selectedDimension === idx
                    ? "bg-slate-300"
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

          <div className="bg-slate-300 p-16 min-h-100">
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
    </div>
  );
}
