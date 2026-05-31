import dashboard from "../../assets/images/dashboard.png";
import kanban from "../../assets/images/kanban.png";
import analytics from "../../assets/images/analytics.png";
import workspace from "../../assets/images/workspace.png";

const ProductScreenshots = () => {
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
            Product Preview
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
            Experience a streamlined workspace
            designed for productivity,
            collaboration, and growth.
          </p>

        </div>

        {/* Bento Grid */}

        <div
          className="
            mt-20
            grid
            grid-cols-1
            lg:grid-cols-3
            gap-6
          "
        >

          {/* Large Dashboard */}

          <div
            className="
              lg:col-span-2
              bg-[#111111]
              border
              border-white/10
              rounded-3xl
              overflow-hidden
            "
          >
            <img
              src={dashboard}
              alt="Dashboard"
              className="
                w-full
                h-full
                object-cover
              "
            />

            <div className="p-6">
              <h3 className="text-2xl font-semibold">
                Unified Dashboard
              </h3>

              <p className="text-zinc-400 mt-2">
                Monitor projects, teams,
                and performance from one place.
              </p>
            </div>
          </div>

          {/* Workspace */}

          <div
            className="
              bg-[#111111]
              border
              border-white/10
              rounded-3xl
              overflow-hidden
            "
          >
            <img
              src={workspace}
              alt="Workspace"
              className="
                w-full
                h-64
                object-cover
              "
            />

            <div className="p-6">
              <h3 className="text-xl font-semibold">
                Team Workspace
              </h3>

              <p className="text-zinc-400 mt-2">
                Collaborate seamlessly across teams.
              </p>
            </div>
          </div>

          {/* Kanban */}

          <div
            className="
              bg-[#111111]
              border
              border-white/10
              rounded-3xl
              overflow-hidden
            "
          >
            <img
              src={kanban}
              alt="Kanban"
              className="
                w-full
                h-64
                object-cover
              "
            />

            <div className="p-6">
              <h3 className="text-xl font-semibold">
                Kanban Boards
              </h3>

              <p className="text-zinc-400 mt-2">
                Track work visually and efficiently.
              </p>
            </div>
          </div>

          {/* Analytics */}

          <div
            className="
              lg:col-span-2
              bg-[#111111]
              border
              border-white/10
              rounded-3xl
              overflow-hidden
            "
          >
            <img
              src={analytics}
              alt="Analytics"
              className="
                w-full
                h-[400px]
                object-cover
              "
            />

            <div className="p-6">
              <h3 className="text-2xl font-semibold">
                Analytics & Reports
              </h3>

              <p className="text-zinc-400 mt-2">
                Gain insights into team performance
                and project progress.
              </p>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
};

export default ProductScreenshots;