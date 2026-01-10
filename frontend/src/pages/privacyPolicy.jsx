import { motion } from "framer-motion";


export default function PrivacyPolicy() {
  return (
    <>
     

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
            Privacy <span className="text-black">Policy</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-sm sm:text-base max-w-3xl mx-auto opacity-90"
          >
            Your privacy matters to us. This policy explains how we collect,
            use, and protect your personal information.
          </motion.p>
        </div>

        {/* CONTENT */}
        <div className="max-w-5xl mx-auto px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-lg p-10 space-y-8"
          >
            {/* SECTION 1 */}
            <div>
              <h2 className="text-xl font-semibold text-[#012A7C]">
                1. Information We Collect
              </h2>
              <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                We may collect personal information such as your name, email
                address, phone number, and other details when you register,
                enroll, or contact us through our website.
              </p>
            </div>

            {/* SECTION 2 */}
            <div>
              <h2 className="text-xl font-semibold text-[#012A7C]">
                2. How We Use Your Information
              </h2>
              <ul className="mt-3 space-y-2 text-sm text-gray-600 list-disc list-inside">
                <li>To provide and manage our services</li>
                <li>To communicate important updates</li>
                <li>To improve user experience</li>
                <li>For security and verification purposes</li>
              </ul>
            </div>

            {/* SECTION 3 */}
            <div>
              <h2 className="text-xl font-semibold text-[#012A7C]">
                3. Data Protection
              </h2>
              <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                We implement industry-standard security measures to protect
                your personal data from unauthorized access, misuse, or
                disclosure.
              </p>
            </div>

            {/* SECTION 4 */}
            <div>
              <h2 className="text-xl font-semibold text-[#012A7C]">
                4. Sharing of Information
              </h2>
              <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                We do not sell or share your personal information with third
                parties except when required by law or to provide our services
                effectively.
              </p>
            </div>

            {/* SECTION 5 */}
            <div>
              <h2 className="text-xl font-semibold text-[#012A7C]">
                5. Your Rights
              </h2>
              <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                You have the right to access, update, or request deletion of
                your personal information. You may contact us for any privacy-
                related concerns.
              </p>
            </div>

            {/* SECTION 6 */}
            <div>
              <h2 className="text-xl font-semibold text-[#012A7C]">
                6. Policy Updates
              </h2>
              <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                We may update this Privacy Policy from time to time. Any changes
                will be reflected on this page with an updated revision date.
              </p>
            </div>

            {/* FOOT NOTE */}
            <div className="pt-6 border-t text-sm text-gray-500">
              Last updated: January 2026
            </div>
          </motion.div>
        </div>
      </section>

      
    </>
  );
}