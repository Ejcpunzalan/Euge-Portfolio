import { Link } from "react-scroll";

const Navbar = () => {
  const navItems = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Skills", to: "skills" },
    { name: "Experience", to: "experience" },
    { name: "Projects", to: "projects" },
    { name: "Contact", to: "contact" }
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/30 backdrop-blur-md border-b border-white/10 z-50">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-2xl font-bold text-cyan-400">
          EUGE WORKS
        </h1>

        <div className="hidden md:flex gap-8 text-sm">

          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              smooth={true}
              duration={500}
              offset={-80}
              className="cursor-pointer hover:text-cyan-400 transition"
            >
              {item.name}
            </Link>
          ))}

        </div>

      </div>

    </nav>
  );
};

export default Navbar;