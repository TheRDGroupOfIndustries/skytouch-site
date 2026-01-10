export default function TransformYourCareer() {
  return (
    <div className="w-full flex justify-center px-4 sm:px-6 lg:px-8 py-10 sm:py-12 font-inter">
      <div
        className="w-full max-w-6xl rounded-xl shadow-lg
                   bg-gradient-to-r from-[#0B78FF] to-[#032B85]
                   text-white text-center
                   px-6 sm:px-10 py-12 sm:py-14"
      >
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold">
          Take the Next Step in Your Career.
        </h2>

        {/* Sub Heading */}
        <p className="mt-4 text-sm sm:text-base lg:text-lg opacity-90 max-w-3xl mx-auto">
          Expert guidance, real-world skills and measurable career growth,
          start today.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-6">
          <button
            className="px-8 py-3 rounded-2xl
                       bg-white text-blue-700
                       text-sm sm:text-base font-semibold
                       hover:bg-gray-100 transition"
          >
            Explore Programs
          </button>

          <button
            className="px-8 py-3 rounded-2xl
                       border border-blue-200
                       text-white text-sm sm:text-base font-semibold
                       hover:bg-white/10 transition"
          >
            Book a Consultation
          </button>
        </div>
      </div>
    </div>
  );
}
