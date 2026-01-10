import React from "react";
import { useNavigate } from "react-router-dom";
import { Facebook, Linkedin, Instagram, Twitter } from "lucide-react";
import SkyLogo from "../assets/skylogo.png";

const Footer = () => {
  const navigate = useNavigate();

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (!section) return;

    const yOffset = -96;
    const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
  };

  const handleNavClick = (link) => {
    if (link === "Contact Us") {
      navigate("/contactus");
      window.scrollTo(0, 0);
      return;
    }

    const idMap = {
      Courses: "courses",
      Workshops: "workshops",
      "Free Courses": "freecourses",
      "About Us": "about",
    };

    const targetId = idMap[link];
    if (targetId) scrollToSection(targetId);
  };

  // ✅ Updated Support Links handler
  const handleSupportClick = (link) => {
    const routeMap = {
      "Help Center": "/help-center",
      "Student Portal": "/student-portal",
      "Career Services": "/career-services",
      "Privacy Policy": "/privacy-policy",
      "Terms of Service": "/terms-of-service",
    };

    const route = routeMap[link];
    if (route) {
      navigate(route);
      window.scrollTo(0, 0);
    }
  };

  return (
    <footer
      id="footer"
      className="scroll-mt-24 bg-gradient-to-b from-slate-900 to-slate-950
                 text-slate-300 w-full font-inter"
    >
      <div className="w-full px-6 lg:px-20 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 text-center md:text-left">

          {/* Brand Section */}
          <div className="space-y-4 flex flex-col items-center md:items-start">
            <div className="flex items-center gap-2">
              <img
                src={SkyLogo}
                alt="Sky Touch Academy Logo"
                className="h-12 w-auto object-contain"
              />
              <span className="text-white font-semibold text-xl">
                Sky Touch Academy
              </span>
            </div>

            <p className="text-sm leading-relaxed text-slate-400 max-w-md">
              Empowering professionals with cutting-edge digital marketing skills.
              Join thousands of successful graduates who have transformed their
              careers with our expert-led programs.
            </p>

            <div className="flex gap-4 pt-2 justify-center md:justify-start">
              <a href="#" className="hover:text-white transition">
                <Facebook size={18} />
              </a>
              <a href="#" className="hover:text-white transition">
                <Instagram size={18} />
              </a>
              <a href="#" className="hover:text-white transition">
                <Twitter size={18} />
              </a>
              <a href="#" className="hover:text-white transition">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-5">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              {["Courses", "Workshops", "Free Courses", "About Us", "Contact Us"].map(
                (link) => (
                  <li key={link}>
                    <button
                      onClick={() => handleNavClick(link)}
                      className="hover:text-white transition"
                    >
                      {link}
                    </button>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Support Section */}
          <div>
            <h4 className="text-white font-semibold mb-5">Support</h4>
            <ul className="space-y-3 text-sm">
              {["Help Center", "Student Portal", "Career Services", "Privacy Policy", "Terms of Service"].map(
                (link) => (
                  <li key={link}>
                    <button
                      onClick={() => handleSupportClick(link)}
                      className="hover:text-white transition"
                    >
                      {link}
                    </button>
                  </li>
                )
              )}
            </ul>
          </div>

        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="px-6 lg:px-20 py-4 text-center md:text-left">
          <p className="text-xs text-slate-500">
            © 2026 Sky Touch Academy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
