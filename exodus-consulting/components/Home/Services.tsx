import Image from "next/image";
import React from "react";

const items = [
  {
    num: "01",
    title: "From Reactive HR",
    subtitle: "Intentional People Systems",
    desc: "Proactive people architecture that enables growth.",
    image: "/images/solve-feedback.jpg",
    alt: "Colleague leading a feedback session",
    position: "78% 22%",
  },
  {
    num: "02",
    title: "From Founder-Led Chaos",
    subtitle: "Structured Operating System",
    desc: "Decision rights and discipline that scale beyond the founder.",
    image: "/images/solve-structure.jpg",
    alt: "Team organizing ideas into a structure",
    position: "50% 35%",
  },
  {
    num: "03",
    title: "From Risk Exposure",
    subtitle: "Compliance & Governance",
    desc: "Enterprise-grade systems that mitigate organizational risk.",
    image: "/images/solve-compliance.jpg",
    alt: "Glass corporate towers",
    position: "50% 30%",
  },
];

export default function Services() {
  return (
    <section
      id="what-we-do"
      className="py-20 lg:py-24 px-6 lg:px-12"
      style={{ backgroundColor: "#f1f5f9" }}
    >
      <div className="max-w-7xl mx-auto">
        <div
          className="text-sm mb-4 uppercase"
          style={{ letterSpacing: "0.2em", color: "#D25A14" }}
        >
          Transformations
        </div>
        <h2
          className="text-4xl md:text-5xl font-light mb-14 max-w-3xl"
          style={{ color: "#0A2145" }}
        >
          What We Solve
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <article
              key={idx}
              className="bg-white border border-[#e3e8ef] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_44px_rgba(10,33,69,0.14)]"
            >
              <div className="relative" style={{ aspectRatio: "4/3" }}>
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 768px) 360px, 100vw"
                  className="object-cover"
                  style={{ objectPosition: item.position }}
                />
              </div>
              <div className="p-7">
                <small
                  style={{
                    color: "#D25A14",
                    letterSpacing: "0.16em",
                    fontSize: "13px",
                  }}
                >
                  {item.num}
                </small>
                <h3
                  className="text-2xl font-normal mt-2 mb-2"
                  style={{ lineHeight: "1.3", color: "#0A2145" }}
                >
                  {item.title}
                  <span className="block" style={{ color: "#5a6b85" }}>
                    {item.subtitle}
                  </span>
                </h3>
                <p className="text-sm" style={{ color: "#5a6b85" }}>
                  {item.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
