import { Box, Typography } from "@mui/material";
import React from "react";

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        width: "100%",
        py: 2,
        mt: "auto",
        bgcolor: "background.default",
        color: "text.primary",
        textAlign: "center",
        boxShadow: "0 -2px 5px rgba(0,0,0,0.05)",
        fontSize: { xs: "0.8rem", sm: "0.9rem" },
      }}
    >
      <Typography variant="body2">
        Copyright &copy; {new Date().getFullYear()} Karma Group.
      </Typography>
    </Box>
  );
}

export default Footer;
