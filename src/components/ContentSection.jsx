import React from "react";
import TraditionalServices from "./TraditionalServices";
import IntegrativeServices from "./IntegrativeServices";
import dog4 from "../images/dog4.jpeg";

export default function ContentSection() {
  return (
    <div style={{ display: "flex", gap: "30px" }}>
      {/* صورة الدوج دائرية */}
      <img
        src={dog4}
        alt="dog"
        style={{ width: "210px", height: "210px", borderRadius: "105px", objectFit: "cover" }}
      />

      <div style={{ width: "760px" }}>
        <h2 style={{ marginBottom: "8px" }}>
          An Integrative Approach to Veterinary Medicine
        </h2>
        <p style={{ color: "#666", lineHeight: "22px", marginBottom: "15px" }}>
          Preventive medicine is a huge part of our practice philosophy.
          Keep your pet healthy for less with our wellness packages.
        </p>

        <div style={{ display: "flex", gap: "55px" }}>
          <TraditionalServices />
          <IntegrativeServices />
        </div>
      </div>
    </div>
  );
}
