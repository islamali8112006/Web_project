import React from "react";


import catt from "../images/catt.jpeg";
import dog from "../images/dog.jpeg";
import cat from "../images/catt2.jpeg";
import ca from "../images/cat.02 PM.jpeg";
import catDog from "../images/dog&cat.jpeg";

import Services from "./Services";

function ThirdSection() {
  const services = [
    {
      title: "WELLNESS PACKAGES",
      text: "Preventive medicine is a huge part of our practice philosophy. Keep your pet healthy for less with our wellness packages.",
      image: catt,
    },
    {
      title: "DENTAL CARE",
      text: "Oral health is one of the most important aspects of your pet’s preventive care. We provide comprehensive dental exams, cleanings.",
      image: dog,
    },
    {
      title: "CHIROPRACTIC",
      text: "Veterinary spinal manipulation or chiropractic care is an effective therapy for joint pain, injuries, neurological conditions.",
      image: cat,
    },
    {
      title: "ACUPUNCTURE",
      text: "With a 5,000 year old history, acupuncture is widely used as a complement to Western medical treatment for a wide range of conditions.",
      image: ca,
    },
  ];

  return (
    <section
      style={{
        width: "100%",
        backgroundColor: "#ffffff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        padding: 0,
        boxSizing: "border-box",
        margin: 0,
        fontFamily: '"Playfair Display", serif' 
      }}
    >
    
      <Services services={services} />

    
      <div
        style={{
          height: "3px",
          width: "80px",
          backgroundColor: "#cfc5d8",
          margin: "0 auto",
        }}
      />

      
      <div style={{ width: "100%" }}>
        <img
          src={catDog}
          alt="Pets"
          style={{
            width: "100%",
            height: "200px",
            objectFit: "cover",
            display: "block",
            margin: 0,
            padding: 0
          }}
        />
      </div>
    </section>
  );
}

export default ThirdSection;

