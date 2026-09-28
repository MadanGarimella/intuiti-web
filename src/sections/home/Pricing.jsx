import { motion } from "framer-motion";

const packages = [
  {
    id: "starter",
    name: "Foundation",
    subtitle: "Core Automation",
    priceINR: "₹75,000 – ₹1,00,000",
    priceUSD: "$900 – $1,200",
    features: [
      "Process mapping & design",
      "Up to 5 automated workflows",
      "Core system integrations",
      "Role-based access (basic)",
      "React.js frontend",
      "4-week engineering cycle",
      "30-day post-launch support",
    ],
    cta: "Start Foundation",
    accent: "#38bdf8",
    popular: false,
  },
  {
    id: "growth",
    name: "Integration",
    subtitle: "Complex Workflows",
    priceINR: "₹1,00,000 – ₹2,00,000",
    priceUSD: "$1,200 – $2,400",
    features: [
      "Advanced operational architecture",
      "Up to 10 automated workflows",
      "Deep third-party integrations (TMS/ERP)",
      "Complex role-based access",
      "Custom reporting dashboards",
      "6-week engineering cycle",
      "60-day post-launch support",
    ],
    cta: "Start Integration",
    accent: "#2563eb",
    popular: true,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    subtitle: "Full Ecosystem",
    priceINR: "Custom Engagement",
    priceUSD: "Custom Engagement",
    features: [
      "Unlimited scope (phased delivery)",
      "Full architecture modernization",
      "Dedicated senior engineering team",
      "Legacy system migration",
      "Custom AI/automation capabilities",
      "8+ weeks engineering cycle",
      "Ongoing strategic engineering retainer",
    ],
    cta: "Discuss Enterprise",
    accent: "#818cf8",
    popular: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-28 relative overflow-hidden bg-[#09090B]">
      {/* BG */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] rounded-full blur-[200px] opacity-10"
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
            Engineering Packages
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold">
            Transparent Scoping.{" "}
            <span className="text-primary">No Surprises.</span>
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-2xl border p-8 flex flex-col transition-all duration-300 hover:-translate-y-1 ${
                pkg.popular
                  ? "border-primary/40 bg-primary/[0.03] shadow-xl shadow-blue-900/15"
                  : "border-white/5 bg-white/[0.02] hover:border-white/10 hover:bg-white/[0.03]"
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-primary text-white text-xs font-bold shadow-lg shadow-blue-900/20 whitespace-nowrap tracking-wide uppercase">
                  Most Requested
                </div>
              )}

              {/* Package header */}
              <div className="mb-6">
                <p className="text-xs uppercase tracking-widest font-bold mb-1" style={{ color: pkg.accent }}>
                  {pkg.subtitle}
                </p>
                <h3 className="text-2xl font-semibold text-zinc-100">{pkg.name}</h3>
              </div>

              {/* Price */}
              <div className="mb-8 pb-8 border-b border-white/[0.07]">
                <p className="text-3xl font-bold text-white">{pkg.priceINR}</p>
                {pkg.priceUSD !== "Custom Engagement" && (
                  <p className="text-zinc-500 text-sm mt-1">{pkg.priceUSD}</p>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-10 flex-1">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <svg
                      className="w-4 h-4 mt-0.5 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      style={{ color: pkg.accent }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-zinc-400 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                id={`pricing-cta-${pkg.id}`}
                href="#contact"
                className={`w-full py-4 rounded-xl font-semibold text-center transition-all hover:-translate-y-0.5 ${
                  pkg.popular
                    ? "bg-primary hover:bg-blue-700 text-white shadow-lg shadow-blue-900/20"
                    : "border border-white/10 hover:bg-white/5 hover:border-white/20 text-zinc-300 hover:text-white"
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
            Not sure which scope fits your operational needs?{" "}
            <a href="#contact" className="text-primary hover:text-blue-400 font-medium transition-colors">
              Book a discovery call
            </a>{" "}
            and we'll engineer the right plan for you.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
