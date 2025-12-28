import { Box } from "@mui/material";
import HeaderComponent from "./tabark/Header/header.jsx";
import Footer from "./tabark/FFooter.jsx";
import TopBar from "./tabark/Top-header.jsx";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column"
      }}
    >
      <TopBar />
      <HeaderComponent />

      <Box component="main" sx={{ flex: 1 }}>
        <Outlet />
      </Box>

      <Footer />
    </Box>
  );
}
