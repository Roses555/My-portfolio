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
    },
  },
  plugins: [],
};

export default config;