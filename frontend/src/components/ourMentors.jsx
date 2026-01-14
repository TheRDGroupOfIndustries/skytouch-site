import { motion } from "framer-motion";
import Mentor1 from "../assets/mentor1.jpg";
import Mentor2 from "../assets/mentor2.jpg";
import Mentor3 from "../assets/mentor3.jpg";

const alumniData = [
  {
    name: "Ankit Pandey",
    role: "Consulting, Mentoring & Training",
    image: Mentor1,
  },
  {
    name: "Geet Tiwari",
    role: "UGC Content Specialist",
    image: Mentor2,
  },
  {
    name: "Shujat Ali",
    role: "CV Making & Interview Preparation",
    image: Mentor3,
  },
  {
    name: "Smita Sahu",
    role: "CV Making, Interview Prep, PD & Business Communication",
    image: Mentor1,
  },
  {
    name: "Shivam Rana",
    role: "Mentorship",
    image: Mentor2,
  },
  {
    name: "CS Sushant Dhawan",
    role: "IPR, Trademarking & Company Laws",
    image: Mentor3,
  },
  {
    name: "Aroma Srivastava",
    role: "Copywriting",
    image: Mentor1,
  },
  {
    name: "Narendra Dwivedi",
    role: "Guest Sessions",
    image: Mentor2,
  },
  {
    name: "Rohit Verma",
    role: "Branding Guidelines",
    image: Mentor3,
  },
  {
    name: "Prashant Goel",
    role: "Cybersecurity & AI",
    image: Mentor1,
  },
  {
    name: "Shwetank Bhargava",
    role: "Advanced SEO & GMB",
    image: Mentor2,
  },
  {
    name: "Shubham Gupta",
    role: "Financial Planning for First Salary",
    image: Mentor3,
  },
  {
    name: "Prashant Gupta",
    role: "Offline Media Planning",
    image: Mentor1,
  },
  {
    name: "Ruvaid",
    role: "Brand & Creative Strategist",
    image: Mentor2,
  },
  {
    name: "Devesh Chaynani",
    role: "Basics of Photography & Videography",
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
      <div className="absolute left-0 right-0 top-[52%] h-24 sm:h-28 md:h-32 bg-gradient-to-r from-[#0A77FF] to-[#012A7C] z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
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
              className="w-full max-w-[360px] h-[500px] rounded-2xl bg-white shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-2 overflow-hidden"
            >
              <div className="h-[260px] bg-gray-100">
                <img
                  src={alumni.image}
                  loading="lazy"
                  alt={alumni.name}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="flex flex-col items-center text-center px-6 py-8 bg-gradient-to-r from-[#0A77FF] to-[#012A7C] text-white flex-1">
                <p className="text-base font-semibold tracking-wide">
                  {alumni.name}
                </p>

                <p className="mt-1 text-sm opacity-85">
                  {alumni.role}
                </p>

                <div className="w-10 h-[1px] bg-white/40 my-5" />

                <p className="text-[13px] leading-relaxed opacity-90 max-w-[260px]">
                  Guiding learners with practical, industry-focused knowledge.
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
