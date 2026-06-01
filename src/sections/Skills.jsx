import html from "../images/html.jpg";
import css from "../images/css.jpg";
import js from "../images/js.jpg";
import react from "../images/react.jpg";
import node from "../images/node.jpg";
import express from "../images/express.jpg";
import tailwind from "../images/tailwind.jpg";
import git from "../images/git.jpg";
import vercel from "../images/vercel.jpg";
import netlify from "../images/netlify.jpg";

const skills = [
  { name: "HTML", icon: html },
  { name: "CSS", icon: css },
  { name: "JavaScript", icon: js },
  { name: "React", icon: react },
  { name: "Node.js", icon: node },
  { name: "Express", icon: express },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Git", icon: git },
  { name: "Vercel", icon: vercel },
  { name: "Netlify", icon: netlify },
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