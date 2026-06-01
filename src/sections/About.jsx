const About = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        <div>
          <img
            src="/images/eugeowner.jpeg"
            alt="profile"
            className="rounded-3xl"
          />
        </div>

        <div>
          <h2 className="text-4xl font-bold mb-6 text-cyan-400">
            About Me
          </h2>

          <p className="text-gray-400 leading-8">
            I am an aspiring web developer...
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
              <h3 className="text-3xl font-bold">2+</h3>
              <p className="text-gray-400">Years Experience</p>
            </div>

            <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
              <h3 className="text-3xl font-bold">3+</h3>
              <p className="text-gray-400">Projects Built</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;