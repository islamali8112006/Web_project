import React from "react";
import TraditionalServices from "./TraditionalServices";
import IntegrativeServices from "./IntegrativeServices";
import dog4 from "../tabark/images/dog4.jpeg";

function ContentSection() {
  return (
    <div style={{ display: "flex" }}>
    
      <img
        src={dog4}
        alt="dog"
        style={{
          width: "210px",
          height: "210px",
          borderRadius: "105px",
          objectFit: "cover",
          marginRight: "30px"
        }}
      />

      
      <div style={{ width: "760px" }}>
        <h2 style={{ marginBottom: "8px" }}>
          An Integrative Approach to Veterinary Medicine
        </h2>

        <p
          style={{
            color: "#666",
            lineHeight: "22px",
            marginBottom: "15px"
          }}
        >
          Preventive medicine is a huge part of our practice philosophy.
          Keep your pet healthy for less with our wellness packages.
        </p>

        
        <div style={{ display: "flex" }}>
          <div style={{ marginRight: "55px" }}>
            <TraditionalServices />
          </div>

          <IntegrativeServices />
        </div>
      </div>
    </div>
  );
}

export default ContentSection;
