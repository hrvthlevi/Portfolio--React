import { NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];
  const location = useLocation();

  const currentPage =
    navigationItems.find((item) => item.path === location.pathname)?.name ??
    "Home";

  return (
    <nav
      className="
  fixed top-5 left-1/2 -translate-x-1/2
  z-50
  w-[calc(100%-2rem)] max-w-6xl
  rounded-2xl
  border border-white/15
  bg-river/40
  backdrop-blur-2xl
  shadow-lg shadow-black/10
  ring-1 ring-white/5
  px-6 py-4
  text-warm-white
"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <NavLink
          to="/"
          className="text-xl md:text-2xl font-bold text-warm-white"
        >
          Horváth Levente
          <span className="text-amber"> - {currentPage}</span>
        </NavLink>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navigationItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? "text-terracotta"
                  : "text-warm-white hover:text-amber transition-colors"
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* Right side */}
        <div className="hidden md:flex items-center gap-5">
          <button className="text-sm text-warm-white hover:text-amber transition-colors">
            HU / EN
          </button>

          <a
            href="https://github.com/hrvthlevi"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="flex items-center gap-1 text-warm-white hover:text-amber transition-colors"
          >
            <SiGithub size={22} />
            <span className="text-xs">↗</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-warm-white hover:text-amber transition-colors"
          onClick={() => setIsMenuOpen((previous) => !previous)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <div className="md:hidden flex flex-col gap-5 mt-6">
          {navigationItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "text-terracotta"
                  : "text-warm-white hover:text-amber transition-colors"
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
