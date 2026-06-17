import { motion } from "framer-motion";

const comparisons = [
  {
    us: "A dedicated 5-person team — not a marketplace",
    them: "Random freelancers with no accountability",
  },
  {
    us: "We've built our own SaaS (FlowOS) — we think like builders",
    them: "Agencies that just execute tickets",
  },
  {
    us: "Fixed timelines — 4-8 weeks, not 6 months",
    them: "Agencies that drag timelines",
  },
  {
    us: "Direct communication — no account managers, no middlemen",
    them: "Layers of PMs you'll never meet",
  },
  {
    us: "Transparent pricing — no hidden costs",
    them: "Scope creep and surprise invoices",
  },
];

const WhyIntuiti = () => {
  return (
    <section id="why-us" className="py-28 relative overflow-hidden">
      {/* BG */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[200px] opacity-15"
          style={{ background: "radial-gradient(circle, rgba(255,122,24,0.12) 0%, transparent 70%)" }}
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
          <span className="inline-block px-4 py-1.5 rounded-full border border-[#FF1E1E]/30 bg-[#FF1E1E]/10 text-[#FF1E1E] text-sm font-medium mb-6">
            Why Intuiti
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Why Businesses Choose Us Over{" "}
            <span className="text-[#FF1E1E]">Freelancers and Larger Agencies</span>
          </h2>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-2xl border border-white/10 overflow-hidden mb-12"
        >
          {/* Table Header */}
          <div className="grid grid-cols-2">
            <div className="px-6 py-4 bg-[#FF1E1E]/10 border-b border-white/10 flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-[#FF1E1E] flex items-center justify-center flex-shrink-0">
                <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <span className="font-bold text-white text-sm md:text-base">We Are</span>
            </div>
            <div className="px-6 py-4 bg-white/[0.02] border-b border-l border-white/10 flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-zinc-700 flex items-center justify-center flex-shrink-0">
                <svg className="w-3 h-3 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </span>
              <span className="font-bold text-zinc-400 text-sm md:text-base">Others Are</span>
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
              className="grid grid-cols-2 border-b border-white/[0.06] last:border-0 group"
            >
              <div className="px-6 py-5 bg-white/[0.02] group-hover:bg-[#FF1E1E]/[0.04] transition-colors border-r border-white/[0.06]">
                <p className="text-white text-sm md:text-base leading-relaxed">{row.us}</p>
              </div>
              <div className="px-6 py-5 group-hover:bg-white/[0.01] transition-colors">
                <p className="text-zinc-500 text-sm md:text-base leading-relaxed line-through decoration-zinc-600">{row.them}</p>
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
          className="text-center"
        >
          <div className="inline-block relative">
            <div className="absolute -top-4 -left-6 text-[80px] leading-none text-[#FF1E1E]/20 font-serif select-none">"</div>
            <blockquote className="text-xl md:text-2xl text-zinc-200 font-medium leading-relaxed max-w-2xl mx-auto italic">
              We don't just write code. We understand your business problem first — then build the right solution.
            </blockquote>
          </div>
          <p className="mt-4 text-zinc-500 text-sm">— Intuiti Corporates Team</p>
        </motion.div>

      </div>
    </section>
  );
};

export default WhyIntuiti;
