import { User, Mail, MapPin, Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Frontend Developer",
    company: "Freelance Projects",
    year: "2023 - Present",
    desc: "Built responsive web applications using React, Next.js, and Tailwind CSS personal projects.",
  },
  {
    role: "Associate Assistant",
    company: "Katsina State Scholarship Board",
    year: "2024-2025",
    desc: "Supported IT operations and managed student data. Helped maintain systems and troubleshoot hardware/software issues.",
  },
   {
    role: "IT Consultant",
    company: "Raytiding Consulting Limited",
    year: "2026-Present",
    desc: "Use digital tools and structured workflows to improve organization and efficiency across assigned tasks. Communicate with stakeholders and support day-to-day activities with professionalism, reliability and attention to deadlines.",
  },
];

export default function About() {
  return (
    <section id="about" className="px-4 sm:px-6 lg:px-20 py-20">
      <h2 className="text-3xl font-bold mb-10">About Me</h2>
      
      <div className="grid lg:grid-cols-3 gap-10">
        {/* Left: Text + Button */}
        <div className="lg:col-span-2">
          <p className=" leading-relaxed mb-6">
            I'm Rhoda, a frontend developer with a foundation in Python, JavaScript, and TypeScript, and hands-on experience building responsive web applications.
            I specialize in React, Next.js, and Tailwind CSS and I love turning ideas into clean, user-friendly interfaces.
          </p>
          <p className="leading-relaxed mb-6">
            I'm passionate about creating accessible, performant, and beautiful web experiences that solve real problems.
          </p>
          <a 
            href="/Rhoda_CV.pdf" 
            download 
            className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition"
          >
            Download CV
          </a>
        </div>

        {/* Right: Info Card */}
        <div className="bg-gray-800 p-6 rounded-xl space-y-4 h-fit">
          <div className="flex items-center gap-3"><User size={18} className="text-purple-400"/> <span>Name: Rhoda Ogbode</span></div>
          <div className="flex items-center gap-3"><Mail size={18} className="text-purple-400"/> <span>Email: rhoda@gmail.com</span></div>
          <div className="flex items-center gap-3"><MapPin size={18} className="text-purple-400"/> <span>Location: Nigeria</span></div>
          <div className="flex items-center gap-3"><Briefcase size={18} className="text-purple-400"/> <span>Available for work</span></div>
        </div>
      </div>

      {/* Experience Section */}
      <h3 className="text-2xl font-semibold mt-20 mb-6">Experience</h3>
      <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6">
        {experiences.map((exp) => (
          <div 
            key={exp.company} 
            className="bg-gray-800 text-white p-6 rounded-xl border-gray-700 hover:border-purple-500 hover:scale-[1.02] transition"
          >
            <div className="flex justify-between items-start mb-2">
              <h4 className="text-xl font-bold">{exp.role}</h4>
              <span className="text-sm bg-purple-600 px-3 py-1 rounded-full">{exp.year}</span>
            </div>
            <p className="text-purple-400 font-medium mb-3">{exp.company}</p>
            <p >{exp.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}