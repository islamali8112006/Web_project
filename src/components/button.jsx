import React from "react";
import { Button } from "@mui/material";

function HeroButton() {
  return (
    <Button
      href="/appointment"
      variant="contained"
      sx={{
        backgroundColor: "#961D27",
        color: "white",
        borderRadius: "30px",
        padding: "15px 40px",
        fontFamily: "'Montserrat', sans-serif",
        fontWeight: 600,
        fontSize: "16px",
        letterSpacing: "1.5px",
        border: "2px solid #961D27",
        textTransform: "none",
        "&:hover": {
          backgroundColor: "transparent",
          color: "#961D27",
          border: "2px solid #961D27"
        }
      }}
    >
      REQUEST AN APPOINTMENT
    </Button>
  );
}

export default HeroButton;
