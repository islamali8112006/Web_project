import React from "react";
import ServiceCard from "./ServiceCard";

function Services({ services }) {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        maxWidth: "1000px",
        margin: "0 auto",
        paddingLeft: "40px" 
      }}
    >
      {services.map((service, index) => (
        <ServiceCard
          key={index}
          image={service.image}
          title={service.title}
          text={service.text}
        />
      ))}
    </div>
  );
}

export default Services;
