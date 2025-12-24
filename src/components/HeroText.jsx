import React from "react";
import HeroButton from "./button.jsx";

function TextContent() {
  const screenWidth = window.innerWidth;

  
  let titleSize = "100px";
  let subtitleSize = "24px";

  if (screenWidth <= 992) {
    titleSize = "70px";
    subtitleSize = "20px";
  }

  if (screenWidth <= 576) {
    titleSize = "50px";
    subtitleSize = "16px";
  }

  return (
    <div
      style={{
        maxWidth: "600px",
        position: "relative",
        top: "-50px",
        zIndex: 2,
      }}
    >
      <p
        style={{
          fontFamily: 'Montserrat, sans-serif',
          fontSize: subtitleSize,
          letterSpacing: "1.5px",
          textTransform: "uppercase",
          marginBottom: "20px",
          color: "#333",
        }}
      >
        KEEPING YOUR PET ON <br />
        A STRESS-FREE PATH TO
      </p>

      <h1
        style={{
          fontFamily: 'Allura, cursive !important',
          fontSize: titleSize,
          margin: "10px 0 40px",
          color: "#961D27",
          lineHeight: 0.9,
        }}
      >
        Wellness
      </h1>

      <HeroButton />
    </div>
  );
}

export default TextContent;
