import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { LazyMotion, domAnimation, m } from "framer-motion";

import Navbar from "../components/navbar";
import Hero from "../components/heroSection";
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
import Career from "../components/nextStep";
import Galley from "../components/ourGallery";
import VideoTestimonials from "../components/videoTestimonials";
import Footer from "../components/footer";
import Mentors from "../components/ourMentors";
import Educators from "../components/educators";

import AnimatedSection from "../utils/AnimatedSection";

export default function LandingPage() {
  const location = useLocation();

  useEffect(() => {
    const id = location.state?.scrollTo;
    if (!id) return;

    if (id === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const section = document.getElementById(id);
    if (!section) return;

    section.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [location]);

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="overflow-x-hidden scroll-smooth"
      >
        <Navbar />

        <Hero />

        <Mentors />

        <Educators/>

        <AnimatedSection id="alumni" className="scroll-mt-24">
          <Alumni />
        </AnimatedSection>

        <Fourth />

        <AnimatedSection id="workshops" className="scroll-mt-24">
          <Workshops />
        </AnimatedSection>

        <SkyTouch />
        <Career />

        <AnimatedSection id="gallery" className="scroll-mt-24">
          <Galley />
        </AnimatedSection>

        <section id="courses" className="scroll-mt-24">
          <PremiumCourses />
        </section>

        <LeadingCompanies />
        <PlacementRate />
        <BrandPartners />

        <AnimatedSection id="video-testimonials" className="scroll-mt-24">
          <VideoTestimonials />
        </AnimatedSection>

        <AnimatedSection id="hiring-partners" className="scroll-mt-24">
          <HiringPartner />
        </AnimatedSection>

        <AdvancedTraining />

        <AnimatedSection id="contact" className="scroll-mt-24">
          <Footer />
        </AnimatedSection>
      </m.div>
    </LazyMotion>
  );
}
