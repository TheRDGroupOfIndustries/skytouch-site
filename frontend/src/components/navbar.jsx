import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import SkyLogo from "../assets/skylogo.png";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const links = ["Home", "Courses", "Workshops", "About", "Contact Us"];

  const linkToId = {
    Home: "home",
    Courses: "courses",
    Workshops: "workshops",
    About: "footer",
  };

  const scrollToSection = (id) => {
    const scroll = () => {
      const section = document.getElementById(id);
      if (!section) return;

      const yOffset = -96;
      const y =
        section.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    };

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(scroll, 120);
    } else {
      scroll();
    }
  };

  const handleNavClick = (link) => {
    if (link === "Contact Us") {
      navigate("/contactus");
      window.scrollTo(0, 0);
      return;
    }

    if (link === "Home") {
      navigate("/");
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    scrollToSection(linkToId[link]);
  };

  return (
    <header className="w-full fixed top-0 z-50 bg-black text-white">
      <div className="w-full px-8 py-1 flex items-center justify-between">

        {/* Logo */}
        <div
          className="flex flex-col items-center cursor-pointer -mt-2"
          onClick={() => {
            navigate("/");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <img
            src={SkyLogo}
            alt="Sky Touch Academy"
            className="h-20 w-15 mb-2 translate-y-1"
          />
          <span className="text-lg font-medium leading-none -mt-1">
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

        {/* Enroll Button */}
        <div className="hidden md:block">
          <button
            onClick={() => {
              navigate("/enroll");
              window.scrollTo(0, 0);
            }}
            className="px-10 py-3 rounded-xl bg-blue-600 text-sm font-semibold"
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
        <div className="md:hidden bg-black px-8 py-6 flex flex-col gap-5">
          {links.map((link) => (
            <button
              key={link}
              className="text-left text-base hover:text-blue-400"
              onClick={() => {
                handleNavClick(link);
                setIsOpen(false);
              }}
            >
              {link}
            </button>
          ))}

          <button
            className="px-10 py-3 rounded-lg bg-blue-600 text-sm font-semibold"
            onClick={() => {
              navigate("/enroll");
              setIsOpen(false);
            }}
          >
            Enroll Now
          </button>
        </div>
      )}
    </header>
  );
}
