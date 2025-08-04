import { Box, Grid, Paper, Typography, useTheme } from "@mui/material";
import React from "react";

function UserDetails() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        m: 3,
      }}
    >
      <Paper
        elevation={6}
        sx={{
            padding: "5px 10px",
        //   width: "100%",
          textAlign: "center",
          borderRadius: "8px",
          backgroundColor: theme.palette.background.paper,
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={6} md={6} lg={3}>
            <Box sx={{ p: 2, textAlign: "start" }}>
              <Typography variant="body2" color="text.secondary">
                Employee ID.
              </Typography>
              <Typography variant="h6" color="text.primary" fontWeight="bold">
                KGI-70
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={6} md={6} lg={3}>
            <Box sx={{ p: 2, textAlign: "start" }}>
              <Typography variant="body2" color="text.secondary">
                Name.
              </Typography>
              <Typography variant="h6" color="text.primary" fontWeight="bold">
                Ashvitha Alina Dias
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={6} md={6} lg={3}>
            <Box sx={{ p: 2, textAlign: "start" }}>
              <Typography variant="body2" color="text.secondary">
                Department.
              </Typography>
              <Typography variant="h6" color="text.primary" fontWeight="bold">
                HR
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={6} md={6} lg={3}>
            <Box sx={{ p: 2, textAlign: "start" }}>
              <Typography variant="body2" color="text.secondary">
                Designation.
              </Typography>
              <Typography variant="h6" color="text.primary" fontWeight="bold">
                HR Executive
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}

export default UserDetails;
