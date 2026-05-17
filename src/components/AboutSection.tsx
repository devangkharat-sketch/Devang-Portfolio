"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Check } from "lucide-react";

export default function AboutSection() {
  const skills = [
    "Landing Page Design",
    "Small Business Websites",
    "Logo Design",
    "Mobile Responsive Design",
    "Basic Website Copy",
    "Clean Layouts",
    "Fast Learning",
    "Clear Communication"
  ];

  const values = [
    "Honest work",
    "Clean design",
    "Practical solutions",
    "Affordable pricing"
  ];

  return (
    <section className="py-24 bg-section-bg relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute right-0 bottom-0 w-[600px] h-[600px] bg-brand-violet/10 rounded-full blur-[120px] mix-blend-screen" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Photo Column */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-4 relative"
          >
            <div className="w-full max-w-[320px] mx-auto aspect-[4/5] rounded-[2rem] glass-card p-2 bg-gradient-to-b from-brand-cyan/20 to-transparent shadow-2xl overflow-hidden group">
              <div className="relative w-full h-full rounded-[1.5rem] overflow-hidden bg-background">
                <Image
                  src="/devang-portrait.png"
                  alt="Devang"
                  fill
                  className="object-cover object-top scale-105 group-hover:scale-100 transition-transform duration-700"
                />
              </div>
            </div>
            
            {/* Small decorative element */}
            <div className="absolute -bottom-6 -right-6 glass-card p-4 rounded-xl flex items-center gap-3 backdrop-blur-xl">
               <span className="text-2xl">👨‍💻</span>
               <div>
                 <p className="text-xs text-foreground-muted font-medium">Location</p>
                 <p className="text-sm font-bold">India</p>
               </div>
            </div>
          </motion.div>

          {/* Text Column */}
          <div className="lg:col-span-8 lg:pl-8">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold mb-8"
            >
              About <span className="gradient-text">Devang</span>
            </motion.h2>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-6 text-lg text-foreground-muted leading-relaxed max-w-3xl mb-10"
            >
              <p>
                I’m Devang, a freelancer focused on helping small businesses build a better online presence through landing pages, websites, and logo design. I am dedicated to delivering clean, practical work and giving focused attention to every project.
              </p>
              <div className="p-5 rounded-xl glass-card border-l-4 border-l-brand-cyan bg-foreground/5 font-medium text-foreground italic">
                “My goal is simple: help small businesses look more professional online without making the process complicated.”
              </div>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Skills */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-sm font-bold uppercase tracking-wider text-foreground mb-4">Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span key={skill} className="px-3 py-1.5 rounded-full text-xs font-medium bg-foreground/5 border border-card-border text-foreground-muted hover:text-foreground hover:bg-foreground/10 transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Values */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <h3 className="text-sm font-bold uppercase tracking-wider text-foreground mb-4">My Approach</h3>
                <ul className="space-y-3">
                  {values.map((value) => (
                    <li key={value} className="flex items-center gap-2 text-sm text-foreground-muted">
                      <Check size={16} className="text-brand-violet shrink-0" />
                      <span>{value}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
