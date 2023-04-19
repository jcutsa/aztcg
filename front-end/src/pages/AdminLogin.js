import React, { useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

const theme = createTheme();

export default function AdminLogin() {
  const [isValidLogin, setIsValidLogin] = useState(false);
  const [isInvalidLogin, setIsInvalidLogin] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false); // add loggedIn state

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get("email");
    const password = data.get("password");
    console.log({
      email,
      password,
    });
    if (email === "az@tradingcards.com" && password === "password123!") {
      handleAdminLogin();
    } else {
      handleAdminLoginIncorrect();
    }
  };

  function handleAdminLogin() {
    setIsValidLogin(true);
    setIsInvalidLogin(false);
    console.log("correct username and password");
    setLoggedIn(true); // set loggedIn to true
    navigate("/admin-dashboard");
  }

  function handleAdminLogout() {
    setIsValidLogin(false);
    setLoggedIn(false); // set loggedIn to false
    console.log("logging out");
  }

  function handleAdminLoginIncorrect() {
    setIsInvalidLogin(true);
    console.log("incorrect password or username");
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Admin login
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
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
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            {isInvalidLogin && (
              <Typography variant="body2" sx={{ color: "red" }}>
                Incorrect username or password
              </Typography>
            )}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="/forgot-password" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/sign-in" variant="body2">
                  {"Back to sign in"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
