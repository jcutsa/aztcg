import { Box, Card, Stack, Typography } from "@mui/material";
import React from "react";

// const teamInfo = [{}]

export default function About() {
  return (
    <div
      style={{
        padding: "24px 48px",
        textAlign: "center",
        // overflowY: "scroll",
        height: "100vh",
      }}
    >
      <Stack sx={{ alignItems: "center"}}>
        <h1>About Us</h1>
        <h3>Core Team</h3>
        <div style={{ display: "flex", justifyContent: "space-between", backgroundColor: "white", width: "850px"}}>
          <Stack
            style={{ flex: "1", marginRight: "10px" }}
            sx={{ width: "400px" }}
          >
            <Card
              style={{
                backgroundColor: "#4B8673",
                color: "white",
                height: "100px",
                width: "400px",
                margin: "auto",
                padding: "3px",
                marginBottom: "16px",
              }}
            >
              <Stack direction={"row"}>
                <Stack style={{ padding: "20px", textAlign: "left" }}>
                  <Typography variant="h5" component="h2">
                    Jake Alvarez
                  </Typography>
                  <Typography variant="body1" component="h2">
                    Role
                  </Typography>
                </Stack>
              </Stack>
            </Card>
            <Card
              style={{
                backgroundColor: "#4B8673",
                color: "white",
                height: "100px",
                width: "400px",
                margin: "auto",
                padding: "3px",
                marginBottom: "16px",
              }}
            >
              <Stack direction={"row"}>
                <Stack style={{ padding: "20px", textAlign: "left" }}>
                  <Typography variant="h5" component="h2">
                    J.C. Chadwell
                  </Typography>
                  <Typography variant="body1" component="h2">
                    Role
                  </Typography>
                </Stack>
              </Stack>
            </Card>
            <Card
              style={{
                backgroundColor: "#4B8673",
                color: "white",
                height: "100px",
                width: "400px",
                margin: "auto",
                padding: "3px",
                marginBottom: "16px",
              }}
            >
              <Stack direction={"row"}>
                <Stack style={{ padding: "20px", textAlign: "left" }}>
                  <Typography variant="h5" component="h2">
                    Adam Galindo
                  </Typography>
                  <Typography variant="body1" component="h2">
                    Role
                  </Typography>
                </Stack>
              </Stack>
            </Card>
          </Stack>
          <Stack
            style={{ flex: "1", marginLeft: "10px" }}
            sx={{ width: "400px" }}
          >
            <Card
              style={{
                backgroundColor: "#4B8673",
                color: "white",
                height: "100px",
                width: "400px",
                margin: "auto",
                padding: "3px",
                marginBottom: "16px",
              }}
            >
              <Stack direction={"row"}>
                <Stack style={{ padding: "20px", textAlign: "left" }}>
                  <Typography variant="h5" component="h2">
                    Samantha Kuenzi
                  </Typography>
                  <Typography variant="body1" component="h2">
                    Role
                  </Typography>
                </Stack>
              </Stack>
            </Card>
            <Card
              style={{
                backgroundColor: "#4B8673",
                color: "white",
                height: "100px",
                width: "400px",
                margin: "auto",
                padding: "3px",
                marginBottom: "16px",
              }}
            >
              <Stack direction={"row"}>
                <Stack style={{ padding: "20px", textAlign: "left" }}>
                  <Typography variant="h5" component="h2">
                    Daniel Patterson
                  </Typography>
                  <Typography variant="body1" component="h2">
                    Role
                  </Typography>
                </Stack>
              </Stack>
            </Card>
            <Card
              style={{
                backgroundColor: "#4B8673",
                color: "white",
                height: "100px",
                width: "400px",
                margin: "auto",
                padding: "3px",
                marginBottom: "16px",
              }}
            >
              <Stack direction={"row"}>
                <Stack style={{ padding: "20px", textAlign: "left" }}>
                  <Typography variant="h5" component="h2">
                    Ian Uriegas
                  </Typography>
                  <Typography variant="body1" component="h2">
                    Role
                  </Typography>
                </Stack>
              </Stack>
            </Card>
          </Stack>
        </div>
      </Stack>
    </div>
  );
}
