import { motion } from "framer-motion";
import PersonX from "../assets/personX.jpeg";
import PersonY from "../assets/personY.jpeg";
import PersonZ from "../assets/personZ.jpeg";

const alumniData = [
  {
    name: "Person X",
    company: "Google",
    role: "Software Engineer",
    image: PersonX,
  },
  {
    name: "Person Y",
    company: "Amazon",
    role: "Frontend Developer",
    image: PersonY,
  },
  {
    name: "Person Z",
    company: "Microsoft",
    role: "Backend Engineer",
    image: PersonZ,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function Alumni() {
  return (
    <section className="w-full font-inter px-6 py-16">
      
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-xl font-extrabold">
          Our Alumni Leading the{" "}
          <span className="text-blue-600">Digital World</span>
        </h2>

        <p className="mt-3 text-sm text-gray-600">
          Join thousands of successful professionals who have transformed their
          careers with our expert-led programs.
        </p>
      </div>

      {/* Cards */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {alumniData.map((alumni, idx) => (
          <motion.div
            key={alumni.name}
            custom={idx}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ y: -10 }}
            animate={{
              y: [0, -6 - idx * 2, 0],
            }}
            transition={{
              duration: 4 + idx,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-shadow overflow-hidden"
          >
            {/* Image */}
            <div className="h-44 overflow-hidden">
              <img
                src={alumni.image}
                alt={alumni.name}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="bg-gradient-to-r from-[#0A77FF] to-[#012A7C] text-white px-6 py-5">
              <p className="font-semibold text-sm text-center">
                {alumni.name}
              </p>

              <div className="mt-2 flex items-center justify-center gap-2 text-xs opacity-90">
                <span>{alumni.company}</span>
                <span>—</span>
                <span>{alumni.role}</span>
              </div>

              <p className="mt-3 text-[11px] leading-relaxed opacity-90 text-center">
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
