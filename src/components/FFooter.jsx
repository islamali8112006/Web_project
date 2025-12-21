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
        pt: 3,
        pb: 2,
        fontFamily: '"Playfair Display", serif'
      }}
    >
      {/* كل محتويات الفوتر أفقياً */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: "wrap",
          gap: 3,
          mb: 3
        }}
      >
        {/* شعار + عنوان */}
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", minWidth: "150px" }}>
          <img src={d} alt="Logo" width="60" style={{ marginBottom: "8px" }} />
          <Typography variant="h5" sx={{ fontWeight: "bold", color: "#ffd700" }}>
            ROYAL CARE
          </Typography>
          <Typography variant="subtitle1" sx={{ opacity: 0.9, fontSize: "0.9rem" }}>
            VETERINARY HOSPITAL
          </Typography>
          {/* أيقونات التواصل تحت الشعار */}
          <Box sx={{ display: "flex", gap: 1, mt: 1 }}>
            <SocialIcons />
          </Box>
        </Box>

        {/* الخدمات */}
        <Box sx={{ minWidth: "150px" }}>
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1, color: "#ffd700" }}>
            OUR SERVICES
          </Typography>
          {services.map((s, i) => (
            <Typography key={i} sx={{ mb: 0.5, fontSize: "0.9rem" }}>
              ▸ {s}
            </Typography>
          ))}
          {otherServices.map((s, i) => (
            <Typography key={i} sx={{ mb: 0.5, fontSize: "0.9rem" }}>
              ▸ {s}
            </Typography>
          ))}
        </Box>

        {/* معلومات الاتصال */}
        <Box sx={{ minWidth: "150px" }}>
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1, color: "#ffd700" }}>
            CONTACT INFO
          </Typography>
          <Typography sx={{ mb: 0.5, fontSize: "0.9rem" }}>📍 Clinic Location: Nablus, Palestine</Typography>
          <Typography sx={{ mb: 0.5, fontSize: "0.9rem" }}>📞 Phone: 059 501 9090</Typography>
          <Typography sx={{ mb: 0.5, fontSize: "0.9rem" }}>✉ Email: info@royalcarevet.com</Typography>
        </Box>

        {/* حجز */}
        <Box sx={{ minWidth: "150px" }}>
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1, color: "#ffd700" }}>
            GET IN TOUCH
          </Typography>
          <Button
            variant="contained"
            fullWidth
            sx={{
              background: "linear-gradient(45deg, #ffd700, #ffffff)",
              color: "#961D27",
              fontWeight: "bold",
              py: 1.2,
              borderRadius: "8px",
              fontSize: "0.9rem",
              "&:hover": {
                background: "linear-gradient(45deg, #ffffff, #ffd700)",
                transform: "translateY(-1px)"
              }
            }}
          >
            REQUEST APPOINTMENT
          </Button>
        </Box>
      </Box>

      {/* حقوق النشر */}
      <Box sx={{ textAlign: "center", pt: 2, borderTop: "1px solid rgba(255,255,255,0.2)" }}>
        <Typography variant="body2" sx={{ opacity: 0.8, fontSize: "0.8rem" }}>
          © {new Date().getFullYear()} Royal Care Veterinary Hospital. All Rights Reserved.
        </Typography>
      </Box>
    </Box>
  );
}

export default Footer;
