import { motion } from "framer-motion";

const FinalCTA = () => {
  return (
    <section id="contact" className="py-28 relative overflow-hidden bg-[#09090B]">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage:
              "linear-gradient(to right,#ffffff 1px,transparent 1px),linear-gradient(to bottom,#ffffff 1px,transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] rounded-full blur-[200px]"
          style={{ background: "radial-gradient(circle, rgba(37,99,235,0.15) 0%, transparent 70%)" }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Badge */}
          <span className="inline-block px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium mb-8">
            Technical Discovery
          </span>

          {/* Headline */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.1] mb-6">
            Have a workflow that shouldn't be{" "}
            <span className="text-primary">manual?</span>
          </h2>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-zinc-400 leading-relaxed mb-10 max-w-2xl mx-auto">
            Tell us about your operational bottlenecks. We'll outline an architecture, timeline, and fixed cost {" "}
            <span className="text-white font-medium">in 48 hours</span>.
          </p>

          {/* CTA Button */}
          <a
            id="final-cta-button"
            href="mailto:contact@intuiticorporates.com?subject=Discovery%20Call%20Request&body=Hi%20Intuiti%20Engineering%20Team%2C%0A%0AI%27d%20like%20to%20book%20a%20technical%20discovery%20call%20to%20discuss%20an%20automation/software%20requirement.%0A%0ABrief%20overview%3A%0A"
            className="inline-flex items-center gap-3 px-10 py-5 rounded-xl bg-primary hover:bg-blue-700 transition-all font-semibold text-white text-lg shadow-xl shadow-blue-900/20 hover:-translate-y-1"
          >
            Book a Discovery Call
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>

          {/* Supporting text */}
          <p className="mt-6 text-zinc-500 text-sm">
            No sales pressure. Just a technical conversation about your operations.
          </p>

          {/* Contact info */}
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-zinc-500">
            <a
              href="mailto:contact@intuiticorporates.com"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              contact@intuiticorporates.com
            </a>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Hyderabad, India
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
