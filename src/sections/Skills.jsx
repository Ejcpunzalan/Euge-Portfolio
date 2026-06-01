const skills = [
  { name: "HTML", icon: "/Images/html.jpg" },
  { name: "CSS", icon: "/Images/css.jpg" },
  { name: "JavaScript", icon: "/Images/js.jpg" },
  { name: "React", icon: "/Images/react.jpg" },
  { name: "Node.js", icon: "/Images/node.jpg" },
  { name: "Express", icon: "/Images/express.jpg" },
  { name: "Tailwind CSS", icon: "/Images/tailwind.jpg" },
  { name: "Git", icon: "/Images/git.jpg" },
  { name: "Vercel", icon: "/Images/vercel.jpg" },
  { name: "Netlify", icon: "/Images/netlify.jpg" },
];
const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-cyan-400">
          Skills
        </h2>

        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/10 rounded-2xl hover:border-cyan-400 transition"
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-8 h-8 object-contain"
              />
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;