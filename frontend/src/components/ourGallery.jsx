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
    <section className="w-full py-20 px-6 bg-white">
      <div className="mx-auto max-w-5xl text-center">

        <h2 className="text-lg font-semibold">
          Our <span className="text-blue-600 font-bold">Gallery</span>
        </h2>

        <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 place-items-center">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ scale: 1 }}
              animate={{
                scale: [1, 1.04, 1],
                y: [0, -4, 0],
              }}
              transition={{
                duration: 3 + idx * 0.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{
                scale: 1.15,
                y: -10,
                boxShadow: "0px 20px 35px rgba(0,0,0,0.2)",
              }}
              className="h-28 w-24 sm:h-32 sm:w-28 md:h-36 md:w-32 
                         rounded-xl overflow-hidden bg-white cursor-pointer"
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
