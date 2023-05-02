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
///TO RELOCATE TO MAIN PAGE
import {useNavigate} from 'react-router-dom';

const theme = createTheme();

export default function SignIn({ user, setUser, loggedIn, setLoggedIn }) {
  const [submitted, setSubmitted] = React.useState(false);
  ///TO RELOCATE TO MAIN PAGE
  const navigate = useNavigate();

  const navigateHome = () => {
    navigate('../');
  };
  //////////////////////////

  // const [loggedIn, setLoggedIn] = React.useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get("email");
    const password = data.get("password");
  
    const url = "http://localhost:8080/api/user/getAll";
  
    fetch(url)
      .then((response) => response.json())
      .then((users) => {
        const userWithEmail = users.find(
          (user) => user.email === email && "Password123!" === password
        );
        if (userWithEmail) {
          // the submitted email and password are valid
          console.log(
            `User with email ${email} and password ${password} found in database`
          );
          if (userWithEmail.permission_level === 1) {
            // console.log(userWithEmail.password);
            setUser({
              id: userWithEmail.id,
              firstName: userWithEmail.first_name,
              lastName: userWithEmail.last_name,
              email: userWithEmail.email,
              cart: [],
              admin: true,
              total: 0,
            });
          } else {
            console.log(false);
            setUser({
              id: userWithEmail.id,
              firstName: userWithEmail.first_name,
              lastName: userWithEmail.last_name,
              email: userWithEmail.email,
              cart: [],
              admin: false,
              total: 0,
            });
          }
          setLoggedIn(true); // Set loggedIn state here
          setSubmitted(false);
          ///TO RELOCATE TO MAIN PAGE
          navigateHome();
          ///////////////////////////
          // console.log(user);
        } else {
          // the submitted email and/or password are invalid
          console.log(
            `User with email ${email} and/or password ${password} not found in database`
          );
          setSubmitted(true)
        }
      })
      .catch((error) => console.error(error));
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
