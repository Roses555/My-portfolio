"use client";

import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="border px-3 py-1 bg-purple-400 text-white rounded"
    >
      {theme === "dark" ? "Light" : "Dark"}
    </button>
  );
}