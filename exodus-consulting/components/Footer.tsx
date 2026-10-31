import Image from "next/image";

export default function Footer() {
  return (
    <footer
      className="py-6 px-6 lg:px-12"
      style={{ borderTop: "1px solid #e3e8ef", backgroundColor: "#ffffff" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-12 mb-6">
          <div className="flex items-center space-x-3 w-fit rounded-lg overflow-hidden">
            <Image
              src="/exodus-wordmark.png"
              alt="exodus-logo"
              width={190}
              height={34}
            />
          </div>
          <p className="text-sm" style={{ color: "#5a6b85" }}>
            Strategy & People Advisory
          </p>
          <div>
            {/* <h4
              className="text-sm mb-4"
              style={{ letterSpacing: "0.15em", color: "#D25A14" }}
            >
              CONTACT
            </h4> */}
            <a
              href="mailto:hello@exodusconsults.com"
              style={{ color: "#0A2145" }}
              className="md:text-sm lg:text-base "
            >
              hello@exodusconsults.com
            </a>
          </div>
        </div>
        <div
          className="pt-8 flex flex-col md:flex-row justify-between items-center text-sm"
          style={{
            borderTop: "1px solid #e3e8ef",
            color: "#5a6b85",
          }}
        >
          <p>© 2026 EXODUS Consulting. All rights reserved.</p>
          <p className="mt-4 md:mt-0">Lagos, Nigeria</p>
        </div>
      </div>
    </footer>
  );
}
