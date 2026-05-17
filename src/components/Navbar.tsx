"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", href: "#" },
    { name: "Services", href: "#services" },
    { name: "Previous Work", href: "#work" },
    { name: "Process", href: "#process" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-nav transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        <Link href="#" className="text-xl font-bold tracking-tight text-foreground">
          Devang<span className="text-brand-cyan">.</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-6">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-foreground-muted hover:text-foreground transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Link
              href="#contact"
              className="px-5 py-2.5 rounded-full bg-[var(--foreground)] text-[var(--background)] hover:opacity-90 text-sm font-medium transition-all"
            >
              Start a Project
            </Link>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />
          <button
            className="text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-[#0F172A] border-b border-card-border p-6 flex flex-col gap-4 shadow-2xl">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-foreground-muted hover:text-foreground transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="mt-4 px-6 py-3 text-center rounded-xl bg-gradient-to-r from-brand-cyan to-brand-violet text-foreground font-medium"
          >
            Start a Project
          </Link>
        </div>
      )}
    </nav>
  );
}
