import React from "react";
import tree from '../images/tree.jpeg'; 

function VisitUs() {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "30px 20px",
        fontFamily: "'Allura', cursive",
        maxWidth: "800px",
        margin: "0 auto",
      }}
    >
     
      <img
        src={tree}
        alt="Tree Logo"
        style={{
          width: "60px",
          marginBottom: "10px",
        }}
      />

      
      <h1
        style={{
          fontSize: "30px",
          margin: "0 0 10px 0",
          color: "#333",
        }}
      >
        Visit us.
      </h1>

    
      <h2
        style={{
          fontSize: "40px",
          margin: "0 0 5px 0",
          color: "#961D27",
        }}
      >
        IN
      </h2>

      
      <h3
        style={{
          fontSize: "20px",
          margin: "0",
          color: "#333",
        }}
      >
        Royal Care Vet Hospital
      </h3>

     
      <style>
        {`
          @media (max-width: 768px) {
            h1 { font-size: 40px !important; }
            h2 { font-size: 30px !important; }
            h3 { font-size: 20px !important; }
            img { width: 50px !important; }
            div { padding: 50px 10px !important; }
          }

          @media (max-width: 480px) {
            h1 { font-size: 30px !important; }
            h2 { font-size: 20px !important; }
            h3 { font-size: 16px !important; }
            img { width: 40px !important; }
            div { padding: 30px 10px !important; }
          }
        `}
      </style>
    </div>
  );
}

export default VisitUs;

