import React from "react";
import CatImage from "../images/cat.02 PM.jpeg";
import AnimalIntro from "./Secound1.jsx";
import FirstClientReview from "./Secound2.jsx";

function AnimalHospital() {
  return (
    <section
      style={{
        width: "100%",
        height: "100vh",
        padding: "40px 50px",
        boxSizing: "border-box",
        fontFamily: '"Playfair Display", serif',
        backgroundColor: "#ffffff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      
      <AnimalIntro />

     
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "50px",
          flex: "1",
          flexDirection: "row", 
        }}
      >
        <div style={{ flex: "1" }}>
          <img
            src={CatImage}
            alt="Cat"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "6px",
            }}
          />
        </div>

        <FirstClientReview />
      </div>

      
      <style>
        {`
          /* للتابلت */
          @media (max-width: 768px) {
            section > div {
              flex-direction: column !important;
              gap: 20px !important;
            }
            section img {
              height: auto !important;
            }
          }

          
          @media (max-width: 480px) {
            section > div {
              gap: 10px !important;
            }
            section img {
              width: 100% !important;
              height: auto !important;
            }
          }
        `}
      </style>
    </section>
  );
}

export default AnimalHospital;
