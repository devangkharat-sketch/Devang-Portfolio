"use client";

import { motion } from "framer-motion";

export default function WorkProcess() {
  const steps = [
    {
      title: "Understand",
      text: "We discuss your business, goal, audience, and what you need."
    },
    {
      title: "Plan",
      text: "I create a simple structure, page flow, and content direction."
    },
    {
      title: "Design",
      text: "I design the landing page, website, or logo concept with a clean and professional style."
    },
    {
      title: "Build",
      text: "I turn the design into a working website or final logo files."
    },
    {
      title: "Review & Improve",
      text: "You review the work, I make improvements, and we prepare it for launch."
    }
  ];

  return (
    <section id="process" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            How I’ll <span className="gradient-text">Work With You</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-foreground-muted text-balance max-w-2xl mx-auto"
          >
            A simple process designed to keep the project clear, honest, and easy to follow.
          </motion.p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[27px] md:left-1/2 md:-ml-[1px] top-0 bottom-0 w-[2px] bg-foreground/10" />

          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.1 }}
                className={`relative flex items-center gap-8 md:gap-0 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Center Node */}
                <div className="absolute left-[15px] md:left-1/2 md:-ml-[12px] w-6 h-6 rounded-full bg-background border-4 border-brand-cyan shadow-[0_0_15px_rgba(56,189,248,0.5)] z-10" />

                {/* Content Card */}
                <div className={`w-full ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-16" : "md:pl-16"}`}>
                  <div className="glass-card p-6 md:p-8 hover:-translate-y-1 transition-transform">
                    <span className="text-sm font-bold text-brand-violet mb-2 block uppercase tracking-wider">
                      Step 0{index + 1}
                    </span>
                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                    <p className="text-foreground-muted leading-relaxed text-sm md:text-base">
                      {step.text}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
