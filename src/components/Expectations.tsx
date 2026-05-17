"use client";

import { motion } from "framer-motion";

export default function Expectations() {
  const expectations = [
    {
      title: "Clear Project Discussion",
      text: "We’ll first understand what your business needs before starting the design."
    },
    {
      title: "Clean Professional Output",
      text: "The final work should look simple, modern, and suitable for real business use."
    },
    {
      title: "Honest Work Process",
      text: "No fake promises, no confusing claims — just clear work, feedback, and improvement."
    }
  ];

  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mb-16 mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold"
          >
            What You Can Expect
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {expectations.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8 border-t-4 border-t-brand-cyan hover:-translate-y-1 transition-transform"
            >
              <h3 className="text-xl font-bold mb-4">{exp.title}</h3>
              <p className="text-foreground-muted leading-relaxed">
                {exp.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
