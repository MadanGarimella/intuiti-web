import { useState, useEffect } from "react";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import logo from "../../assets/logos/intuiti-logo.png";

const navLinks = [
  { title: "Services", href: "/#services" },
  { title: "Why Us", href: "/#why-us" },
  { title: "Process", href: "/#process" },
  { title: "Portfolio", href: "/#portfolio" },
  { title: "Pricing", href: "/#pricing" },
  { title: "FAQ", href: "/#faq" },
];

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "py-3 bg-black/80 backdrop-blur-xl border-b border-white/[0.06] shadow-xl shadow-black/30"
            : "py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">

          {/* Logo */}
          <a
            href="/"
            className="flex-shrink-0 flex items-center h-10 overflow-hidden"
          >
            <img
              src={logo}
              alt="Intuiti Corporates"
              className="w-auto object-contain"
              style={{ height: "140px", marginTop: "-50px", marginBottom: "-50px" }}
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                className="text-zinc-400 text-sm hover:text-white transition-colors font-medium"
              >
                {link.title}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <a
            id="navbar-cta"
            href="#contact"
            className="hidden lg:inline-flex items-center justify-center bg-[#FF1E1E] hover:bg-red-600 text-white font-semibold px-6 h-10 rounded-full transition-all text-sm shadow-lg shadow-red-900/30 hover:shadow-red-800/40 hover:-translate-y-0.5"
          >
            Book Free Consultation
          </a>

          {/* Mobile Menu Toggle */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenu(!mobileMenu)}
            className="lg:hidden text-white p-1"
            aria-label="Toggle mobile menu"
          >
            {mobileMenu ? <HiX size={26} /> : <HiOutlineMenuAlt3 size={26} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenu && (
        <div className="fixed inset-0 z-40 lg:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setMobileMenu(false)}
          />
          {/* Panel */}
          <div className="absolute top-0 right-0 h-full w-72 bg-[#0a0a0a] border-l border-white/10 p-8 flex flex-col">
            <div className="flex items-center justify-between mb-10">
              <span className="text-zinc-400 text-sm">Menu</span>
              <button onClick={() => setMobileMenu(false)} className="text-white p-1">
                <HiX size={22} />
              </button>
            </div>

            <div className="flex flex-col gap-1 flex-1">
              {navLinks.map((link) => (
                <a
                  key={link.title}
                  href={link.href}
                  onClick={() => setMobileMenu(false)}
                  className="text-zinc-300 text-lg font-medium py-3 hover:text-white transition-colors border-b border-white/[0.05]"
                >
                  {link.title}
                </a>
              ))}
            </div>

            <a
              href="#contact"
              onClick={() => setMobileMenu(false)}
              className="mt-8 bg-[#FF1E1E] hover:bg-red-600 text-white py-4 rounded-xl font-semibold text-center block transition-all"
            >
              Book Free Consultation
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;