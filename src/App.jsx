import {HashRouter, Routes, Route } from "react-router-dom";
import './App.css';

import ContainerComponent from "./tabark/container.jsx";
import About from "./roaa/Contents/About.jsx";
import Services from "./islam/containers/Services.jsx";
import OnlineShop from "./islam/containers/OnlineShop.jsx";
import AdoptionPage from "./sara/container/AdoptionCenter.jsx";
import RescueStories from "./Hala/components/h_r_m/RescueStories";
import ContactUs from "./Hala/components/Contact/ContactUs";
import Layout from "./Layout.jsx";
import AppointmentPage from "./Soma/components/RequestAnAppointment.jsx";

function App() {
  return (
      
      <Routes>
    
        <Route element={<Layout/>}>
          <Route path="/" element={<ContainerComponent />} />
            <Route path="/home" element={<ContainerComponent />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/RescueStories" element={<RescueStories />} />
          <Route path="/RequestAnAppointment" element={<AppointmentPage />} />
          <Route path="/About" element={<About />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/AdoptionCenter" element={<AdoptionPage />} />
          <Route path="/OnlineShop" element={<OnlineShop />} />
        </Route>

        {/* صفحة 404 بدون هيدر وفوتر */}
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
   
    
  );
}

export default App;

