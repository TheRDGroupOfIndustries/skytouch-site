import { motion } from "framer-motion";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function CareerServices() {
  return (
    <>
      <Navbar />

      <section className="w-full font-inter bg-[#F6F9FF] overflow-hidden pt-24">
        {/* HERO */}
        <div className="bg-gradient-to-r from-[#0A77FF] to-[#012A7C] py-24 px-6 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl lg:text-[48px] font-bold"
          >
            Career <span className="text-black">Services</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-sm sm:text-base max-w-3xl mx-auto opacity-90"
          >
            Empowering students with career guidance, industry exposure,
            and job-ready skills.
          </motion.p>
        </div>

        {/* CONTENT */}
        <div className="max-w-6xl mx-auto px-6 py-20">
          {/* TOP INFO */}
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-lg p-10 text-center"
          >
            <h2 className="text-2xl font-semibold text-[#012A7C]">
              Your Career, Our Commitment
            </h2>
            <p className="mt-4 text-sm text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our Career Services are designed to help students transition
              smoothly from learning to employment. We support you at every
              step of your professional journey.
            </p>
          </motion.div>

          {/* SERVICES GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
            {[
              {
                title: "Job Assistance",
                desc: "Access to job opportunities, referrals, and hiring partner networks.",
              },
              {
                title: "Resume Building",
                desc: "Professional resume reviews and industry-focused templates.",
              },
              {
                title: "Interview Preparation",
                desc: "Mock interviews, HR rounds, and technical interview guidance.",
              },
              {
                title: "Internship Programs",
                desc: "Hands-on internships with real-world project exposure.",
              },
              {
                title: "Career Counseling",
                desc: "One-on-one sessions with industry experts and mentors.",
              },
              {
                title: "Skill Development",
                desc: "Workshops to enhance communication, leadership, and technical skills.",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white rounded-2xl shadow-lg p-8"
              >
                <h3 className="text-lg font-semibold text-[#012A7C]">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* BOTTOM NOTE */}
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-20 bg-white rounded-2xl shadow-lg p-10 text-center"
          >
            <h3 className="text-xl font-semibold text-[#012A7C]">
              Ready to Shape Your Future?
            </h3>
            <p className="mt-3 text-sm text-gray-600 max-w-2xl mx-auto">
              Our career experts are here to guide you toward opportunities
              that match your goals and skills.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}


