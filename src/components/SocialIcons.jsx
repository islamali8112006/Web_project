import React from "react";
import { IconButton } from "@mui/material";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

function SocialIcons() {
  return (
    <>
      <IconButton
        component="a"
        href="https://www.facebook.com/share/1GRCtciXVh/?mibextid=wwXIfr"
        target="_blank"
        sx={{ color: "white" }}
      >
        <FaFacebookF />
      </IconButton>

      <IconButton
        component="a"
        href="https://www.instagram.com/royalcarevet"
        target="_blank"
        sx={{ color: "white" }}
      >
        <FaInstagram />
      </IconButton>

      <IconButton
        component="a"
        href="https://wa.me/972599371185"
        target="_blank"
        sx={{ color: "white" }}
      >
        <FaWhatsapp />
      </IconButton>
    </>
  );
}

export default SocialIcons;
