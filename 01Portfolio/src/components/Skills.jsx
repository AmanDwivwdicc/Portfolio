function Skills() {
  const skills = [
    "C++",
    "Python",
    "JavaScript",
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "OpenCV",
    "Machine Learning",
    "Tailwind CSS",
    "Git",
    "GitHub"
  ];

  return (
    <section className="min-h-screen bg-zinc-950 text-white flex flex-col justify-center px-8">

      <h2 className="text-5xl font-bold text-center mb-16 text-cyan-400">
        Skills
      </h2>

      <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-6">

        {skills.map((skill) => (
          <div
            key={skill}
            className="px-6 py-3 bg-zinc-900 rounded-full hover:bg-cyan-500 transition"
          >
            {skill}
          </div>
        ))}

      </div>

    </section>
  );
}

export default Skills;