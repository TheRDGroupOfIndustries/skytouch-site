import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/landingPage";
import AllCourses from "./pages/allCourses";
import EnrollCourse from "./pages/enrollPage";
import AllWorkshops from "./pages/allWorkshops"; 
import ContactUs from "./pages/contactUs";   
import AllImages from "./pages/allImages";
import PrivacyPolicy from "./pages/privacyPolicy";
import CareerServices from "./pages/careerPolicy";
import TermsOfService from "./pages/termsOfServices";
import StudentPortal from "./pages/studentPortal";
import HelpCenter from "./pages/helpCenter";
import AboutUs from "./pages/aboutUs";

import ScrollToTop from "./utils/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/courses" element={<AllCourses />} />
        <Route path="/enroll" element={<EnrollCourse />} />
        <Route path="/workshops" element={<AllWorkshops />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/allimages" element={<AllImages />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/career-services" element={<CareerServices />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/student-portal" element={<StudentPortal />} />
        <Route path="/help-center" element={<HelpCenter />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
