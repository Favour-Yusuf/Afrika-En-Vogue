import React from "react";
import HeroSection from "./Component/HeroSection";
import AboutUs from "./Component/AboutUs";
import OurStyles from "./Component/Gallery";
import Testimonials from "./Component/CustomerTestimonials";
import ContactSection from "./Component/ContactUs";

const App = () => {
  return (
    <div className="App">
      <HeroSection />
      <AboutUs />
      <OurStyles />
      <Testimonials />
      <ContactSection />
    </div>
  );
};

export default App;
