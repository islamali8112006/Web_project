import React from "react";

function ServiceCard({ image, title, text }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        width: "calc(50% - 10px)", // ⭐ هذا الحل
        boxSizing: "border-box"
      }}
    >
      <img
        src={image}
        alt={title}
        style={{
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          objectFit: "cover"
        }}
      />

      <div>
        <h4
          style={{
            fontSize: "12px",
            letterSpacing: "1px",
            marginBottom: "5px",
            color: "#333"
          }}
        >
          {title}
        </h4>

        <p
          style={{
            fontSize: "11px",
            lineHeight: "1.3",
            color: "#777",
            maxWidth: "250px"
          }}
        >
          {text}
        </p>
      </div>
    </div>
  );
}

export default ServiceCard;
