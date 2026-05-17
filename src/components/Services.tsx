"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { LayoutTemplate, Globe, PenTool, CheckCircle2 } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Landing Page Design",
      description: "Focused one-page websites designed to explain your offer clearly, build trust, and guide visitors to take action.",
      icon: LayoutTemplate,
      bestFor: ["Product promotions", "Service offers", "Lead generation", "Course or coaching offers", "Campaign pages"],
      cta: "Get a Landing Page",
      color: "brand-cyan"
    },
    {
      title: "Small Business Website",
      description: "Clean, mobile-responsive websites for local businesses, freelancers, shops, coaching classes, and service providers.",
      icon: Globe,
      bestFor: ["Business homepage", "Services page", "About section", "Contact form", "WhatsApp enquiry button"],
      cta: "Build My Website",
      color: "brand-violet"
    },
    {
      title: "Logo Design",
      description: "Simple and clean logo concepts for new businesses, personal brands, and small projects that need a professional identity.",
      icon: PenTool,
      bestFor: ["New businesses", "Personal brands", "Shops", "Social media pages", "Startup ideas"],
      cta: "Design My Logo",
      color: "white"
    }
  ];

  return (
    <section id="services" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            Services I Can <span className="gradient-text">Help You With</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-foreground-muted text-balance"
          >
            Simple digital services for small businesses that want to look professional and attract more customers.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8 group hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-${service.color}/10 rounded-bl-full -z-10`} />
              
              <service.icon size={48} className={`mb-6 text-${service.color === 'white' ? 'white' : service.color}`} />
              
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-foreground-muted mb-8 leading-relaxed h-24">
                {service.description}
              </p>

              <div className="mb-8">
                <p className="font-semibold text-sm mb-4 text-foreground/80">Best for:</p>
                <ul className="space-y-3">
                  {service.bestFor.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-foreground-muted">
                      <CheckCircle2 size={16} className={`text-${service.color === 'white' ? 'white' : service.color} shrink-0 mt-0.5`} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href="#contact"
                className="inline-flex w-full justify-center py-3 px-6 rounded-xl border border-card-border hover:bg-foreground/5 transition-colors font-medium mt-auto"
              >
                {service.cta}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
