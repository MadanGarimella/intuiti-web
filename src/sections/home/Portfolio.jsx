import { motion } from "framer-motion";

const projects = [
  {
    id: "flowos",
    title: "FlowOS",
    category: "Workflow Platform",
    description:
      "A complete SaaS workflow management platform engineered entirely by our team. Features include complex task routing, team collaboration, and automated operational processes.",
    tech: ["React.js", "Spring Boot", "REST API"],
    liveUrl: "https://flowos.intuiticorporates.com/",
    highlight: true,
    badge: "Our Internal Product",
    badgeColor: "#2563eb",
    features: ["Task Management", "Team Collaboration", "Process Automation"],
  },
  {
    id: "client-project-1",
    title: "B2B E-Commerce Platform",
    category: "Web Application",
    description:
      "A robust web application for a retail business, handling dynamic product catalogs, secure transaction management, and real-time order tracking integration.",
    tech: ["React.js", "Java", "REST APIs"],
    features: ["Product Catalog", "Order Management", "Payment Integration"],
    badge: "Client Implementation",
    badgeColor: "#60a5fa",
  },
  {
    id: "client-project-2",
    title: "Operations Management System",
    category: "Custom Software",
    description:
      "A highly secure internal management system featuring role-based access control, real-time reporting dashboards, and automated operational workflows.",
    tech: ["React.js", "Spring Boot", "PostgreSQL"],
    features: ["Role-Based Access", "Reporting Dashboards", "Workflow Automation"],
    badge: "Client Implementation",
    badgeColor: "#38bdf8",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-28 relative overflow-hidden bg-[#09090B]">
      {/* BG */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full blur-[200px] opacity-10"
          style={{ background: "radial-gradient(circle, rgba(37,99,235,0.15) 0%, transparent 70%)" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium mb-6">
            Engineering Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold">
            Systems We've <span className="text-primary">Architected.</span>
          </h2>
        </motion.div>

        {/* Project Cards */}
        <div className="grid lg:grid-cols-3 gap-6 mb-10">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative group rounded-2xl border bg-white/[0.02] p-8 hover:bg-white/[0.03] transition-all duration-300 hover:-translate-y-1 flex flex-col ${
                project.highlight
                  ? "border-blue-500/30 shadow-xl shadow-blue-900/10"
                  : "border-white/5 hover:border-white/10"
              }`}
            >
              {/* Badge */}
              <div className="flex items-center justify-between mb-6">
                <span
                  className="px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase"
                  style={{
                    background: `${project.badgeColor}15`,
                    color: project.badgeColor,
                    border: `1px solid ${project.badgeColor}25`,
                  }}
                >
                  {project.badge}
                </span>
                <span className="text-xs font-medium text-zinc-500">{project.category}</span>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-semibold mb-3 text-zinc-100">{project.title}</h3>

              {/* Description */}
              <p className="text-zinc-400 text-sm leading-relaxed mb-6 flex-1">{project.description}</p>

              {/* Features */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.features.map((f) => (
                  <span key={f} className="flex items-center gap-1.5 text-xs text-zinc-400">
                    <svg className="w-2.5 h-2.5 text-primary" fill="currentColor" viewBox="0 0 8 8">
                      <circle cx="4" cy="4" r="3" />
                    </svg>
                    {f}
                  </span>
                ))}
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-md text-xs font-medium text-zinc-400 bg-white/[0.02] border border-white/5"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Actions */}
              {project.liveUrl && (
                <a
                  id={`portfolio-live-${project.id}`}
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-primary hover:bg-blue-700 transition-all font-semibold text-sm text-white w-full shadow-lg"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  View Live Implementation
                </a>
              )}
            </motion.div>
          ))}
        </div>

        {/* NDA Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="rounded-2xl border border-white/5 bg-white/[0.02] p-8 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <p className="font-semibold text-white text-lg">Have a secure, NDA-protected project?</p>
            <p className="text-zinc-400 text-sm mt-1">
              We can walk you through relevant, high-security enterprise work on a call.
            </p>
          </div>
          <a
            id="portfolio-nda-cta"
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl border border-white/10 hover:bg-white/5 hover:border-white/20 transition-all font-semibold text-sm text-white flex-shrink-0"
          >
            Book a Secure Call →
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
