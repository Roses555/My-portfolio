export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 p-6">
        
        <div>
          <h1 className="text-4xl md:text-6xl font-bold">
            Hi, I'm <span className="text-purple-400">Rhoda</span>
          </h1>

          <p className="mt-4 text-gray-400">
            Entry-level software developer with experience in React, Next.js,
            and building responsive applications.
          </p>

          <div className="mt-6 flex gap-4">
            <a
              href="/Rhoda_CV.pdf"
              download
              className="bg-purple-400 px-6 py-3 rounded-lg"
            >
              Download CV
            </a>

            <a
              href="#contact"
              className="border border-purple-400 px-6 py-3 rounded-lg"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="w-64 h-64 rounded-full border-4 border-purple-400 overflow-hidden">
            <img src="/images/profile.jpeg" alt="profile" />
          </div>
        </div>
      </div>
    </section>
  );
}