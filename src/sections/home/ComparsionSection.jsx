const comparisons = [
  {
    old: "Multiple disconnected tools",
    new: "Unified workspace for all work",
  },
  {
    old: "Complex onboarding process",
    new: "Simple and intuitive setup",
  },
  {
    old: "Scattered communication",
    new: "Centralized team collaboration",
  },
  {
    old: "Limited project visibility",
    new: "Real-time progress tracking",
  },
  {
    old: "Manual repetitive tasks",
    new: "Workflow automation",
  },
  {
    old: "Hard to scale operations",
    new: "Built for growing teams",
  },
];

const ComparisonSection = () => {
  return (
    <section className="py-32">

      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}

        <div className="text-center max-w-3xl mx-auto">

          <span
            className="
              text-[#FF1E1E]
              uppercase
              tracking-widest
              text-sm
              font-semibold
            "
          >
            Why FlowOS
          </span>

          <h2
            className="
              mt-4
              text-4xl
              md:text-5xl
              font-bold
            "
          >
            Built For Modern Teams
          </h2>

          <p
            className="
              mt-6
              text-zinc-400
              text-lg
            "
          >
            Replace fragmented workflows with
            a centralized platform that helps
            teams move faster.
          </p>

        </div>

        {/* Comparison Table */}

        <div
          className="
            mt-20
            bg-[#111111]
            border
            border-white/10
            rounded-3xl
            overflow-hidden
          "
        >

          <div
            className="
              grid
              grid-cols-2
              border-b
              border-white/10
            "
          >

            <div className="p-6">
              <h3
                className="
                  text-xl
                  font-semibold
                  text-zinc-500
                "
              >
                Other Tools
              </h3>
            </div>

            <div className="p-6 bg-[#FF1E1E]/10">
              <h3
                className="
                  text-xl
                  font-semibold
                  text-[#FF1E1E]
                "
              >
                FlowOS
              </h3>
            </div>

          </div>

          {comparisons.map((item, index) => (
            <div
              key={index}
              className="
                grid
                grid-cols-2
                border-b
                border-white/5
                last:border-none
              "
            >

              <div
                className="
                  p-6
                  text-zinc-400
                "
              >
                {item.old}
              </div>

              <div
                className="
                  p-6
                  text-white
                  font-medium
                "
              >
                {item.new}
              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default ComparisonSection;