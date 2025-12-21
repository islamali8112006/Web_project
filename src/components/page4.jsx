import React from "react";
import ContentSection from "./ContentSection";
import girlImage from "../images/dog&girl.jpeg";
import cat4 from "../images/cat4.jpeg";

export default function Page4() {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh", // ارتفاع الشاشة
        backgroundColor: "#ffffff",
        marginTop: "60px",
        overflow: "hidden", // يمنع scroll
        display: "flex",
        flexDirection: "column",
        fontFamily: '"Playfair Display", serif' // الخط لجميع النصوص
      }}
    >
      {/* الصور */}
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "25vh" // قللنا الارتفاع من 35vh → 25vh
        }}
      >
        <img
          src={girlImage}
          alt="woman and dog"
          style={{
            width: "75%",
            height: "100%",
            objectFit: "cover"
          }}
        />
        <div
          style={{
            width: "2px",
            backgroundColor: "#e0e0e0"
          }}
        />
        <img
          src={cat4}
          alt="cat"
          style={{
            width: "25%",
            height: "100%",
            objectFit: "cover"
          }}
        />
      </div>

      {/* المحتوى */}
      <div
        style={{
          height: "calc(100vh - 25vh - 60px)", 
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "20px",
          boxSizing: "border-box",
          overflow: "hidden"
        }}
      >
        <ContentSection />
      </div>
    </div>
  );
}
