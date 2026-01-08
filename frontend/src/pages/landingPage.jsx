import { motion } from "framer-motion";
import { fadeUp } from "../animations";

import Navbar from "../components/navbar";
import Second from "../components/secondPart";
import Alumni from "../components/alumni";
import Workshops from "../components/upcomingWorkshops";
import Fourth from "../components/placementRateOne";
import PremiumCourses from "../components/premiumCourses";
import LeadingCompanies from "../components/learnersAtCompanies";
import HiringPartner from "../components/hiringPartners";
import AdvancedTraining from "../components/advancedTraining";
import PlacementRate from "../components/placementRateTwo";
import BrandPartners from "../components/brandPartners";
import SkyTouch from "../components/academyAdvantage";
import Testimonials from "../components/testimonials";
import Career from "../components/transformYourCareer";
import Galley from "../components/ourGallery";
import VideoTestimonials from "../components/videoTestimonials";
import Footer from "../components/footer";

function LandingPage() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />

      {/* Hero / Top Section */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Second />
      </motion.div>

      {/* Scroll based sections */}
      <AnimatedSection><Alumni /></AnimatedSection>
      <AnimatedSection><Fourth /></AnimatedSection>
      <AnimatedSection><Workshops /></AnimatedSection>
      <AnimatedSection><SkyTouch /></AnimatedSection>
      <AnimatedSection><Career /></AnimatedSection>
      <AnimatedSection><Galley /></AnimatedSection>
      <AnimatedSection><PremiumCourses /></AnimatedSection>
      <AnimatedSection><LeadingCompanies /></AnimatedSection>
      <AnimatedSection><PlacementRate /></AnimatedSection>
      <AnimatedSection><BrandPartners /></AnimatedSection>
      <AnimatedSection><VideoTestimonials /></AnimatedSection>
      <AnimatedSection><Testimonials /></AnimatedSection>
      <AnimatedSection><HiringPartner /></AnimatedSection>
      <AnimatedSection><AdvancedTraining /></AnimatedSection>

      <Footer />
    </div>
  );
}

export default LandingPage;

/* 🔥 Reusable wrapper */
function AnimatedSection({ children }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
