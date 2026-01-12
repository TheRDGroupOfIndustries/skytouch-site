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
    const scrollX = sliderRef.current.scrollLeft;
    const width = window.innerWidth;
    const index = Math.round(scrollX / width);
    setActive(index);
  };

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.scrollbarWidth = "none"; // Firefox
      sliderRef.current.style.msOverflowStyle = "none"; // IE 10+
    }
  }, []);

  return (
    <section className="w-full h-screen relative overflow-hidden font-inter">
      {/* HORIZONTAL SCROLLER */}
      <div
        ref={sliderRef}
        onScroll={handleScroll}
        className="flex w-full h-full overflow-x-scroll scroll-smooth snap-x snap-mandatory"
        style={{
          scrollbarWidth: "none", // Firefox
          msOverflowStyle: "none", // IE 10+
        }}
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
              {/* Logo Card */}
              <div className="absolute top-32 md:top-44 right-[-6rem] md:right-[-8rem] bg-gradient-to-r from-[#0A77FF] to-[#012A7C] text-white shadow-2xl px-7 sm:px-9 py-5 sm:py-6">
                <div className="flex items-center gap-3 sm:gap-4 mr-28">
                  <img
                    src={SkyLogo}
                    className="h-16 w-30 sm:h-20 sm:w-30"
                    alt="Sky Touch Academy"
                  />
                  <div className="flex flex-col">
                    <p className="text-2xl sm:text-3xl font-inter font-medium">Sky Touch</p>
                    <p className="text-2xl sm:text-3xl font-inter font-medium">Academy</p>
                  </div>
                </div>
              </div>

              {/* CTA */}
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
              active === i ? "bg-blue-600 scale-125" : "bg-blue-300"
            }`}
          />
        ))}
      </div>

      {/* Hide scrollbar for Webkit */}
      <style jsx>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
