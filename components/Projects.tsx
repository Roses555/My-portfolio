import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { FaGithub} from "react-icons/fa6";

const projects = [
  {
    title: "Her Recruit: Job Recruitment Platform",
    desc: "A job recruitment web platform that bridges the gap between talent and employers through streamlined job matching.",
    image: "/images/HerRecruit.png", 
    liveUrl: "https://her-recruit.com",
    githubUrl: "https://github.com/yourusername/her-recruit",
    tech: ["React", "Node.js", "Tailwind"]
  },
  {
    title: "Weather App",
    desc: "An interactive weather app that pulls real-time data from a public API and displays it through a clean UI.",
    image: "/images/weather-app.png",
    liveUrl: "https://weather-app.com",
    githubUrl: "https://github.com/yourusername/weather-app",
    tech: ["React", "API", "tailwind"]
  },
  {
    title: "E-commerce Landing Page",
    desc: "A responsive landing page built for an online shopping concept, designed to give visitors a clear product overview.",
    image: "/images/ecommerce.png",
    liveUrl: "https://ecommerce.com",
    githubUrl: "https://github.com/yourusername/ecommerce",
    tech: ["Next.js", "Tailwind", "Framer"]
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold">Featured Projects</h2>
          <Link href="/projects" className="text-sm text-gray-400 hover:text-purple-400">
            View All Projects
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.title} 
              className="group bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 hover:border-purple-500 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative w-full h-60 overflow-hidden">
                <Image 
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Title + Live Link Arrow */}
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <Link 
                    href={project.liveUrl} 
                    target="_blank"
                    className="p-2 rounded-full bg-gray-800 hover:bg-purple-600 transition"
                  >
                    <ArrowUpRight size={18} />
                  </Link>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm mb-4">{project.desc}</p>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((t) => (
                    <span 
                      key={t} 
                      className="text-xs bg-gray-800 text-purple-400 px-3 py-1 rounded-full font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Bottom: Github Link */}
                <div className="flex justify-between items-center">
                  <Link 
                    href={project.githubUrl}
                    target="_blank"
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition"
                  >
                    <FaGithub size={18} />
                    <span className="text-sm">Code</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}