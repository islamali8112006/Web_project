import React from "react";
import { IconButton } from "@mui/material";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

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
    </>
  );
}

export default SocialIcons;
