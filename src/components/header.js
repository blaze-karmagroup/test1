import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";

function Header() {
  const pages = [
    "Dashboard",
    "Apply Leave",
    "My Leaves",
    "Team Leaves",
    "Logout",
  ];

  return (
    <AppBar position="static" sx={{ backgroundColor: "#000000" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                my: 2, mr: 2,
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

          <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="open navigation menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              // onClick={handleOpenNavMenu}
              color="inherit" // Inherits color from AppBar (white)
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              // anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right", // Anchor menu to the right of the button
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right", // Transform from top-right
              }}
              // open={Boolean(anchorElNav)}
              // onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page}
                  sx={{ borderRadius: "4px", margin: "4px" }}
                >
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
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
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
