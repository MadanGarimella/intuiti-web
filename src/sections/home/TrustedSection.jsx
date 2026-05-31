import { FiLayers, FiUsers, FiZap } from "react-icons/fi";

const cards = [
  {
    icon: <FiLayers size={28} />,
    title: "Work Management",
    description:
      "Organize projects, tasks, and workflows from a centralized workspace.",
  },
  {
    icon: <FiUsers size={28} />,
    title: "Team Collaboration",
    description:
      "Enable seamless communication and collaboration across teams.",
  },
  {
    icon: <FiZap size={28} />,
    title: "Business Automation",
    description:
      "Reduce repetitive work and improve efficiency through automation.",
  },
];

const TrustedSection = () => {
  return (
    <section
      id="about"
      className="py-28"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}

        <div className="text-center max-w-3xl mx-auto">

          <span
            className="
              text-[#FF1E1E]
              font-semibold
              uppercase
              tracking-widest
              text-sm
            "
          >
            About Intuiti
          </span>

          <h2
            className="
              mt-4
              text-4xl
              md:text-5xl
              font-bold
            "
          >
            Trusted by Modern Teams
          </h2>

          <p
            className="
              mt-6
              text-zinc-400
              text-lg
              leading-relaxed
            "
          >
            We build software products that help
            businesses streamline operations,
            improve productivity, and scale
            efficiently in a rapidly changing world.
          </p>

        </div>

        {/* Cards */}

        <div
          className="
            grid
            md:grid-cols-3
            gap-8
            mt-20
          "
        >
          {cards.map((card) => (
            <div
              key={card.title}
              className="
                bg-[#111111]
                border
                border-white/10
                rounded-3xl
                p-8
                hover:border-[#FF1E1E]/40
                transition-all
                duration-300
              "
            >
              <div className="text-[#FF1E1E]">
                {card.icon}
              </div>

              <h3
                className="
                  mt-6
                  text-2xl
                  font-semibold
                "
              >
                {card.title}
              </h3>

              <p
                className="
                  mt-4
                  text-zinc-400
                  leading-relaxed
                "
              >
                {card.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TrustedSection;