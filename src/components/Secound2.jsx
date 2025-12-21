import React from "react";

function FirstClientReview() {
  return (
    <div
      style={{
        flex: "1",
        padding: "25px",
        borderRadius: "8px",
        backgroundColor: "#961D27"
      }}
    >
      <h3
        style={{
          fontSize: "24px",
          fontWeight: "400",
          marginBottom: "15px",
          color: "white"
        }}
      >
        Our first client said…
      </h3>

      <p
        style={{
          fontSize: "15px",
          lineHeight: "1.8",
          color: "white"
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
