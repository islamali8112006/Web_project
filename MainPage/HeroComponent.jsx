
import React from "react";
import TextContent from "./HeroText";
import ImageContent from "./HeroImage";

function HeroComponent() {
  return (
    <section className="hero">
      <div className="hero-container">
        <TextContent />
        <ImageContent />
      </div>

      <style jsx>{`
        .hero {
          position: relative;
          min-height: 100vh;
          background: #fff;
          display: flex;
          align-items: flex-end;
          padding: 20px 40px;
          overflow: hidden;
        }
        
        .hero-container {
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          position: relative;
        }
      `}</style>
    </section>
  );
}

export default HeroComponent;