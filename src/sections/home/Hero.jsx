import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const techStack = [
  { name: "React.js", color: "#61dafb", bg: "rgba(97,218,251,0.04)", border: "rgba(97,218,251,0.15)" },
  { name: "Spring Boot", color: "#6db33f", bg: "rgba(109,179,63,0.04)", border: "rgba(109,179,63,0.15)" },
  { name: "Java", color: "#e76f00", bg: "rgba(231,111,0,0.04)", border: "rgba(231,111,0,0.15)" },
  { name: "JavaScript", color: "#f7df1e", bg: "rgba(247,223,30,0.04)", border: "rgba(247,223,30,0.15)" },
  { name: "REST APIs", color: "#00b4d8", bg: "rgba(0,180,216,0.04)", border: "rgba(0,180,216,0.15)" },
  { name: "Cloud Deployment", color: "#a855f7", bg: "rgba(168,85,247,0.04)", border: "rgba(168,85,247,0.15)" },
];

const stats = [
  { value: "4-8", label: "Week Delivery" },
  { value: "5", label: "Person Team" },
  { value: "3+", label: "Countries Served" },
];

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(to right,#ffffff 1px,transparent 1px),linear-gradient(to bottom,#ffffff 1px,transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Red Glow */}
        <div
          className="absolute top-[-300px] left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] rounded-full blur-[200px]"
          style={{
            background: "radial-gradient(circle, rgba(255,30,30,0.12) 0%, transparent 70%)",
            transform: `translateX(-50%) translateY(${scrollY * 0.1}px)`,
          }}
        />
        {/* Side glows */}
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full blur-[150px] opacity-30"
          style={{ background: "radial-gradient(circle, rgba(255,122,24,0.08) 0%, transparent 70%)" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="min-h-screen pt-36 pb-20 flex flex-col justify-center">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-zinc-300 w-fit mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-[#FF1E1E] animate-pulse" />
            Trusted by businesses in the US, UK &amp; Australia
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.05] tracking-tight max-w-5xl"
          >
            We Build Web Applications &amp; Custom Software{" "}
            <span className="text-[#FF1E1E]"></span>{" "}
            <span className="text-[#FF1E1E]">Fast</span>,{" "}
            <span
              style={{
                background: "linear-gradient(90deg,#ffffff 0%,#a1a1aa 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Clean, and Ready to Scale
            </span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 text-lg md:text-xl text-zinc-400 leading-relaxed max-w-2xl"
          >
            A dedicated React + Java development team that turns your idea or
            business problem into working software in{" "}
            <span className="text-white font-medium">4-8 weeks</span>. Trusted
            by startups and businesses across the{" "}
            <span className="text-white font-medium">US, UK, and Australia</span>.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4 mt-10"
          >
            <a
              id="hero-cta-primary"
              href="#contact"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#FF1E1E] hover:bg-red-600 transition-all font-semibold text-white shadow-lg shadow-red-900/30 hover:shadow-red-800/40 hover:-translate-y-0.5"
            >
              Book a Free 30-Min Consultation
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>

            <a
              id="hero-cta-secondary"
              href="#portfolio"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-white/15 hover:bg-white/5 hover:border-white/25 transition-all font-medium text-zinc-300 hover:text-white"
            >
              See Our Work →
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-3xl"
          >
            {stats.map((stat) => (
              <div 
                key={stat.label} 
                className="relative overflow-hidden rounded-xl border border-white/[0.06] bg-gradient-to-br from-white/[0.04] to-transparent p-5 flex items-center gap-4 transition-all duration-300 hover:border-white/10 hover:bg-white/[0.06]"
              >
                <div className="absolute top-0 left-0 w-[3px] h-full bg-[#FF1E1E]" />
                <div>
                  <span className="block text-3xl font-extrabold text-white tracking-tight leading-none mb-1">
                    {stat.value}
                  </span>
                  <span className="text-zinc-500 text-xs font-semibold uppercase tracking-wider">
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
            <p className="text-xs text-zinc-600 uppercase tracking-widest mb-5 font-semibold">
              Our Core Stack
            </p>
            <div className="flex flex-wrap gap-3">
              {techStack.map((tech) => (
                <div
                  key={tech.name}
                  className="px-4 py-2.5 rounded-lg border text-sm font-medium transition-all duration-300 cursor-default hover:-translate-y-0.5 hover:shadow-lg"
                  style={{
                    backgroundColor: tech.bg,
                    borderColor: tech.border,
                    color: tech.color,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = tech.color;
                    e.currentTarget.style.boxShadow = `0 4px 20px ${tech.bg}`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = tech.border;
                    e.currentTarget.style.boxShadow = `none`;
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
