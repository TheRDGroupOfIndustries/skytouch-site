import PersonX from "../assets/personX.jpeg";
import PersonY from "../assets/personY.jpeg";
import PersonZ from "../assets/personZ.jpeg";

const alumniData = [
  { name: "Person X", company: "Google", role: "Software Engineer", image: PersonX },
  { name: "Person Y", company: "Amazon", role: "Frontend Developer", image: PersonY },
  { name: "Person Z", company: "Microsoft", role: "Backend Engineer", image: PersonZ },
];

export default function Alumni() {
  return (
    <section className="relative w-full px-4 sm:px-6 lg:px-8 py-20 font-inter overflow-hidden">

      <div className="absolute left-0 right-0 top-[52%] h-24 sm:h-28 md:h-32 bg-gradient-to-r from-[#0A77FF] to-[#012A7C]" />

      <div className="max-w-7xl mx-auto relative z-10 css-fade-up">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3">
            From Learners to {" "}
            <span className="text-blue-600">Industry Leaders</span>
          </h2>

          <p className="text-sm sm:text-base text-gray-600">
            Thousands of professionals have accelerated their careers with our expert training and now work across top global organizations.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 place-items-center">
          {alumniData.map((alumni) => (
            <div
              key={alumni.name}
              className="w-full max-w-[360px] h-[500px] rounded-2xl bg-white shadow-md hover:shadow-xl overflow-hidden transition-transform hover:-translate-y-2"
            >
              <div className="h-[260px] overflow-hidden">
                <img
                  src={alumni.image}
                  alt={alumni.name}
                  width="360"
                  height="260"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="flex flex-col items-center text-center px-6 py-8 bg-gradient-to-r from-[#0A77FF] to-[#012A7C] text-white flex-1">
                <p className="text-base font-semibold">{alumni.name}</p>
                <p className="mt-1 text-sm opacity-85">
                  {alumni.role} @ {alumni.company}
                </p>

                <div className="w-10 h-[1px] bg-white/40 my-5" />

                <p className="text-[13px] leading-relaxed opacity-90 max-w-[260px]">
                  “SkyTouch Academy transformed my career.”
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
