import { useState } from "react";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

import logo from "../../assets/logos/intuiti-logo.png";

const navLinks = [
  {
    title: "Products",
    href: "#products",
  },
  {
    title: "About Us",
    href: "#about",
  },
  {
    title: "Roadmap",
    href: "#roadmap",
  },
];

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <>
      <header className="fixed top-8 left-0 w-full z-50">

        <div className="flex justify-center">

          <div
            className="
            font-serif
              bg-black/70
              rounded-full
              h-16
              px-6
              w-[750px]
              max-w-[80%]
              flex
              items-center
              justify-between
              shadow-2xl
            "
          >
            {/* Logo */}

            <a
              href="/"
              className="
                flex-shrink-0
                flex
                items-center
              "
            >
              <img
                src={logo}
                alt="Intuiti Corporates"
                className="
                  h-40
                  w-auto
                  object-contain
                "
              />
            </a>

            {/* Desktop Navigation */}

            <nav
              className="
                hidden
                md:flex
                items-center
                gap-12
              "
            >
              {navLinks.map((link) => (
                <a
                  key={link.title}
                  href={link.href}
                  className="
                    text-white
                    text-sm
                    
                    hover:text-[#FF1E1E]
                    transition-colors
                  "
                >
                  {link.title}
                </a>
              ))}
            </nav>

            {/* CTA */}

            <a
              href="https://flowos.intuiticorporates.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="
    hidden
    md:flex
    items-center
    justify-center
    bg-[#FF7A18]
    hover:bg-[#ff6a00]
    text-black
    font-semibold
    px-8
    h-10
    rounded-full
    transition-all
  "
            >
              Try FlowOS
            </a>

            {/* Mobile Menu */}

            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              className="
                md:hidden
                text-white
              "
            >
              {mobileMenu ? (
                <HiX size={28} />
              ) : (
                <HiOutlineMenuAlt3 size={28} />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}

      {mobileMenu && (
        <div
          className="
            fixed
            top-32
            left-4
            right-4
            bg-black
            rounded-3xl
            p-6
            z-40
            md:hidden
          "
        >
          <div className="flex flex-col gap-6">

            {navLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                onClick={() => setMobileMenu(false)}
                className="
                  text-white
                  text-lg
                "
              >
                {link.title}
              </a>
            ))}

            <a
              href="https://flowos.intuiticorporates.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="
    bg-[#FF7A18]
    text-black
    py-3
    rounded-xl
    font-semibold
    text-center
    block
  "
            >
              View FlowOS
            </a>

          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;