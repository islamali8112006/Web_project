import React from "react";

const HeroSection = () => {
  return (
    <div
      style={{
        width: "100vw",
        marginLeft: "calc(-50vw + 50%)",
        height: "300px",
        backgroundImage: "url(/images/hero-dogs.png)",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    />
  );
};

export default HeroSection;
