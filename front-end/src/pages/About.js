import { Box, Card, Stack, Typography } from "@mui/material";
import React from "react";

// const teamInfo = [{}]

export default function About() {
  return (
    <div style={{ padding: "24px 48px", textAlign: "center" }}>
      <Stack>
        <h1>About Us</h1>
        <h3>Core Team</h3>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Card
            style={{
              backgroundColor: "grey",
              height: "100px",
              width: "400px",
              margin: "auto",
              padding: "3px",
            }}
          >
            <Stack direction={"row"}>
              <Box
                style={{
                  backgroundColor: "yellow",
                  borderRadius: "50%",
                  width: "80px",
                  height: "80px",
                  marginLeft: "10px",
                  marginTop: "10px",
                }}
              ></Box>
              <Stack style={{ padding: "20px", textAlign: "left" }}>
                <Typography variant="h5" component="h2">
                  Team Member
                </Typography>
                <Typography variant="body1" component="h2">
                  Role
                </Typography>
              </Stack>
            </Stack>
          </Card>
        </div>
      </Stack>
    </div>
  );
}
