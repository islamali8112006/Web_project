import React from "react";
import ContentSection from "./FourPageInfo.jsx";
import girlImage from "../images/dog&girl.jpeg";
import cat4 from "../images/cat4.jpeg";

function Page4() {
  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#ffffff",
        marginTop: "60px",
        display: "flex",
        flexDirection: "column",
        fontFamily: '"Playfair Display", serif',
      }}
    >
     
      <div
        style={{
          display: "flex",
          flexWrap: "wrap", 
          width: "100%",
          height: "25vh",
          minHeight: "200px",
        }}
      >
        <img
          src={girlImage}
          alt="woman and dog"
          style={{
            flex: "3", 
            height: "100%",
            objectFit: "cover",
            minWidth: "200px",
          }}
        />
        <div
          style={{
            width: "2px",
            backgroundColor: "#e0e0e0",
          }}
        />
        <img
          src={cat4}
          alt="cat"
          style={{
            flex: "1", 
            height: "100%",
            objectFit: "cover",
            minWidth: "100px",
          }}
        />
      </div>

     
      <div
        style={{
          flex: "1",
          maxWidth: "1100px",
          margin: "20px auto",
          padding: "20px",
          boxSizing: "border-box",
        }}
      >
        <ContentSection />
      </div>
    </div>
  );
}

export default Page4;

