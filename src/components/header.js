import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  Drawer,
  Icon,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { LoginRounded } from "@mui/icons-material";

function Header() {
  const pages = [
    "Dashboard",
    "Interview Details",
    "Profile",
    "View Profile",
    "Authorization",
    "Transfer details",
    "Bonus trip",
    "Action",
    "Resignation",
    "Reports",
    "Settings",
    "Password change",
    "Logout",
  ];

  const theme = useTheme();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  // const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isLoggedIn = true;

  return (
    <AppBar position="static" sx={{ backgroundColor: "#000000" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                my: 2,
                mr: 2,
                height: { xs: 30, sm: 40, md: 50 },
              }}
            >
              <img
                alt="logo"
                src="/images/logo.png"
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  objectFit: "contain",
                  borderRadius: "4px",
                }}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://karmagroup.com/wp-content/themes/karma/imgs/karma-logo-new.png"; // Your fallback image
                }}
              />
            </Box>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontWeight: 700,
                letterSpacing: ".2rem",
                color: "#a7a7a7ff",
                textDecoration: "none",
              }}
            >
              LMS
            </Typography>
          </Box>

          <Box sx={{ flexGrow: 0, display: "flex", alignItems: "center" }}>
            {isLoggedIn ? (
              <Avatar
                sx={{
                  mx: 2,
                  fontWeight: "bold",
                  bgcolor: theme.palette.primary.main,
                  color: "white",
                }}
              >
                AD
              </Avatar>
            ) : (
              <Icon sx={{ mx: 2 }}>
                <LoginRounded />
              </Icon>
            )}
            <IconButton
              size="large"
              aria-label="open navigation menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={() => setIsDrawerOpen(true)}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={isDrawerOpen}
              onClose={() => setIsDrawerOpen(false)}
              sx={{
                "& .MuiDrawer-paper": {
                  backgroundColor: "#000000",
                  color: "#FFFFFF",
                },
              }}
            >
              <List sx={{ width: 280 }}>
                <ListItem>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "100%",
                      my: 3,
                      background: "transparent",
                    }}
                  >
                    <img
                      src="/images/logo.png"
                      alt="Salon Logo"
                      style={{
                        maxHeight: "15vw",
                        maxWidth: "100%",
                        height: "auto",
                      }}
                    />
                  </Box>
                </ListItem>

                {pages.map((page) => (
                  <ListItem key={page}>
                    <ListItemButton
                      component={Link}
                      to="/"
                      onClick={() => setIsDrawerOpen(false)}
                      sx={{
                        "&:hover": { color: "text.primary", ml: 0.2 },
                        padding: "0 8px",
                      }}
                    >
                      <ListItemText primary={page} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Drawer>
          </Box>

          {/* <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  fontWeight: "bold",
                  letterSpacing: "0.1em",
                  mx: 0.5,
                  borderRadius: "8px",
                }}
              >
                {page}
              </Button>
            ))}
          </Box> */}
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
