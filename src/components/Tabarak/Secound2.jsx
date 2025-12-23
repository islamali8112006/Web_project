import React from "react";

function FirstClientReview() {
  return (
    <div
      style={{
        flex: "1",
        padding: "25px",
        borderRadius: "8px",
     
      }}
    >
      <h3
        style={{
          fontSize: "24px",
          fontWeight: "400",
          marginBottom: "15px",
          color: "black",
           textShadow: "2px 2px 6px rgba(0,0,0,0.3)"
        
        }}
      >
        Our first client said…
      </h3>

      <p
        style={{
          fontSize: "15px",
          lineHeight: "1.8",
          color: "black"
        }}
      >
        "Everyone on staff at Royal Care Vet Hospital is simply amazing –
        from the front desk reps to the doctors. We know our pets are always
        in loving hands."
      </p>
    </div>
  );
}

export default FirstClientReview;
