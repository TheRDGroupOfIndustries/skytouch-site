import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import Google from "../assets/google.png";
import Adobe from "../assets/adobe.png";
import Airbnb from "../assets/airbnb.png";
import Amazon from "../assets/amazon.png";
import Apple from "../assets/apple.png";
import Hubspot from "../assets/hubspot.png";
import Meta from "../assets/meta.png";
import Microsoft from "../assets/microsoft.png";
import Netflix from "../assets/netflix.png";
import Salesforce from "../assets/salesforce.png";
import Shopify from "../assets/shopify2.png";
import Uber from "../assets/uber.png";

export default function HiringPartners() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });

  const partners = [
    { name: "Google", openings: "150+ openings", logo: Google },
    { name: "Microsoft", openings: "120+ openings", logo: Microsoft },
    { name: "Amazon", openings: "200+ openings", logo: Amazon },
    { name: "Meta", openings: "80+ openings", logo: Meta },
    { name: "Apple", openings: "60+ openings", logo: Apple },
    { name: "Netflix", openings: "45+ openings", logo: Netflix },
    { name: "Salesforce", openings: "90+ openings", logo: Salesforce },
    { name: "Adobe", openings: "70+ openings", logo: Adobe },
    { name: "Shopify", openings: "55+ openings", logo: Shopify },
    { name: "HubSpot", openings: "40+ openings", logo: Hubspot },
    { name: "Uber", openings: "65+ openings", logo: Uber },
    { name: "Airbnb", openings: "35+ openings", logo: Airbnb },
  ];

  return (
    <section ref={ref} className="w-full bg-white px-4 sm:px-6 lg:px-20 py-16">
      
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center mb-12"
      >
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">
          Our <span className="text-blue-600">Hiring</span> Partners
        </h2>

        <p className="text-sm sm:text-base text-gray-600 mt-4 leading-relaxed">
          We've built strong relationships with leading companies who actively
          <span className="hidden md:inline"><br /></span>
          recruit our graduates. Get direct access to exclusive job
          <span className="hidden md:inline"><br /></span>
          opportunities and fast-track your career growth.
        </p>
      </motion.div>

      {/* Partners Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {partners.map((partner) => {
          const randomDelay = Math.random() * 2;
          const randomRotate = Math.random() * 15 - 7;

          return (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 25, rotate: 0 }}
              animate={isInView ? {
                opacity: 1,
                y: [0, -6, 0, 4, 0],
                rotate: [0, randomRotate, -randomRotate, randomRotate/2, 0],
              } : { opacity: 1, y:0, rotate: 0 }}
              transition={{
                duration: 4 + Math.random()*2,
                repeat: isInView ? Infinity : 0,
                delay: randomDelay,
                ease: "easeInOut"
              }}
              whileHover={{ scale: 1.15, rotate: randomRotate/2 }}
              className="flex flex-col items-center justify-center bg-gray-50 rounded-lg py-6 cursor-default"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-md mb-3">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-7 h-7 sm:w-10 sm:h-10 object-contain"
                />
              </div>

              <p className="text-sm font-medium text-gray-800">{partner.name}</p>
              <p className="text-xs text-blue-600 mt-1">{partner.openings}</p>
            </motion.div>
          );
        })}
      </div>

    </section>
  );
}
