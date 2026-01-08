import { useState } from "react";
import SkyLogo from "../assets/skylogo.png";
import { HiMenu, HiX } from "react-icons/hi"; // Hamburger & close icons

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-black text-white fixed top-0 z-50 shadow-md">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">

        {/* Logo */}
        <div className="flex flex-col items-center gap-1 cursor-pointer hover:scale-105 transition-transform">
          <img
            src={SkyLogo}
            alt="Sky Touch Academy logo"
            className="h-10 w-10 object-contain"
          />
          <span className="text-xs font-semibold">Sky Touch Academy</span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8 text-sm">
          {["Home", "Courses", "Workshops", "About", "Contact"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="hover:text-blue-400 transition-colors duration-300 relative group"
            >
              {link}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-400 transition-all group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* CTA */}
        <button
          className="
            hidden md:block px-5 py-2 rounded-xl text-sm font-medium
            bg-gradient-to-r from-blue-500 to-blue-700
            hover:scale-105 hover:opacity-90 transition-transform duration-300
          "
        >
          Enroll Now
        </button>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <HiX className="h-6 w-6" />
            ) : (
              <HiMenu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black text-white px-4 py-4 space-y-4 flex flex-col items-start animate-slideDown">
          {["Home", "Courses", "Workshops", "About", "Contact"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="hover:text-blue-400 transition-colors duration-300 text-base w-full"
              onClick={() => setIsOpen(false)}
            >
              {link}
            </a>
          ))}
          <button
            className="
              w-full px-5 py-2 rounded-xl text-sm font-medium
              bg-gradient-to-r from-blue-500 to-blue-700
              hover:opacity-90 transition
            "
            onClick={() => setIsOpen(false)}
          >
            Enroll Now
          </button>
        </div>
      )}
    </header>
  );
}
