"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export default function FirstClientOffer() {
  const offers = [
    {
      title: "Starter Landing Page",
      includes: [
        "One-page landing page",
        "Clear headline and CTA",
        "Mobile responsive design",
        "Contact/WhatsApp button",
        "Basic SEO structure"
      ]
    },
    {
      title: "Small Business Website",
      includes: [
        "Home page",
        "Services section",
        "About section",
        "Contact section",
        "WhatsApp enquiry button",
        "Mobile responsive design"
      ],
      featured: true
    },
    {
      title: "Logo Starter",
      includes: [
        "2 to 3 logo concepts",
        "Simple color direction",
        "Clean typography",
        "Final logo files",
        "Basic usage guidance"
      ]
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brand-cyan/5 -z-10" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mb-16 mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            Special Packages for <span className="gradient-text">Selected Clients</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-foreground-muted text-balance max-w-2xl mx-auto"
          >
            I’m currently offering selected projects at affordable pricing in exchange for honest feedback and a chance to build real results for your business.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {offers.map((offer, index) => (
            <motion.div
              key={offer.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`glass-card p-8 relative flex flex-col ${
                offer.featured 
                  ? "border-brand-cyan/50 shadow-[0_0_30px_rgba(56,189,248,0.15)] -translate-y-4" 
                  : "border-card-border"
              }`}
            >
              {offer.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-cyan text-background text-xs font-bold uppercase tracking-wider py-1.5 px-4 rounded-full">
                  Most Popular
                </div>
              )}
              
              <h3 className="text-2xl font-bold mb-2 text-foreground">{offer.title}</h3>
              <p className="text-brand-cyan font-medium text-sm mb-8">Affordable pricing</p>

              <ul className="space-y-4 flex-1 mb-8">
                {offer.includes.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-foreground-muted">
                    <CheckCircle2 size={18} className="text-brand-cyan shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="#contact"
                className={`w-full py-4 text-center rounded-xl font-medium transition-all ${
                  offer.featured
                    ? "bg-gradient-to-r from-brand-cyan to-brand-violet text-foreground hover:opacity-90 shadow-lg"
                    : "bg-foreground/5 border border-card-border text-foreground hover:bg-foreground/10"
                }`}
              >
                Claim Your Spot
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
