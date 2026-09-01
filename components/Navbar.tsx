"use client";

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { useState } from "react";
import { Menu, X } from "lucide-react"; 

const navlinks = [
  { name: "Home", id: "#home" },
  { name: "About", id: "#about" },
  { name: "Projects", id: "#projects" },
  { name: "Contact", id: "#contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed h-7 w-7 top-0 w-full bg-dark/80 backdrop-blur-md z-50 border-gray-800">
      <nav className="max-w-6xl mx-auto px-3 sm:px-4 lg:px-8 py-6 flex justify-between items-center">
        
        {/* Logo */}
        <Link 
          href="/" 
          className="flex items-center gap-2 text-white"
          onClick={() => setMobileMenuOpen(false)}
        >
          <h1 className="text-primary text-white font-bold text-xl">Rhoda</h1>
        </Link>

        {/* Desktop Nav - hidden on mobile */}
        <div className="hidden md:flex gap-6 text-white items-center">
          {navlinks.map((link) => (
            <a 
              key={link.name} 
              href={link.id} 
              className="hover:text-purple-400 transition"
            >
              {link.name}
            </a>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button + ThemeToggle */}
        <div className="flex md:hidden items-center gap-3">
          <ThemeToggle />
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-md border border-gray-700 hover:bg-gray-800"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black backdrop-blur-md border-t border-gray-800">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {navlinks.map((link) => (
              <a
                key={link.name}
                href={link.id}
                onClick={() => setMobileMenuOpen(false)} 
                className="block px-3 py-2 rounded-md text-purple-400 font-medium hover:bg-gray-800 hover:text-white transition"
              >
                {link.name}
              </a>
              
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
          
  