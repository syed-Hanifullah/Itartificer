import React from "react";
import "./topNav.css";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import CallIcon from "@material-ui/icons/Call";
import EmailIcon from "@material-ui/icons/Email";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";
const TopNav = () => {
  return (
    <div className="topNav">
      <ul className="topNavUL">
        <li className="topNavLI">
          <span href="#home">
            <LocationOnIcon
              style={{
                fontSize: "20px",
                marginBottom: "-5px",
                marginRight: "6px",
              }}
            />
            Peshawar Board, KPK , Pakistan
          </span>
        </li>
        <li className="topNavLI">
          <span href="#news">
            <CallIcon
              style={{
                fontSize: "18px",
                marginBottom: "-5px",
                marginRight: "6px",
              }}
            />
            +92-333-9296314
          </span>
        </li>
        <li className="topNavLI">
          <span href="#contact">
            {" "}
            <EmailIcon
              style={{
                marginRight: "6px",
                fontSize: "18px",
                marginBottom: "-5px",
              }}
            />
            info@itartificer.com
          </span>
        </li>
        <li
          style={{
            float: "right",
            backgroundColor: "#1a2d51",
          }}
          className="topNavLILEFT"
        >
          <a href="#facebook">
            <FacebookIcon
              style={{
                marginRight: "12px",
                fontSize: "24px",
                marginBottom: "-15px",
              }}
            />
          </a>

          <a href="#twitter">
            <TwitterIcon
              style={{
                marginRight: "12px",

                fontSize: "24px",
                marginBottom: "-15px",
              }}
            />
          </a>

          <a href="#youtube">
            <YouTubeIcon
              style={{
                marginRight: "12px",
                fontSize: "24px",
                marginBottom: "-15px",
              }}
            />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default TopNav;
