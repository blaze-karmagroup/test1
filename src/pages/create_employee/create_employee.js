import {
  Box,
  Select,
  Container,
  FormControl,
  Grid,
  Paper,
  TextField,
  Typography,
  useTheme,
  MenuItem,
  InputLabel,
} from "@mui/material";
import React from "react";

function CreateEmployee() {
  const theme = useTheme();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const textFieldStyle = {
    "& label.Mui-focused": {
      color: theme.palette.primary.main,
    },
    "& .MuiOutlinedInput-root": {
      borderRadius: "6px",
      "& fieldset": {
        borderColor: theme.palette.secondary.main,
      },
      "&:hover fieldset": {
        borderColor: theme.palette.primary.main,
      },
      "&.Mui-focused fieldset": {
        borderColor: theme.palette.primary.main,
      },
    },
    "& .MuiInputBase-input": {
      color: theme.palette.text.primary,
      fontFamily: "Inter, sans-serif",
    },
    "& .MuiInputLabel-root": {
      color: theme.palette.text.primary,
      fontFamily: "Inter, sans-serif",
    },
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          padding: { xs: "20px", sm: "40px" },
          backgroundColor: theme.palette.background.default,
          boxSizing: "border-box",
        }}
      >
        <Paper
          elevation={6}
          sx={{
            padding: { xs: 3, sm: 4, md: 5 },
            width: "100%",
            maxWidth: "1200px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            borderRadius: "8px",
            backgroundColor: theme.palette.background.paper,
          }}
        >
          <Typography
            variant="h4"
            component="h1"
            gutterBottom
            sx={{ mb: 4, color: "primary.main", fontWeight: "bold" }}
          >
            Create Profile
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ width: "100%" }}>
            <Grid container spacing={3} mb={3}>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <FormControl required sx={{ ...textFieldStyle, minWidth: 223 }}>
                  <InputLabel id="office-location-label">
                    Office Location
                  </InputLabel>
                  <Select
                    labelId="office-location-label"
                    id="office_location"
                    label="Office Location"
                    name="office_location"
                    variant="outlined"
                    value=""
                  >
                    <MenuItem value="Bangalore">Bangalore</MenuItem>
                    <MenuItem value="Goa">Goa</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={6} md={4} lg={3}>
                <FormControl required sx={{ ...textFieldStyle, minWidth: 223 }}>
                  <InputLabel id="office-location-label">
                    Create user for
                  </InputLabel>
                  <Select
                    labelId="office-location-label"
                    id="office_location"
                    label="Office Location"
                    name="office_location"
                    variant="outlined"
                    value=""
                  >
                    <MenuItem value="Bangalore">
                      Admin (HR, Accounts etc...)
                    </MenuItem>
                    <MenuItem value="Goa">Sales</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>

            <Grid container spacing={3}>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <TextField
                  required
                  fullWidth
                  id="employeeID"
                  label="Employee ID"
                  name="employeeID"
                  variant="outlined"
                  autoFocus
                  sx={textFieldStyle}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <TextField
                  required
                  fullWidth
                  id=""
                  label="Interview ID"
                  name=""
                  variant="outlined"
                  autoFocus
                  sx={textFieldStyle}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <TextField
                  required
                  fullWidth
                  id=""
                  label="Employee Name"
                  name=""
                  variant="outlined"
                  autoFocus
                  sx={textFieldStyle}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <TextField
                  required
                  fullWidth
                  id=""
                  label="Nick Name"
                  name=""
                  variant="outlined"
                  autoFocus
                  sx={textFieldStyle}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <FormControl required sx={{ ...textFieldStyle, minWidth: 223 }}>
                  <InputLabel id="gender-label">Create user for</InputLabel>
                  <Select
                    labelId="gender-label"
                    id=""
                    label="Gender"
                    name=""
                    variant="outlined"
                    value=""
                  >
                    <MenuItem value="Bangalore"> Male </MenuItem>
                    <MenuItem value="Goa">Female</MenuItem>
                    <MenuItem value="Goa">Transgender</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <TextField
                  required
                  fullWidth
                  id=""
                  label="Nationality"
                  name=""
                  variant="outlined"
                  autoFocus
                  sx={textFieldStyle}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <TextField
                  required
                  fullWidth
                  id=""
                  label="Age"
                  name=""
                  variant="outlined"
                  autoFocus
                  sx={textFieldStyle}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <FormControl required sx={{ ...textFieldStyle, minWidth: 223 }}>
                  <InputLabel id="">Create user for</InputLabel>
                  <Select
                    labelId=""
                    id=""
                    label=""
                    name=""
                    variant="outlined"
                    value=""
                  >
                    <MenuItem value="Bangalore">Divorced</MenuItem>
                    <MenuItem value="Bangalore">Married</MenuItem>
                    <MenuItem value="Bangalore">Separated</MenuItem>
                    <MenuItem value="Goa">Unmarried</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <TextField
                  required
                  fullWidth
                  id=""
                  label="Blood Group"
                  name=""
                  variant="outlined"
                  autoFocus
                  sx={textFieldStyle}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <TextField
                  required
                  fullWidth
                  id=""
                  label="Region"
                  name=""
                  variant="outlined"
                  autoFocus
                  sx={textFieldStyle}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <TextField
                  required
                  fullWidth
                  id=""
                  label="Aadhar Card No"
                  name=""
                  variant="outlined"
                  autoFocus
                  sx={textFieldStyle}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <TextField
                  required
                  fullWidth
                  id=""
                  label="PAN Card No"
                  name=""
                  variant="outlined"
                  autoFocus
                  sx={textFieldStyle}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <TextField
                  required
                  fullWidth
                  id=""
                  label="GSTIN No"
                  name=""
                  variant="outlined"
                  autoFocus
                  sx={textFieldStyle}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  variant="outlined"
                  autoComplete="email"
                  autoFocus
                  sx={textFieldStyle}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <TextField
                  required
                  fullWidth
                  id=""
                  label="Mobile No"
                  name=""
                  variant="outlined"
                  autoFocus
                  sx={textFieldStyle}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <TextField
                  required
                  fullWidth
                  id=""
                  label="Alternate No."
                  name=""
                  variant="outlined"
                  autoFocus
                  sx={textFieldStyle}
                />
              </Grid>
            </Grid>

            <Grid container spacing={3} mt={3}>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <TextField
                  required
                  fullWidth
                  id=""
                  label="Current Address"
                  name=""
                  variant="outlined"
                  autoFocus
                  sx={{ ...textFieldStyle, minWidth: 223}}
                  multiline
                  maxRows={4}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <TextField
                  required
                  fullWidth
                  id=""
                  label="Permanent Address"
                  name=""
                  variant="outlined"
                  autoFocus
                  sx={{ ...textFieldStyle, minWidth: 223}}
                  multiline
                  maxRows={4}
                />
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Box>
    </>
  );
}

export default CreateEmployee;
