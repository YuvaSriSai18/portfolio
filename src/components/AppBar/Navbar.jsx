import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import "./Navbar.css";

const drawerWidth = 240;
const navItems = [
  {
    name: "About",
    path: "/",
  },
  {
    name: "Skills",
    path: "/skills",
  },
  {
    name: "Projects",
    path: "/projects",
  },
  {
    name: "Blogs",
    path: "/blogs",
  },
];

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <span style={{ fontFamily: "Edu AU VIC WA NT Hand, cursive" ,fontWeight:'800'}}>YS</span>
        </Link>
      </Typography>
      <Divider />
      <List>
        {navItems.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <Link
                to={item.path}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <center>
                  <ListItemText primary={item.name} />
                </center>
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ maxWidth: { xs: "98%", sm: "99%" } }}>
      <CssBaseline />
      <AppBar component="div" position="static" sx={{border:'2px solid #000' , width:'100%'}}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuRoundedIcon fontSize="18px" />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
              fontSize: "21px",
              textDecoration: "none",
            }}
            ml={5}
          >
            <Link to={"/"} style={{ textDecoration: "none" }}>
              <span style={{ fontFamily: "Edu AU VIC WA NT Hand, cursive" ,fontWeight:'600'}}>Yuva Sri Sai</span>
            </Link>
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item, index) => (
              <Button
                key={index}
                sx={{
                  color: "#6b6767",
                  fontSize: "18px",
                  marginRight: "10px",
                  position: "relative",
                  overflow: "hidden",
                  textTransform: "none", // Optional: Prevents uppercase transformation
                  "&:before": {
                    content: '""',
                    position: "absolute",
                    bottom: 0,
                    left: "0",
                    width: "100%",
                    height: "2px", // Thickness of the underline
                    backgroundColor: "#6b6767", // Color of the underline
                    transform: "translateX(-100%)", // Initially hide the underline
                    transition: "transform 0.3s ease", // Animation duration and easing
                  },
                  "&:hover:before": {
                    transform: "translateX(0)", // Move the underline to the full width
                  },
                }}
              >
                <Link
                  to={item.path}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  {item.name}
                </Link>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

Navbar.propTypes = {
  window: PropTypes.func,
};

export default Navbar;
