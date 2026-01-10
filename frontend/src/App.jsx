import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landingPage";
import AllCourses from "./pages/allCourses";
import EnrollCourse from "./pages/enrollPage";
import AllWorkshops from "./pages/allWorkshops"; 
import ContactUs from "../src/pages/contactUs"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/courses" element={<AllCourses />} />
        <Route path="/enroll" element={<EnrollCourse />} />
        <Route path="/workshops" element={<AllWorkshops />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
