import { motion } from "framer-motion";

const mainServices = [
  {
    id: "custom-software",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: "Custom Business Applications",
    description:
      "We design and engineer tailored software that solves real operational bottlenecks. Whether it's a partner portal, an operational dashboard, or a complex logistics management system, we build secure, scalable solutions with React.js & Java.",
    tags: ["Operational Dashboards", "Client/Partner Portals", "Internal Tools", "Logistics Software"],
    cta: "Discuss Your Requirements →",
    ctaHref: "#contact",
    accent: "#38bdf8",
  },
  {
    id: "integration-automation",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: "System Integration & Automation",
    description:
      "Integrate, don't replace. We connect your existing systems (TMS, WMS, ERPs, CRMs) to eliminate manual data entry. We build the connective tissue that automates your workflows, allowing your operations to scale without adding headcount.",
    tags: ["System Integration", "Workflow Automation", "API Development", "Data Pipelines"],
    cta: "Automate Your Workflows →",
    ctaHref: "#contact",
    accent: "#2563eb",
    popular: true,
  },
];

const supportingServices = [
  {
    title: "Legacy Modernization",
    description: "Upgrade aging infrastructure to modern, secure, and performant web stacks.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    accent: "#38bdf8"
  },
  {
    title: "API Architecture",
    description: "Secure, performant REST APIs bridging your core services and external platforms.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    accent: "#60a5fa"
  },
  {
    title: "Operational UI/UX",
    description: "Frictionless, data-dense layouts designed specifically for operational efficiency.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    accent: "#818cf8"
  },
  {
    title: "SaaS Systems",
    description: "Multi-tenant platforms engineered to handle complex business logic and growing data.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    accent: "#a78bfa"
  },
  {
    title: "AI Integration",
    description: "Implement AI to classify documents, predict freight delays, and automate decisions.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    accent: "#c084fc"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-28 relative overflow-hidden bg-[#09090B]">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[200px] opacity-10"
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
            Engineering Capabilities
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
            We Specialize In Solving Complex Problems.{" "}
            <span className="text-primary">Not Just Writing Code.</span>
          </h2>
        </motion.div>

        {/* Main Service Cards */}
        <div className="grid lg:grid-cols-2 gap-6 mb-12">
          {mainServices.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative group"
            >
              {service.popular && (
                <div className="absolute -top-3.5 left-6 z-10 px-3 py-1 rounded-full bg-primary text-white text-xs font-bold shadow-lg">
                  High Demand
                </div>
              )}
              <div
                className="h-full rounded-2xl border border-white/5 bg-white/[0.02] p-8 hover:border-white/10 transition-all duration-300 hover:bg-white/[0.04] group-hover:-translate-y-1 flex flex-col"
                style={{ boxShadow: `0 0 0 0 ${service.accent}00` }}
              >
                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                  style={{
                    background: `linear-gradient(135deg, ${service.accent}20 0%, ${service.accent}05 100%)`,
                    border: `1px solid ${service.accent}30`,
                    color: service.accent,
                  }}
                >
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-semibold mb-4">{service.label}</h3>

                {/* Description */}
                <p className="text-zinc-400 leading-relaxed mb-6 flex-1">{service.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-md text-xs font-medium text-zinc-400 border border-white/5 bg-white/[0.02]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <a
                  id={`service-cta-${service.id}`}
                  href={service.ctaHref}
                  className="inline-flex items-center font-semibold transition-colors hover:opacity-80"
                  style={{ color: service.accent }}
                >
                  {service.cta}
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Supporting Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16"
        >
          <div className="text-center mb-10">
            <h3 className="text-xs text-zinc-500 uppercase tracking-widest font-semibold mb-2">
              Capabilities Ecosystem
            </h3>
            <p className="text-zinc-400 text-sm max-w-md mx-auto">
              Additional specialized expertise we bring to accelerate your business growth.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {supportingServices.map((s) => (
              <motion.div
                key={s.title}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="relative group rounded-xl border border-white/5 bg-gradient-to-b from-white/[0.02] to-transparent p-5 flex flex-col justify-between hover:border-white/10 hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] transition-all duration-300"
              >
                {/* Accent glow on hover */}
                <div
                  className="absolute -inset-px rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: `radial-gradient(40px circle at 50% 0%, ${s.accent}15 0%, transparent 100%)`,
                  }}
                />
                <div>
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 transition-transform group-hover:scale-110 duration-300"
                    style={{
                      background: `linear-gradient(135deg, ${s.accent}15 0%, ${s.accent}02 100%)`,
                      border: `1px solid ${s.accent}25`,
                      color: s.accent,
                    }}
                  >
                    {s.icon}
                  </div>
                  <h4 className="text-white font-semibold text-sm mb-2 group-hover:text-zinc-200 transition-colors">
                    {s.title}
                  </h4>
                  <p className="text-zinc-500 text-xs leading-relaxed group-hover:text-zinc-400 transition-colors">
                    {s.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
