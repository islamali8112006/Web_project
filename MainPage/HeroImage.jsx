// HeroImage.jsx - كومبوننت الصورة المعدل
import React from "react";
import dogImage from "../images/Royal.jpeg";

function ImageContent() {
  return (
    <div className="image-content">
      <img src={dogImage} alt="Happy dog" className="hero-image" />

      <style jsx>{`
        .image-content {
          position: relative;
          z-index: 1;
        }

        .hero-image {
          width: auto;
          max-width: 500px;
          height: auto;
          max-height: 75vh;
          object-fit: contain;
          object-position: bottom right;
        }

        @media (max-width: 1200px) {
          .hero-image {
            max-width: 450px;
          }
        }

        @media (max-width: 992px) {
          .hero-image {
            max-width: 300px;
          }
        }

        @media (max-width: 768px) {
          .image-content {
            width: 100%;
            display: flex;
            justify-content: center;
          }
          .hero-image {
            max-width: 320px;
            margin: 0 auto;
          }
        }

        @media (max-width: 576px) {
          .hero-image {
            max-width: 250px;
          }
        }
      `}</style>
    </div>
  );
}

export default ImageContent;