import React from "react";

const OnlineIntro = () => {
  return (
    <section style={{ padding: "60px 20px" }}>
      <img
        src="/leaves-dark1.png"
        alt="Royal Care Veterinary Clinic Logo"
        style={{
          width: "100px",
          height: "auto",
          marginBottom: "-1px",
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
        ONLINE SHOP
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
        At Royal Care Online Shop, we believe that quality products make a real difference in everyday life.
        That’s why we carefully select and offer a wide range of products designed to meet your needs and expectations. 
        Whether you’re browsing online for convenience or prefer to see and choose your items in person, we’ve got you covered.
        You can explore our collection here on our website, visit our physical store for a hands-on shopping experience and personalized assistance.
         <b>We’re always happy to help you find exactly what you’re looking for.</b>
      </p>
    </section>
  );
};

export default OnlineIntro;
