import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function HeroButton() {
  const navigate = useNavigate();

  return (
    <Button
      onClick={() => navigate("/RequestAnAppointment")}
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