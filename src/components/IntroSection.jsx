import React from "react";

const IntroSection = () => {
  return (
    <section style={{ padding: "60px 20px" }}>
      <img
        src="/images/leaves-dark.png"
        alt="Royal Care Veterinary Clinic Logo"
        style={{
          width: "100px",
          height: "auto",
          marginBottom: "-20px",
          display: "block",
          marginLeft: "auto",
          marginRight: "auto"
        }}
      />
      <h1
        style={{
          fontFamily: "Glyphicons Halflings",
          fontSize: "2.8rem",
          marginBottom: "20px",
          display: "inline-block",
          paddingBottom: "10px",
          textAlign: "center"
        }}
      >
        SERVICES
      </h1>

      <p
        style={{
          fontFamily: '"Helvetica Neue"',
          maxWidth: "2200px",
          margin: "0 auto",
          fontSize: "1.15rem",
          lineHeight: "1.8",
          color: "#7a7878ff",
          textAlign: "justify"
        }}
      >
        At Royal Care Veterinary Clinic, we understand how much your pets mean
        to you—they are family. That’s why we are committed to providing
        compassionate, high-quality veterinary care tailored to your pet’s
        unique needs. From routine wellness checkups to advanced medical
        treatments, our experienced team is here to support your pet through
        every stage of life. We take pride in building lasting relationships
        with our clients and ensuring a safe, caring environment for every
        visit. If you have any questions about our services or would like to
        schedule an appointment, <b>we are always happy to assist you.</b>
      </p>
    </section>
  );
};

export default IntroSection;
