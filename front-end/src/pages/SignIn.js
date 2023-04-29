import * as React from "react";
import { Link as RouterLink } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import SignUp from "./SignUp";

const theme = createTheme();

export default function SignIn({ user, setUser }) {
  const [submitted, setSubmitted] = React.useState(false);
  const [loggedIn, setLoggedIn] = React.useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get("email");
    const password = data.get("password");

    // Check if email and password match a regular user account
    if (
      email === "averagejoe123@gmail.com" &&
      password === "UserPassword123!"
    ) {
      setUser({
        firstName: "Joe",
        lastName: "Johnson",
        email: "averagejoe123@gmail.com",
        cart: [],
        admin: false, // set admin to false
        total: 0,
      });
      // window.location.href = "/";
      setLoggedIn(true);
    }

    // Check if email and password match an admin account
    else if (
      email === "pokemaster9001@gmail.com" &&
      password === "AdminPassword123!"
    ) {
      setUser({
        firstName: "John",
        lastName: "Deere",
        email: "pokemaster9001@gmail.com",
        cart: [],
        admin: true, // set admin to true
        total: 0,
      });
      // window.location.href = "/";
      // window.alert(`Welcome back ${user.firstName} ${user.lastName}`)
      setLoggedIn(true);
    } else {
      setSubmitted(true);
    }
    // Output the user type to the console
    console.log(user.firstName);
    console.log(user.admin);
  };

  return (
    <div
      style={{
        padding: "24px 48px",
        textAlign: "center",
        // overflowY: "scroll",
        height: "100vh",
      }}
    >
      {!loggedIn ? (
        <ThemeProvider theme={theme}>
          <Container component="main" maxWidth="xs">
            <Box
              sx={{
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography component="h1" variant="h5">
                Sign in
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
                {submitted && (
                  <Typography variant="subtitle2" color="error">
                    Invalid email or password
                  </Typography>
                )}
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  // onClick={() => {
                  //   if (user.firstName !== "") {
                  //     window.location.href = "/";
                  //   }
                  // }}
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
                    <Link
                      component={RouterLink}
                      to="/sign-up"
                      element={<SignUp />}
                      variant="body2"
                    >
                      Don't have an account? Sign Up
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Container>
        </ThemeProvider>
      ) : (
        <div>
          <h2>Successfully logged in</h2>
          <Link to="/" component={RouterLink}>
            Go to homepage
          </Link>
        </div>
      )}
    </div>
  );
}
