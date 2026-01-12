import { motion } from "framer-motion";
import Ambi1 from "../assets/ambi1.jpeg";
import Ambi2 from "../assets/ambi2.jpeg";
import Ambi3 from "../assets/ambi3.jpeg";
import Ambi4 from "../assets/ambi4.jpeg";

const videos = [Ambi1, Ambi2, Ambi3, Ambi4];

export default function VideoTestimonials() {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-20 font-inter bg-gradient-to-r from-[#0B78FF] to-[#032B85]">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-4xl mx-auto text-white"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3">
            Hear It From <span className="text-white">Those Who Made It</span>
          </h2>
          <p className="text-sm sm:text-base opacity-90">
            Real stories from learners who turned skills into confidence and careers.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {videos.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40, rotateX: -8 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
              whileHover={{
                scale: 1.04,
                rotateY: 6,
              }}
              className="relative h-72 rounded-2xl overflow-hidden bg-black shadow-2xl cursor-pointer group perspective-[1200px]"
            >
              {/* Image */}
              <motion.img
                src={img}
                alt="Student story"
                className="absolute inset-0 w-full h-full object-cover"
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              />

              {/* Light sweep */}
              <motion.div
                initial={{ x: "-120%" }}
                whileHover={{ x: "120%" }}
                transition={{ duration: 0.9, ease: "easeInOut" }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              />

              {/* Dark tint */}
              <div className="absolute inset-0 bg-black/40" />

              {/* Center play */}
              <motion.div
                initial={{ opacity: 0.85 }}
                whileHover={{ scale: 1.15 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 flex flex-col items-center justify-center text-white"
              >
                <motion.div
                  animate={{ scale: [1, 1.08, 1] }}
                  transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
                  className="h-14 w-14 rounded-full bg-white flex items-center justify-center shadow-xl mb-2"
                >
                  <svg
                    className="h-6 w-6 text-blue-600 ml-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M6 4l10 6-10 6V4z" />
                  </svg>
                </motion.div>

                <p className="text-sm tracking-wide opacity-90">
                  Watch Story
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
