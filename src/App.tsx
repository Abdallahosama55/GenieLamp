import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import FeaturesAIPowerCustomization from "./pages/Features/FeaturesAIPowerCustomization";
import Layout from "./components/Layout";
import FeaturesARQRCodeIntegration from "./pages/Features/FeaturesARQRCodeIntegration";
import FeaturesSeamlessIntegration from "./pages/Features/FeaturesSeamlessIntegration";
import AdvancedAnalyticsInsights from "./pages/Features/AdvancedAnalyticsInsights";
import RealTimeAIInteraction from "./pages/Features/RealTimeAIInteraction";
import OurPartners1 from "./pages/OurPartners/OurPartners1";
import OurPartners2 from "./pages/OurPartners/OurPartners2";
import OurPartners3 from "./pages/OurPartners/OurPartners3";
import OurPartners4 from "./pages/OurPartners/OurPartners4";
import OurPartners5 from "./pages/OurPartners/OurPartners5";
import ContactUs from "./pages/ContactUs/ContactUs";
import UseCases from "./pages/UseCases";

function App() {
  
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contactus" element={<ContactUs />} />
          <Route path="/useCase" element={<UseCases />} />
          <Route path="/about" element={<About />} />
          <Route path="/Feature" element={<FeaturesAIPowerCustomization />} />
          <Route path="/Feature1" element={<FeaturesARQRCodeIntegration />} />
          <Route path="/Feature2" element={<FeaturesSeamlessIntegration />} />
          <Route path="/Feature3" element={<RealTimeAIInteraction />} />
          <Route path="/Feature4" element={<AdvancedAnalyticsInsights />} />
          <Route path="/VBooking" element={<OurPartners1 />} />
          <Route path="/Vindoai" element={<OurPartners2 />} />
          <Route path="/E-commerce" element={<OurPartners3 />} />
          <Route path="/PiPhiWorld" element={<OurPartners4 />} />
          <Route path="/VVerse" element={<OurPartners5 />} />

          <Route path="*" element={<Home />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
