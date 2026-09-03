"use client";
import { useState } from "react";
import { Mail, MapPin, Phone, Send, Loader2, CheckCircle } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram, FaXTwitter } from "react-icons/fa6";


export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const data = new FormData(form);

    // REPLACE THIS URL with your Formspree URL
    const response = await fetch("https://formspree.io/f/mvkoryel", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      setStatus("success");
      form.reset();
    } else {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        
        <h2 className="text-3xl font-bold mb-2">Get In Touch</h2>
        <p className=" mb-12">
          Have a project in mind or want to collaborate? Feel free to reach out!
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          
          {/* LEFT: Contact Info */}
          <div className="space-y-6">
            <div className="bg-gray-900 p-6 rounded-xl border-gray-800">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-purple-600 rounded-lg">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <a href="mailto:rhodaogbole320@gmail.com" className="font-semibold text-white hover:text-purple-400">
                    rhodaogbole320@gmail.com
                  </a>
                </div>
              </div>
            </div>


            <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-purple-600 rounded-lg">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Location</p>
                  <p className="font-semibold text-white">Abuja, Nigeria</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <a href="https://github.com/Roses555" target="_blank" className="p-3  hover:text-purple-500 transition">
                <FaGithub size={20} />
              </a>
              <a href="https://www.linkedin.com/in/rhoda-ogbole-6054082ba/" target="_blank" className="p-3 hover:text-purple-500 transition">
                <FaLinkedin size={20} />
              </a>
              <a href="https://x.com/TheLioness_RP" target="_blank" className="p-3 hover:text-purple-500 transition">
                <FaXTwitter size={20} />
              </a>
            </div>
          </div>

          {/* RIGHT: Contact Form */}
          <form onSubmit={handleSubmit} className="bg-gray-900 p-8 text-gray-400 rounded-2xl border border-gray-800 space-y-5">
            <div>
              <label className="block text-sm font-medium mb-2">Your Name</label>
              <input 
                type="text" 
                name="name" // <-- name attribute is required for Formspree
                required
                placeholder="John Doe"
                className="w-full bg-gray-800 border-gray-700 rounded-lg px-4 py-3 outline-none focus:border-purple-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Your Email</label>
              <input 
                type="email" 
                name="email" // <-- name attribute is required
                required
                placeholder="john@email.com"
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 outline-none focus:border-purple-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Subject</label>
              <input 
                type="text" 
                name="subject" // <-- name attribute is required
                required
                placeholder="Project Inquiry"
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 outline-none focus:border-purple-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea 
                rows={5}
                name="message" // <-- name attribute is required
                required
                placeholder="Tell me about your project..."
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 outline-none focus:border-purple-500 resize-none"
              />
            </div>

            <button 
              type="submit"
              disabled={status === "loading"}
              className="w-full bg-purple-600 text-white hover:bg-purple-700 disabled:bg-gray-700 flex items-center justify-center gap-2 font-semibold px-6 py-3 rounded-lg transition"
            >
              {status === "loading" ? <Loader2 className="animate-spin" size={18} /> : <Send size={18} />}
              {status === "loading" ? "Sending..." : "Send Message"}
            </button>

            {/* Success/Error Messages */}
            {status === "success" && (
              <p className="flex items-center gap-2 text-green-400 text-sm">
                <CheckCircle size={16} /> Message sent! I'll get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="text-red-400 text-sm">Oops! Something went wrong. Please try again.</p>
            )}
          </form>

        </div>
      </div>
    </section>
  );
}