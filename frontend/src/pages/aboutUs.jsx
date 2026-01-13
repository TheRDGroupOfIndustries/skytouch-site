import { motion } from "framer-motion";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import AboutHero from "../assets/hero1.jpg"; // screenshot jaisi image lagao

export default function AboutUs() {
  return (
    <>
      <Navbar />

      {/* HERO IMAGE SECTION (NEW) */}
      <section
        className="relative w-full h-[100vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${AboutHero})` }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 text-center px-4"
        >
          {/* ABOUT US with lines */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="h-[2px] w-12 bg-orange-500"></span>
            <h1 className="text-white text-4xl md:text-5xl font-bold tracking-widest">
              ABOUT US
            </h1>
            <span className="h-[2px] w-12 bg-orange-500"></span>
          </div>

          {/* Subtitle */}
          <p className="text-gray-200 text-lg md:text-xl tracking-wide uppercase">
            Building a Community of Athletic Excellence
          </p>
        </motion.div>
      </section>

      {/* MISSION & VISION (SAME AS BEFORE) */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              Our Mission
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Our mission is to bridge the gap between education and employment
              by delivering hands-on, practical training guided by industry
              experts.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              Our Vision
            </h2>
            <p className="text-gray-600 leading-relaxed">
              To become India’s most trusted digital learning platform that
              empowers students, professionals, and entrepreneurs globally.
            </p>
          </motion.div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12 text-gray-800">
            Why Choose Sky Touch Academy?
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              "Industry Expert Trainers",
              "100% Practical Learning",
              "Career & Placement Support",
              "Live Projects & Workshops",
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl shadow-md p-6"
              >
                <div className="text-blue-700 text-xl font-semibold mb-2">
                  {item}
                </div>
                <p className="text-gray-600 text-sm">
                  Learn with real-world exposure and job-ready skills.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: "95%", label: "Job Placement Rate" },
            { value: "₹75K", label: "Avg Salary Increase" },
            { value: "500+", label: "Hiring Partners" },
            { value: "50K+", label: "Successful Students" },
          ].map((stat, i) => (
            <div key={i} className="border rounded-xl py-6 shadow-sm">
              <h3 className="text-2xl font-bold text-blue-700">
                {stat.value}
              </h3>
              <p className="text-gray-600 text-sm mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-700 to-blue-900 text-white text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-4"
        >
          Start Your Career Transformation Today
        </motion.h2>
        <p className="text-blue-100 mb-8">
          Join thousands of students who changed their future with us.
        </p>
        <button className="bg-white text-blue-700 font-semibold px-8 py-3 rounded-xl hover:bg-blue-100 transition">
          Enroll Now
        </button>
      </section>

      <Footer />
    </>
  );
}