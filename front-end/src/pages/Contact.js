import React from "react";
import { Button, Card } from "@mui/material";
import { Stack } from "@mui/system";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Link } from "react-router-dom";

export default function Contact() {
  const handleSentMessage = () => {
    // Show the windows alert
    window.alert("Message successfully sent!");

    // Clear the form by setting the input values to an empty string
    const firstNameInput = document.getElementById("first-name-input");
    const lastNameInput = document.getElementById("last-name-input");
    const emailAddressInput = document.getElementById("email-address-input");
    const phoneNumberInput = document.getElementById("phone-number-input");
    const messageInput = document.getElementById("message-input");

    firstNameInput.value = "";
    lastNameInput.value = "";
    emailAddressInput.value = "";
    phoneNumberInput.value = "";
    messageInput.value = "";
  };

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
              <a
                href="tel:2175551212"
                style={{ textDecoration: "none", color: "#FFFFFF" }}
              >
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
                  <MailOutlinedIcon />
                  <Typography variant="body1" style={{ marginLeft: "5px" }}>
                    customerservice@aztradingcards.com
                  </Typography>
                </Stack>
              </a>
            </div>
          </Stack>

          <Stack
            direction={"row"}
            spacing={0.5}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-end",
              color: "#FFFFFF",
              paddingTop: "100px",
            }}
          >
            <a
              href="https://www.facebook.com/TCGplayer/"
              target="blank"
              style={{ color: "white" }}
            >
              <FacebookIcon style={{ fontSize: 40 }}></FacebookIcon>
            </a>
            <a
              href="https://www.instagram.com/tcgplayer_com/?hl=en"
              target="blank"
              style={{ color: "white" }}
            >
              <InstagramIcon style={{ fontSize: 40 }}></InstagramIcon>
            </a>
            <a
              href="https://twitter.com/TCGplayer?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
              target="blank"
              style={{ color: "white" }}
            >
              <TwitterIcon style={{ fontSize: 40 }}></TwitterIcon>
            </a>
            <a
              href="https://www.pinterest.com/search/pins/?q=tcg%20player&rs=typed"
              target="blank"
              style={{ color: "white" }}
            >
              <PinterestIcon style={{ fontSize: 40 }}></PinterestIcon>
            </a>
            <a
              href="https://www.linkedin.com/company/tcgplayer/"
              target="blank"
              style={{ color: "white" }}
            >
              <LinkedInIcon style={{ fontSize: 40 }}></LinkedInIcon>
            </a>
            <a
              href="https://github.com/TCGplayer"
              target="blank"
              style={{ color: "white" }}
            >
              <GitHubIcon style={{ fontSize: 40 }}></GitHubIcon>
            </a>
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
                id="first-name-input"
              />
              <TextField
                label="Last Name"
                variant="standard"
                inputProps={{ style: { width: "250px" } }}
                id="last-name-input"
              />
            </div>
            <div style={{ marginTop: "20px", display: "flex", gap: "30px" }}>
              <TextField
                label="Email Address"
                variant="standard"
                inputProps={{ style: { width: "250px" } }}
                id="email-address-input"
              />
              <TextField
                label="Phone Number"
                variant="standard"
                inputProps={{ style: { width: "250px" } }}
                id="phone-number-input"
              />
            </div>
            <div style={{ marginTop: "20px", display: "flex" }}>
              <TextField
                label="Write your message here..."
                multiline
                rows={4}
                variant="standard"
                inputProps={{ style: { width: "530px" } }}
                id="message-input"
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
                onClick={handleSentMessage}
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
