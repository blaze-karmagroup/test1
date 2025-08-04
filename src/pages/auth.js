import React, { useState } from "react";
import Header from "../components/header";
import {
  Box,
  Button,
  Link,
  Paper,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const theme = useTheme();
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data:", formData);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const switchMode = () => {
    setIsLogin(!isLogin);
    setShowPassword(false);
    setFormData({ userName: "", email: "", password: "", confirmPassword: "" });
  };

  return (
    <>
      <Header />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          padding: { xs: "20px", sm: "40px" },
          boxSizing: "border-box",
          backgroundColor: theme.palette.background.default,
        }}
      >
        <Paper
          elevation={6}
          sx={{
            padding: { xs: "20px", sm: "40px" },
            width: { xs: "90%", sm: "400px", md: "450px" },
            maxWidth: "450px",
            textAlign: "center",
            borderRadius: "8px",
            backgroundColor: theme.palette.background.paper,
          }}
        >
          <Typography
            component="h1"
            variant="h5"
            sx={{
              mb: 3,
              fontFamily: "Inter, sans-serif",
              fontWeight: 700,
              color: theme.palette.text.primary,
            }}
          >
            {isLogin ? "Login" : "Sign Up"}
          </Typography>
          {isLogin ? (
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                value={formData.email}
                onChange={handleChange}
                sx={{
                  // Direct styling for TextField
                  "& label.Mui-focused": {
                    color: theme.palette.primary.main, // Focused label color
                  },
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "6px", // Reduced border radius
                    "& fieldset": {
                      borderColor: theme.palette.secondary.main, // Default border color
                    },
                    "&:hover fieldset": {
                      borderColor: theme.palette.primary.main, // Hover border color
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: theme.palette.primary.main, // Focused border color
                    },
                  },
                  "& .MuiInputBase-input": {
                    color: theme.palette.text.primary, // Input text color
                    fontFamily: "Inter, sans-serif", // Explicitly set font
                  },
                  "& .MuiInputLabel-root": {
                    color: theme.palette.text.primary, // Label color
                    fontFamily: "Inter, sans-serif", // Explicitly set font
                  },
                }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={formData.password}
                onChange={handleChange}
                sx={{
                  // Direct styling for TextField
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
                }}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 2,
                  py: 1.5,
                  borderRadius: "6px",
                  textTransform: "none",
                  backgroundColor: theme.palette.primary.main,
                  color: theme.palette.secondary.accent,
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 600,
                  "&:hover": {
                    backgroundColor: theme.palette.secondary.main,
                  },
                }}
              >
                Login
              </Button>
              <Typography
                variant="body2"
                align="center"
                sx={{
                  fontFamily: "Inter, sans-serif",
                  color: theme.palette.text.primary,
                }}
              >
                Don't have an account?{" "}
                <Link
                  component="button"
                  variant="body2"
                  onClick={switchMode}
                  sx={{
                    color: theme.palette.primary.main, // Link color
                    textDecoration: "none",
                    fontFamily: "Inter, sans-serif", // Explicitly set font
                    "&:hover": {
                      textDecoration: "underline",
                    },
                  }}
                >
                  Sign Up
                </Link>
              </Typography>
            </Box>
          ) : (
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email-signup"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                value={formData.email}
                onChange={handleChange}
                sx={{
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
                }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password-signup"
                autoComplete="new-password"
                value={formData.password}
                onChange={handleChange}
                sx={{
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
                }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                id="confirm-password"
                autoComplete="new-password"
                value={formData.confirmPassword}
                onChange={handleChange}
                sx={{
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
                }}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 2,
                  py: 1.5,
                  borderRadius: "6px",
                  textTransform: "none",
                  backgroundColor: theme.palette.primary.main,
                  color: theme.palette.secondary.accent,
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 600,
                  "&:hover": {
                    backgroundColor: theme.palette.secondary.main,
                  },
                }}
              >
                Sign Up
              </Button>
              <Typography
                variant="body2"
                align="center"
                sx={{
                  fontFamily: "Inter, sans-serif",
                  color: theme.palette.text.primary,
                }}
              >
                Already have an account?{" "}
                <Link
                  component="button"
                  variant="body2"
                  onClick={switchMode}
                  sx={{
                    color: theme.palette.primary.main,
                    textDecoration: "none",
                    fontFamily: "Inter, sans-serif",
                    "&:hover": {
                      textDecoration: "underline",
                    },
                  }}
                >
                  Login
                </Link>
              </Typography>
            </Box>
          )}
        </Paper>
      </Box>
    </>
  );
};

export default Auth;
