import React from "react";

function TopBar() {
  return (
    <div style={styles.topBar}>
      <div style={styles.content}>
        <span style={styles.contact}>Give us a call!</span>
        <span style={styles.phone}>📞 059 501 9090</span>
      </div>
    </div>
  );
}

const styles = {
  topBar: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    height: "40px",
    backgroundColor: "#961D27",
    color: "#FFFFFF",
    zIndex: 1001,
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    padding: "0 20px",
    fontSize: "12px",
    boxSizing: "border-box",
  },

  content: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    height: "100%",
  },

  contact: {
    fontWeight: "bold",
    lineHeight: "40px",
  },

  phone: {
    fontWeight: "bold",
    lineHeight: "40px",
  },
};

export default TopBar;
