import React from 'react'
import { processSteps } from './Constants';

export default function Diagnostic() {
  return (
    <div>
      {" "}
      {/* The Diagnostic */}
      <section className="px-12 py-10 ">
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
      <section className="px-12 py-10 ">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <div className="text-xs tracking-widest text-orange-600 mb-5 font-semibold">
              OUR PROCESS
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-5  tracking-tight">
              Our Engagement Process
            </h2>
            <div className="h-px w-20 bg-orange-600 mx-auto mb-7"></div>
            <p className="text-lg  font-light">
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
                  <h3 className="text-2xl font-medium mb-4  tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-base leading-relaxed font-light">
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
