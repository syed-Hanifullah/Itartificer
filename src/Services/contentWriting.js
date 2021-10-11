import React from "react";
import "./services.css";
import { Link } from "react-router-dom";

const ContentWriting = () => {
  return (
    <>
      <div class="parent">
        <div class="div1">
          <h3 className="subsides">
            Content Writing
          </h3>
          <h3 className="subHeading">
            Content Writing
          </h3>

          <h5
            style={{
              fontSize: "20px",
              color: "#6e6e6e",
              textDecoration: "underline",
              padding: "10px",
            }}
          >
            Content Management System
          </h5>
          <p className="subsidesSubText">
            Content management system abbreviated
            as CMS is software or a tool that
            allows creating, editing, publishing
            and modifying content within a
            website. CMS provides a web-based GUI,
            enabling publishers to access the CMS
            online using only a Web browser. CMS
            helps greatly in managing your content
            like text, image, video or audio.
          </p>
          <h5
            style={{
              fontSize: "20px",
              color: "#6e6e6e",
              padding: "10px",
            }}
          >
            5 Reasons to use a web content
            managment system
          </h5>

          <p className="subsidesSubText">
            1) You dont need to be a programmer No
            knowledge of HTML or other programming
            language necessary!
            <br />
            <br />
            2) No Special Software Needed! with
            interport CMS, all web edits are madde
            in your browser (eg. Google Chrome)
            <br />
            <br />
            3) Instant Updates! Update your
            website on your schedule in an instant
            <br />
            <br />
            4) Redign? No Problem! Update the look
            of your website without having to
            rebuilt the whole thing from scratch!
            <br />
            <br />
            5) Increase Functionality Through
            Modules. Blog Modules, calenders,
            sliders, RSS feeds and more with
            little to no setup time.
          </p>

          {/* /////////////////////////////////////////////////////////// */}
          {/* /////////////////////////////////////////////////////////// */}
          <hr
            style={{
              width: "10%",
              float: "left",
              border: "0",
              height: "0",
              borderTop:
                "1px solid rgba(0, 0, 0, 0.1)",
              borderBottom:
                "1px solid rgba(255, 255, 255, 0.3)",
            }}
          />
          <p className="shareBtns">Share this:</p>
          <br />
          <div className="btns">
            {" "}
            <button>
              <i
                className="fa fa-twitter"
                style={{
                  fontSize: "20px",
                  color: "	#1DA1F2",
                }}
              >
                {" "}
              </i>
              <span style={{ fontSize: "18px" }}>
                {" "}
                twitter
              </span>
            </button>
            <button>
              <i
                className="fa fa-facebook"
                style={{
                  fontSize: "20px",
                  color: "#4267B2",
                }}
              >
                {" "}
              </i>
              <span style={{ fontSize: "18px" }}>
                {" "}
                facebook
              </span>
            </button>
          </div>
        </div>
        <div class="div2">
          <input
            type="text"
            placeholder="Search..."
          />
          <button className="searchbtn">
            search
          </button>
        </div>
        <div class="div3">
          <h2
            style={{
              textAlign: "center",
              fontSize: "25px",
              fontWeight: "400",
              borderBottom: "2px solid #1a2d51",
              lineHeight: "1",
              paddingBottom: "15px",

              marginBottom: "20px",
            }}
          >
            Our Services
          </h2>
          <p
            style={{
              padding: " 10px 10px",
              borderBottom: "1px dashed #ddd",
              backgroundColor: " #fff",
              color: " #6e6e6e",
              fontSize: "18px",
              lineHeight: " 24px",
              alignItem: "center",
              margin: "5px",
              cursor: "pointer",
            }}
          >
            <Link
              style={{
                textDecoration: "none",
                color: "#6e6e6e",
              }}
              to="/domainHosting"
            >
              {" "}
              Domain | Hosting
            </Link>
          </p>
          <p
            style={{
              padding: " 10px 10px",
              borderBottom: "1px dashed #ddd",
              backgroundColor: " #fff",
              color: " #6e6e6e",
              fontSize: "18px",
              lineHeight: " 24px",
              alignItem: "center",
              margin: "5px",
              cursor: "pointer",
            }}
          >
            Digital Marketing{" "}
          </p>
          <p
            style={{
              padding: " 10px 10px",
              borderBottom: "1px dashed #ddd",
              backgroundColor: " #fff",
              color: " #6e6e6e",
              fontSize: "18px",
              lineHeight: " 24px",
              alignItem: "center",
              margin: "5px",
              cursor: "pointer",
            }}
          >
            Web Development
          </p>
          <p
            style={{
              padding: " 10px 10px",
              borderBottom: "1px dashed #ddd",
              backgroundColor: " #fff",
              color: " #6e6e6e",
              fontSize: "18px",
              lineHeight: " 24px",
              alignItem: "center",
              margin: "5px",
              cursor: "pointer",
            }}
          >
            Mobile Application
          </p>
          <p
            style={{
              padding: " 10px 10px",
              borderBottom: "1px dashed #ddd",
              backgroundColor: " #fff",
              color: " #6e6e6e",
              fontSize: "18px",
              lineHeight: " 24px",
              alignItem: "center",
              margin: "5px",
              cursor: "pointer",
            }}
          >
            Graphic Designing
          </p>
          <p
            style={{
              padding: " 10px 10px",
              borderBottom: "1px dashed #ddd",
              backgroundColor: " #fff",
              color: " #6e6e6e",
              fontSize: "18px",
              lineHeight: " 24px",
              alignItem: "center",
              margin: "5px",
              cursor: "pointer",
            }}
          >
            E-Commerce
          </p>
          <p
            style={{
              padding: " 10px 10px",
              borderBottom: "1px dashed #ddd",
              backgroundColor: " #fff",
              color: " #6e6e6e",
              fontSize: "18px",
              lineHeight: " 24px",
              alignItem: "center",
              margin: "5px",
              cursor: "pointer",
            }}
          >
            Content Writing
          </p>
          <p
            style={{
              padding: " 10px 10px",
              backgroundColor: " #fff",
              color: " #6e6e6e",
              fontSize: "18px",
              lineHeight: " 24px",
              alignItem: "center",
              margin: "5px",
              cursor: "pointer",
            }}
          >
            FYP Ideas
          </p>
        </div>
        <div class="div4">
          <h2
            style={{
              textAlign: "center",
              fontSize: "25px",
              fontWeight: "400",
              borderBottom: "2px solid #1a2d51",
              lineHeight: "1",
              paddingBottom: "15px",

              marginBottom: "20px",
            }}
          >
            Technology Updates
          </h2>
          <p
            style={{
              padding: " 10px 10px",
              borderBottom: "1px dashed #ddd",
              backgroundColor: " #fff",
              color: " #6e6e6e",
              fontSize: "18px",
              lineHeight: " 24px",
              alignItem: "center",
              margin: "5px",
              cursor: "pointer",
            }}
          >
            12 TIPS FOR WRITING EFFECTIVE EMAILS
            June 5, 2021
          </p>
          <p
            style={{
              padding: " 10px 10px",
              borderBottom: "1px dashed #ddd",
              backgroundColor: " #fff",
              color: " #6e6e6e",
              fontSize: "18px",
              lineHeight: " 24px",
              alignItem: "center",
              margin: "5px",
              cursor: "pointer",
            }}
          >
            American IT Company Proposed Tech City
            in KP March 5, 2021
          </p>
          <p
            style={{
              padding: " 10px 10px",
              borderBottom: "1px dashed #ddd",
              backgroundColor: " #fff",
              color: " #6e6e6e",
              fontSize: "18px",
              lineHeight: " 24px",
              alignItem: "center",
              margin: "5px",
              cursor: "pointer",
            }}
          >
            Digital Productivity Tools for
            Startups February 28, 2021
          </p>
          <p
            style={{
              padding: " 10px 10px",
              borderBottom: "1px dashed #ddd",
              backgroundColor: " #fff",
              color: " #6e6e6e",
              fontSize: "18px",
              lineHeight: " 24px",
              alignItem: "center",
              margin: "5px",
              cursor: "pointer",
            }}
          >
            The 5 Challenges of Small Business
            Digital Marketing January 20, 2021
          </p>
          <p
            style={{
              padding: " 10px 10px",
              backgroundColor: " #fff",
              color: " #6e6e6e",
              fontSize: "18px",
              lineHeight: " 24px",
              alignItem: "center",
              margin: "5px",
              cursor: "pointer",
            }}
          >
            14 Aug Independence Day of Pakistan
            August 14, 2020
          </p>
        </div>
        <div class="div5">
          <h2
            style={{
              textAlign: "center",
              fontSize: "25px",
              fontWeight: "400",
              borderBottom: "2px solid #1a2d51",
              lineHeight: "1",
              paddingBottom: "15px",

              marginBottom: "20px",
            }}
          >
            At a Glance
          </h2>
          <iframe src="https://youtu.be/KT4laW__Hog?controls=0"></iframe>
        </div>
      </div>
    </>
  );
};

export default ContentWriting;
