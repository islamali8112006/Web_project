import React from "react";

export default function HeroButton({ href = "/appointment", text = "REQUEST AN APPOINTMENT" }) {
  return (
    <a href={href} className="hero-button">
      {text}

      <style jsx>{`
        .hero-button {
          display: inline-block;
          padding: 15px 40px;
          background-color: #961D27;
          color: white;
          border-radius: 30px;
          text-decoration: none;
          font-family: 'Montserrat', sans-serif;
          font-size: 16px;
          letter-spacing: 1.5px;
          border: 2px solid #961D27;
          transition: 0.3s;
          font-weight: 600;
        }

        .hero-button:hover {
          background: transparent;
          color: #961D27;
        }
      `}</style>
    </a>
  );
}
