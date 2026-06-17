import { motion } from "framer-motion";

const projects = [
  {
    id: "flowos",
    title: "FlowOS",
    category: "SaaS Platform",
    description:
      "A full SaaS workflow management platform built entirely by our team. Features include task management, team collaboration, and business process automation.",
    tech: ["React.js", "Spring Boot", "REST API"],
    liveUrl: "https://flowos.intuiticorporates.com/",
    highlight: true,
    badge: "Our Own Product",
    badgeColor: "#FF1E1E",
    features: ["Task Management", "Team Collaboration", "Process Automation"],
  },
  {
    id: "client-project-1",
    title: "E-Commerce Web Platform",
    category: "Web Application",
    description:
      "A fully responsive e-commerce web application for a retail business, featuring product catalog, cart management, and order tracking.",
    tech: ["React.js", "JavaScript", "REST APIs"],
    features: ["Product Catalog", "Order Management", "Payment Integration"],
    badge: "Client Project",
    badgeColor: "#FF7A18",
  },
  {
    id: "client-project-2",
    title: "Business Management System",
    category: "Custom Software",
    description:
      "A custom internal business management system with role-based access, reporting dashboards, and workflow automation for an operations team.",
    tech: ["React.js", "Spring Boot", "Java"],
    features: ["Role-Based Access", "Reporting Dashboards", "Workflow Automation"],
    badge: "Client Project",
    badgeColor: "#60a5fa",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-28 relative overflow-hidden">
      {/* BG */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full blur-[200px] opacity-10"
          style={{ background: "radial-gradient(circle, rgba(96,165,250,0.15) 0%, transparent 70%)" }}
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
          <span className="inline-block px-4 py-1.5 rounded-full border border-[#FF1E1E]/30 bg-[#FF1E1E]/10 text-[#FF1E1E] text-sm font-medium mb-6">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            What We've <span className="text-[#FF1E1E]">Built</span>
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
              className={`relative group rounded-2xl border bg-white/[0.02] p-6 hover:bg-white/[0.05] transition-all duration-300 hover:-translate-y-1 flex flex-col ${
                project.highlight
                  ? "border-[#FF1E1E]/30 shadow-lg shadow-red-900/10"
                  : "border-white/10 hover:border-white/20"
              }`}
            >
              {/* Badge */}
              <div className="flex items-center justify-between mb-5">
                <span
                  className="px-3 py-1 rounded-full text-xs font-semibold"
                  style={{
                    background: `${project.badgeColor}20`,
                    color: project.badgeColor,
                    border: `1px solid ${project.badgeColor}30`,
                  }}
                >
                  {project.badge}
                </span>
                <span className="text-xs text-zinc-600">{project.category}</span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-3">{project.title}</h3>

              {/* Description */}
              <p className="text-zinc-400 text-sm leading-relaxed mb-5 flex-1">{project.description}</p>

              {/* Features */}
              <div className="flex flex-wrap gap-2 mb-5">
                {project.features.map((f) => (
                  <span key={f} className="flex items-center gap-1.5 text-xs text-zinc-400">
                    <svg className="w-3 h-3 text-[#FF1E1E]" fill="currentColor" viewBox="0 0 8 8">
                      <circle cx="4" cy="4" r="3" />
                    </svg>
                    {f}
                  </span>
                ))}
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-md text-xs font-medium text-zinc-500 bg-white/[0.03] border border-white/10"
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
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#FF1E1E] hover:bg-red-600 transition-all font-semibold text-sm text-white w-fit"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Live Demo
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
          className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div>
            <p className="font-medium text-white">Have an NDA-protected project?</p>
            <p className="text-zinc-400 text-sm mt-1">
              We can walk you through similar work on a call.
            </p>
          </div>
          <a
            id="portfolio-nda-cta"
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/15 hover:bg-white/5 hover:border-white/25 transition-all font-medium text-sm text-zinc-300 hover:text-white flex-shrink-0"
          >
            Book a Call →
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
