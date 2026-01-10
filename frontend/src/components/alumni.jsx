import { motion } from "framer-motion";
import PersonX from "../assets/personX.jpeg";
import PersonY from "../assets/personY.jpeg";
import PersonZ from "../assets/personZ.jpeg";

const alumniData = [
  { name: "Person X", company: "Google", role: "Software Engineer", image: PersonX },
  { name: "Person Y", company: "Amazon", role: "Frontend Developer", image: PersonY },
  { name: "Person Z", company: "Microsoft", role: "Backend Engineer", image: PersonZ },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

export default function Alumni() {
  return (
    <section className="relative w-full px-6 py-20 font-inter overflow-hidden">

      {/* BACKGROUND STRIP */}
      <div
        className="
          absolute left-0 right-0
          top-[52%]
          h-24 sm:h-28 md:h-32
          bg-gradient-to-r from-[#0A77FF] to-[#012A7C]
          z-0
        "
      />

      {/* Heading (UPDATED) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto relative z-10"
      >
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3">
          Our Alumni Leading the{" "}
          <span className="text-blue-600">Digital World</span>
        </h2>

        <p className="text-sm sm:text-base text-gray-600">
          Join thousands of successful professionals who have transformed their careers
          with our expert-led programs and are now working at top companies worldwide.
        </p>
      </motion.div>

      {/* Cards */}
      <div className="relative z-10 mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {alumniData.map((alumni, idx) => (
          <motion.div
            key={alumni.name}
            custom={idx}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ y: -10 }}
            animate={{ y: [0, -6 - idx * 2, 0] }}
            transition={{ duration: 4 + idx, repeat: Infinity, ease: "easeInOut" }}
            className="
              w-[355.86px] h-[500px]
              rounded-2xl shadow-lg hover:shadow-2xl
              transition-shadow overflow-hidden
              flex flex-col bg-white
            "
          >
            {/* Image */}
            <div className="h-[260px] overflow-hidden">
              <img
                src={alumni.image}
                alt={alumni.name}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Blue Content */}
            <div className="flex flex-col items-center text-center px-6 py-8 bg-gradient-to-r from-[#0A77FF] to-[#012A7C] text-white flex-1">
              <p className="text-base font-semibold tracking-wide">
                {alumni.name}
              </p>

              <p className="mt-1 text-sm opacity-85">
                {alumni.role} @ {alumni.company}
              </p>

              <div className="w-10 h-[1px] bg-white/40 my-5" />

              <p className="text-[13px] leading-relaxed opacity-90 max-w-[260px]">
                “SkyTouch Academy transformed my career. The practical approach
                helped me land my dream job.”
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
