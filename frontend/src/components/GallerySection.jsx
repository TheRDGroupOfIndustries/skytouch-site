import { motion } from "framer-motion";

export default function GallerySection() {
  const images = [1, 2, 3, 4, 5, 6, 7, 8];

  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section className="w-full font-inter py-16 px-6">
      <div className="mx-auto max-w-5xl text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-lg font-semibold"
        >
          Our <span className="text-blue-600 font-bold">Gallery</span>
        </motion.h2>

        {/* Gallery Grid */}
        <motion.div
          className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 place-items-center"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {images.map((i, idx) => (
            <motion.div
              key={i}
              variants={item}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 200 }}
              className={`h-28 w-24 sm:h-32 sm:w-28 md:h-36 md:w-32 rounded-md bg-white shadow 
                          border ${idx === 0 ? "border-blue-500" : "border-gray-300"}`}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
