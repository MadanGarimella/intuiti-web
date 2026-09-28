import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Discovery & Architecture",
    tag: "Free",
    duration: "30 mins",
    description:
      "We analyze your operations, understand your workflows, and map out the technical requirements. No fluff. Just engineering.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    accent: "#38bdf8",
  },
  {
    number: "02",
    title: "Proposal & Scope",
    tag: "Fixed price",
    duration: "48 hours",
    description:
      "You receive a clear technical proposal, a detailed scope of work, timeline, and fixed cost. No surprises later.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    accent: "#818cf8",
  },
  {
    number: "03",
    title: "Agile Engineering",
    tag: "4-8 weeks",
    duration: "Weekly demos",
    description:
      "We build in fast sprints. Every week you see working software, ensuring the project aligns perfectly with your goals.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    accent: "#60a5fa",
  },
  {
    number: "04",
    title: "Deployment & Support",
    tag: "Ongoing",
    duration: "30-day support",
    description:
      "We deploy to production, train your team, and provide 30 days of post-launch engineering support.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    accent: "#2563eb",
  },
];

const HowWeWork = () => {
  return (
    <section id="process" className="py-28 relative overflow-hidden bg-[#09090B]">
      {/* BG */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[400px] rounded-full blur-[200px] opacity-10"
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
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium mb-6">
            Engineering Process
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold">
            From Architecture to Production —{" "}
            <span className="text-primary">How We Deliver</span>
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative group"
            >
              {/* Connector line (desktop) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-full w-6 h-px border-t border-dashed border-white/10 z-10" />
              )}

              <div className="h-full rounded-2xl border border-white/5 bg-white/[0.02] p-8 hover:border-white/10 hover:bg-white/[0.03] transition-all duration-300 group-hover:-translate-y-1">
                {/* Step number + tag */}
                <div className="flex items-center justify-between mb-5">
                  <span className="text-sm font-bold tracking-widest text-zinc-600">{step.number}</span>
                  <div className="flex gap-2">
                    <span className="px-2 py-0.5 rounded text-xs font-medium bg-white/[0.03] text-zinc-400 border border-white/5">
                      {step.tag}
                    </span>
                  </div>
                </div>

                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                  style={{
                    background: `linear-gradient(135deg, ${step.accent}20 0%, ${step.accent}05 100%)`,
                    border: `1px solid ${step.accent}30`,
                    color: step.accent,
                  }}
                >
                  {step.icon}
                </div>

                {/* Duration badge */}
                <div
                  className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4"
                  style={{
                    background: `${step.accent}15`,
                    color: step.accent,
                  }}
                >
                  {step.duration}
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-3 text-zinc-100">{step.title}</h3>

                {/* Description */}
                <p className="text-zinc-400 text-sm leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-16"
        >
          <a
            id="process-cta"
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary hover:bg-blue-700 transition-all font-semibold text-white shadow-lg shadow-blue-900/20 hover:-translate-y-0.5"
          >
            Book a Technical Discovery Call
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HowWeWork;
