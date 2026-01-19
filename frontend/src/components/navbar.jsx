import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SkyLogo from "../assets/skylogo.png";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const links = ["Home", "Courses", "Workshops", "About", "Contact Us"];

  const scrollLinks = {
    Home: "top",
    Courses: "courses",
    Workshops: "workshops",
  };

  const handleNavClick = (link) => {
    setIsOpen(false);

    if (link === "About") {
      navigate("/about-us");
      return;
    }

    if (link === "Contact Us") {
      navigate("/contactus");
      return;
    }

    navigate("/", {
      state: { scrollTo: scrollLinks[link] },
    });
  };

  return (
    <header className="w-full fixed top-0 z-50 bg-black text-white">
      <div className="w-full px-4 py-0.5 flex items-center justify-between">
        
        {/* Logo */}
        <div
          className="flex flex-col items-center cursor-pointer mt-2"
          onClick={() => navigate("/", { state: { scrollTo: "top" } })}
        >
          <img
            src={SkyLogo}
            alt="Sky Touch Academy"
            className="h-12 w-20 mb-1 translate-y-0.5" // compact logo for mobile
          />
          <span className="text-sm font-medium leading-none -mt-0.5">
            Sky Touch Academy
          </span>
        </div>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-16 text-lg font-medium">
          {links.map((link) => (
            <button
              key={link}
              onClick={() => handleNavClick(link)}
              className="hover:text-blue-400 transition-colors"
            >
              {link}
            </button>
          ))}
        </nav>

        {/* Desktop Enroll */}
        <div className="hidden md:block">
          <button
            onClick={() => navigate("/enroll")}
            className="px-10 py-2 rounded-xl bg-blue-600 text-sm font-semibold"
          >
            Enroll Now
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black px-4 py-3 flex flex-col gap-3 transition-all duration-300">
          {links.map((link) => (
            <button
              key={link}
              onClick={() => handleNavClick(link)}
              className="text-left text-sm hover:text-blue-400"
            >
              {link}
            </button>
          ))}

          <button
            onClick={() => navigate("/enroll")}
            className="w-full px-6 py-1.5 rounded-lg bg-blue-600 text-sm font-semibold"
          >
            Enroll Now
          </button>
        </div>
      )}
    </header>
  );
}
