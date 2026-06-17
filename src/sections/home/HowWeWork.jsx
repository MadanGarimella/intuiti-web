import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Discovery Call",
    tag: "Free",
    duration: "30 mins",
    description:
      "We spend 30 minutes understanding your business, your problem, and what you need built. No fluff. No sales pitch.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    accent: "#FF1E1E",
  },
  {
    number: "02",
    title: "Proposal & Sign-off",
    tag: "Fixed price",
    duration: "48 hours",
    description:
      "Within 48 hours you receive a detailed scope, timeline, and fixed price. No surprises.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    accent: "#FF7A18",
  },
  {
    number: "03",
    title: "Build & Weekly Updates",
    tag: "4-8 weeks",
    duration: "Weekly demos",
    description:
      "We build in sprints. Every week you see progress. You're never left wondering what's happening.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    accent: "#4ade80",
  },
  {
    number: "04",
    title: "Launch & Support",
    tag: "Ongoing",
    duration: "30-day support",
    description:
      "We deploy, test, and hand over fully documented software. 30-day post-launch support included.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    accent: "#60a5fa",
  },
];

const HowWeWork = () => {
  return (
    <section id="process" className="py-28 relative overflow-hidden">
      {/* BG */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[400px] rounded-full blur-[200px] opacity-10"
          style={{ background: "radial-gradient(circle, rgba(255,30,30,0.2) 0%, transparent 70%)" }}
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
          <span className="inline-block px-4 py-1.5 rounded-full border border-[#FF1E1E]/30 bg-[#FF1E1E]/10 text-[#FF1E1E] text-sm font-medium mb-6">
            How We Work
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            From Discovery to Delivery —{" "}
            <span className="text-[#FF1E1E]">Here's Our Process</span>
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
                <div className="hidden lg:block absolute top-10 left-full w-6 h-px border-t border-dashed border-white/15 z-10" />
              )}

              <div className="h-full rounded-2xl border border-white/10 bg-white/[0.02] p-6 hover:border-white/20 hover:bg-white/[0.04] transition-all duration-300 group-hover:-translate-y-1">
                {/* Step number + tag */}
                <div className="flex items-center justify-between mb-5">
                  <span className="text-xs font-bold tracking-widest text-zinc-600">{step.number}</span>
                  <div className="flex gap-2">
                    <span className="px-2 py-0.5 rounded text-xs font-medium bg-white/[0.05] text-zinc-400 border border-white/10">
                      {step.tag}
                    </span>
                  </div>
                </div>

                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
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
                <h3 className="text-lg font-bold mb-3">{step.title}</h3>

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
          className="text-center mt-14"
        >
          <a
            id="process-cta"
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#FF1E1E] hover:bg-red-600 transition-all font-semibold text-white shadow-lg shadow-red-900/20 hover:-translate-y-0.5"
          >
            Start with a Free Discovery Call
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
