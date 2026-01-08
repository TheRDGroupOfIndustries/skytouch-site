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
import Uber from "../assets/uber.png";
import Salesforce from "../assets/salesforce.png";
import Shopify from "../assets/shopify2.png";

export default function LearnersAtCompanies() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });

  const companies = [
    { name: "Google", logo: Google },
    { name: "Microsoft", logo: Microsoft },
    { name: "Amazon", logo: Amazon },
    { name: "Meta", logo: Meta },
    { name: "Apple", logo: Apple },
    { name: "Netflix", logo: Netflix },
    { name: "Adobe", logo: Adobe },
    { name: "Salesforce", logo: Salesforce },
    { name: "HubSpot", logo: Hubspot },
    { name: "Shopify", logo: Shopify },
    { name: "Uber", logo: Uber },
    { name: "Airbnb", logo: Airbnb },
  ];

  return (
    <section ref={ref} className="w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-14 lg:py-16">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 leading-snug"
        >
          Our Learners at <span className="text-blue-600">Leading Companies</span>
        </motion.h2>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-gray-600 text-sm sm:text-base max-w-3xl mx-auto mb-10 sm:mb-12 leading-relaxed"
        >
          Our graduates are making their mark at the world&apos;s most innovative
          <span className="hidden sm:inline"><br /></span>companies. Join them and take your career to the next level.
        </motion.p>

        {/* Logos Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-y-8 sm:gap-y-10 gap-x-6">
          {companies.map((company) => {
            const randomDelay = Math.random() * 0.5; // fade-in jaldi ho
            const randomRotate = Math.random() * 12 - 6; // -6 to 6 degrees

            return (
              <motion.div
                key={company.name}
                initial={{ opacity: 0, y: 20, rotate: 0 }}
                animate={isInView ? {
                  opacity: 1,
                  y: [0, -4, 0, 3, 0],
                  rotate: [0, randomRotate, -randomRotate, randomRotate/2, 0],
                } : { opacity: 1, y:0, rotate: 0 }}
                transition={{
                  duration: 2 + Math.random()*1, // cycle faster
                  repeat: isInView ? Infinity : 0,
                  delay: randomDelay,
                  ease: "easeInOut"
                }}
                whileHover={{ scale: 1.12, rotate: randomRotate/2 }}
                className="flex flex-col items-center cursor-default"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center rounded-xl bg-gray-100 shadow-sm">
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="w-7 h-7 sm:w-10 sm:h-10 object-contain"
                  />
                </div>
                <p className="mt-2 text-xs sm:text-sm text-gray-700">{company.name}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
