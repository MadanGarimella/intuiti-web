import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    id: "timeline",
    question: "How long does a project take?",
    answer:
      "Most web applications are delivered in 4–6 weeks. Larger custom software systems take 6–10 weeks. We give you a fixed timeline before we start.",
  },
  {
    id: "international",
    question: "Do you work with international clients?",
    answer:
      "Yes. We work with clients in the US, UK, Australia, Canada, UAE, and Singapore. All communication is in English, and we adjust our working hours to overlap with your timezone.",
  },
  {
    id: "tech-stack",
    question: "What tech stack do you use?",
    answer:
      "React.js for frontend, Spring Boot (Java) for backend, REST APIs, and cloud deployment. We build for performance, security, and scale.",
  },
  {
    id: "payments",
    question: "How do payments work?",
    answer:
      "50% to begin, 50% on delivery. For larger projects we offer milestone-based payments.",
  },
  {
    id: "progress",
    question: "Can I see the progress during development?",
    answer:
      "Yes. We do weekly demos so you always know exactly where your project stands.",
  },
  {
    id: "post-launch",
    question: "What if I need changes after launch?",
    answer:
      "We include 30–60 days of post-launch support depending on the package. After that, we offer affordable maintenance retainers.",
  },
];

const FAQItem = ({ item, isOpen, onToggle }) => (
  <div className="border-b border-white/[0.07] last:border-0">
    <button
      id={`faq-${item.id}`}
      onClick={onToggle}
      className="w-full flex items-center justify-between gap-4 py-6 text-left group"
    >
      <span className={`font-medium text-base transition-colors ${isOpen ? "text-white" : "text-zinc-300 group-hover:text-white"}`}>
        {item.question}
      </span>
      <span
        className={`flex-shrink-0 w-7 h-7 rounded-full border flex items-center justify-center transition-all ${
          isOpen ? "bg-[#FF1E1E] border-[#FF1E1E] rotate-45" : "border-white/20 group-hover:border-white/40"
        }`}
      >
        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 4v16m8-8H4" />
        </svg>
      </span>
    </button>
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="overflow-hidden"
        >
          <p className="pb-6 text-zinc-400 leading-relaxed">{item.answer}</p>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

const FAQ = () => {
  const [openId, setOpenId] = useState(null);

  return (
    <section id="faq" className="py-28 relative overflow-hidden">
      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-[#FF1E1E]/30 bg-[#FF1E1E]/10 text-[#FF1E1E] text-sm font-medium mb-6">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Common <span className="text-[#FF1E1E]">Questions</span>
          </h2>
        </motion.div>

        {/* FAQ List */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-2xl border border-white/10 bg-white/[0.02] px-6 md:px-10"
        >
          {faqs.map((item) => (
            <FAQItem
              key={item.id}
              item={item}
              isOpen={openId === item.id}
              onToggle={() => setOpenId(openId === item.id ? null : item.id)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
