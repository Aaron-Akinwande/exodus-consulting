import Image from "next/image";
import ServiceCard from "./ServiceCard";

const services = [
  {
    number: "01",
    title: "Organizational Operating Systems",
    image: "/images/services-systems.jpg",
    alt: "Colleagues mapping systems on a chalkboard",
    position: "35% 40%",
  },
  {
    number: "02",
    title: "Strategy Execution and Performance Alignment",
    image: "/images/services-strategy.jpg",
    alt: "Presenter reviewing performance charts with leaders",
  },
  {
    number: "03",
    title: "Leadership and Decision Effectiveness",
    image: "/images/services-leadership.jpg",
    alt: "Leader walking a team through a plan",
  },
  {
    number: "04",
    title: "People and Culture Enablement",
    image: "/images/services-culture.jpg",
    alt: "Team collaborating around a table",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#ffffff" }}>
      <section className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-[1.1fr_.9fr] gap-12 lg:gap-14 items-center pt-10 pb-16 lg:pt-14 lg:pb-16">
        <div>
          <div
            className="text-sm mb-4 uppercase"
            style={{ letterSpacing: "0.2em", color: "#D25A14" }}
          >
            Services
          </div>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-light mb-5"
            style={{ lineHeight: "1.1", color: "#0A2145" }}
          >
            What we help organizations design and strengthen
          </h1>
          <p
            className="text-lg max-w-[50ch]"
            style={{ color: "#5a6b85" }}
          >
            Each service area links to How We Work, where the engagement
            approach is explained in detail.
          </p>
        </div>
        <div className="relative" style={{ aspectRatio: "4/3" }}>
          <Image
            src="/images/services-header.jpg"
            alt="Hands working on a performance dashboard"
            fill
            sizes="(min-width: 1024px) 480px, 100vw"
            className="object-cover"
          />
        </div>
      </section>

      <section className="py-16 lg:py-20 px-6 lg:px-12" style={{ backgroundColor: "#f1f5f9" }}>
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </section>
    </div>
  );
}
