const projects = [
  {
    title: "Diet Recommendation System",
    desc: "Content-based ML recommendation system",
  },
  {
    title: "Weather App",
    desc: "Real-time weather app using React",
  },
  {
    title: "E-commerce Landing Page",
    desc: "Responsive UI design",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto p-6">

        <h2 className="text-3xl font-bold mb-10">Projects</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div key={p.title} className="bg-gray p-6 rounded-lg hover:scale-105 hover:border-purple-400 transition flex-col items-center">
              <div className="h-40 bg-gray-700 rounded mb-4" />
              <h3 className="text-xl">{p.title}</h3>
              <p className="text-gray-500">{p.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}