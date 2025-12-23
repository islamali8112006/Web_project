
import React, { useEffect, useState } from "react";
import HeroSection from "../components/HeroSection";
import IntroSection from "../components/IntroSection";
import ServicesGrid from "../components/ServicesGrid";


const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://mocki.io/v1/6fe5c05f-e82f-4bc5-b142-8936ad8edd92")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.error("Error fetching services:", err));
  }, []);

  return (
    <>
  
      <HeroSection />
      <IntroSection />
      <ServicesGrid services={services} />
    </>
  );
};

export default Services;

