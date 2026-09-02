import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rhoda Ogbole | Front End Developer",
  description: "Portfolio of Rhoda Ogbole",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-white text-gray-900 dark:bg-[#03030a] dark:text-white transition-colors duration-300`}>
        
        {/* 1. GRADIENT OVERLAY - CODE IT ONCE HERE */}
        <div className="fixed inset-0 -z-10 hidden dark:block">
          {/* Purple glow top left */}
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-800/20 rounded-full blur-[150px]" />
          {/* Blue glow bottom right */}
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-indigo-900/40 rounded-full blur-[150px]" />
          {/* Center glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-purple-500/10 rounded-full blur-[200px]" />
        </div>
        <ThemeProvider attribute = "class" defaultTheme="system" enableSystem>
           <main>{children}</main>

        </ThemeProvider>

        
       
        
      </body>
    </html>
  );
}
