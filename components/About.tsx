import { FaPython, FaReact, FaJs, FaNodeJs } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiTailwindcss } from "react-icons/si";

export default function About() {
  const skills = [
    { name: "Python", icon: <FaPython className="text-4xl text-blue-400" /> },
    { name: "JavaScript", icon: <FaJs className="text-4xl text-yellow-400" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-4xl text-blue-600" /> },
    { name: "React", icon: <FaReact className="text-4xl text-cyan-400" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-4xl text-white" /> },
    { name: "Tailwind", icon: <SiTailwindcss className="text-4xl text-sky-400" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-4xl text-green-500" /> },
  ];

  const experiences = [
    {
      role: "IT Support Intern",
      company: "Katsina State Scholarship Board",
      year: "2024-2025",
      desc: "Supported IT operations and managed student data. Helped maintain systems and troubleshoot hardware issues."
    },
    {
      role: "Frontend Developer",
      company: "Freelance Projects",
      year: "2023 - Present",
      desc: "Built responsive web applications using React, Next.js, and Tailwind CSS for clients and personal projects."
    }
  ];

  return (
    <section  id= "about" className="py-20 px-6 max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">About Me</h1>
      <p className="text-gray-400 mb-10">
        Entry-level software developer with foundational knowledge in Python, 
        JavaScript, and modern web technologies including React and Next.js.
      </p>

      {/* Skills as Icons */}
      <h3 className="text-2xl font-semibold mb-6">Skills</h3>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-8 mb-16">
        {skills.map((skill) => (
          <div 
            key={skill.name} 
            className="bg-gray-700 p-4 rounded-lg text-center hover:scale-105 hover:bg-purple-400 transition flex-col items-center gap-2"
          >
            {skill.icon}
            <span className="text-sm font-medium">{skill.name}</span>
          </div>
        ))}
      </div>

      {/* Experience as Cards */}
      <h3 className="text-2xl font-semibold mb-6">Experience</h3>
      <div className="grid grid-cols md:grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
        {experiences.map((exp) => (
          <div 
            key={exp.company} 
            className="bg-gray-700 p-6 rounded-xl border purple-400 hover:scale-105 hover:border-purple-500 transition"
          >
            <div className="flex justify-between items-start mb-2">
              <h4 className="text-xl font-bold">{exp.role}</h4>
              <span className="text-sm bg-purple-400 px-3 py-1 rounded-full">{exp.year}</span>
            </div>
            <p className="text-purple-400 font-medium mb-3">{exp.company}</p>
            <p className="text-gray-400">{exp.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}