import Image from "next/image";
import FocusCard from "./FocusCard";

const pillars = ["Strategy", "Structure", "People", "Culture"];

const focusAreas = [
  {
    icon: "F",
    title: "Founder-Led Organizations",
    description:
      "Companies transitioning from founder instinct to scalable systems, requiring structured decision-making and governance without losing entrepreneurial agility.",
  },
  {
    icon: "S",
    title: "Scaling Companies",
    description:
      "Organizations experiencing rapid growth who need to build the infrastructure, processes, and culture to support sustainable expansion.",
  },
  {
    icon: "G",
    title: "Globally Distributed Teams",
    description:
      "Companies operating across borders and time zones, requiring robust operating systems that enable coordination, alignment, and performance at scale.",
  },
];

const extraFocusAreas = [
  {
    icon: "C",
    title: "Complex Environments",
    description:
      "Organizations navigating high degrees of uncertainty, ambiguity, and rapid change requiring adaptive capabilities.",
  },
  {
    icon: "E",
    title: "Emerging Markets",
    description:
      "Companies operating in dynamic contexts where traditional playbooks don't apply and contextual expertise matters.",
  },
];

export default function AboutPage() {
  return (
    <div style={{ backgroundColor: "#ffffff" }}>
      {/* Hero quote banner */}
      <section className="relative text-center py-36 lg:py-44 px-6 lg:px-12 overflow-hidden">
        <Image
          src="/images/cta-skyline.jpg"
          alt="Skyscrapers seen from below"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(rgba(10,33,69,.78),rgba(10,33,69,.9))",
          }}
        />
        <div className="max-w-4xl mx-auto relative z-10">
          <div
            className="text-sm mb-6 uppercase"
            style={{ letterSpacing: "0.2em", color: "#D25A14" }}
          >
            About EXODUS
          </div>
          <p
            className="text-4xl md:text-5xl lg:text-6xl font-light"
            style={{ color: "#ffffff", lineHeight: "1.3" }}
          >
            Strategy does not fail in decks;
            <br />
            it fails in{" "}
            <span className="italic" style={{ color: "#D25A14" }}>
              systems
            </span>
            .
          </p>
        </div>
      </section>

      {/* Who we are */}
      <section className="py-20 lg:py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[.8fr_1.2fr] gap-10 lg:gap-14 items-start">
          <div>
            <div
              className="text-sm mb-4 uppercase"
              style={{ letterSpacing: "0.2em", color: "#D25A14" }}
            >
              Who we are
            </div>
            <h2
              className="text-3xl md:text-4xl font-light"
              style={{ color: "#0A2145" }}
            >
              Why our approach matters
            </h2>
          </div>
          <p
            className="text-2xl md:text-3xl font-light"
            style={{ color: "#0A2145" }}
          >
            EXODUS is a strategy and people advisory firm that helps
            organizations bring strategy, systems, and execution into
            alignment.
          </p>
        </div>
      </section>

      {/* What we believe */}
      <section
        className="py-20 lg:py-24 px-6 lg:px-12"
        style={{ backgroundColor: "#f1f5f9" }}
      >
        <div className="max-w-7xl mx-auto">
          <div
            className="text-sm mb-4 uppercase"
            style={{ letterSpacing: "0.2em", color: "#D25A14" }}
          >
            What we believe
          </div>
          <h2
            className="text-3xl md:text-4xl font-light mb-12 max-w-[30ch]"
            style={{ color: "#0A2145" }}
          >
            Sustainable performance is built when these four are deliberately
            aligned
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 border border-[#e3e8ef] bg-white">
            {pillars.map((p, idx) => {
              const borderClasses = [
                "",
                "border-l border-[#e3e8ef] lg:border-l lg:border-[#e3e8ef]",
                "border-t border-[#e3e8ef] lg:border-t-0 lg:border-l lg:border-[#e3e8ef]",
                "border-t border-l border-[#e3e8ef] lg:border-t-0 lg:border-l lg:border-[#e3e8ef]",
              ][idx];
              return (
              <div
                key={p}
                className={`p-8 lg:p-10 text-2xl lg:text-3xl font-light transition-colors duration-200 text-[#0A2145] hover:bg-[#0A2145] hover:text-white ${borderClasses}`}
              >
                <small
                  className="block text-xs mb-3.5"
                  style={{ color: "#D25A14", letterSpacing: "0.16em" }}
                >
                  {String(idx + 1).padStart(2, "0")}
                </small>
                {p}
              </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-20 lg:py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2
              className="text-3xl md:text-4xl font-light mb-3"
              style={{ color: "#0A2145" }}
            >
              Who We Serve
            </h2>
            <p className="text-lg" style={{ color: "#5a6b85" }}>
              Our organizational operating system approach is designed for:
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            {focusAreas.map((area) => (
              <FocusCard key={area.title} {...area} />
            ))}
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {extraFocusAreas.map((area) => (
              <FocusCard key={area.title} {...area} />
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section
        className="text-center py-24 px-6 lg:px-12"
        style={{ backgroundColor: "#0A2145", color: "#ffffff" }}
      >
        <h2 className="text-3xl md:text-4xl font-light mb-5">
          Ready to Build a Better Operating System?
        </h2>
        <p
          className="max-w-2xl mx-auto mb-10 text-lg"
          style={{ color: "#c3cfe0" }}
        >
          Let&apos;s explore how we can help align your strategy, systems, and
          people for sustainable performance.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            target="_blank"
            href="https://calendly.com/exodusconsulting/30min"
            className="inline-flex items-center justify-center rounded-sm px-8 py-4 font-medium transition-all duration-300"
            style={{
              backgroundColor: "#D25A14",
              color: "#ffffff",
              letterSpacing: "0.05em",
            }}
          >
            Discuss Your Needs
          </a>
          <a
            href="/services"
            className="inline-flex items-center justify-center rounded-sm px-8 py-4 font-medium transition-all duration-300"
            style={{
              border: "1px solid #4A9EA6",
              color: "#4A9EA6",
              letterSpacing: "0.05em",
            }}
          >
            Explore Services
          </a>
        </div>
      </section>
    </div>
  );
}
