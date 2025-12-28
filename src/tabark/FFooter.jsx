import React from "react";
import { Box, Typography } from "@mui/material";
import d from "../tabark/images/d.jpeg";
import SocialIcons from "./SocialIcons";
import HeroButton from "./button"; 

function Footer() {
  const services = ["Preventive care", "Vaccination care", "Surgery"];
  const otherServices = ["Emergency care", "Dental care"];

  return (
    <Box
      component="footer"
      sx={{
        width: "100vw",
        marginLeft: "calc(-50vw + 50%)",
        backgroundColor: "#961D27",
        color: "white",
        mt: "auto",
        pt: 2,
        pb: 1.5,
        fontFamily: '"Helvetica Neue", sans-serif',
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "wrap",
          gap: 16,
          mb: 2,
          maxWidth: "1200px",
          mx: "auto",
        }}
      >
       
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <img src={d} alt="Logo" width="50" style={{ marginBottom: "6px" }} />
          <Typography variant="h6" sx={{ fontWeight: "bold", color: "#fffaf0" }}>
            ROYAL CARE
          </Typography>
          <Typography sx={{ opacity: 0.9, fontSize: "0.8rem" }}>
            VETERINARY HOSPITAL
          </Typography>

          <Box sx={{ display: "flex", gap: 0.5, mt: 0.5 }}>
            <SocialIcons />
          </Box>
        </Box>

     
        <Box
          sx={{
            minWidth: "140px",
            display: "flex",
            flexDirection: "column",
            gap: 0.5,
          }}
        >
          <Typography
            variant="subtitle1"
            sx={{ fontWeight: "bold", mb: 0.5, color: "#fffaf0" }}
          >
            OUR SERVICES
          </Typography>

          {[...services, ...otherServices].map((s, i) => (
            <Box key={i} sx={{ display: "flex", gap: 0.5 }}>
              <Typography sx={{ fontSize: "0.8rem" }}>▸</Typography>
              <Typography sx={{ fontSize: "0.8rem" }}>{s}</Typography>
            </Box>
          ))}
        </Box>

     
        <Box sx={{ minWidth: "160px" }}>
          <Typography
            variant="subtitle1"
            sx={{ fontWeight: "bold", mb: 0.5, color: "#fffaf0" }}
          >
            CONTACT INFO
          </Typography>

          <Box sx={{ display: "flex", flexDirection: "column", gap: 0.4 }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box sx={{ width: "20px" }}>📍</Box>
              <Typography sx={{ fontSize: "0.8rem" }}>
                Nablus, Palestine
              </Typography>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box sx={{ width: "20px" }}>📞</Box>
              <Typography sx={{ fontSize: "0.8rem" }}>
                059 501 9090
              </Typography>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box sx={{ width: "20px" }}>✉</Box>
              <Typography sx={{ fontSize: "0.8rem" }}>
                r.c.v.hospital@gmail.com
              </Typography>
            </Box>
          </Box>
        </Box>

    
        <Box sx={{ minWidth: "160px" }}>
          <Typography
            variant="subtitle1"
            sx={{ fontWeight: "bold", mb: 0.5, color: "#fffaf0" }}
          >
            GET IN TOUCH
          </Typography>
          <HeroButton />
        </Box>
      </Box>

      <Box
        sx={{
          textAlign: "center",
          pt: 1,
          borderTop: "1px solid rgba(255,255,255,0.2)",
        }}
      >
        <Typography sx={{ fontSize: "0.75rem", opacity: 0.8 }}>
          © {new Date().getFullYear()} Royal Care Veterinary Hospital. All Rights
          Reserved.
        </Typography>
      </Box>
    </Box>
  );
}

export default Footer;