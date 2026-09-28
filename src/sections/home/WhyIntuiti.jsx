import { motion } from "framer-motion";

const comparisons = [
  {
    us: "A dedicated engineering team — not a marketplace",
    them: "Random freelancers with no accountability",
  },
  {
    us: "We build systems that integrate with your operations",
    them: "Agencies that just execute tickets blindly",
  },
  {
    us: "Fixed timelines — 4-8 weeks to production",
    them: "Agencies that drag timelines into months",
  },
  {
    us: "Direct communication with engineers",
    them: "Layers of account managers you'll never meet",
  },
  {
    us: "Transparent business value and pricing",
    them: "Scope creep and surprise invoices",
  },
];

const WhyIntuiti = () => {
  return (
    <section id="why-us" className="py-28 relative overflow-hidden bg-[#09090B]">
      {/* BG */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[200px] opacity-10"
          style={{ background: "radial-gradient(circle, rgba(37,99,235,0.12) 0%, transparent 70%)" }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium mb-6">
            The Intuiti Standard
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
            Why Engineering-Driven Companies{" "}
            <span className="text-primary">Partner With Us.</span>
          </h2>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-2xl border border-white/5 overflow-hidden mb-12 shadow-2xl"
        >
          {/* Table Header */}
          <div className="grid grid-cols-2">
            <div className="px-6 py-5 bg-primary/10 border-b border-white/5 flex items-center gap-3">
              <span className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <span className="font-semibold text-white text-base">Intuiti Engineering</span>
            </div>
            <div className="px-6 py-5 bg-white/[0.01] border-b border-l border-white/5 flex items-center gap-3">
              <span className="w-6 h-6 rounded-full bg-zinc-800 flex items-center justify-center flex-shrink-0">
                <svg className="w-3.5 h-3.5 text-zinc-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </span>
              <span className="font-semibold text-zinc-400 text-base">Standard Agencies</span>
            </div>
          </div>

          {/* Rows */}
          {comparisons.map((row, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="grid grid-cols-2 border-b border-white/[0.04] last:border-0 group"
            >
              <div className="px-6 py-6 bg-white/[0.01] group-hover:bg-primary/[0.03] transition-colors border-r border-white/[0.04]">
                <p className="text-zinc-200 text-sm md:text-base leading-relaxed">{row.us}</p>
              </div>
              <div className="px-6 py-6 group-hover:bg-white/[0.02] transition-colors">
                <p className="text-zinc-500 text-sm md:text-base leading-relaxed line-through decoration-zinc-700">{row.them}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Pull Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-20"
        >
          <div className="inline-block relative">
            <div className="absolute -top-6 -left-8 text-[100px] leading-none text-primary/10 font-serif select-none">"</div>
            <blockquote className="text-xl md:text-2xl text-zinc-300 font-medium leading-relaxed max-w-2xl mx-auto italic relative z-10">
              We don't just write code. We understand your operational bottlenecks first — then engineer the right automated solution.
            </blockquote>
          </div>
          <p className="mt-6 text-zinc-500 text-sm font-semibold tracking-wide uppercase">— The Intuiti Leadership</p>
        </motion.div>

      </div>
    </section>
  );
};

export default WhyIntuiti;
