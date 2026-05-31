import {
  FiCheckCircle,
  FiClock,
} from "react-icons/fi";

const roadmap = [
  {
    title: "Task Management",
    status: "completed",
    description:
      "Manage projects, tasks and workflows efficiently.",
  },
  {
    title: "Team Collaboration",
    status: "completed",
    description:
      "Real-time communication and team alignment.",
  },
  {
    title: "Analytics Dashboard",
    status: "completed",
    description:
      "Track productivity and project performance.",
  },
  {
    title: "CRM Module",
    status: "upcoming",
    description:
      "Manage leads, customers and sales pipelines.",
  },
  {
    title: "HR Management",
    status: "upcoming",
    description:
      "Employee records, attendance and performance.",
  },
  {
    title: "AI Assistant",
    status: "upcoming",
    description:
      "Automate workflows and boost productivity.",
  },
];

const Roadmap = () => {
  return (
    <section
      id="roadmap"
      className="py-32"
    >
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
            Product Vision
          </span>

          <h2
            className="
              mt-4
              text-4xl
              md:text-5xl
              font-bold
            "
          >
            Building The Future
            Of Work
          </h2>

          <p
            className="
              mt-6
              text-zinc-400
              text-lg
            "
          >
            FlowOS is evolving from a work
            management platform into a complete
            business operating system.
          </p>

        </div>

        {/* Timeline */}

        <div className="mt-20 max-w-5xl mx-auto">

          {roadmap.map((item, index) => (
            <div
              key={index}
              className="
                flex
                gap-6
                pb-10
                relative
              "
            >
              {/* Line */}

              {index !== roadmap.length - 1 && (
                <div
                  className="
                    absolute
                    left-[17px]
                    top-10
                    h-full
                    w-[2px]
                    bg-white/10
                  "
                />
              )}

              {/* Icon */}

              <div
                className="
                  z-10
                  h-9
                  w-9
                  rounded-full
                  flex
                  items-center
                  justify-center
                  bg-[#111111]
                  border
                  border-white/10
                "
              >
                {item.status === "completed" ? (
                  <FiCheckCircle
                    className="text-green-500"
                    size={18}
                  />
                ) : (
                  <FiClock
                    className="text-[#FF1E1E]"
                    size={18}
                  />
                )}
              </div>

              {/* Content */}

              <div
                className="
                  bg-[#111111]
                  border
                  border-white/10
                  rounded-2xl
                  p-6
                  flex-1
                "
              >
                <div className="flex items-center gap-3">

                  <h3
                    className="
                      text-xl
                      font-semibold
                    "
                  >
                    {item.title}
                  </h3>

                  <span
                    className={`
                      px-3 py-1
                      rounded-full
                      text-xs
                      font-medium
                      ${
                        item.status === "completed"
                          ? "bg-green-500/20 text-green-400"
                          : "bg-[#FF1E1E]/20 text-[#FF1E1E]"
                      }
                    `}
                  >
                    {item.status === "completed"
                      ? "Live"
                      : "Coming Soon"}
                  </span>

                </div>

                <p
                  className="
                    mt-3
                    text-zinc-400
                  "
                >
                  {item.description}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Roadmap;