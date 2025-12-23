import React from "react";

function AnimalIntro() {
  return (
    <div
      style={{
        width: "100%",
        padding: "15px 20px",
        borderRadius: "6px",
        textAlign: "center",
        
      }}
    >
      <h4
        style={{
          fontSize: "42px",
          margin: "0",
          letterSpacing: "2px",
        
          textTransform: "uppercase",
          textShadow: "2px 2px 6px rgba(0,0,0,0.3)"
        }}
      >
        Royal Care Vet Hospital
      </h4>

      <h5
        style={{
          fontSize: "26px",
          fontWeight: "300",
          margin: "8px 0 12px",
          letterSpacing: "1.5px",
         
        }}
      >
        A Fear Free Experience for Pets
      </h5>

      <p
        style={{
          fontSize: "16px",
          lineHeight: "1.7",
          maxWidth: "850px",
          margin: "0 auto",
          
        }}
      >
        As a pet owner, you know that visits to the veterinarian are essential
        to your pet’s continued well-being. At Royal Care Vet Hospital, we
        dedicate ourselves to high-quality veterinary medicine with a strong
        focus on a Fear Free approach.
      </p>
    </div>
  );
}

export default AnimalIntro;
