import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    id: "timeline",
    question: "How long does a typical integration or software project take?",
    answer:
      "Most core automation projects and internal portals are delivered in 4–6 weeks. Larger custom enterprise integrations take 6–10 weeks. We provide a fixed timeline before any engineering begins.",
  },
  {
    id: "international",
    question: "Do you work with international logistics and operations businesses?",
    answer:
      "Yes. We partner with companies across the US, UK, Australia, Canada, UAE, and Singapore. All communication is clear, direct, and aligned to overlap with your core operational hours.",
  },
  {
    id: "tech-stack",
    question: "What engineering stack do you use?",
    answer:
      "We build robust, scalable architectures using React.js for the frontend, Spring Boot (Java) or Node for backend microservices, REST/GraphQL APIs, and secure cloud infrastructure.",
  },
  {
    id: "payments",
    question: "How is the engagement structured?",
    answer:
      "For fixed-scope projects: 50% mobilization, 50% upon successful delivery. For complex enterprise integrations, we utilize milestone-based billing.",
  },
  {
    id: "progress",
    question: "How do we track engineering progress?",
    answer:
      "We operate on agile sprints. You receive weekly demonstrations of working software, ensuring constant alignment with your operational requirements.",
  },
  {
    id: "post-launch",
    question: "What happens after the software is deployed?",
    answer:
      "Every engagement includes 30–60 days of post-launch engineering support. Beyond that, we offer strategic maintenance retainers to ensure your systems scale with your business.",
  },
];

const FAQItem = ({ item, isOpen, onToggle }) => (
  <div className="border-b border-white/[0.05] last:border-0">
    <button
      id={`faq-${item.id}`}
      onClick={onToggle}
      className="w-full flex items-center justify-between gap-4 py-6 text-left group focus:outline-none"
    >
      <span className={`font-semibold text-base md:text-lg transition-colors ${isOpen ? "text-primary" : "text-zinc-200 group-hover:text-white"}`}>
        {item.question}
      </span>
      <span
        className={`flex-shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all ${
          isOpen ? "bg-primary border-primary rotate-45 shadow-lg shadow-blue-900/20" : "border-white/10 group-hover:border-white/30 group-hover:bg-white/[0.02]"
        }`}
      >
        <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className="overflow-hidden"
        >
          <p className="pb-8 text-zinc-400 text-sm md:text-base leading-relaxed pr-8">{item.answer}</p>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

const FAQ = () => {
  const [openId, setOpenId] = useState(null);

  return (
    <section id="faq" className="py-28 relative overflow-hidden bg-[#09090B]">
      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium mb-6">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold">
            Common <span className="text-primary">Questions</span>
          </h2>
        </motion.div>

        {/* FAQ List */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-2xl border border-white/5 bg-white/[0.02] px-6 md:px-10 shadow-2xl"
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
