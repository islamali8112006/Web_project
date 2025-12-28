
const ServicesGrid = ({ services }) => {
  return (
    <section style={{ padding: "60px 20px", backgroundColor: "#fffaf0" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div
          style={{
            fontFamily: "Glyphicons Halflings",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
            gap: "40px"
          }}
        >
          {services.map((service, index) => (
            <div
              key={index}
              style={{
                background: "white",
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                transition: "all 0.3s ease",
                cursor: "pointer"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-10px)";
                e.currentTarget.style.boxShadow =
                  "0 15px 30px rgba(0,0,0,0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 4px 20px rgba(0,0,0,0.1)";
              }}
            >
              <div style={{ height: "250px", overflow: "hidden" }}>
                <img
                  src={service.image}
                  alt={service.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.5s ease"
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "scale(1.1)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                />
              </div>

              <div style={{ padding: "30px", textAlign: "center" }}>
                <h3
                  style={{
                    fontSize: "1.5rem",
                    marginBottom: "15px",
                    color: "#333",
                    fontWeight: "600"
                  }}
                >
                  {service.title}
                </h3>
                <p
                  style={{
                    fontSize: "1rem",
                    color: "#666",
                    lineHeight: "1.7"
                  }}
                >
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;