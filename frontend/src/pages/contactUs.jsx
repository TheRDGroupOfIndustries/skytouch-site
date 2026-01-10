import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ContactUs() {
  return (
    <>
      {/* NAVBAR */}
      <Navbar />

      <section className="w-full font-inter bg-[#F6F9FF] overflow-hidden pt-24">

        {/* HERO SECTION */}
        <div className="bg-gradient-to-r from-[#0A77FF] to-[#012A7C] py-20 px-6 text-center text-white">
          <h1 className="text-3xl sm:text-4xl lg:text-[48px] font-semibold leading-tight">
            Contact <span className="text-blue-200">Us</span>
          </h1>

          <p className="mt-4 text-sm sm:text-base max-w-2xl mx-auto opacity-90">
            Have questions about our programs or need guidance?
            Our team is here to help you every step of the way.
          </p>
        </div>

        {/* CONTACT CONTENT */}
        <div className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* LEFT INFO */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg p-10"
          >
            <h2 className="text-xl sm:text-2xl font-semibold text-[#012A7C]">
              Get in Touch
            </h2>

            <p className="mt-4 text-sm text-gray-600 leading-relaxed">
              Whether you’re looking to start a new career, upskill,
              or simply explore your options — we’d love to hear from you.
            </p>

            <div className="mt-8 space-y-5 text-sm">
              <div>
                <p className="font-semibold text-gray-800">📍 Address</p>
                <p className="text-gray-600">
                  SkyTouch Academy, Tech Park, Bangalore, India
                </p>
              </div>

              <div>
                <p className="font-semibold text-gray-800">📞 Phone</p>
                <p className="text-gray-600">+91 98765 43210</p>
              </div>

              <div>
                <p className="font-semibold text-gray-800">✉️ Email</p>
                <p className="text-gray-600">support@skytouchacademy.com</p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT FORM */}
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg p-10 space-y-6"
          >
            <h2 className="text-xl sm:text-2xl font-semibold text-[#012A7C]">
              Send a Message
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <input
                type="text"
                placeholder="Your Name"
                className="border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <input
              type="text"
              placeholder="Subject"
              className="border rounded-lg px-4 py-3 text-sm w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="border rounded-lg px-4 py-3 text-sm w-full resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
              type="submit"
              className="
                w-full py-3 rounded-lg
                bg-gradient-to-r from-[#0A77FF] to-[#012A7C]
                text-white font-semibold text-sm
                hover:opacity-90 transition
              "
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </>
  );
}
