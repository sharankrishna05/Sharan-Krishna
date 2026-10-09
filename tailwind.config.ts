import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#070b0d",
        panel: "#0c1214",
        acid: "#b7f34a",
        muted: "#8a9996"
      },
      fontFamily: {
        mono: ["var(--font-mono)", "monospace"],
        sans: ["var(--font-sans)", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
