import React from "react";
import FocusCard from "./FocusCard";

export default function AboutPage() {
  return (
    <div className="relative min-h-screen  overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-8">
        {/* Header */}
        <header className="pt-32 pb-12">
          <h1 className=" text-5xl md:text-6xl lg:text-7xl font-light leading-none mb-8 tracking-tight uppercase">
            About
          </h1>
          <p className="text-2xl opacity-70 max-w-3xl font-normal leading-relaxed">
            Who we are and why our approach matters
          </p>
        </header>

        {/* Main Content */}
        <div className="space-y-12 pb-12">
          {/* Manifesto Section */}
          <section className="bg-slate-300 text-slate-900 border-l-4 border-orange-600 p-16 relative overflow-hidden shadow-sm">
            <div className="absolute top-0 left-8  text-[20rem] opacity-[0.02] leading-none select-none pointer-events-none">
              &quot;
            </div>
            <div className="relative z-10">
              <h2 className=" text-4xl font-light mb-8 leading-tight">EXODUS</h2>
              <p className="text-2xl leading-relaxed opacity-90">
                EXODUS is a strategy and people advisory firm operating at the
                intersection of{" "}
                <strong className="text-orange-600 font-light">
                  strategy, systems, and execution
                </strong>
                .
              </p>
            </div>
          </section>

          {/* Belief Statement */}
          <section className="text-center py-24 relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px bg-linear-to-r from-transparent via-teal-500 to-transparent" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-px bg-linear-to-r from-transparent via-orange-600 to-transparent" />

            <div className="text-sm tracking-[0.2em] text-teal-500 uppercase mb-8 font-semibold">
              Our Core Belief
            </div>
            <p className=" text-4xl md:text-5xl font-light leading-snug max-w-5xl mx-auto mb-6">
              Sustainable performance is built when strategy, structure, people,
              and culture are deliberately aligned.
              <span className="block text-5xl md:text-6xl text-orange-600 mt-4 italic">
                Strategy does not fail in decks; it fails in systems.
              </span>
            </p>
          </section>

          {/* Focus Section */}
          <section className="py-16">
            <div className="text-center mb-16">
              <h2 className=" text-4xl font-light mb-4">Who We Serve</h2>
              <p className="text-xl opacity-60">
                Our organizational operating system approach is designed for:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <FocusCard
                icon="F"
                title="Founder-Led Organizations"
                description="Companies transitioning from founder instinct to scalable systems, requiring structured decision-making and governance without losing entrepreneurial agility."
              />
              <FocusCard
                icon="S"
                title="Scaling Companies"
                description="Organizations experiencing rapid growth who need to build the infrastructure, processes, and culture to support sustainable expansion."
              />
              <FocusCard
                icon="G"
                title="Globally Distributed Teams"
                description="Companies operating across borders and time zones, requiring robust operating systems that enable coordination, alignment, and performance at scale."
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <FocusCard
                icon="C"
                title="Complex Environments"
                description="Organizations navigating high degrees of uncertainty, ambiguity, and rapid change requiring adaptive capabilities."
              />
              <FocusCard
                icon="E"
                title="Emerging Markets"
                description="Companies operating in dynamic contexts where traditional playbooks don't apply and contextual expertise matters."
              />
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center py-32 -mx-8 px-8 ">
            <h2 className=" text-5xl font-light mb-6">
              Ready to Build a Better Operating System?
            </h2>
            <p className="text-xl opacity-70 mb-12 max-w-3xl mx-auto">
              Let&apos;s explore how we can help align your strategy, systems,
              and people for sustainable performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a
                target="_blank"
                href="https://calendly.com/exodusconsulting26/30min"
                className="bg-orange-600 text-white px-10 py-5 text-base font-semibold   hover:bg-orange-700  rounded-lg"
              >
                Discuss Your Needs
              </a>
              <a
                href="/services"
                className="bg-transparent text-teal-500 px-12 py-5 text-base font-semibold border border-teal-500  hover:bg-teal-500 hover:text-white rounded-lg"
              >
                Explore Services
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
