import { motion } from "framer-motion";
import Ambi1 from "../assets/ambi1.jpeg";
import Ambi2 from "../assets/ambi2.jpeg";
import Ambi3 from "../assets/ambi3.jpeg";
import Ambi4 from "../assets/ambi4.jpeg";

const videos = [Ambi1, Ambi2, Ambi3, Ambi4];

export default function VideoTestimonials() {
  return (
    <section
      className="
        w-full px-6 py-20 font-inter
        bg-gradient-to-r from-[#0B78FF] to-[#032B85]
      "
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto text-white"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3">
            Hear It From{" "}
            <span className="text-black">Those Who Made It</span>
          </h2>

          <p className="text-sm sm:text-base opacity-90">
            Real stories from learners who turned skills into confidence,
            careers, and real opportunities with Sky Touch Academy.
          </p>
        </motion.div>

        {/* Cards */}
        <div
          className="
            mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4
            gap-8 max-w-6xl mx-auto
          "
        >
          {videos.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ y: -8 }}
              className="
                relative h-72 rounded-2xl overflow-hidden
                bg-black shadow-xl cursor-pointer group
              "
            >
              {/* Base Image */}
              <motion.img
                src={img}
                alt="Student success story"
                className="absolute inset-0 w-full h-full object-cover"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.06 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />

              {/* Overlay */}
              <motion.div
                initial={{ clipPath: "inset(100% 0 0 0)" }}
                whileHover={{ clipPath: "inset(0% 0 0 0)" }}
                transition={{ duration: 0.45, ease: "easeInOut" }}
                className="absolute inset-0 bg-black/55 backdrop-blur-[1px]"
              />

              {/* Hover Content */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileHover={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.35, delay: 0.1 }}
                className="
                  absolute inset-0 flex flex-col
                  items-center justify-center text-white
                "
              >
                <div
                  className="
                    h-14 w-14 rounded-full bg-white
                    flex items-center justify-center
                    shadow-lg mb-3
                  "
                >
                  <svg
                    className="h-6 w-6 text-blue-600 ml-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M6 4l10 6-10 6V4z" />
                  </svg>
                </div>

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
