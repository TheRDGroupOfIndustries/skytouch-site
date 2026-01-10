import { motion } from "framer-motion";

import G1 from "../assets/g1.jpeg";
import G2 from "../assets/g2.jpeg";
import G3 from "../assets/g3.jpeg";
import G4 from "../assets/g4.jpeg";
import G5 from "../assets/g5.jpeg";
import G6 from "../assets/g6.jpeg";
import G7 from "../assets/g7.jpeg";
import G8 from "../assets/g8.jpeg";

const images = [G1, G2, G3, G4, G5, G6, G7, G8];

export default function GallerySection() {
  return (
    <section className="w-full py-20 px-6 bg-white overflow-hidden">
      <div className="mx-auto max-w-5xl text-center">

        {/* Heading (UPDATED) */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3">
            Our <span className="text-blue-600">Gallery</span>
          </h2>

          <p className="text-sm sm:text-base text-gray-600 max-w-xl mx-auto">
            A glimpse into our learning environment, workshops, and the moments
            that shape our community.
          </p>
        </motion.div>

        {/* Images */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 place-items-center">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              animate={{
                y: [0, -4, 0],
              }}
              whileHover={{
                scale: 1.12,
                y: -8,
                boxShadow: "0px 18px 30px rgba(0,0,0,0.18)",
              }}
              className="
                h-32 w-32
                sm:h-36 sm:w-36
                md:h-44 md:w-44
                rounded-xl overflow-hidden
                bg-white cursor-pointer
              "
            >
              <img
                src={img}
                alt="Gallery"
                className="h-full w-full object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
