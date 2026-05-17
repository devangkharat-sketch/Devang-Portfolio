"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Mail, Send, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  const WHATSAPP_LINK = "https://wa.me/918669209705?text=Hi%20Devang%2C%20I%20saw%20your%20portfolio%20website%20and%20I%20want%20to%20discuss%20a%20project.";
  const EMAIL_LINK = "mailto:devang.kharat@gmail.com";
  
  // Using Web3Forms for reliable email forwarding
  const WEB3FORMS_URL = "https://api.web3forms.com/submit";
  // GET YOUR KEY HERE: https://web3forms.com/
  const WEB3FORMS_ACCESS_KEY = "5fd49292-856f-4917-ba1d-f1114a057e22"; 

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSubmitting(true);
    setError("");

    const formElement = e.currentTarget;
    
    // Structure the data to be sent in the email
    const submitData = {
      access_key: WEB3FORMS_ACCESS_KEY,
      Name: (formElement.elements.namedItem("name") as HTMLInputElement).value,
      Email: (formElement.elements.namedItem("email") as HTMLInputElement).value,
      "Business Type": (formElement.elements.namedItem("business") as HTMLInputElement).value,
      "Service Needed": (formElement.elements.namedItem("service") as HTMLSelectElement).value,
      Message: (formElement.elements.namedItem("message") as HTMLTextAreaElement).value,
      from_name: "Portfolio Contact Form", // Name of the sender in your inbox
      subject: "New Contact Form Submission from Portfolio!", // Email subject line
    };

    try {
      const response = await fetch(WEB3FORMS_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(submitData),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        setError("Oops! There was a problem submitting your form.");
      }
    } catch (err) {
      setError("Oops! There was a network error submitting your form.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-section-bg relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Text & Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Let’s Build Your <span className="gradient-text">Project</span>
            </h2>
            <p className="text-lg text-foreground-muted mb-10 max-w-md leading-relaxed">
              If you need a landing page, web design, or automation, send me a message. I’ll reply with a clear next step.
            </p>

            <div className="space-y-4 mb-10">
              <Link 
                href={WHATSAPP_LINK} 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-xl glass-card hover:bg-foreground/5 transition-colors group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#25D366]/20 flex items-center justify-center text-[#25D366]">
                    <MessageCircle size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">Message on WhatsApp</p>
                    <p className="text-sm text-foreground-muted group-hover:text-foreground/80 transition-colors">8669209705</p>
                  </div>
                </div>
              </Link>

              <Link 
                href={EMAIL_LINK}
                className="flex items-center justify-between p-4 rounded-xl glass-card hover:bg-foreground/5 transition-colors group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-cyan/20 flex items-center justify-center text-brand-cyan">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">Email Me</p>
                    <p className="text-sm text-foreground-muted group-hover:text-foreground/80 transition-colors">devang.kharat@gmail.com</p>
                  </div>
                </div>
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4 text-sm text-foreground-muted">
              <div className="p-4 rounded-xl bg-foreground/5 border border-card-border">
                <p className="text-foreground font-medium mb-1">Location</p>
                <p>India</p>
              </div>
              <div className="p-4 rounded-xl bg-foreground/5 border border-card-border">
                <p className="text-foreground font-medium mb-1">Response</p>
                <p>Usually within 24 hours</p>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 lg:p-10"
          >
            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center py-12"
              >
                <div className="w-16 h-16 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center mb-6">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Thank you!</h3>
                <p className="text-foreground-muted text-lg max-w-sm">
                  I have received your message and will get back to you within 24 hours.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="mt-8 text-brand-cyan hover:text-brand-violet transition-colors font-medium"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                {error && (
                  <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-500 text-sm">
                    {error}
                  </div>
                )}
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground/80">Name</label>
                    <input 
                      id="name"
                      name="name"
                      type="text" 
                      required
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl bg-background border border-card-border focus:border-brand-cyan focus:outline-none focus:ring-1 focus:ring-brand-cyan transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground/80">Email</label>
                    <input 
                      id="email"
                      name="email"
                      type="email" 
                      required
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-background border border-card-border focus:border-brand-cyan focus:outline-none focus:ring-1 focus:ring-brand-cyan transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="business" className="text-sm font-medium text-foreground/80">Business / Project Type</label>
                  <input 
                    id="business"
                    name="business"
                    type="text" 
                    required
                    placeholder="e.g. Local Cafe, Fitness Coach"
                    className="w-full px-4 py-3 rounded-xl bg-background border border-card-border focus:border-brand-cyan focus:outline-none focus:ring-1 focus:ring-brand-cyan transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="service" className="text-sm font-medium text-foreground/80">Service Needed</label>
                  <select 
                    id="service"
                    name="service"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-background border border-card-border focus:border-brand-cyan focus:outline-none focus:ring-1 focus:ring-brand-cyan transition-colors text-foreground"
                    defaultValue=""
                  >
                    <option value="" disabled hidden>Select a service...</option>
                    <option value="Landing Page">Landing Page</option>
                    <option value="Website Design">Website Design</option>
                    <option value="Workflow Automation">Workflow Automation</option>
                    <option value="Logo Design">Logo Design</option>
                    <option value="Other">Other / Unsure</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground/80">Message</label>
                  <textarea 
                    id="message"
                    name="message"
                    rows={4}
                    required
                    placeholder="Tell me a bit about what you need..."
                    className="w-full px-4 py-3 rounded-xl bg-background border border-card-border focus:border-brand-cyan focus:outline-none focus:ring-1 focus:ring-brand-cyan transition-colors resize-none"
                  />
                </div>

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-brand-cyan to-brand-violet text-foreground font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-foreground/30 border-t-foreground rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
