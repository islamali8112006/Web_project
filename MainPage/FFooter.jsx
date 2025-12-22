import React from "react";
import { Box, Typography, Button } from "@mui/material";
import d from "../images/d.jpeg";
import SocialIcons from "./SocialIcons";

function Footer() {
  const services = ["Preventive care", "Vaccination care", "Surgery"];
  const otherServices = ["Emergency care", "Dental care"];

  return (
    <Box
      component="footer"
      sx={{
        width: "100%",
        backgroundColor: "#961D27",
        color: "white",
        mt: "auto",
        pt: 2,
        pb: 1.5,
        fontFamily: '"Playfair Display", serif'
      }}
    >
    
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: "wrap",
          gap: 2,
          mb: 2
        }}
      >
        
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            minWidth: "140px"
          }}
        >
          <img src={d} alt="Logo" width="50" style={{ marginBottom: "6px" }} />
          <Typography variant="h6" sx={{ fontWeight: "bold", color: "#ffd700" }}>
            ROYAL CARE
          </Typography>
          <Typography sx={{ opacity: 0.9, fontSize: "0.8rem" }}>
            VETERINARY HOSPITAL
          </Typography>

          <Box sx={{ display: "flex", gap: 0.5, mt: 0.5 }}>
            <SocialIcons />
          </Box>
        </Box>

        {/* الخدمات */}
        <Box sx={{ minWidth: "140px" }}>
          <Typography
            variant="subtitle1"
            sx={{ fontWeight: "bold", mb: 0.5, color: "#ffd700" }}
          >
            OUR SERVICES
          </Typography>
          {[...services, ...otherServices].map((s, i) => (
            <Typography key={i} sx={{ fontSize: "0.8rem", mb: 0.3 }}>
              ▸ {s}
            </Typography>
          ))}
        </Box>

      
        <Box sx={{ minWidth: "160px" }}>
          <Typography
            variant="subtitle1"
            sx={{ fontWeight: "bold", mb: 0.5, color: "#ffd700" }}
          >
            CONTACT INFO
          </Typography>
          <Typography sx={{ fontSize: "0.8rem", mb: 0.3 }}>
            📍 Nablus, Palestine
          </Typography>
          <Typography sx={{ fontSize: "0.8rem", mb: 0.3 }}>
            📞 059 501 9090
          </Typography>
          <Typography sx={{ fontSize: "0.8rem" }}>
            ✉ r.c.v.hospital@gmail.com
          </Typography>
        </Box>

        
        <Box sx={{ minWidth: "160px" }}>
          <Typography
            variant="subtitle1"
            sx={{ fontWeight: "bold", mb: 0.5, color: "#ffd700" }}
          >
            GET IN TOUCH
          </Typography>
          <Button
            variant="contained"
            fullWidth
            sx={{
              background: "linear-gradient(45deg, #ffd700, #ffffff)",
              color: "#961D27",
              fontWeight: "bold",
              py: 0.8,
              borderRadius: "8px",
              fontSize: "0.8rem",
              "&:hover": {
                background: "linear-gradient(45deg, #ffffff, #ffd700)"
              }
            }}
          >
            REQUEST APPOINTMENT
          </Button>
        </Box>
      </Box>

  
      <Box
        sx={{
          textAlign: "center",
          pt: 1,
          borderTop: "1px solid rgba(255,255,255,0.2)"
        }}
      >
        <Typography sx={{ fontSize: "0.75rem", opacity: 0.8 }}>
          © {new Date().getFullYear()} Royal Care Veterinary Hospital. All Rights Reserved.
        </Typography>
      </Box>
    </Box>
  );
}

export default Footer;
