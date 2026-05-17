"use client";

import { motion } from "framer-motion";

export default function HonestIntro() {
  const cards = [
    {
      title: "No Fake Claims",
      text: "Trust starts with honesty. You’ll see clear communication, realistic expectations, and transparent work.",
    },
    {
      title: "Focused Attention",
      text: "As an independent freelancer, I can give dedicated time and care to each project.",
    },
    {
      title: "Practical Design",
      text: "I focus on websites, landing pages, and logos that are simple, clean, and useful for real businesses.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-section-bg relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            Starting Fresh, <span className="gradient-text">Building Seriously</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-foreground-muted text-balance"
          >
            I believe in transparency, so I’m not here to show fake numbers or fake testimonials. I’m here to show clear skills, practical thinking, and a serious approach to helping small businesses build a better online presence.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8 hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-brand-cyan/10 flex items-center justify-center mb-6 text-brand-cyan font-bold text-xl">
                0{index + 1}
              </div>
              <h3 className="text-xl font-bold mb-4">{card.title}</h3>
              <p className="text-foreground-muted leading-relaxed">
                {card.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
