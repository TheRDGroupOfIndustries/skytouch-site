import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function EnrollPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [responseMsg, setResponseMsg] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseMsg(null);

    try {
      const res = await fetch("http://localhost:5000/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setResponseMsg({ type: "success", text: data.message });
        setFormData({
          name: "",
          email: "",
          phone: "",
          course: "",
          message: "",
        });
      } else {
        setResponseMsg({ type: "error", text: data.message });
      }
    } catch (err) {
      console.error(err);
      setResponseMsg({ type: "error", text: "Server error. Please try again." });
    }

    setLoading(false);
  };

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
            Enroll <span className="text-black">Now</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-sm sm:text-base max-w-2xl mx-auto opacity-90"
          >
            Take the next step toward your growth. Reserve your seat today.
          </motion.p>
        </div>

        {/* CONTENT */}
        <div className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* LEFT INFO */}
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-lg p-10"
          >
            <h2 className="text-xl sm:text-2xl font-semibold text-[#012A7C]">
              Why Enroll With Us?
            </h2>

            <ul className="mt-6 space-y-4 text-sm text-gray-600">
              <li>✔ Industry-focused practical training</li>
              <li>✔ Real-world projects & live sessions</li>
              <li>✔ Expert mentors & career guidance</li>
              <li>✔ Certification & placement support</li>
            </ul>

            <div className="mt-8 text-sm">
              <p className="font-semibold text-gray-800">📍 Location</p>
              <p className="text-gray-600">Bangalore, India</p>
            </div>
          </motion.div>

          {/* RIGHT FORM */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white rounded-2xl shadow-lg p-10 space-y-6"
          >
            <h2 className="text-xl sm:text-2xl font-semibold text-[#012A7C]">
              Enrollment Form
            </h2>

            {responseMsg && (
              <p
                className={`p-3 rounded text-sm ${
                  responseMsg.type === "success"
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800"
                }`}
              >
                {responseMsg.text}
              </p>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                value={formData.name}
                onChange={handleChange}
                className="border rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                value={formData.email}
                onChange={handleChange}
                className="border rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              required
              value={formData.phone}
              onChange={handleChange}
              className="border rounded-lg px-4 py-3 text-sm w-full focus:ring-2 focus:ring-blue-500"
            />

            <select
              name="course"
              required
              value={formData.course}
              onChange={handleChange}
              className="border rounded-lg px-4 py-3 text-sm w-full focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Course</option>
              <option>Advanced Google Ads Mastery</option>
              <option>Meta Ads Scaling Workshop</option>
              <option>SEO Growth Bootcamp</option>
              <option>YouTube Ads Masterclass</option>
              <option>Email Marketing Automation</option>
            </select>

            <textarea
              name="message"
              rows="4"
              placeholder="Any specific goals or questions?"
              value={formData.message}
              onChange={handleChange}
              className="border rounded-lg px-4 py-3 text-sm w-full resize-none focus:ring-2 focus:ring-blue-500"
            />

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 rounded-lg
                         bg-gradient-to-r from-[#0A77FF] to-[#012A7C]
                         text-white font-semibold text-sm
                         hover:opacity-90 transition ${
                           loading ? "opacity-50 cursor-not-allowed" : ""
                         }`}
            >
              {loading ? "Submitting..." : "Confirm Enrollment"}
            </button>
          </motion.form>
        </div>
      </section>

      <Footer />
    </>
  );
}
