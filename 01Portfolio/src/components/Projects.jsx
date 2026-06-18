import { motion } from "framer-motion";
import projects from "../data/projects";

function Projects() {
  return (
    <section
      className="min-h-screen bg-black text-white px-8 py-24"
    >
      <h2 className="text-5xl font-bold text-center mb-20 text-cyan-400">
        Projects
      </h2>

      <div className="max-w-6xl mx-auto space-y-20">

        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{
              opacity: 0,
              x: index % 2 === 0 ? -100 : 100
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            transition={{
              duration: 0.8
            }}
            className={`flex flex-col md:flex-row ${
              index % 2 !== 0
                ? "md:flex-row-reverse"
                : ""
            } gap-10 items-center`}
          >

            <img
              src={project.image}
              alt={project.title}
              className="w-full md:w-1/2 rounded-2xl shadow-lg"
            />

            <div className="md:w-1/2">

              <h3 className="text-3xl font-bold mb-4">
                {project.title}
              </h3>

              <p className="text-gray-400 text-lg">
                {project.description}
                <div className="md:w-1/2">

  <h3 className="text-3xl font-bold mb-4">
    {project.title}
  </h3>

  <p className="text-gray-400 text-lg mb-6">
    {project.description}
  </p>

  <a
    href={project.link}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block px-6 py-3 border-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-black transition duration-300"
  >
    Visit
  </a>

</div>
              </p>

            </div>

          </motion.div>
        ))}

      </div>
    </section>
  );
}

export default Projects;