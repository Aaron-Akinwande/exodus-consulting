import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        {/* Header */}
        <header className="pt-32 pb-16 text-center animate-[fadeInDown_1s_ease-out]">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-tight uppercase leading-none">
            Contact us
          </h1>
          <p className="text-2xl md:text-3xl opacity-70 max-w-4xl mx-auto font-light">
            Start a conversation
          </p>
        </header>

        {/* Value Proposition */}
        <div className="bg-slate-300 text-slate-900 p-12 md:p-16 mb-24 border-l-4 border-[#4CA2A8] relative shadow-sm">
          <div className="absolute right-0 top-0 w-48 h-full bg-linear-to-l from-[#4CA2A8]/5 to-transparent pointer-events-none" />
          <p className="text-xl md:text-2xl leading-relaxed max-w-5xl relative z-10">
            If you are navigating growth, complexity, or execution challenges,
            we can help you design the systems required to support your
            strategy.
          </p>
        </div>

        {/* CTA Grid */}
        <div className="grid md:grid-cols-2 gap-12 mb-24">
          {/* Primary CTA */}
          <div className="bg-linear-to-br from-[#D15B12] to-[#B84E0F] text-white p-12 md:p-14 text-center rounded-md cursor-pointer">
            {/* <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-[#D15B12] to-[#4CA2A8]" /> */}

            <div className="text-xs tracking-[0.15em] uppercase font-semibold mb-6 opacity-90">
              Primary Option
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Start with a Diagnostic
            </h2>
            <p className="text-base md:text-lg leading-relaxed mb-10 opacity-95">
              Begin with a comprehensive assessment of your organizational
              operating system to identify key leverage points for improvement.
            </p>
            <a
              target="_blank"
              href="https://calendly.com/exodusconsulting26/30min"
            >
              <button className="bg-white text-[#D15B12] px-12 py-4 text-sm font-bold cursor-pointer border-2 border-white hover:bg-transparent hover:text-white transition-all duration-300 rounded-lg ">
                Start Diagnostic
              </button>
            </a>
          </div>

          {/* Secondary CTA */}
          <div className="bg-gray-50 p-12 md:p-14 text-center relative overflow-hidden rounded-md">
            <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-[#D15B12] to-[#4CA2A8] scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />

            <div className="text-xs tracking-[0.15em] uppercase font-semibold mb-6 opacity-80 text-[#0A1F44]">
              Alternative Option
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight text-[#0A1F44]">
              Schedule a Conversation
            </h2>
            <p className="text-base md:text-lg leading-relaxed mb-10 opacity-80 text-[#0A1F44]">
              Connect with our team to discuss your specific challenges and
              explore how we can support your organization&apos;s needs.
            </p>
            <a
              target="_blank"
              href="https://calendly.com/exodusconsulting26/30min"
            >
              <button className="bg-[#4CA2A8] text-white px-12 py-4 text-sm font-bold tracking-wider uppercase border-2 border-[#4CA2A8] hover:bg-transparent hover:text-[#4CA2A8] transition-all duration-300  rounded-lg cursor-pointer">
                Schedule Now
              </button>
            </a>
          </div>
        </div>

        {/* Contact Information */}
        <section className="bg-slate-300 rounded-md py-24 text-center animate-[fadeInUp_1s_ease-out_0.7s_backwards]">
          <h3 className="text-3xl md:text-4xl font-bold text-[#0A1F44] mb-12">
            Other Ways to Reach Us
          </h3>
          <div className="flex flex-col md:flex-row justify-center gap-16 max-w-5xl mx-auto">
            {/* Email */}
            <div className="text-center flex-1">
              <div className="w-18 h-18 bg-linear-to-br from-[#D15B12] to-[#4CA2A8] rounded-full flex items-center justify-center mx-auto mb-6 hover:scale-110 hover:rotate-6 transition-transform duration-300">
                <Mail className="w-8 h-8 text-white" strokeWidth={2} />
              </div>
              <h4 className="text-xl font-bold text-[#0A1F44] mb-2">Email</h4>
              <p className="text-base text-[#0A1F44] opacity-70">
                <a
                  href="mailto:hello@exodusconsults.com"
                  className="text-[#D15B12] font-semibold hover:text-[#4CA2A8] transition-colors"
                >
                  hello@exodusconsults.com
                </a>
              </p>
            </div>

            {/* Phone */}
            <div className="text-center flex-1">
              <div className="w-18 h-18 bg-linear-to-br from-[#D15B12] to-[#4CA2A8] rounded-full flex items-center justify-center mx-auto mb-6 hover:scale-110 hover:rotate-6 transition-transform duration-300">
                <Phone className="w-8 h-8 text-white" strokeWidth={2} />
              </div>
              <h4 className="text-xl font-bold text-[#0A1F44] mb-2">Phone</h4>
              <p className="text-base text-[#0A1F44] opacity-70">
                <a
                  href="tel:+1234567890"
                  className="text-[#D15B12] font-semibold hover:text-[#4CA2A8] transition-colors"
                >
                  +1 (234) 567-890
                </a>
              </p>
            </div>

            {/* Location */}
            <div className="text-center flex-1">
              <div className="w-18 h-18 bg-linear-to-br from-[#D15B12] to-[#4CA2A8] rounded-full flex items-center justify-center mx-auto mb-6 hover:scale-110 hover:rotate-6 transition-transform duration-300">
                <MapPin className="w-8 h-8 text-white" strokeWidth={2} />
              </div>
              <h4 className="text-xl font-bold text-[#0A1F44] mb-2">
                Location
              </h4>
              <p className="text-base text-[#0A1F44] opacity-70">
                Lagos, Nigeria
                <br />
                Global Operations
              </p>
            </div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="py-24 border-t border-[#0A1F44]/10">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div className="p-8">
              <div className="text-5xl md:text-6xl font-bold text-[#D15B12] mb-2 leading-none">
                48hr
              </div>
              <div className="text-lg  opacity-70 font-medium">
                Response Time
              </div>
            </div>
            <div className="p-8">
              <div className="text-5xl md:text-6xl font-bold text-[#D15B12] mb-2 leading-none">
                8+
              </div>
              <div className="text-lg  opacity-70 font-medium">
                Years across EMEA, LATAM
                <br />& Globally Distributed Teams
              </div>
            </div>
            <div className="p-8">
              <div className="text-5xl md:text-6xl font-bold text-[#D15B12] mb-2 leading-none">
                100%
              </div>
              <div className="text-lg  opacity-70 font-medium">
                Confidential
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
