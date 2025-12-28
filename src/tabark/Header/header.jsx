import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  Button
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

function HeaderComponent() {
  const location = useLocation(); // لمعرفة الصفحة الحالية
  const menuItems = [
    { name: "About", href: "/About" },
    { name: "Services", href: "/services" },
    { name: "Adoption Center", href: "/AdoptionCenter" },
    { name: "Online Shop", href: "/OnlineShop" },
    { name: "Rescue Stories", href: "/RescueStories" },
    { name: "Contact Us", href: "/ContactUs" },
    { name: "Request an appointment", href: "/RequestAnAppointment" }
  ];

  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const toggleDrawer = () => setDrawerOpen(!drawerOpen);

  // عرض Drawer مختلف للصفحة الرئيسية
  const drawerWidth = 280;
  return (
    <AppBar
      position="fixed"
      color="inherit"
      sx={{ boxShadow: '0 2px 6px rgba(0,0,0,0.1)', top: '40px' }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between",alignItems: "center",  padding: "0 50px" }}>
        {/* اسم العيادة */}
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{
            textDecoration: "none",
            color: "#333",
            fontWeight: "bold",
            fontFamily: '"Playfair Display", serif',
            fontSize: "25px",
            textTransform: "uppercase",
            cursor: "pointer",
            transition: "color 0.3s",
            '&:hover': { color: "#961D27" } // اللون الخمري عند hover
          }}
        >
          Royal Care Vet Hospital
        </Typography>

        {/* روابط القائمة للـ Desktop */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap:3 }}>
          {menuItems.map((item, index) => (
            <Button
              key={index}
              component={Link}
              to={item.href}
              sx={{
                color: "#050505",
                textTransform: "capitalize",
                fontFamily: '"Playfair Display", serif',
                fontWeight: 500,
                fontSize: "18px",
                '&:hover': { color: "#961D27" }
              }}
            >
              {item.name}
            </Button>
          ))}
        </Box>

        {/* أيقونة الـ Mobile */}
        <IconButton
        
          edge="end"
          color="inherit"
          aria-label="menu"
          onClick={toggleDrawer}
          sx={{ display: { xs: 'flex', md: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>

      {/* Drawer للـ Mobile */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer}
        // PaperProps={{ sx: { width: drawerWidth } }} // نتحكم بعرض الـ drawer
      >
        <Box
          role="presentation"
          onClick={toggleDrawer}
          onKeyDown={toggleDrawer}
        >
          <List>
            {menuItems.map((item, index) => (
              <ListItem
                button
                key={index}
                component={Link}
                to={item.href}
                sx={{
                  color: "#000",
                  '&:hover': { color: "#961D27" } // اللون الخمري عند hover
                }}
              >
                <ListItemText primary={item.name} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
}

export default HeaderComponent;

