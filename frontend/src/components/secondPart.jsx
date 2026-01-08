import SkyLogo from "../assets/skylogo.png";
import Main from "../assets/main.jpeg";

export default function HeroSection() {
  return (
    <section
      className="w-full min-h-[80vh] font-inter flex flex-col items-center justify-center px-6
                 bg-cover bg-center relative"
      style={{ backgroundImage: `url(${Main})` }}
    >
      {/* optional overlay for readability */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content wrapper */}
      <div className="relative w-full">

        {/* Right Gradient Card */}
        <div className="w-full flex justify-end">
          <div className="bg-gradient-to-r from-[#0A77FF] to-[#012A7C] text-white rounded-xl shadow-xl px-8 py-6">
            <div className="flex items-center gap-4">
              <img
                src={SkyLogo}
                className="h-12 w-12 object-contain"
                alt="Sky Touch Academy logo"
              />
              <div>
                <p className="text-sm font-semibold leading-none">Sky Touch</p>
                <p className="text-lg font-bold leading-tight">Academy</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="mt-24 flex flex-col items-center gap-6 w-full">

          <div className="flex gap-5 justify-center md:justify-end w-full pr-10">
            <button className="px-7 py-3 rounded-2xl border border-blue-500 
                               text-blue-600 text-base font-semibold bg-white 
                               hover:bg-blue-50">
              Free Demo Class
            </button>

            <button className="px-7 py-3 rounded-2xl text-base font-semibold text-white
                               bg-gradient-to-r from-[#0A77FF] to-[#012A7C] 
                               hover:opacity-90">
              Start Learning Today
            </button>
          </div>

          <div className="mt-5 flex items-center justify-center gap-2">
            <span className="h-2 w-2 rounded-full border border-blue-600" />
            <span className="h-2 w-2 rounded-full bg-blue-600" />
            <span className="h-2 w-2 rounded-full bg-blue-300" />
          </div>
        </div>
      </div>
    </section>
  );
}
