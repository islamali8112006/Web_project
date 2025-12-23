import React from "react";

import Hero from "../components/Hero";
import Team from "../components/Team";
import Clinic from "../components/Clinic";


import "../RoyalCareVetHospital.css";


function App() {
  return (
    <div className="App">
      <Hero />
      <Team />
      <Clinic />
    </div>
  );
}

export default App