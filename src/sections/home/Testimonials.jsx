import { motion } from "framer-motion";

const testimonials = [
  {
    id: "t1",
    quote:
      "Intuiti delivered our client portal in under 5 weeks. The code quality was excellent and they were easy to communicate with throughout the project.",
    author: "James R.",
    role: "Founder",
    company: "TechVenture, US",
    initials: "JR",
    accent: "#FF1E1E",
  },
  {
    id: "t2",
    quote:
      "We had a complex internal tool that needed building fast. Intuiti understood our problem immediately and delivered exactly what we needed — on time and on budget.",
    author: "Sarah K.",
    role: "Operations Lead",
    company: "GrowthCo, UK",
    initials: "SK",
    accent: "#FF7A18",
  },
  {
    id: "t3",
    quote:
      "The weekly demos kept us in the loop the whole time. We always knew exactly where we stood. Professional team, clean code, great outcome.",
    author: "Raj M.",
    role: "CEO",
    company: "Momentum Brands, Australia",
    initials: "RM",
    accent: "#60a5fa",
  },
];

const results = [
  { value: "4-8", label: "Week delivery, consistently" },
  { value: "100%", label: "Fixed price, no surprises" },
  { value: "3+", label: "Countries served" },
  { value: "5", label: "Person dedicated team" },
];

const Testimonials = () => {
  return (
    <section id="results" className="py-28 relative overflow-hidden">
      {/* BG */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-[600px] h-[400px] rounded-full blur-[200px] opacity-10"
          style={{ background: "radial-gradient(circle, rgba(255,122,24,0.15) 0%, transparent 70%)" }}
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
            Client Results
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            What Our Clients <span className="text-[#FF1E1E]">Say</span>
          </h2>
        </motion.div>

        {/* Results Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14"
        >
          {results.map((r) => (
            <div
              key={r.label}
              className="rounded-xl border border-white/10 bg-white/[0.02] px-5 py-6 text-center hover:border-white/20 hover:bg-white/[0.04] transition-all"
            >
              <p className="text-3xl font-bold text-white mb-1">{r.value}</p>
              <p className="text-zinc-500 text-sm">{r.label}</p>
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
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 hover:border-white/20 hover:bg-white/[0.04] transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, j) => (
                  <svg key={j} className="w-4 h-4 text-[#FF7A18]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-zinc-300 text-sm leading-relaxed mb-6 flex-1 italic">
                "{t.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/[0.07]">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
                  style={{ background: `linear-gradient(135deg, ${t.accent} 0%, ${t.accent}80 100%)` }}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold text-sm text-white">{t.author}</p>
                  <p className="text-zinc-500 text-xs">{t.role} · {t.company}</p>
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
