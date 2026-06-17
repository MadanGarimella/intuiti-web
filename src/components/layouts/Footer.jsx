import logo from "../../assets/logos/intuiti-logo.png";

const footerLinks = {
  Services: [
    { label: "Custom Web Applications", href: "#services" },
    { label: "Custom Software", href: "#services" },
    { label: "MVP Development", href: "#services" },
    { label: "API Integration", href: "#services" },
    { label: "SaaS Development", href: "#services" },
  ],
  Company: [
    { label: "Why Intuiti", href: "#why-us" },
    { label: "How We Work", href: "#process" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ],
  Contact: [
    { label: "contact@intuiticorporates.com", href: "mailto:contact@intuiticorporates.com" },
    { label: "Book Free Consultation", href: "#contact" },
    { label: "Hyderabad, India", href: null },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms-of-service" },
  ],
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="footer"
      className="border-t border-white/10 bg-black"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">

        {/* Main Footer Grid */}
        <div className="grid lg:grid-cols-6 gap-8 lg:gap-5">

          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="h-10 flex items-center overflow-hidden mb-6">
              <img
                src={logo}
                alt="Intuiti Corporates"
                className="w-auto object-contain flex-shrink-0"
                style={{ height: "140px", marginTop: "-65px", marginBottom: "-65px" }}
              />
            </div>

            <p className="text-zinc-400 text-base leading-relaxed max-w-sm mb-6">
              We build custom web applications and business software for startups and SMBs. React + Spring Boot. 4-8 week delivery.
            </p>

            <div className="flex flex-wrap gap-2">
              {["React.js", "Spring Boot", "Java"].map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-md text-xs font-medium text-zinc-500 bg-white/[0.03] border border-white/[0.07]"
                >
                  {t}
                </span>
              ))}
            </div>

            <a
              href="https://flowos.intuiticorporates.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center mt-8 text-[#FF7A18] hover:text-[#ff9d4d] transition-colors text-sm font-medium gap-1"
            >
              Explore FlowOS →
            </a>
          </div>

          {/* Links columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-white font-semibold text-sm mb-5 uppercase tracking-widest">
                {heading}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    {link.href ? (
                      <a
                        href={link.href}
                        className="text-zinc-500 hover:text-white transition-colors text-sm break-all"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <span className="text-zinc-600 text-sm">{link.label}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/[0.06] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-zinc-600 text-sm">
            © {currentYear} Intuiti Corporates. All rights reserved.
          </p>
          <p className="text-zinc-600 text-sm">
            We Build Web Applications & Custom Software for Businesses That Mean Business.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;