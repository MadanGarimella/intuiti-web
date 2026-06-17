import { motion } from "framer-motion";

const packages = [
  {
    id: "starter",
    name: "Starter",
    subtitle: "Web Application",
    priceINR: "₹75,000 – ₹1,00,000",
    priceUSD: "$900 – $1,200",
    features: [
      "Up to 5 core features",
      "React.js frontend",
      "REST API backend",
      "Basic admin panel",
      "Mobile responsive",
      "4-week delivery",
      "30-day support",
    ],
    cta: "Get Started",
    accent: "#FF7A18",
    popular: false,
  },
  {
    id: "growth",
    name: "Growth",
    subtitle: "Custom Software",
    priceINR: "₹1,00,000 – ₹2,00,000",
    priceUSD: "$1,200 – $2,400",
    features: [
      "Up to 10 features",
      "Full custom UI/UX",
      "React + Spring Boot",
      "Role-based access",
      "Third-party integrations",
      "6-week delivery",
      "60-day support",
    ],
    cta: "Get Started",
    accent: "#FF1E1E",
    popular: true,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    subtitle: "Full Business System",
    priceINR: "₹2,00,000+",
    priceUSD: "$2,400+",
    features: [
      "Unlimited scope (phased)",
      "Full architecture design",
      "Dedicated team",
      "API + integrations",
      "Custom reporting",
      "8+ weeks",
      "Ongoing retainer available",
    ],
    cta: "Let's Talk",
    accent: "#60a5fa",
    popular: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-28 relative overflow-hidden">
      {/* BG */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] rounded-full blur-[200px] opacity-10"
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
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-[#FF1E1E]/30 bg-[#FF1E1E]/10 text-[#FF1E1E] text-sm font-medium mb-6">
            Packages & Pricing
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Straightforward Packages.{" "}
            <span className="text-[#FF1E1E]">No Guesswork.</span>
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-2xl border p-8 flex flex-col transition-all duration-300 hover:-translate-y-1 ${
                pkg.popular
                  ? "border-[#FF1E1E]/40 bg-[#FF1E1E]/[0.04] shadow-xl shadow-red-900/15"
                  : "border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04]"
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-[#FF1E1E] text-white text-xs font-bold shadow-lg shadow-red-900/30 whitespace-nowrap">
                  ⭐ Most Popular
                </div>
              )}

              {/* Package header */}
              <div className="mb-6">
                <p className="text-xs uppercase tracking-widest font-medium mb-1" style={{ color: pkg.accent }}>
                  {pkg.subtitle}
                </p>
                <h3 className="text-2xl font-bold">{pkg.name}</h3>
              </div>

              {/* Price */}
              <div className="mb-8 pb-8 border-b border-white/[0.07]">
                <p className="text-3xl font-bold text-white">{pkg.priceINR}</p>
                <p className="text-zinc-500 text-sm mt-1">{pkg.priceUSD}</p>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8 flex-1">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <svg
                      className="w-4 h-4 mt-0.5 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      style={{ color: pkg.accent }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-zinc-400 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                id={`pricing-cta-${pkg.id}`}
                href="#contact"
                className={`w-full py-3 rounded-xl font-semibold text-center transition-all hover:-translate-y-0.5 ${
                  pkg.popular
                    ? "bg-[#FF1E1E] hover:bg-red-600 text-white shadow-lg shadow-red-900/30"
                    : "border border-white/15 hover:bg-white/5 hover:border-white/25 text-zinc-300 hover:text-white"
                }`}
              >
                {pkg.cta} →
              </a>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <p className="text-zinc-400 text-base">
            Not sure which package fits?{" "}
            <a href="#contact" className="text-[#FF1E1E] hover:text-red-400 font-medium transition-colors">
              Book a free 30-minute call
            </a>{" "}
            and we'll tell you exactly what you need — and what you don't.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
