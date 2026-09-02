"use client";
import { FaGithub, FaLinkedin, FaInstagram, FaXTwitter } from "react-icons/fa6";


export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center px-4 sm:px-6 lg:px-20 pt-24 pb-20">
      <div className="grid md:grid-cols-2 gap-12 w-full max-w-7xl mx-auto items-center">
        
        
        <div>
          
          <span className="text-sm px-4 py-1 rounded-full bg-gray-800  font-medium">
            Front End Developer
          </span>

          
          <h1 className="text-5xl md:text-6xl font-bold mt-4 leading-tight">
            Rhoda <span className="text-purple-600">Ogbole</span> 
          </h1>

          
          <p className="mt-4 max-w-lg leading-relaxed">
            I build modern, responsive and scalable web applications with React and Next.js and bring ideas to life on the web.
          </p>

          
          <div className="flex gap-4 mt-6">
            <a 
              href="#projects" 
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="border border-gray-700 hover:border-purple-400 hover:text-purple-400 px-6 py-3 rounded-lg font-semibold transition"
            >
              Contact Me
            </a>
          </div>

         
          <div className="flex gap-5 mt-8 ">
            <a href="#"><FaGithub className="hover:text-purple-400 transition" size={20}/></a>
            <a href="#"><FaLinkedin className="hover:text-purple-400 transition" size={20}/></a>
            <a href="#"><FaInstagram className="hover:text-purple-400 transition" size={20}/></a>
            <a href="#"><FaXTwitter className="hover:text-purple-400 transition" size={20}/></a>
  
          </div>
        </div>

       
        <div className="relative flex justify-center">
          
          <div className="rounded-2xl bg-gradient-to-br from-purple-600 to-pink-500 p-[3px]">
            <img 
              src="/images/profile.jpeg" 
              alt="profile" 
              className="rounded-2xl w-[350px] h-[400px] object-cover bg-gray-800" 
            />
          </div>

        </div>

      </div>
    </section>
  )
}