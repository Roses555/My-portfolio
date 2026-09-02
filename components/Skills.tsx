import { FaPython, FaReact, FaJs } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiTailwindcss } from "react-icons/si";

const skills = [
  { name: "Python", icon: <FaPython className="text-4xl text-blue-400" /> },
  { name: "JavaScript", icon: <FaJs className="text-4xl text-yellow-400" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-4xl text-blue-600" /> },
  { name: "React", icon: <FaReact className="text-4xl text-cyan-400" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-4xl text-white" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-4xl text-sky-400" /> },
];

export default function Skills() {
  return (
    <section id="skills" className="px-4 sm:px-6 lg:px-20 py-20 ">
      <h2 className="text-3xl font-bold text-center mb-4">Technologies I work with</h2>
      <p className=" text-center mb-12">The tools and technologies I use to bring products to life</p>

      <div className="grid grid-cols-2 text-white md:grid-cols-3 lg:grid-cols-3 gap-6 max-w-3xl mx-auto">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="bg-gray-800 p-6 rounded-xl text-center hover:scale-105 hover:bg-purple-600 transition group"
          >
            <div className="flex justify-center mb-3">{skill.icon}</div>
            <span className="text-sm font-medium">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}