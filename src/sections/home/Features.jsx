import {
  FiLayers,
  FiUsers,
  FiCheckSquare,
  FiZap,
  FiBarChart2,
  FiShield,
} from "react-icons/fi";

const features = [
  {
    icon: <FiLayers size={28} />,
    title: "Project Management",
    description:
      "Manage projects, milestones, and deliverables from a centralized workspace.",
  },
  {
    icon: <FiUsers size={28} />,
    title: "Team Collaboration",
    description:
      "Keep everyone aligned with shared workspaces and real-time updates.",
  },
  {
    icon: <FiCheckSquare size={28} />,
    title: "Task Tracking",
    description:
      "Track task progress, deadlines, priorities, and ownership effortlessly.",
  },
  {
    icon: <FiZap size={28} />,
    title: "Workflow Automation",
    description:
      "Automate repetitive processes and reduce manual work.",
  },
  {
    icon: <FiBarChart2 size={28} />,
    title: "Reports & Analytics",
    description:
      "Gain visibility into team performance and project health.",
  },
  {
    icon: <FiShield size={28} />,
    title: "Role Based Access",
    description:
      "Control permissions and secure your organization's data.",
  },
];

const Features = () => {
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
            FlowOS Features
          </span>

          <h2
            className="
              mt-4
              text-4xl
              md:text-5xl
              font-bold
            "
          >
            Everything Your Team
            Needs To Stay Productive
          </h2>

          <p
            className="
              mt-6
              text-zinc-400
              text-lg
            "
          >
            Built to simplify work, improve
            collaboration, and help teams move faster.
          </p>

        </div>

        {/* Grid */}

        <div
          className="
            mt-20
            grid
            md:grid-cols-2
            lg:grid-cols-3
            gap-8
          "
        >
          {features.map((feature) => (
            <div
              key={feature.title}
              className="
                group
                bg-[#111111]
                border
                border-white/10
                rounded-3xl
                p-8
                hover:border-[#FF1E1E]/50
                transition-all
                duration-300
              "
            >
              <div
                className="
                  h-14
                  w-14
                  rounded-2xl
                  bg-[#FF1E1E]/10
                  flex
                  items-center
                  justify-center
                  text-[#FF1E1E]
                "
              >
                {feature.icon}
              </div>

              <h3
                className="
                  mt-6
                  text-2xl
                  font-semibold
                "
              >
                {feature.title}
              </h3>

              <p
                className="
                  mt-4
                  text-zinc-400
                  leading-relaxed
                "
              >
                {feature.description}
              </p>

            </div>
          ))}
        </div>

      </div>

    </section>
  );
};

export default Features;