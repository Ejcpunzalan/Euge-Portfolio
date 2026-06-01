const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-16 text-cyan-400">
          Experience
        </h2>

        <div className="space-y-8">

          {/* FREELANCE */}
          <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
            <p className="text-cyan-400 text-sm">
              Oct 2025 – Present
            </p>
            <h3 className="text-2xl font-bold">
              Freelance Web Developer
            </h3>
            <p className="text-gray-400 mt-2">
              Developed responsive websites using HTML, CSS, JavaScript, and React.
              Customized website layouts and user interfaces based on client requirements.
              Collaborated with clients to improve website functionality and design.
            </p>
          </div>

          {/* BARON TRAVEL */}
          <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
            <p className="text-cyan-400 text-sm">
              Jan 2025 – July 2025
            </p>
            <h3 className="text-2xl font-bold">
              IT Staff
            </h3>
            <p className="text-cyan-400">
              Baron Travel Corporation
            </p>
            <p className="text-gray-400 mt-2">
              Demonstrated teamwork, communication, and problem-solving skills in a professional environment.
              Assisted in system support, troubleshooting hardware/software issues, and maintaining IT equipment.
            </p>
          </div>

          {/* STO. TOMAS CITY HALL */}
          <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
            <p className="text-cyan-400 text-sm">
              Feb 2023 – May 2023
            </p>
            <h3 className="text-2xl font-bold">
              MIS Department Intern
            </h3>
            <p className="text-cyan-400">
              Sto. Tomas City Hall
            </p>
            <p className="text-gray-400 mt-2">
              Assisted in data entry, system updates, and monitoring of IT equipment in a government environment.
            </p>
          </div>

          {/* FIRST ASIA */}
          <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
            <p className="text-cyan-400 text-sm">
              Oct 2022 – Dec 2022
            </p>
            <h3 className="text-2xl font-bold">
              IT Support Intern
            </h3>
            <p className="text-cyan-400">
              First Asia Institute of Technology and Humanities
            </p>
            <p className="text-gray-400 mt-2">
              Assisted in network connectivity checks and basic system maintenance.
              Helped troubleshoot hardware and software issues reported by staff.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Experience;