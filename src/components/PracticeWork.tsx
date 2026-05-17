"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

export default function PracticeWork() {
  const projects = [
    {
      title: "Local Business Website",
      category: "Small Business Website",
      description: "A clean website for a local service business with homepage, services, about, and contact sections.",
      gradient: "from-blue-500/20 to-purple-500/20"
    },
    {
      title: "Lead Capture Landing Page",
      category: "Landing Page",
      description: "A focused landing page designed to explain an offer clearly and collect customer enquiries.",
      gradient: "from-brand-cyan/20 to-blue-500/20"
    },
    {
      title: "Brand Logo",
      category: "Logo Design",
      description: "A simple logo for a small business, including clean typography, color direction, and brand feel.",
      gradient: "from-brand-violet/20 to-fuchsia-500/20"
    }
  ];

  return (
    <section id="work" className="py-24 bg-section-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mb-16 text-center mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            Previous <span className="gradient-text">Work</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-foreground-muted text-balance"
          >
            Here are some recent projects I’ve built to show my design thinking, layout structure, and execution style.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card flex flex-col overflow-hidden group"
            >
              {/* Abstract Mockup Placeholder */}
              <div className={`h-48 w-full bg-gradient-to-br ${project.gradient} relative overflow-hidden flex items-center justify-center`}>
                 <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-30 mix-blend-overlay" />
                 <span className="text-foreground/50 text-sm font-medium uppercase tracking-wider backdrop-blur-md px-4 py-2 rounded-lg bg-black/20 border border-card-border">
                   Project
                 </span>
              </div>
              
              <div className="p-8 flex-1 flex flex-col">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-cyan mb-3">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-foreground-muted text-sm leading-relaxed mb-8 flex-1">
                  {project.description}
                </p>

                <div className="flex items-center justify-between mt-auto">
                  <span className="text-xs text-foreground-muted bg-foreground/5 px-3 py-1 rounded-full border border-card-border">
                    Completed
                  </span>
                  <Link
                    href="#contact"
                    className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-brand-cyan transition-colors"
                  >
                    View Project <ExternalLink size={16} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
