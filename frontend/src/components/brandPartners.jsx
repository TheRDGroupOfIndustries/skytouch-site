import { motion } from "framer-motion";

import Google from "../assets/google2.png";
import Amazon from "../assets/amazon2.png";
import Hubspot from "../assets/hubspot2.png";
import Linkedin from "../assets/linkedin.png";
import Shopify from "../assets/shopify.png";
import Facebook from "../assets/facebook.png";
import Certified from "../assets/certified.png";
import Quality from "../assets/quality.png";
import Global from "../assets/global.png";

export default function BrandPartners() {
  const partners = [
    {
      logo: Google,
      title: "Google Partners",
      text: "Certified Google Ads Training Partner",
    },
    {
      logo: Facebook,
      title: "Facebook Blueprint",
      text: "Official Facebook Marketing Partner",
    },
    {
      logo: Hubspot,
      title: "HubSpot Academy",
      text: "HubSpot Certified Training Provider",
    },
    {
      logo: Shopify,
      title: "Shopify Partners",
      text: "Shopify Plus Partner for E-commerce",
    },
    {
      logo: Linkedin,
      title: "LinkedIn Learning",
      text: "LinkedIn Marketing Solutions Partner",
    },
    {
      logo: Amazon,
      title: "Amazon Advertising",
      text: "Amazon DSP Certified Partner",
    },
  ];

  const recognition = [
    {
      icon: Certified,
      title: "Certified Curriculum",
      text: "Industry-approved course content",
    },
    {
      icon: Quality,
      title: "Quality Assurance",
      text: "Regular audits and updates",
    },
    {
      icon: Global,
      title: "Global Recognition",
      text: "Worldwide industry acceptance",
    },
  ];

  return (
    <section className="w-full px-6 py-20 bg-gray-50 font-inter">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3">
            Our <span className="text-blue-600">Brand Partners</span>
          </h2>

          <p className="text-sm sm:text-base text-gray-600">
            We collaborate with industry leaders to ensure our curriculum stays
            relevant, trusted, and aligned with real-world standards.
          </p>
        </motion.div>

        {/* Partner Cards */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {partners.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{
                y: -6,
                boxShadow: "0px 16px 30px rgba(0,0,0,0.12)",
              }}
              className="
                bg-white rounded-2xl
                border border-gray-200
                px-6 py-6
                flex flex-col items-center text-center
                transition
              "
            >
              <div className="h-11 w-11 rounded-full bg-blue-100 flex items-center justify-center mb-3">
                <img
                  src={item.logo}
                  alt={item.title}
                  className="h-5 w-5 object-contain"
                />
              </div>

              <h3 className="font-semibold text-sm sm:text-base">
                {item.title}
              </h3>

              <p className="text-xs sm:text-sm text-gray-500 mt-1">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Industry Recognition */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            mt-16 max-w-5xl mx-auto
            bg-white rounded-2xl
            border border-gray-200
            px-8 py-10
          "
        >
          <h3 className="text-center text-lg sm:text-xl font-bold">
            Industry Recognition
          </h3>

          <p className="text-center text-sm text-gray-600 mt-2 max-w-2xl mx-auto">
            Our partnerships ensure training that meets global benchmarks and
            prepares you for real-world expectations.
          </p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            {recognition.map((item, i) => (
              <div key={i}>
                <img
                  src={item.icon}
                  alt={item.title}
                  className="h-10 w-10 mx-auto"
                />
                <h4 className="font-semibold mt-3 text-sm sm:text-base">
                  {item.title}
                </h4>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
