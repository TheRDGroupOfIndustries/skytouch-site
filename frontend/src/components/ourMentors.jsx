import { motion } from "framer-motion";
import Mentor1 from "../assets/mentor1.jpg";
import Mentor2 from "../assets/mentor2.jpg";
import Mentor3 from "../assets/mentor3.jpg";

const alumniData = [
  {
    name: "Mentor A",
    company: "Google",
    role: "Senior Engineer",
    image: Mentor1,
  },
  {
    name: "Mentor B",
    company: "Amazon",
    role: "UI Expert",
    image: Mentor2,
  },
  {
    name: "Mentor C",
    company: "Microsoft",
    role: "Backend Specialist",
    image: Mentor3,
  },
];

const headingVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.15, duration: 0.45 },
  },
};

/* 👇 NEW: container controls children timing */
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export default function Alumni() {
  return (
    <section className="relative w-full px-4 sm:px-6 lg:px-8 py-20 font-inter overflow-hidden">
      {/* Background strip */}
      <div className="absolute left-0 right-0 top-[52%] h-24 sm:h-28 md:h-32 bg-gradient-to-r from-[#0A77FF] to-[#012A7C] z-0 will-change-transform" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <motion.h2
            variants={headingVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3"
          >
            Our <span className="text-blue-600">Mentors</span>
          </motion.h2>

          <motion.p
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-sm sm:text-base text-gray-600"
          >
            Surpise Guest Sessions by Market Leaders Of Different Industries
          </motion.p>
        </div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 place-items-center"
        >
          {alumniData.map((alumni) => (
            <motion.div
              key={alumni.name}
              variants={cardVariants}
              className="
                w-full max-w-[360px] h-[500px]
                rounded-2xl bg-white
                shadow-md hover:shadow-lg
                transform transition-all duration-300
                hover:-translate-y-2
                overflow-hidden
              "
            >
              {/* Image (no layout shift) */}
              <div className="h-[260px] bg-gray-100">
                <img
                  src={alumni.image}
                  loading="lazy"
                  alt={alumni.name}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col items-center text-center px-6 py-8 bg-gradient-to-r from-[#0A77FF] to-[#012A7C] text-white flex-1">
                <p className="text-base font-semibold tracking-wide">
                  {alumni.name}
                </p>

                <p className="mt-1 text-sm opacity-85">
                  {alumni.role} @ {alumni.company}
                </p>

                <div className="w-10 h-[1px] bg-white/40 my-5" />

                <p className="text-[13px] leading-relaxed opacity-90 max-w-[260px]">
                  I help students build real-world skills and crack top tech
                  jobs.
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
