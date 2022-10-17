/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import logo from "../../assets/logo.png";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import { Box, IconButton, ListItem, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Search from "../../components/Search";
import AssignmentIcon from '@mui/icons-material/Assignment';
import GroupIcon from '@mui/icons-material/Group';
import DuoIcon from '@mui/icons-material/Duo';
import Testimonial from "../../components/testimonial";
import Footer from "../../components/footer";

export default function Home() {
  return (
    <div>
      <div className="homeFirst">
        <div className="bac">
          <img src={logo} width="200" className="logo_img" />
          <h1>Love Finder</h1>
        </div>
        <div className="proceed_bottom">
          <h4>Proceed To Search</h4>

          <a href="#searchAll">
            <IconButton>
              <KeyboardDoubleArrowDownIcon
                style={{ fontSize: "2em", color: "white" }}
              />
            </IconButton>
          </a>
        </div>
        <video
          className="home_vid"
          poster
          autoPlay
          loop
          muted
          style={{ filter: "blur(0px)" }}
        >
          <source
            src="https://img2.shaadi.com/assests/2018/vip-shaadi/vip-new.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <div
        id="searchAll"
        style={{ position: "relative", background: "white", height: "100vh" }}
      >
        <div className="css-h089nv">
          <div className="common_topNavWrap__j1YqX" data-testid="navbar" style={{ position: "sticky", top: "0" }}>
            <div className="css-unc1yq">
              <img
                className="logo_img"
                alt="Matrimony Service by Shaadi.com"
                title="Matrimony Service by Shaadi.com"
                src={logo}
                width="125px"
                height="142px"
              />
            </div>
            <div className="common_topRightNav__njFGj">
              <Link
                to="/login"
                data-testid="login_link"
                href=""
                className="common_login__Cxwgs css-ny049c"
                style={{ color: "black", fontWeight: 1000 }}
              >
                Login<span style={{ color: "black", fontWeight: 1000 }} className="css-jdisn5"></span>
              </Link>
            </div>
          </div>
          <div>
            <h1
              data-testid="homepage_headline"
              style={{
                color: "white",
                textAlign: "center",
                marginTop: "365px",
              }}
            >
              The World's No.1 Matchmaking Service
            </h1>
            <div
              style={{
                color: "white",
                textAlign: "center",
                marginTop: "5px",
                fontSize: "20px",
              }}
            >
              Search by City, Profession &amp; Community
            </div>

            <div>
              <Search />
            </div>
          </div>
        </div>
      </div>
      <div

        style={{ position: "relative", background: "white", height: "100vh", margin: "auto", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}
      >
        <Typography variant="h4" sx={{ display: "block" }} color="purple">
          Find your Special Someone
        </Typography>

        <Box sx={{ mt: 12 }} className="divAnimate">
          <Stack spacing={10} direction="row">
            <Stack spacing={2} direction="column" justifyContent={"center"} alignItems={"center"}>

              <div>
                <IconButton sx={{ borderRadius: "50%", height: "150px", width: "150px", backgroundColor: "deeppink" }}>

                  <AssignmentIcon sx={{ fontSize: "5em", color: "white" }} />
                </IconButton>
              </div>
              <div style={{ textAlign: "center" }}>
                <Typography variant="h5">
                  Sign Up
                </Typography>
                <Typography variant="body2">
                  Register for free & put up your Matrimony Profile
                </Typography>
              </div>
            </Stack>

            <Stack spacing={2} direction="column" justifyContent={"center"} alignItems={"center"}>

              <div>
                <IconButton sx={{ borderRadius: "50%", height: "150px", width: "150px", backgroundColor: "deeppink" }}>

                  <GroupIcon sx={{ fontSize: "5em", color: "white" }} />
                </IconButton>
              </div>
              <div style={{ textAlign: "center" }}>
                <Typography variant="h5">
                  Connect
                </Typography>
                <Typography variant="body2">
                  Select & Connect with Matches you like
                </Typography>
              </div>
            </Stack>

            <Stack spacing={2} direction="column" justifyContent={"center"} alignItems={"center"}>

              <div>
                <IconButton sx={{ borderRadius: "50%", height: "150px", width: "150px", backgroundColor: "deeppink" }}>

                  <DuoIcon sx={{ fontSize: "5em", color: "white" }} />
                </IconButton>
              </div>
              <div style={{ textAlign: "center" }}>
                <Typography variant="h5">
                  Interact
                </Typography>
                <Typography variant="body2">
                  Become a Premium Member & Start a Conversation
                </Typography>
              </div>
            </Stack>
          </Stack>
        </Box>
      </div>
      <div
        style={{ position: "relative", background: "white", height: "100vh", margin: "auto", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}
      >
        <Typography variant="h4" sx={{ display: "block" }} color="purple">

          6 Million Success Stories & Counting
        </Typography>

        <Box sx={{ mt: 12 }} className="divAnimate">
          <Testimonial />
        </Box>
      </div>
      <Footer />
    </div>
  );
}
