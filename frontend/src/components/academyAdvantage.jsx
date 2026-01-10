import { motion } from "framer-motion";
import {
  HiOutlineVideoCamera,
  HiOutlineBriefcase,
  HiOutlineUserGroup,
  HiOutlineBadgeCheck,
  HiOutlineAcademicCap,
  HiOutlineClock,
} from "react-icons/hi";

export default function AcademyAdvantage() {
  const features = [
    {
      title: "Live Interactive Classes",
      desc: "Engage with instructors and peers in real-time sessions with live discussions and hands-on activities.",
      icon: HiOutlineVideoCamera,
    },
    {
      title: "Industry Case Studies",
      desc: "Learn from real-world scenarios and successful campaigns to stay ahead of market trends and competition.",
      icon: HiOutlineBriefcase,
    },
    {
      title: "Expert Mentorship",
      desc: "Get personalized guidance from industry veterans with years of practical experience.",
      icon: HiOutlineUserGroup,
    },
    {
      title: "Industry Certifications",
      desc: "Earn recognized certifications that boost your credibility and career prospects.",
      icon: HiOutlineBadgeCheck,
    },
    {
      title: "Career Placement Support",
      desc: "Access our extensive network of hiring partners and get dedicated job placement assistance.",
      icon: HiOutlineAcademicCap,
    },
    {
      title: "Lifetime Access",
      desc: "Keep learning with lifetime access to course materials, updates, and community support.",
      icon: HiOutlineClock,
    },
  ];

  /* Parent container animation */
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  /* Card animation */
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-16 bg-white font-inter">
      <div className="max-w-7xl mx-auto text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3"
        >
          Get the{" "}
          <span className="text-blue-600">Sky Touch Academy</span>{" "}
          Advantage
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-sm sm:text-base text-gray-600 max-w-3xl mx-auto mb-12"
        >
          Experience the difference with our comprehensive approach to digital
          marketing education. We don't just teach theory — we prepare you for
          real-world success.
        </motion.p>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{
                  y: -8,
                  boxShadow: "0px 20px 40px rgba(0,0,0,0.12)",
                }}
                className="border rounded-xl p-6 text-left bg-white transition"
              >
                {/* Icon Box */}
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.15 }}
                  className="w-10 h-10 rounded-md
                             bg-gradient-to-br from-blue-500 to-blue-700
                             flex items-center justify-center
                             mb-4"
                >
                  <Icon className="text-white text-xl" />
                </motion.div>

                <h3 className="font-semibold text-base sm:text-lg mb-2">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}