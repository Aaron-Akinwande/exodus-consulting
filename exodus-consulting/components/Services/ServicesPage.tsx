import ServiceCard from "./ServiceCard";



export default function ServicesPage() {
  const services = [
    {
      number: "01",
      title: "Organizational Operating Systems",
      description:
        "We help leaders design and implement the core structures, processes, and rhythms that enable their organizations to function at their best. This includes clarifying decision rights, establishing effective governance mechanisms, optimizing organizational design, and creating the cadences that keep teams aligned and moving forward.",
    },
    {
      number: "02",
      title: "Strategy Execution and Performance Alignment",
      description:
        "We partner with organizations to close the gap between strategic ambition and operational delivery. This means translating strategy into clear priorities, designing performance management approaches that drive the right behaviors, and creating feedback loops that enable continuous adjustment. Our focus is ensuring everyone understands what the strategy means for their work.",
    },
    {
      number: "03",
      title: "Leadership and Decision Effectiveness",
      description:
        "We strengthen the capabilities of leadership teams to make better decisions faster and to lead more effectively through complexity and change. This includes developing decision-making frameworks, enhancing team effectiveness and collaboration, building strategic thinking capabilities, and improving how leaders navigate uncertainty and drive accountability.",
    },
    {
      number: "04",
      title: "People and Culture Enablement",
      description:
        "We help organizations build cultures and people practices that attract talent, develop capability, and sustain high performance. This encompasses designing talent strategies aligned with business priorities, strengthening manager effectiveness and coaching capabilities, and shaping cultures that support desired behaviors and outcomes.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0A1F44] text-gray-300 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03]">
        <div className="absolute w-200 h-200 -top-50 -right-50 bg-gradient-radial from-[#D15B12] to-transparent rounded-full animate-pulse-slow"></div>
        <div className="absolute w-150 h-150 -bottom-25 -left-25 bg-gradient-radial from-[#4CA2A8] to-transparent rounded-full animate-pulse-slow-reverse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        {/* Header */}
        <header className="pt-24 pb-16 animate-fade-in-down">
          <h1 className="text-6xl md:text-7xl font-light text-[#D8CFC4] mb-6 leading-tight tracking-tight">
            Services
          </h1>
          <p className="text-2xl text-gray-300 max-w-2xl opacity-90">
            What we help organizations design and strengthen
          </p>
        </header>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12  pb-24">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} delay={index * 100} />
          ))}
        </div>
      </div>

      {/* Footer CTA */}
      <section className="relative border-t border-white/10 bg-[#0A1F44]/60 backdrop-blur-md py-20 mt-16 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-transparent to-[#4CA2A8]/10"></div>

        <div className="max-w-7xl mx-auto px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-light text-[#D8CFC4] mb-4 font-serif">
            Ready to strengthen your organization?
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8 opacity-90">
            Each service area connects to our engagement approach, where we
            detail how we work with clients to diagnose challenges and build
            lasting capability.
          </p>
          <a
            target="_blank"
            href="https://calendly.com/exodusconsulting26/30min"
            className="inline-block rounded-lg bg-[#D15B12] text-white px-10 py-4 text-lg font-semibold border-2 border-[#D15B12] transition-all duration-300 hover:bg-transparent hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(209,91,18,0.4)]"
          >
            Discuss your service needs
          </a>
        </div>
      </section>

      {/* <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@400;600;700&family=DM+Sans:wght@400;500;700&display=swap");

        .font-serif {
          font-family: "Crimson Pro", serif;
        }

        body {
          font-family: "DM Sans", sans-serif;
        }

        @keyframes pulse-slow {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.03;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.05;
          }
        }

        @keyframes pulse-slow-reverse {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.03;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.05;
          }
        }

        .animate-pulse-slow {
          animation: pulse-slow 20s ease-in-out infinite;
        }

        .animate-pulse-slow-reverse {
          animation: pulse-slow-reverse 25s ease-in-out infinite reverse;
        }

        .animate-fade-in-down {
          animation: fadeInDown 0.8s ease-out;
        }

        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .bg-gradient-radial {
          background: radial-gradient(circle, currentColor 0%, transparent 70%);
        }
      `}</style> */}
    </div>
  );
}


