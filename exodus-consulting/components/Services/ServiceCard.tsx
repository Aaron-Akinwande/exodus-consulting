import Image from "next/image";

type Service = {
  number: string;
  title: string;
  image: string;
  alt: string;
  position?: string;
};

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="bg-white border border-[#e3e8ef] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_44px_rgba(10,33,69,0.14)]">
      <div className="relative" style={{ aspectRatio: "4/3" }}>
        <Image
          src={service.image}
          alt={service.alt}
          fill
          sizes="(min-width: 768px) 480px, 100vw"
          className="object-cover"
          style={{ objectPosition: service.position ?? "50% 50%" }}
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
          {service.number}
        </small>
        <h3
          className="text-2xl font-normal mt-2 mb-3"
          style={{ lineHeight: "1.3", color: "#0A2145" }}
        >
          {service.title}
        </h3>
        <a
          href="/how-we-work"
          className="inline-block text-sm"
          style={{ color: "#D25A14" }}
        >
          See how we work →
        </a>
      </div>
    </article>
  );
}
