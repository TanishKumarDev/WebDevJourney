import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const navLinks = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-gray-900 text-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* LOGO */}
        <div className="text-2xl font-bold cursor-pointer">
          Tanish<span className="text-blue-500">Dev</span>
        </div>

        {/* DESKTOP NAV */}
        <ul className="hidden md:flex space-x-8 text-lg font-medium">
          {navLinks.map(({ name, link }) => (
            <li key={name}>
              <a href={link} className="hover:text-blue-400 transition-all duration-200">
                {name}
              </a>
            </li>
          ))}
        </ul>

        {/* HAMBURGER */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-3xl">
            <span>&#9776;</span>
          </button>
        </div>

        {/* DARK MODE TOGGLE */}
        <button 
          onClick={toggleDarkMode} 
          className="text-2xl ml-4 transition-all duration-300 ease-in-out"
        >
          {darkMode ? "🌞" : "🌙"}
        </button>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center bg-gray-800 py-4 space-y-4 text-lg font-medium">
          {navLinks.map(({ name, link }) => (
            <li key={name}>
              <a
                href={link}
                onClick={() => setIsOpen(false)}
                className="hover:text-blue-400 transition-all duration-200"
              >
                {name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
