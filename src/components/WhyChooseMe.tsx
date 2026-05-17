"use client";

import { motion } from "framer-motion";

export default function WhyChooseMe() {
  const reasons = [
    {
      title: "More Focus on Your Project",
      text: "Every client matters a lot to me, so your project gets serious attention and care.",
      icon: "🎯"
    },
    {
      title: "Beginner-Friendly Pricing",
      text: "Good for small businesses that need professional work without agency-level pricing.",
      icon: "💎"
    },
    {
      title: "Fresh Design Approach",
      text: "I use modern website layouts, proven landing page structures, and clean logo design principles.",
      icon: "✨"
    },
    {
      title: "Clear Communication",
      text: "I keep the process simple, explain what I’m doing, and avoid confusing technical language.",
      icon: "💬"
    }
  ];

  return (
    <section className="py-24 bg-section-bg relative border-y border-card-border">
      <div className="absolute inset-0 bg-brand-violet/5 mix-blend-screen" />
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-3xl mb-16 mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Why Work With <span className="text-brand-violet">Me</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-foreground-muted text-balance"
          >
            Working with me means you get dedicated attention, affordable pricing, and clean, modern execution.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-6 flex flex-col items-start bg-background/50 hover:bg-foreground/5 transition-colors"
            >
              <div className="text-3xl mb-4 p-3 bg-foreground/5 rounded-xl border border-card-border">
                {reason.icon}
              </div>
              <h3 className="text-lg font-bold mb-3">{reason.title}</h3>
              <p className="text-sm text-foreground-muted leading-relaxed">
                {reason.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
