import logo from "../../assets/logos/intuiti-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="
        border-t
        border-white/10
        bg-black
      "
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 font-serif">

        {/* Main Footer Grid */}

        <div className="grid lg:grid-cols-6 gap-5">

          {/* Brand */}

          <div className="lg:col-span-2">

            <div className="h-16 flex items-center overflow-hidden mb-6">
              <img
                src={logo}
                alt="Intuiti Corporates"
                className="w-auto object-contain flex-shrink-0"
                style={{
                  height: "200px",
                }}
              />
            </div>

            <p
              className="
                text-zinc-400
                text-lg
                leading-relaxed
                max-w-lg
              "
            >
              Intuiti Corporates builds modern SaaS
              products that help businesses streamline
              operations, improve productivity, and
              scale efficiently.
            </p>

            <a
              href="https://flowos.intuiticorporates.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                mt-8
                text-[#FF7A18]
                hover:text-[#ff9d4d]
                transition-colors
                text-lg
                font-medium
              "
            >
              Explore FlowOS →
            </a>

          </div>

          {/* Products */}

          <div>

            <h4
              className="
                text-white
                font-semibold
                text-xl
                mb-6
              "
            >
              Products
            </h4>

            <ul className="space-y-4">

              <li>
                <a
                  href="https://flowos.intuiticorporates.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    text-zinc-400
                    hover:text-white
                    transition-colors
                  "
                >
                  FlowOS
                </a>
              </li>

            </ul>

          </div>

          {/* Company */}

          <div>

            <h4
              className="
                text-white
                font-semibold
                text-xl
                mb-6
              "
            >
              Company
            </h4>

            <ul className="space-y-4">

              <li>
                <a
                  href="#about"
                  className="
                    text-zinc-400
                    hover:text-white
                    transition-colors
                  "
                >
                  About Us
                </a>
              </li>

              <li>
                <a
                  href="#roadmap"
                  className="
                    text-zinc-400
                    hover:text-white
                    transition-colors
                  "
                >
                  Roadmap
                </a>
              </li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h4
              className="
                text-white
                font-semibold
                text-xl
                mb-6
              "
            >
              Contact
            </h4>

            <ul className="space-y-4">

              <li>
                <a
                  href="mailto:contact@intuiticorporates.com"
                  className="
                    text-zinc-400
                    hover:text-white
                    transition-colors
                    break-all
                  "
                >
                  contact@intuiticorporates.com
                </a>
              </li>

              <li className="text-zinc-400">
                Hyderabad, India
              </li>

            </ul>

          </div>

          {/* Legal */}

          <div>

            <h4
              className="
                text-white
                font-semibold
                text-xl
                mb-6
              "
            >
              Legal
            </h4>

            <ul className="space-y-4">

              <li>
                <a
                  href="/privacy-policy"
                  className="
                    text-zinc-400
                    hover:text-white
                    transition-colors
                  "
                >
                  Privacy Policy
                </a>
              </li>

              <li>
                <a
                  href="/terms-of-service"
                  className="
                    text-zinc-400
                    hover:text-white
                    transition-colors
                  "
                >
                  Terms of Service
                </a>
              </li>

            </ul>

          </div>

        </div>

        {/* Bottom Bar */}

        <div
          className="
            mt-16
            pt-8
            border-t
            border-white/10
            flex
            flex-col
            md:flex-row
            items-center
            justify-between
            gap-4
          "
        >

          <p className="text-zinc-500 text-sm">
            © {currentYear} Intuiti Corporates.
            All rights reserved.
          </p>

          <p className="text-zinc-500 text-sm">
            Building the future of business software.
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;