import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#E8F2ED',
        surface: '#FFFFFF',
        surface2: '#F4FAF7',
        border: { DEFAULT: '#C8DDD4', strong: '#A8C8B8' },
        text: { DEFAULT: '#0D1F18', 2: '#2A4035', muted: '#4A6558', faint: '#7A9B8A' },
        pink: { DEFAULT: '#FF3D8A', dark: '#D42870', light: '#FFF0F6' },
        green: { DEFAULT: '#00B87A', light: '#E0F7EE', dark: '#007A52' },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'sans-serif'],
        display: ['var(--font-display)', 'sans-serif'],
        serif: ['var(--font-serif)', 'serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      animation: {
        "fade-in": "fadeIn 0.4s ease-out",
        "slide-up": "slideUp 0.4s ease-out",
        "marquee": "marquee 35s linear infinite",
      },
      keyframes: {
        fadeIn: { from: { opacity: "0" }, to: { opacity: "1" } },
        slideUp: {
          from: { opacity: "0", transform: "translateY(12px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
