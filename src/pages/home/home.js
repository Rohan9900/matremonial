/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import logo from "../../assets/logo.png";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import Search from "../../components/Search";

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
          <div class="common_topNavWrap__j1YqX" data-testid="navbar">
            <div class="css-unc1yq">
              <img
                data-testid="shaadi_logo"
                alt="Matrimony Service by Shaadi.com"
                title="Matrimony Service by Shaadi.com"
                src={logo}
                width="125px"
                height="142px"
              />
            </div>
            <div class="common_topRightNav__njFGj">
              <a
                data-testid="login_link"
                href=""
                class="common_login__Cxwgs css-ny049c"
              >
                Login<span class="css-jdisn5"></span>
              </a>
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
    </div>
  );
}
