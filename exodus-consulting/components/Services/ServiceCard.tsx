/* eslint-disable @typescript-eslint/no-explicit-any */
import { ArrowRight } from "lucide-react";

export default function ServiceCard({ service }: any) {

  return (
    <article
      className="relative bg-white/3 border border-white/10 p-12 backdrop-blur-sm transition-all duration-400 cursor-pointer overflow-hidden"
    >
      {/* Large number watermark */}
      <span className="absolute top-6 right-8 text-6xl font-light text-[#C5A880] opacity-20 font-serif leading-none">
        {service.number}
      </span>

      <div className="relative z-10">
        <h2 className="text-3xl font-light text-[#D8CFC4] mb-5 leading-tight font-serif">
          {service.title}
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed mb-8 opacity-85">
          {service.description}
        </p>
        <a
          href="/how-we-work#os-layers"
          className="inline-flex items-center gap-2 text-[#D15B12] font-semibold text-base transition-all duration-300 tracking-wide group"
        >
          Learn about our approach
          <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </div>
    </article>
  );
}
