import React from "react";

function ServiceCard({ image, title, text }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        width: "calc(50% - 10px)", 
        boxSizing: "border-box",
        marginBottom: "20px",
      }}
    >
      <img
        src={image}
        alt={title}
        style={{
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          objectFit: "cover",
        }}
      />

      <div>
        <h4
          style={{
            fontSize: "12px",
            letterSpacing: "1px",
            marginBottom: "5px",
            color: "#333",
          }}
        >
          {title}
        </h4>

        <p
          style={{
            fontSize: "11px",
            lineHeight: "1.3",
            color: "#777",
            maxWidth: "250px",
          }}
        >
          {text}
        </p>
      </div>

      {/* Media Queries لتصغير الكارت على الشاشات الصغيرة */}
      <style>
        {`
          @media (max-width: 768px) {
            div {
              width: 100% !important;  /* يصبح الكارت بعرض كامل */
            }
            img {
              width: 50px !important;
              height: 50px !important;
            }
            h4 {
              font-size: 11px !important;
            }
            p {
              font-size: 10px !important;
              max-width: 200px !important;
            }
          }

          @media (max-width: 480px) {
            div {
              flex-direction: column !important;  /* نص فوق الصورة */
              align-items: flex-start !important;
            }
            img {
              width: 40px !important;
              height: 40px !important;
              margin-bottom: 5px;
            }
            h4 {
              font-size: 10px !important;
            }
            p {
              font-size: 9px !important;
              max-width: 100% !important;
            }
          }
        `}
      </style>
    </div>
  );
}

export default ServiceCard;
