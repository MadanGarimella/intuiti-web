import flowLogo from "../../assets/logos/flowos-logo.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0">

        {/* Grid Pattern */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.02]
            [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
            [background-size:80px_80px]
          "
        />

        {/* Red Glow */}
        <div
          className="
            absolute
            top-[-250px]
            left-1/2
            -translate-x-1/2
            w-[1000px]
            h-[1000px]
            rounded-full
            bg-red-600/15
            blur-[180px]
          "
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

        <div className="min-h-screen pt-40 pb-20 grid lg:grid-cols-2 gap-20 items-center">

          {/* Left Side */}

          <div className="-mt-10">

            <div
              className="
                inline-flex
                items-center
                px-4
                py-2
                rounded-full
                border
                border-white/10
                bg-white/5
                text-sm
                text-zinc-300
              "
            >
              🚀 SaaS Company Building Modern Business Software
            </div>

            <h1
              className="
                mt-8
                text-3xl
                md:text-4xl
                lg:text-5xl
                font-bold
                leading-[1.05]
                tracking-tight
              "
            >
              Building The Future
              <br />
              Of Business
              <br />
              <span className="text-[#FF1E1E]">
                Software
              </span>
            </h1>

            <p
              className="
                mt-8
                text-xl
                text-zinc-400
                leading-relaxed
                max-w-xl
              "
            >
              Intuiti Corporates develops modern SaaS
              products that help businesses streamline
              operations, improve productivity, and
              scale efficiently.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">

              <a
                href="https://flowos.intuiticorporates.com/"
                className="
                  px-8
                  py-4
                  rounded-xl
                  bg-[#FF1E1E]
                  hover:bg-red-600
                  transition-all
                  font-semibold
                "
              >
                Explore FlowOS
              </a>

              <button
                className="
                  px-8
                  py-4
                  rounded-xl
                  border
                  border-white/10
                  hover:bg-white/5
                  transition-all
                "
              >
                Learn About Us
              </button>

            </div>

            {/* Stats */}

            <div
              className="
                mt-12
                flex
                flex-wrap
                gap-10
              "
            >

              <div>
                <h3 className="text-3xl font-bold">
                  1+
                </h3>
                <p className="text-zinc-500">
                  SaaS Products
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold">
                  100%
                </h3>
                <p className="text-zinc-500">
                  Product Focused
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold">
                  24/7
                </h3>
                <p className="text-zinc-500">
                  Cloud Access
                </p>
              </div>

            </div>

          </div>

          {/* Right Side */}

          <div>

            <div
              className="
                bg-white/[0.03]
                backdrop-blur-xl
                border
                border-white/10
                rounded-3xl
                p-8
                shadow-2xl
              "
            >

              <span
                className="
                  text-[#FF1E1E]
                  text-sm
                  uppercase
                  tracking-widest
                  font-semibold
                "
              >
                Intuiti Ecosystem
              </span>

              <h3
                className="
                  mt-4
                  text-3xl
                  font-bold
                "
              >
                Products Built For
                Modern Businesses
              </h3>

              <div className="mt-10 space-y-5">

                {/* FlowOS */}

                <div
                  className="
                    p-5
                    rounded-2xl
                    bg-black/40
                    border
                    border-white/10
                  "
                >

                  {/* Fixed Logo Area */}

                  <div className="mb-6">

                    <div
                      className="
                        h-20
                        overflow-hidden
                        flex
                        items-center
                      "
                    >
                      <img
                        src={flowLogo}
                        alt="FlowOS"
                        className="
                          w-auto
                          object-contain
                          flex-shrink-0
                        "
                        style={{
                          height: "100px",
                        }}
                      />
                    </div>

                  </div>

                  <h4 className="text-lg font-semibold">
                    Work Management Platform
                  </h4>

                  <p className="text-zinc-400 mt-2">
                    Organize projects, teams and workflows
                    from a single platform.
                  </p>

                </div>

                {/* CRM */}

                <div
                  className="
                    p-5
                    rounded-2xl
                    bg-black/40
                    border
                    border-white/10
                  "
                >
                  <div className="flex items-center justify-between">

                    <h4 className="font-semibold">
                      CRM Suite
                    </h4>

                    <span
                      className="
                        text-xs
                        px-3
                        py-1
                        rounded-full
                        bg-[#FF1E1E]/20
                        text-[#FF1E1E]
                      "
                    >
                      Coming Soon
                    </span>

                  </div>

                  <p className="text-zinc-400 mt-2">
                    Customer relationship and sales
                    management platform.
                  </p>

                </div>

                {/* AI */}

                <div
                  className="
                    p-5
                    rounded-2xl
                    bg-black/40
                    border
                    border-white/10
                  "
                >
                  <div className="flex items-center justify-between">

                    <h4 className="font-semibold">
                      AI Automation
                    </h4>

                    <span
                      className="
                        text-xs
                        px-3
                        py-1
                        rounded-full
                        bg-[#FF1E1E]/20
                        text-[#FF1E1E]
                      "
                    >
                      Research
                    </span>

                  </div>

                  <p className="text-zinc-400 mt-2">
                    AI-powered automation for modern
                    business operations.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Hero;
