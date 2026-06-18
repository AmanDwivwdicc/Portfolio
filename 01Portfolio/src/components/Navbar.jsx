import { useState } from "react";
import { useEffect } from "react";


function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "About Me", href: "#about" },
    { name: "Education", href: "#education" },
    { name: "Projects", href: "#projects" },
    { name: "Connect", href: "#contact" },
    {name: "Skills", href: "#skills",}
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-md text-white z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <h1 className="text-xl md:text-2xl font-bold tracking-wider">
          AMAN DWIVEDI
        </h1>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8">
  {navItems.map((item) => (
    <a
      key={item.href}
      href={item.href}
      className="text-white hover:text-cyan-400 transition duration-300"
    >
      {item.name}
    </a>
  ))}
</div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black border-t border-gray-800">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block px-6 py-4 hover:bg-gray-900"
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;