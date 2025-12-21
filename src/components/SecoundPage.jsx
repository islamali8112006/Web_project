import React from "react";
import CatImage from "../images/cat.02 PM.jpeg";
import AnimalIntro from "./Secound1.jsx";
import FirstClientReview from "./Secound2.jsx";

function AnimalHospital() {
  return (
    <section
      style={{
        width: "100%",
        height: "100vh",
        padding: "40px 50px",
        boxSizing: "border-box",
        fontFamily: '"Playfair Display", serif', // تم تعديل الخط
        backgroundColor: "#ffffff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
      }}
    >
      {/* الفقرة الأولى */}
      <AnimalIntro />

      {/* الصورة + الشهادة */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "50px",
          flex: "1"
        }}
      >
        {/* الصورة */}
        <div style={{ flex: "1" }}>
          <img
            src={CatImage}
            alt="Cat"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "6px"
            }}
          />
        </div>

        {/* رأي أول زبون */}
        <FirstClientReview />
      </div>
    </section>
  );
}

export default AnimalHospital;
