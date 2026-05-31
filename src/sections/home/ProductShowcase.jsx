import flowLogo from "../../assets/logos/flowos-logo.png";

const features = [
  "Project Management",
  "Task Tracking",
  "Team Collaboration",
  "Reports & Analytics",
];

const ProductShowcase = () => {
  return (
    <section
      id="products"
      className="py-32"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div
          className="
            grid
            lg:grid-cols-2
            gap-20
            items-center
          "
        >

          {/* Left Content */}

          <div>

            <img
              src={flowLogo}
              alt="FlowOS"
              className="h-16 w-auto"
            />

            <h2
              className="
                mt-8
                text-4xl
                md:text-5xl
                lg:text-6xl
                font-bold
                leading-tight
              "
            >
              Work Management
              <span className="text-[#FF1E1E]">
                {" "}Without The Chaos
              </span>
            </h2>

            <p
              className="
                mt-6
                text-lg
                text-zinc-400
                leading-relaxed
                max-w-xl
              "
            >
              FlowOS helps teams plan projects,
              manage tasks, collaborate efficiently,
              and track progress from a single,
              intuitive platform.
            </p>

            {/* Features */}

            <div className="mt-10 space-y-4">

              {features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-4"
                >
                  <div
                    className="
                      h-3
                      w-3
                      rounded-full
                      bg-[#FF1E1E]
                    "
                  />

                  <span
                    className="
                      text-zinc-300
                      text-lg
                    "
                  >
                    {feature}
                  </span>
                </div>
              ))}

            </div>

            <button
              className="
                mt-10
                bg-[#FF1E1E]
                hover:bg-red-600
                px-8
                py-4
                rounded-xl
                font-semibold
                transition-all
              "
            >
              Request Demo
            </button>

          </div>

          {/* Right Side */}

          <div>

            <div
              className="
                bg-[#111111]
                border
                border-white/10
                rounded-3xl
                p-6
              "
            >

              {/* Fake Dashboard */}

              <div
                className="
                  bg-black
                  rounded-2xl
                  p-6
                  min-h-[450px]
                "
              >

                <div className="flex gap-3 mb-6">

                  <div className="h-3 w-3 rounded-full bg-red-500" />

                  <div className="h-3 w-3 rounded-full bg-yellow-500" />

                  <div className="h-3 w-3 rounded-full bg-green-500" />

                </div>

                <div className="space-y-5">

                  <div
                    className="
                      h-24
                      rounded-xl
                      bg-[#111111]
                    "
                  />

                  <div
                    className="
                      grid
                      grid-cols-2
                      gap-4
                    "
                  >
                    <div
                      className="
                        h-40
                        rounded-xl
                        bg-[#111111]
                      "
                    />

                    <div
                      className="
                        h-40
                        rounded-xl
                        bg-[#111111]
                      "
                    />

                  </div>

                  <div
                    className="
                      h-24
                      rounded-xl
                      bg-[#111111]
                    "
                  />

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default ProductShowcase;