export default function TransformYourCareer() {
  return (
    <section className="w-full flex justify-center px-6 py-14 font-inter">
      <div className="max-w-5xl w-full bg-gradient-to-r from-[#0B78FF] to-[#032B85] 
                      text-white rounded-2xl shadow-lg px-10 py-12 text-center">

        <h2 className="text-2xl font-extrabold">
          Ready to Transform Your Career?
        </h2>

        <p className="mt-3 text-sm opacity-90 max-w-3xl mx-auto">
          Join thousands of successful professionals who have accelerated their growth 
          with our proven methodology and expert guidance.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-wrap justify-center gap-5">

          <button className="px-7 py-2.5 rounded-2xl bg-white text-blue-700 
                             text-sm font-semibold hover:bg-gray-100">
            Start Your Journey
          </button>

          <button className="px-7 py-2.5 rounded-2xl border border-blue-200 
                             text-white text-sm font-semibold hover:bg-white/10">
            Schedule a Call
          </button>

        </div>
      </div>
    </section>
  );
}