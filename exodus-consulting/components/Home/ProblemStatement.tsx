import Image from "next/image";
import React from "react";

const challenges = [
  "Strategy is clear but execution is inconsistent",
  "Growth has outpaced structure and decision-making",
  "People systems are fragmented or overly manual",
  "Leadership carries too many decisions personally",
  "Compliance risk increases with scale or multi-country operations",
];

export default function ProblemStatement() {
  return (
    <section id="challenge" className="py-20 lg:py-28 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.05fr_.95fr] gap-12 lg:gap-16 items-center">
        <div
          className="relative overflow-hidden order-2 lg:order-1"
          style={{ aspectRatio: "4/3.1" }}
        >
          <Image
            src="/images/challenge-review.jpg"
            alt="Two executives reviewing performance data"
            fill
            sizes="(min-width: 1024px) 560px, 100vw"
            className="object-cover"
            style={{ objectPosition: "62% 40%" }}
          />
        </div>
        <div className="order-1 lg:order-2">
          <div
            className="text-sm mb-4 uppercase"
            style={{ letterSpacing: "0.2em", color: "#D25A14" }}
          >
            The Challenge
          </div>
          <h2
            className="text-4xl md:text-5xl font-light mb-7"
            style={{ lineHeight: "1.15", color: "#0A2145" }}
          >
            When business ambition outgrows{" "}
            <span className="italic" style={{ color: "#4A9EA6" }}>
              internal systems
            </span>
          </h2>
          <ul className="mb-7">
            {challenges.map((text, i) => (
              <li
                key={i}
                className="flex items-center gap-4 py-3.5 text-base lg:text-lg"
                style={{
                  borderTop: "1px solid #e3e8ef",
                  borderBottom:
                    i === challenges.length - 1 ? "1px solid #e3e8ef" : "none",
                  color: "#0A2145",
                }}
              >
                <span
                  className="inline-block w-3.5 h-px shrink-0"
                  style={{ backgroundColor: "#D25A14" }}
                />
                {text}
              </li>
            ))}
          </ul>
          <p
            className="text-xl md:text-2xl font-light"
            style={{ color: "#0A2145" }}
          >
            We help organizations move from complexity to clarity, and from
            intent to{" "}
            <span className="italic" style={{ color: "#D25A14" }}>
              impact
            </span>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
