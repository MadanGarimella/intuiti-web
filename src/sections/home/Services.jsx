import { motion } from "framer-motion";

const mainServices = [
  {
    id: "web-apps",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: "Custom Web Applications",
    description:
      "Whether it's a client portal, internal management tool, booking system, or business dashboard — we design and develop web applications that solve real operational problems. Built with React.js + Spring Boot. Delivered in 4–6 weeks.",
    tags: ["Portals", "Dashboards", "Internal Tools", "Booking Systems", "Admin Panels"],
    cta: "Get a Free Estimate →",
    ctaHref: "#contact",
    accent: "#FF1E1E",
  },
  {
    id: "custom-software",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: "Custom Software Development",
    description:
      "Got a process that's eating your team's time? We build custom software that automates it, streamlines it, and scales with your business — without off-the-shelf limitations. From workflow tools to full business management systems.",
    tags: ["Business Software", "Workflow Tools", "CRM", "ERP", "Automation Systems"],
    cta: "Tell Us What You Need →",
    ctaHref: "#contact",
    accent: "#FF7A18",
    popular: true,
  },
];

const supportingServices = [
  {
    title: "MVP Development",
    description: "Launch core functionality in 4 weeks to validate and gather market feedback.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    accent: "#FF1E1E"
  },
  {
    title: "API Integration",
    description: "Secure, performant REST APIs bridging your core services and external SaaS systems.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    accent: "#FF7A18"
  },
  {
    title: "UI/UX Design",
    description: "Frictionless, modern layouts crafted specifically for operational efficiency.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    accent: "#60a5fa"
  },
  {
    title: "SaaS Systems",
    description: "Multi-tenant platforms engineered to handle growing subscriber databases.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    accent: "#4ade80"
  },
  {
    title: "White-Label Dev",
    description: "Rebrandable codebase environments built ready for private product licensing.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    accent: "#a78bfa"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-28 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[200px] opacity-20"
          style={{ background: "radial-gradient(circle, rgba(255,30,30,0.15) 0%, transparent 70%)" }}
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
            What We Build
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            We Specialize In Two Things.{" "}
            <span className="text-[#FF1E1E]">And We're Very Good At Both.</span>
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
                <div className="absolute -top-3.5 left-6 z-10 px-3 py-1 rounded-full bg-[#FF7A18] text-black text-xs font-bold">
                  Most Requested
                </div>
              )}
              <div
                className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-8 hover:border-white/20 transition-all duration-300 hover:bg-white/[0.05] group-hover:-translate-y-1 flex flex-col"
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
                <h3 className="text-2xl font-bold mb-4">{service.label}</h3>

                {/* Description */}
                <p className="text-zinc-400 leading-relaxed mb-6 flex-1">{service.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-md text-xs font-medium text-zinc-400 border border-white/10 bg-white/[0.03]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <a
                  id={`service-cta-${service.id}`}
                  href={service.ctaHref}
                  className="inline-flex items-center font-semibold transition-colors"
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
                className="relative group rounded-xl border border-white/5 bg-gradient-to-b from-white/[0.04] to-transparent p-5 flex flex-col justify-between hover:border-white/10 hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.7)] transition-all duration-300"
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
                  <h4 className="text-white font-bold text-sm mb-2 group-hover:text-zinc-200 transition-colors">
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
