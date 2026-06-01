import { projects } from "../data/projects";

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-16 text-cyan-400">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">

          {projects.map((project, index) => (
            <a
  key={index}
  href={project.link}
  target="_blank"
  rel="noreferrer"
  className="block bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:scale-105 transition duration-300"
>
  <img
    src={project.image}
    alt={project.title}
    className="h-56 w-full object-cover"
  />

  <div className="p-6">
    <h3 className="text-2xl font-bold mb-3">
      {project.title}
    </h3>

    <p className="text-gray-400 mb-4">
      {project.description}
    </p>

    <div className="flex flex-wrap gap-2">
      {project.tech.map((item) => (
        <span
          key={item}
          className="text-sm bg-cyan-500/10 text-cyan-400 px-3 py-1 rounded-full"
        >
          {item}
        </span>
      ))}
    </div>

  </div>
</a>
          ))}

        </div>
      </div>
    </section>
  )
}

export default Projects;