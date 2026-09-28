import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const techStack = [
  { name: "Custom Software", color: "#60a5fa", bg: "rgba(96,165,250,0.04)", border: "rgba(96,165,250,0.15)" },
  { name: "System Integration", color: "#34d399", bg: "rgba(52,211,153,0.04)", border: "rgba(52,211,153,0.15)" },
  { name: "Workflow Automation", color: "#fbbf24", bg: "rgba(251,191,36,0.04)", border: "rgba(251,191,36,0.15)" },
  { name: "Client Portals", color: "#38bdf8", bg: "rgba(56,189,248,0.04)", border: "rgba(56,189,248,0.15)" },
  { name: "Operational Dashboards", color: "#a78bfa", bg: "rgba(167,139,250,0.04)", border: "rgba(167,139,250,0.15)" },
];

const stats = [
  { value: "Complex", label: "Workflows Solved" },
  { value: "Scale", label: "Built for Operations" },
  { value: "Global", label: "US, UK & Australia" },
];

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden bg-[#09090B]">
      {/* Background */}
      <div className="absolute inset-0">
        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage:
              "linear-gradient(to right,#ffffff 1px,transparent 1px),linear-gradient(to bottom,#ffffff 1px,transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Blue Glow */}
        <div
          className="absolute top-[-300px] left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] rounded-full blur-[200px]"
          style={{
            background: "radial-gradient(circle, rgba(37,99,235,0.08) 0%, transparent 70%)",
            transform: `translateX(-50%) translateY(${scrollY * 0.1}px)`,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="min-h-screen pt-40 pb-20 flex flex-col justify-center">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-zinc-300 w-fit mb-10"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Engineering Software for Logistics & Complex Operations
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-[1.05] tracking-tight max-w-5xl"
          >
            Custom Software & Automation for Businesses That Run on <span className="text-primary">Complex Workflows.</span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 text-lg md:text-xl text-zinc-400 leading-relaxed max-w-3xl"
          >
            We don't just write code. We build robust system integrations and operational software around your existing TMS, WMS, and ERPs. <strong className="text-white font-medium">Integrate, don't replace.</strong>
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4 mt-12"
          >
            <a
              id="hero-cta-primary"
              href="#contact"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary hover:bg-blue-700 transition-all font-semibold text-white shadow-lg shadow-blue-900/20 hover:-translate-y-0.5"
            >
              Book a Discovery Call
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>

            <a
              id="hero-cta-secondary"
              href="#services"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-white/10 hover:bg-white/5 hover:border-white/20 transition-all font-medium text-zinc-300 hover:text-white"
            >
              Explore How We Help
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl"
          >
            {stats.map((stat) => (
              <div 
                key={stat.label} 
                className="relative overflow-hidden rounded-xl border border-white/[0.04] bg-white/[0.02] p-6 flex items-center gap-4 transition-all duration-300 hover:border-white/10 hover:bg-white/[0.04]"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-primary opacity-80" />
                <div>
                  <span className="block text-2xl font-bold text-white tracking-tight leading-none mb-1.5">
                    {stat.value}
                  </span>
                  <span className="text-zinc-500 text-sm font-medium tracking-wide">
                    {stat.label}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Trust Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 pt-8 border-t border-white/[0.06]"
          >
            <p className="text-xs text-zinc-500 uppercase tracking-widest mb-6 font-semibold">
              Our Expertise Focus
            </p>
            <div className="flex flex-wrap gap-3">
              {techStack.map((tech) => (
                <div
                  key={tech.name}
                  className="px-4 py-2 rounded-lg border text-sm font-medium transition-all duration-300 cursor-default hover:-translate-y-0.5"
                  style={{
                    backgroundColor: tech.bg,
                    borderColor: tech.border,
                    color: tech.color,
                  }}
                >
                  <span className="flex items-center gap-2">
                    <span 
                      className="w-1.5 h-1.5 rounded-full" 
                      style={{ backgroundColor: tech.color }} 
                    />
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
