import React from "react";

import Hero from "../components/Hero";
import Team from "../components/Team";
import Clinic from "../components/Clinic";
// import HeaderComponent from  "../src/components/Header/header";
// import TopBar from "./components/Top-header.jsx";

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