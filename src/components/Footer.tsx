"use client";

import Link from "next/link";
import { Camera, Globe, Mail, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#03050D] py-12 border-t border-card-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col items-center text-center">
        
        <Link href="#" className="text-2xl font-bold tracking-tight text-foreground mb-2">
          Devang<span className="text-brand-cyan">.</span>
        </Link>
        
        <p className="text-sm font-medium text-brand-violet mb-8">
          Landing Pages • Small Business Websites • Logo Design
        </p>

        <div className="flex flex-wrap justify-center gap-6 mb-10">
          <Link href="#" className="text-sm text-foreground-muted hover:text-foreground transition-colors">Home</Link>
          <Link href="#services" className="text-sm text-foreground-muted hover:text-foreground transition-colors">Services</Link>
          <Link href="#work" className="text-sm text-foreground-muted hover:text-foreground transition-colors">Previous Work</Link>
          <Link href="#process" className="text-sm text-foreground-muted hover:text-foreground transition-colors">Process</Link>
          <Link href="#about" className="text-sm text-foreground-muted hover:text-foreground transition-colors">About</Link>
          <Link href="#contact" className="text-sm text-foreground-muted hover:text-foreground transition-colors">Contact</Link>
        </div>

        <div className="flex gap-4 mb-12">
          <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-foreground/5 flex items-center justify-center text-foreground-muted hover:text-foreground hover:bg-foreground/10 transition-all" title="Instagram">
            <Camera size={18} />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-foreground/5 flex items-center justify-center text-foreground-muted hover:text-foreground hover:bg-foreground/10 transition-all" title="LinkedIn">
            <Globe size={18} />
          </a>
          <a href="https://wa.me/918669209705" className="w-10 h-10 rounded-full bg-foreground/5 flex items-center justify-center text-foreground-muted hover:text-[#25D366] hover:bg-foreground/10 transition-all" title="WhatsApp">
            <MessageCircle size={18} />
          </a>
          <a href="mailto:devang.kharat@gmail.com" className="w-10 h-10 rounded-full bg-foreground/5 flex items-center justify-center text-foreground-muted hover:text-brand-cyan hover:bg-foreground/10 transition-all">
            <Mail size={18} />
          </a>
        </div>

        <div className="text-xs text-foreground-muted/60">
          <p>© 2026 Devang. Built with honesty, clean design, and focused execution.</p>
        </div>

      </div>
    </footer>
  );
}
