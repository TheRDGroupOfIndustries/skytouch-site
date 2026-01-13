import { useRef, useState, useEffect } from "react";
import SkyLogo from "../assets/skylogo.png";
import Slide1 from "../assets/hero1.jpg";
import Slide2 from "../assets/hero2.jpg";
import Slide3 from "../assets/hero3.jpg";

export default function HeroSection() {
  const sliderRef = useRef(null);
  const [active, setActive] = useState(0);

  const slides = [Slide1, Slide2, Slide3];

  const handleScroll = () => {
    if (!sliderRef.current) return;
    const width = window.innerWidth;
    const index = Math.round(
      sliderRef.current.scrollLeft / width
    );
    setActive(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!sliderRef.current) return;

      const width = window.innerWidth;
      const nextIndex = (active + 1) % slides.length;

      sliderRef.current.scrollTo({
        left: nextIndex * width,
        behavior: "smooth",
      });

      setActive(nextIndex);
    }, 4000);

    return () => clearInterval(interval);
  }, [active, slides.length]);

  return (
    <section className="w-full h-screen relative overflow-hidden overflow-y-hidden font-inter">
      {/* SLIDER */}
      <div
        ref={sliderRef}
        onScroll={handleScroll}
        className="flex w-full h-full overflow-x-scroll snap-x snap-mandatory scroll-smooth"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {slides.map((bg, index) => (
          <div
            key={index}
            className="min-w-full h-full bg-cover bg-center snap-center relative"
            style={{ backgroundImage: `url(${bg})` }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30" />

            {/* Content */}
            <div className="relative w-full max-w-7xl mx-auto h-full px-4 sm:px-6">
              
              {/* LOGO CARD */}
              <div className="absolute top-32 md:top-44 right-0 translate-x-8 md:translate-x-12 bg-gradient-to-r from-[#0A77FF] to-[#012A7C] text-white shadow-2xl px-6 sm:px-7 py-5 sm:py-6">
                <div className="flex items-center gap-3 mr-10">
                  <img
                    src={SkyLogo}
                    className="h-16"
                    alt="Sky Touch Academy"
                  />
                  <div>
                    <p className="text-2xl sm:text-3xl font-medium">
                      Sky Touch
                    </p>
                    <p className="text-2xl sm:text-3xl font-medium">
                      Academy
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA BUTTONS */}
              <div className="absolute bottom-28 right-20 flex gap-6">
                <button className="px-10 py-4 rounded-xl border-2 border-blue-500 text-blue-600 text-lg font-semibold bg-white">
                  Free Demo Class
                </button>

                <button className="px-10 py-4 rounded-xl text-lg font-semibold text-white bg-gradient-to-r from-[#0A77FF] to-[#012A7C]">
                  Start Learning Today
                </button>
              </div>

            </div>
          </div>
        ))}
      </div>

      {/* DOT INDICATORS */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, i) => (
          <span
            key={i}
            className={`h-3 w-3 rounded-full transition-all duration-300 ${
              active === i
                ? "bg-blue-600 scale-125"
                : "bg-blue-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
