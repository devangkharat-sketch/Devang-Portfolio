"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 -left-10 w-[500px] h-[500px] bg-brand-cyan/20 rounded-full blur-[120px] -z-10 mix-blend-screen" />
      <div className="absolute bottom-1/4 -right-10 w-[500px] h-[500px] bg-brand-violet/20 rounded-full blur-[120px] -z-10 mix-blend-screen" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] -z-10 opacity-20" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-start gap-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-brand-cyan/30 bg-brand-cyan/10 text-brand-cyan text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />
            Available for new freelance projects
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-balance">
            Landing Pages, Websites & <span className="gradient-text">Logos</span> for Small Businesses
          </h1>

          <p className="text-lg text-foreground-muted text-balance max-w-xl leading-relaxed">
            I’m Devang, an independent freelancer helping small businesses look professional online with clean websites, focused landing pages, and simple logo designs.
          </p>

          <div className="p-4 rounded-xl glass-card bg-foreground/5 border-card-border max-w-xl">
            <p className="text-sm text-foreground/80 italic">
              &quot;Offering focused attention, affordable pricing, and serious execution for my clients.&quot;
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
            <Link
              href="#contact"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-brand-cyan to-brand-violet text-foreground font-medium hover:opacity-90 transition-opacity shadow-[0_0_20px_rgba(56,189,248,0.3)] hover:shadow-[0_0_30px_rgba(56,189,248,0.5)]"
            >
              Start a Project
            </Link>
            <Link
              href="#work"
              className="w-full sm:w-auto px-8 py-4 rounded-xl glass-card hover:bg-foreground/10 transition-colors text-center font-medium"
            >
              See Previous Work
            </Link>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2 mt-4 text-sm text-foreground-muted">
            {["Beginner-friendly pricing", "Clean modern design", "Mobile responsive", "Clear communication"].map((item) => (
              <div key={item} className="flex items-center gap-1.5">
                <CheckCircle2 size={16} className="text-brand-cyan" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Content - Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative lg:ml-auto"
        >
          {/* Main Photo Card */}
          <div className="relative z-10 w-full max-w-[440px] aspect-[4/5] rounded-[2rem] glass-card p-2 bg-gradient-to-b from-white/10 to-white/5 shadow-2xl overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-cyan/20 to-brand-violet/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem]" />
            <div className="relative w-full h-full rounded-[1.5rem] overflow-hidden bg-section-bg">
              <Image
                src="/devang-portrait.png"
                alt="Devang"
                fill
                className="object-cover object-top scale-105 group-hover:scale-100 transition-transform duration-700"
                priority
              />
            </div>
          </div>

          {/* Floating Skill Cards */}
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-10 -left-12 z-20 glass-card px-4 py-3 rounded-xl shadow-xl flex items-center gap-3 backdrop-blur-xl bg-background/80"
          >
            <div className="w-8 h-8 rounded-full bg-brand-cyan/20 flex items-center justify-center">
              <div className="w-3 h-3 bg-brand-cyan rounded-full" />
            </div>
            <span className="font-medium text-sm">Landing Pages</span>
          </motion.div>

          <motion.div
            animate={{ y: [10, -10, 10] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-20 -right-8 z-20 glass-card px-4 py-3 rounded-xl shadow-xl flex items-center gap-3 backdrop-blur-xl bg-background/80"
          >
            <div className="w-8 h-8 rounded-full bg-brand-violet/20 flex items-center justify-center">
              <div className="w-3 h-3 bg-brand-violet rounded-full" />
            </div>
            <span className="font-medium text-sm">Logo Design</span>
          </motion.div>
          
          <motion.div
            animate={{ y: [-5, 5, -5] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-6 left-10 z-20 glass-card px-4 py-3 rounded-xl shadow-xl flex items-center gap-3 backdrop-blur-xl bg-background/80"
          >
            <div className="w-8 h-8 rounded-full bg-foreground/10 flex items-center justify-center">
              <div className="w-3 h-3 bg-foreground rounded-full" />
            </div>
            <span className="font-medium text-sm">Small Business Websites</span>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
