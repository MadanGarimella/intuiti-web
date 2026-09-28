import { motion } from "framer-motion";

const testimonials = [
  {
    id: "t1",
    quote:
      "Intuiti delivered our operational portal in under 5 weeks. The engineering quality was excellent and they were completely transparent throughout the project.",
    author: "James R.",
    role: "Director of Operations",
    company: "TechVenture, US",
    initials: "JR",
    accent: "#38bdf8",
  },
  {
    id: "t2",
    quote:
      "We had a complex legacy workflow that needed automation fast. Intuiti understood the logistics immediately and engineered exactly what we needed — on time and on budget.",
    author: "Sarah K.",
    role: "Operations Lead",
    company: "GrowthCo, UK",
    initials: "SK",
    accent: "#60a5fa",
  },
  {
    id: "t3",
    quote:
      "The agile sprints kept us in the loop the whole time. We always knew exactly where the build stood. Senior engineering team, highly scalable code, great business outcome.",
    author: "Raj M.",
    role: "CEO",
    company: "Momentum Logistics, Australia",
    initials: "RM",
    accent: "#2563eb",
  },
];

const results = [
  { value: "Complex", label: "Workflows automated" },
  { value: "100%", label: "Fixed price guarantee" },
  { value: "Scale", label: "Built for enterprise" },
  { value: "Direct", label: "Engineering access" },
];

const Testimonials = () => {
  return (
    <section id="results" className="py-28 relative overflow-hidden bg-[#09090B]">
      {/* BG */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-[600px] h-[400px] rounded-full blur-[200px] opacity-10"
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
            Client Outcomes
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold">
            What Our Partners <span className="text-primary">Say</span>
          </h2>
        </motion.div>

        {/* Results Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {results.map((r) => (
            <div
              key={r.label}
              className="rounded-2xl border border-white/5 bg-white/[0.02] px-6 py-8 text-center hover:border-white/10 hover:bg-white/[0.03] transition-all"
            >
              <p className="text-3xl font-bold text-white mb-2">{r.value}</p>
              <p className="text-zinc-500 text-sm font-medium">{r.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl border border-white/5 bg-white/[0.02] p-8 hover:border-white/10 hover:bg-white/[0.03] transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, j) => (
                  <svg key={j} className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-zinc-300 text-sm leading-relaxed mb-8 flex-1 italic">
                "{t.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4 pt-5 border-t border-white/[0.05]">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
                  style={{ background: `linear-gradient(135deg, ${t.accent} 0%, ${t.accent}90 100%)`, boxShadow: `0 4px 10px ${t.accent}30` }}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold text-sm text-white">{t.author}</p>
                  <p className="text-zinc-500 text-xs mt-0.5">{t.role} · {t.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
