import React from "react";
import "./contact.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/fontawesome-free-solid";
import { faMapMarkerAlt } from "@fortawesome/fontawesome-free-solid";
import { faEnvelope } from "@fortawesome/fontawesome-free-solid";
import { faPhone } from "@fortawesome/fontawesome-free-solid";
import GoogleMapReact from "google-map-react";

const Contact = () => {
  const data = {
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 11,
  };
  return (
    <>
      <div class="parent">
        <div class="div1">
          <h3 className="subsides">Contact us</h3>
          <h3 className="subHeading">
            Contact us
          </h3>
          <p
            className="subsidesSubText"
            style={{ color: "black" }}
          >
            <FontAwesomeIcon
              icon={faClock}
              style={{
                fontSize: "20px",
                marginRight: "5px",
                color: "black",
              }}
            />
            Business Hour : Monday – Saturday : 09
            am to 6pm
          </p>
          <br />
          <p
            className="subsidesSubText"
            style={{ color: "black" }}
          >
            <FontAwesomeIcon
              icon={faMapMarkerAlt}
              style={{
                fontSize: "20px",
                marginRight: "5px",
                color: "black",
              }}
            />
            Address : PTCL Training Center
            Peshawar Board, Pakistan
          </p>
          <br />
          <p
            className="subsidesSubText"
            style={{ color: "black" }}
          >
            <FontAwesomeIcon
              icon={faEnvelope}
              style={{
                fontSize: "20px",
                marginRight: "5px",
                color: "black",
              }}
            />
            E-mail : info@itartificer.com
          </p>
          <br />
          <p
            className="subsidesSubText"
            style={{ color: "black" }}
          >
            <FontAwesomeIcon
              icon={faPhone}
              style={{
                fontSize: "20px",
                marginRight: "5px",
                color: "black",
              }}
            />
            Telephone : +92-333-9296314
          </p>
          <br />
          <p
            className="subsidesSubText"
            style={{ color: "black" }}
          >
            Skype us : itartificer
          </p>
          <br />

          <h3 className="subHeading">
            IT Artificer
          </h3>

          <div
            style={{
              height: "100vh",
              width: "100%",
            }}
          >
            <GoogleMapReact
              bootstrapURLKeys={{
                key:
                  "AIzaSyDVYK2UmtcSpoIokxnFqlcgR4YUBqNF4Aw",
              }}
              defaultCenter={data.center}
              defaultZoom={data.zoom}
            ></GoogleMapReact>
          </div>

          <form style={{ padding: "20px" }}>
            <label
              HTMLFor="fname"
              style={{
                color: "gray",
                fontSize: "20px",
                fontWeight: "500",
              }}
            >
              Your Name (required)
            </label>
            <input
              type="text"
              id="fname"
              name="fname"
            />
            <label
              HTMLFor="lname"
              style={{
                color: "gray",
                fontSize: "20px",
                fontWeight: "500",
              }}
            >
              Contact No (required)
            </label>
            <input
              type="number"
              id="lname"
              name="lname"
            />

            <label
              HTMLFor="fname"
              style={{
                color: "gray",
                fontSize: "20px",
                fontWeight: "500",
              }}
            >
              Your Email (required)
            </label>
            <input
              type="text"
              id="fname"
              name="fname"
            />
            <label
              HTMLFor="query"
              style={{
                color: "gray",
                fontSize: "20px",
                fontWeight: "500",
              }}
            >
              Your Query
            </label>
            <br />
            <textarea
              style={{ width: " 100%" }}
              id="query"
              rows="5"
            ></textarea>

            <input type="submit" />
          </form>

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
            <Link
              style={{
                textDecoration: "none",
                color: "#6e6e6e",
              }}
              to="/digitalMarketing"
            >
              {" "}
              Digital Marketing
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
            <Link
              style={{
                textDecoration: "none",
                color: "#6e6e6e",
              }}
              to="/webDevelopment"
            >
              Web Development
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
            <Link
              style={{
                textDecoration: "none",
                color: "#6e6e6e",
              }}
              to="/mobile-app-dev"
            >
              Mobile Applications
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
            <Link
              style={{
                textDecoration: "none",
                color: "#6e6e6e",
              }}
              to="/graphicsDesinging"
            >
              Graphics Desiging
            </Link>{" "}
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
            <Link
              style={{
                textDecoration: "none",
                color: "#6e6e6e",
              }}
              to="/E-bussiness"
            >
              E-commerce
            </Link>{" "}
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
            <Link
              style={{
                textDecoration: "none",
                color: "#6e6e6e",
              }}
              to="/contentWriting"
            >
              Content Writing
            </Link>{" "}
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
            <Link
              style={{
                textDecoration: "none",
                color: "#6e6e6e",
              }}
              to="/fypIdeas"
            >
              FYP ideas
            </Link>{" "}
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

export default Contact;
