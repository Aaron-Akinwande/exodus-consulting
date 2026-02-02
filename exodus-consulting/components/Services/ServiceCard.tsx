/* eslint-disable @typescript-eslint/no-explicit-any */
import { ArrowRight } from "lucide-react";
import { useState } from "react";

export default function ServiceCard({ service, delay }: any) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <article
      className="relative bg-white/3 border border-white/10 p-12 backdrop-blur-sm transition-all duration-400 cursor-pointer overflow-hidden opacity-0 translate-y-8 animate-fade-in-up"
      style={{ animationDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated left border */}
      <div
        className="absolute top-0 left-0 w-1 bg-linear-to-b from-[#D15B12] to-[#4CA2A8] transition-all duration-400"
        style={{ height: isHovered ? "100%" : "0%" }}
      ></div>

      {/* Large number watermark */}
      <span className="absolute top-6 right-8 text-6xl font-bold text-[#C5A880] opacity-20 font-serif leading-none">
        {service.number}
      </span>

      <div className="relative z-10">
        <h2 className="text-3xl font-bold text-[#D8CFC4] mb-5 leading-tight font-serif">
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

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }

        article:hover {
          transform: translateX(8px);
          border-color: #d15b12;
          box-shadow: 0 20px 60px rgba(209, 91, 18, 0.2);
          background: rgba(255, 255, 255, 0.05);
        }
      `}</style>
    </article>
  );
}
