import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "rgb(var(--background) / <alpha-value>)",
        "section-bg": "rgb(var(--section-bg) / <alpha-value>)",
        "card-bg": "rgb(var(--card-bg) / var(--card-bg-opacity))",
        "card-border": "rgb(var(--card-border) / var(--card-border-opacity))",
        foreground: "rgb(var(--foreground) / <alpha-value>)",
        "foreground-muted": "rgb(var(--foreground-muted) / <alpha-value>)",
        "brand-cyan": "rgb(var(--brand-cyan) / <alpha-value>)",
        "brand-violet": "rgb(var(--brand-violet) / <alpha-value>)",
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
