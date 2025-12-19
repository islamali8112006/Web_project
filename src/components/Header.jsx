/ HeaderComponent.jsx
import React from "react";

function HeaderComponent() {
  const menuItems = [
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Adoption Center", href: "/adoption" },
    { name: "Online Shop", href: "/online-shop" },
    { name: "Rescue Stories", href: "/rescue-stories" },
    { name: "Contact Us", href: "/contact" },
    { name: "Request an appointment", href: "/request-an-appointment" }
  ];

  const styles = {
    header: {
      position: "fixed",
      top: "20px", // تحت TopBar
      left: 0,
      width: "100%",
      height: "80px",
      background: "White",
      zIndex: 999,
      display: "flex",
      alignItems: "center",
      justifyContent:"center",
     
    },
    nav: {
      display: "flex",
      gap: "30px",
    },
    link: {
      textDecoration: "none",
      color: "#333",
      fontSize: "16px",
      textTransform: "capitalize",
      fontWeight: 500,
      cursor: "pointer",
      transition: "color 0.3s",
    }
  };

  return (
    <header style={styles.header}>
      <nav style={styles.nav}>
        {menuItems.map((item, index) => (
          <a 
            key={index} 
            href={item.href} 
            style={styles.link}
            onMouseEnter={e => e.target.style.color = "#961D27"}
            onMouseLeave={e => e.target.style.color = "#333"}
          >
            {item.name}
          </a>
        ))}
      </nav>
    </header>
  );
}

export default HeaderComponent;
