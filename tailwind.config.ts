import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF6B3D",
        darkBg: "#0B0F1A",
        card: "#111827",
      },
      fontSize: {
        "fluid-5xl": ["clamp(2.5rem, 8vw, 5rem)", {lineHeight: "1.1"}],
      }
    },
  },
  plugins: [],
};

export default config;