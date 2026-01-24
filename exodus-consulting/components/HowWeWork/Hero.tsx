import React from 'react'

export default function Hero() {
  return (
    <div>
           {/* Hero */}
              <section className="px-12 py-32 relative overflow-hidden">
                {/* <div className="absolute top-[10%] right-[-10%] w-150 h-150 bg-teal-500/8 rounded-full pointer-events-none blur-3xl"></div> */}
                {/* <div className="absolute bottom-[20%] left-[-15%] w-125 h-125 bg-slate-900/4 rounded-full pointer-events-none blur-3xl"></div> */}
        
                <div className="max-w-7xl mx-auto relative z-10">
                  <div className="max-w-4xl">
                    <div className="inline-block mb-8 px-5 py-2 bg-orange-600/8 rounded text-orange-600 text-xs font-semibold tracking-widest">
                      OUR APPROACH
                    </div>
                    <h1 className="text-6xl md:text-7xl lg:text-8xl font-light leading-tight mb-8  tracking-tight">
                      How We Work
                    </h1>
                    <div className="h-0.5 w-20 bg-orange-600 mb-8"></div>
                    <p className="text-2xl font-light leading-relaxed max-w-3xl">
                      Designing the systems that make strategy executable
                    </p>
                  </div>
                </div>
              </section>
        
              {/* Intro */}
              <section className="px-12 py-20 ">
                <div className="max-w-5xl mx-auto">
                  <p className="text-xl leading-relaxed  mb-10 font-light">
                    EXODUS works with leadership teams to design and embed
                    organizational operating systems that enable strategy to translate
                    into sustained performance. Our engagements are diagnostic-led,
                    modular, and grounded in execution, ensuring clarity at the top and
                    coherence across the organization.
                  </p>
                  <div className="p-10 bg-teal-500/6 border-l-4 border-teal-500">
                    <p className="text-lg leading-relaxed  italic font-normal">
                      Our work is guided by ALIGN, EXODUS&apos; proprietary organizational
                      operating system methodology.
                    </p>
                  </div>
                </div>
              </section>
    </div>
  )
}
