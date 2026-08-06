"use client";

import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { name: "Home", id: "#home" },
  { name: "About", id: "#about" },
  { name: "Projects", id: "#projects" },
  { name: "Contact", id: "#contact" },
];

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-darkBg/80 backdrop-blur z-50">
      <div className="max-w-6xl mx-auto flex justify-between p-4">
        <h1 className="text-primary font-bold text-xl">Rhoda</h1>

        <div className="flex gap-6 items-center">
          {navLinks.map((link) => (
            <a key={link.name} href={link.id} className="hover:text-purple-400">
              {link.name}
            </a>
          ))}
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}