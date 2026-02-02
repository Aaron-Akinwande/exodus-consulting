import Image from "next/image";

export default function Footer() {
  return (
    <footer
      className="py-16 px-6 lg:px-12"
      style={{ borderTop: "1px solid rgba(217, 217, 217, 0.1)" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-4 w-fit  rounded-lg overflow-hidden">
              <Image
                src="/exoLogo.png"
                alt="exodus-logo"
                width={150}
                height={100}
              />
            </div>
            <p
              className="text-sm"
              style={{ color: "rgba(217, 217, 217, 0.6)" }}
            >
              Strategy & People Advisory
            </p>
          </div>
          <div>
            <h4
              className="text-sm mb-4"
              style={{ letterSpacing: "0.15em", color: "#D15B12" }}
            >
              CONTACT
            </h4>
            <a
              href="mailto:hello@exodusconsults.com"
              style={{ color: "rgba(217, 217, 217, 0.8)" }}
              className="md:text-sm lg:text-base "
            >
              hello@exodusconsults.com
            </a>
          </div>
          <div className="md:col-span-2">
            <h4
              className="text-sm mb-4"
              style={{ letterSpacing: "0.15em", color: "#D15B12" }}
            >
              ENGAGEMENT TYPES
            </h4>
            <div
              className="grid grid-cols-2 gap-3 text-sm"
              style={{ color: "rgba(217, 217, 217, 0.8)" }}
            >
              <div>
                Diagnostic Sprints
                <br />
                <span style={{ color: "rgba(217, 217, 217, 0.5)" }}>
                  4–6 weeks
                </span>
              </div>
              <div>
                Design Engagements
                <br />
                <span style={{ color: "rgba(217, 217, 217, 0.5)" }}>
                  8–12 weeks
                </span>
              </div>
              <div>
                Transformation Programs
                <br />
                <span style={{ color: "rgba(217, 217, 217, 0.5)" }}>
                  6–12 months
                </span>
              </div>
              <div>
                Executive Advisory
                <br />
                <span style={{ color: "rgba(217, 217, 217, 0.5)" }}>
                  Retainer
                </span>
              </div>
            </div>
          </div>
        </div>
        <div
          className="pt-8 flex flex-col md:flex-row justify-between items-center text-sm"
          style={{
            borderTop: "1px solid rgba(217, 217, 217, 0.1)",
            color: "rgba(217, 217, 217, 0.5)",
          }}
        >
          <p>© 2026 EXODUS Consulting. All rights reserved.</p>
          <p className="mt-4 md:mt-0">Lagos, Nigeria</p>
        </div>
      </div>
    </footer>
  );
}
