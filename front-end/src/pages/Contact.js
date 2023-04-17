import React from "react";
import {
  Button,
  Card,
  FormControl,
  FormLabel,
  Input,
  InputLabel,
} from "@mui/material";
import { Stack } from "@mui/system";

import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import { Link } from "react-router-dom";

const ariaLabel = { "aria-label": "description" };

export default function Contact() {
  return (
    <div style={{ padding: "24px 48px", textAlign: "center" }}>
      <h1>Contact Us</h1>
      <div
        style={{
          position: "relative",
          height: "750px",
          width: "800px",
          margin: "auto",
        }}
      >
        {/* Right Card */}
        <Card
          elevation={10}
          style={{
            position: "absolute",
            top: 50,
            left: -180,
            height: "450px",
            width: "350px",
            backgroundColor: "#4B8673",
            zIndex: "2",
          }}
        >
          <Stack>
            <div
              style={{
                paddingTop: "40px",
                paddingLeft: "20px",
                paddingRight: "20px",
                paddingBottom: "40px",
                textAlign: "left",
                color: "#FFFFFF",
              }}
            >
              <Typography variant="h5" component="h2">
                Contact Info
              </Typography>
              <a
                href="https://www.google.com/maps/place/W+Oak+St,+Springfield,+IL+62704/@39.7805965,-89.657762,17z/data=!3m1!4b1!4m6!3m5!1s0x887539af2e18e835:0xfe49b1630c51dd64!8m2!3d39.7805965!4d-89.6551871!16s%2Fg%2F1thd2k78"
                target="blank"
                style={{ textDecoration: "none", color: "#FFFFFF" }}
              >
                <Stack direction={"row"} style={{ marginTop: "30px" }}>
                  <LocationOnOutlinedIcon />
                  <Typography variant="body1" style={{ marginLeft: "5px" }}>
                    456 Oak St, Springfield, IL 62704
                  </Typography>
                </Stack>
              </a>
              <a href="tel:2175551212" 
              style={{ textDecoration: "none", color: "#FFFFFF" }}>
                <Stack direction={"row"} style={{ marginTop: "30px" }}>
                  <LocalPhoneOutlinedIcon />
                  <Typography variant="body1" style={{ marginLeft: "5px" }}>
                    (217)-555-1212
                  </Typography>
                </Stack>
              </a>
              <a
                href="mailto:customerservice@aztradingcards.com"
                style={{ textDecoration: "none", color: "#FFFFFF" }}
              >
                <Stack direction={"row"} style={{ marginTop: "30px" }}>
                  <LocationOnOutlinedIcon />
                  <Typography variant="body1" style={{ marginLeft: "5px" }}>
                    customerservice@aztradingcards.com
                  </Typography>
                </Stack>
              </a>
            </div>
          </Stack>
        </Card>
        {/* Left Card */}
        <Card
          elevation={20}
          style={{
            position: "relative",
            height: "550px",
            backgroundColor: "#F6FBF4",
            zIndex: "1",
          }}
        >
          <Stack style={{ marginLeft: "215px", marginRight: "50px" }}>
            <div style={{ marginLeft: "-390px", marginTop: "60px" }}>
              <h3 style={{ color: "#4B8673" }}>Send a message:</h3>
            </div>
            <div style={{ marginTop: "10px", display: "flex", gap: "30px" }}>
              <TextField
                label="First Name"
                variant="standard"
                inputProps={{ style: { width: "250px" } }}
              />
              <TextField
                label="Last Name"
                variant="standard"
                inputProps={{ style: { width: "250px" } }}
              />
            </div>
            <div style={{ marginTop: "20px", display: "flex", gap: "30px" }}>
              <TextField
                label="Email Address"
                variant="standard"
                inputProps={{ style: { width: "250px" } }}
              />
              <TextField
                label="Phone Number"
                variant="standard"
                inputProps={{ style: { width: "250px" } }}
              />
            </div>
            <div style={{ marginTop: "20px", display: "flex" }}>
              <TextField
                label="Write your message here..."
                multiline
                rows={4}
                variant="standard"
                inputProps={{ style: { width: "530px" } }}
              />
            </div>
            <div style={{ marginTop: "40px", display: "flex" }}>
              <Button
                style={{
                  backgroundColor: "#4B8673",
                  color: "#FFFFFF",
                  width: "150px",
                  height: "50px",
                  cursor: "pointer",
                  transition: "background-color 0.5s",
                }}
                onMouseOver={(e) =>
                  (e.target.style.backgroundColor = "#356C56")
                }
                onMouseOut={(e) => (e.target.style.backgroundColor = "#4B8673")}
              >
                Send
              </Button>
            </div>
          </Stack>
        </Card>
      </div>
    </div>
  );
}
