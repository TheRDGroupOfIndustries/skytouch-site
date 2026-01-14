import { motion } from "framer-motion";
import EducatorImg from "../assets/mentor2.jpg";

const educatorsData = [
  { name: "Ankit Pandey", role: "Consulting, Mentoring, Training" },
  { name: "Geet Tiwari", role: "UGC Content" },
  { name: "Shujat Ali", role: "CV Making & Interview" },
  {
    name: "Smita Sahu",
    role: "CV Making, Interview, PD Session & Business Communication",
  },
  { name: "Shivam Rana", role: "Mentorship" },
  {
    name: "CS Sushant Dhawan",
    role: "IPR, Trademarking & Company Laws",
  },
  { name: "Aroma Srivastava", role: "Copywriting" },
  { name: "Narendra Dwivedi", role: "Guest Session" },
  { name: "Rohit Verma", role: "Branding Guidelines" },
  { name: "Prashant Goel", role: "Cybersecurity & AI" },
  { name: "Shwetank Bhargava", role: "Advanced SEO & GMB" },
  {
    name: "Shubham Gupta",
    role: "Financial Planning for First Salary",
  },
  { name: "Prashant Gupta", role: "Offline Media Planning" },
  { name: "Ruvaid", role: "Brand & Creative Strategist" },
  {
    name: "Devesh Chaynani",
    role: "Basics of Photography & Videography",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

export default function Educators() {
  return (
    <section className="relative w-full px-4 sm:px-6 lg:px-8 py-20 overflow-hidden">
      {/* Background strip */}
      <div className="absolute left-0 right-0 top-[52%] h-24 sm:h-28 md:h-32 bg-gradient-to-r from-[#0A77FF] to-[#012A7C] z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3"
          >
            Our <span className="text-blue-600">Educators</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.45 }}
            className="text-sm sm:text-base text-gray-600"
          >
            Specialists from different domains who help learners grow with
            practical, real-world guidance.
          </motion.p>
        </div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 place-items-center"
        >
          {educatorsData.map((edu) => (
            <motion.div
              key={edu.name}
              variants={cardVariants}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              className="
                group w-full max-w-[320px] h-[440px]
                rounded-2xl bg-white
                shadow-md hover:shadow-xl
                overflow-hidden will-change-transform
              "
            >
              {/* Image */}
              <div className="h-[220px] overflow-hidden bg-gray-100">
                <motion.img
                  src={EducatorImg}
                  alt={edu.name}
                  loading="lazy"
                  className="h-full w-full object-cover"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                />
              </div>

              {/* Content */}
              <motion.div
                className="flex flex-col items-center text-center px-6 py-6 bg-gradient-to-r from-[#0A77FF] to-[#012A7C] text-white flex-1"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <p className="text-base font-semibold">{edu.name}</p>

                <p className="mt-2 text-sm opacity-90 leading-snug">
                  {edu.role}
                </p>

                <div className="w-10 h-[1px] bg-white/40 my-4" />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
