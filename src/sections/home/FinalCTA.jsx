import { motion } from "framer-motion";

const FinalCTA = () => {
  return (
    <section id="contact" className="py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(to right,#ffffff 1px,transparent 1px),linear-gradient(to bottom,#ffffff 1px,transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] rounded-full blur-[200px]"
          style={{ background: "radial-gradient(circle, rgba(255,30,30,0.15) 0%, transparent 70%)" }}
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
          <span className="inline-block px-4 py-1.5 rounded-full border border-[#FF1E1E]/30 bg-[#FF1E1E]/10 text-[#FF1E1E] text-sm font-medium mb-8">
            Let's Build Together
          </span>

          {/* Headline */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6">
            Have a Project{" "}
            <span className="text-[#FF1E1E]">in Mind?</span>
          </h2>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-zinc-400 leading-relaxed mb-10 max-w-2xl mx-auto">
            Tell us what you're building. We'll tell you how long it takes and
            what it costs {" "}
            <span className="text-white font-medium">in 48 hours</span>.
          </p>

          {/* CTA Button */}
          <a
            id="final-cta-button"
            href="mailto:contact@intuiticorporates.com?subject=Free%20Consultation%20Request&body=Hi%20Intuiti%20Team%2C%0A%0AI%27d%20like%20to%20book%20a%20free%2030-minute%20consultation.%0A%0AProject%20brief%3A%0A"
            className="inline-flex items-center gap-3 px-10 py-5 rounded-xl bg-[#FF1E1E] hover:bg-red-600 transition-all font-bold text-white text-lg shadow-xl shadow-red-900/30 hover:shadow-red-800/40 hover:-translate-y-1"
          >
            Book Your Free Consultation
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>

          {/* Supporting text */}
          <p className="mt-5 text-zinc-500 text-sm">
            No commitment. No sales pressure. Just a real conversation.
          </p>

          {/* Contact info */}
          <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-zinc-500">
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
