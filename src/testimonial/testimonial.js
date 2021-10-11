import React from "react";
import "./testimonial.css";
import { Link } from "react-router-dom";
const Testimonial = () => {
  return (
    <>
      <div class="parent">
        <div class="div1">
          <h1 className="ourTeam">
            Testimonials
          </h1>

          <div class="parentTest">
            <div class="Tdiv1">
              {" "}
              <p className="TdivP1">
                We have been delighted with the IT
                Artificer team. They have been a
                competent, knowledgeable and
                professional group of experts who
                have been able to show patience
                with our specific needs.
              </p>
              <br />
              <figure className="fig1">
                <p>
                  <img
                    className="scaled"
                    style={{ width: "100%" }}
                    src="https://itartificer.com/wp-content/uploads/2018/06/Uzair-Ahmad-1-150x150.jpg"
                  />
                </p>
                <figcaption>
                  <h4
                    className="Name"
                    style={{
                      fontStyle: "normal",
                      fontSize: "17px",
                    }}
                  >
                    Uzair Ahmad
                  </h4>
                  <p className="occupation">
                    Human Resource Manager @Uzair
                    TPL Transport Company
                  </p>
                </figcaption>
              </figure>{" "}
            </div>
            <div class="Tdiv2">
              {" "}
              <p className="TdivP1">
                We have been delighted with the IT
                Artificer team. They have been a
                competent, knowledgeable and
                professional group of experts who
                have been able to show patience
                with our specific needs.
              </p>
              <br />
              <figure className="fig1">
                <p>
                  <img
                    className="scaled"
                    style={{ width: "100%" }}
                    src="https://itartificer.com/wp-content/uploads/2017/09/sabihudin-150x150.jpg"
                  />
                </p>
                <figcaption>
                  <h4
                    className="Name"
                    style={{
                      fontStyle: "normal",
                      fontSize: "17px",
                    }}
                  >
                    Sabihuddin
                  </h4>
                  <p className="occupation">
                    Chief Executive Officer
                    @Al-Muntaha Typing Center
                    (UAE)
                  </p>
                </figcaption>
              </figure>
            </div>
          </div>

          {/* //////////////////////////////////////// */}
          {/* //////////////////////////////////////// */}
          {/* //////////////////////////////////////// */}

          <div class="parentTest">
            <div class="Tdiv1">
              {" "}
              <p className="TdivP1">
                Excellent services provided by IT
                Artificer Team. Designed superior
                websites for my company and have
                continuously demonstrated
                excellent support. We highly
                recommend and endorse them to any
                business or organization that
                wants to have the best possible
                online presence.
              </p>
              <br />
              <figure className="fig1">
                <p>
                  <img
                    className="scaled"
                    style={{ width: "100%" }}
                    src="https://itartificer.com/wp-content/uploads/2017/09/Dr.-Fawad-150x150.x88743.jpg"
                  />
                </p>
                <figcaption>
                  <h4
                    className="Name"
                    style={{
                      fontStyle: "normal",
                      fontSize: "17px",
                    }}
                  >
                    Dr. Fawad Khan
                  </h4>
                  <p className="occupation">
                    General Manager @Livestock and
                    Dairy Form Department
                  </p>
                </figcaption>
              </figure>{" "}
            </div>

            {/* ////////////////////////// */}
            <div class="Tdiv2">
              {" "}
              <p className="TdivP1">
                Absolutely fantastic in assisting
                us with managing all of our
                various websites and tech
                issues.They respond to our queries
                at all hours and even on weekends.
                It’s helpful to know that we have
                someone available to help us with
                even the most urgent of issues.
              </p>
              <br />
              <figure className="fig1">
                <p>
                  <img
                    className="scaled"
                    style={{ width: "100%" }}
                    src="https://itartificer.com/wp-content/uploads/2017/09/Shakir-150x150.jpg"
                  />
                </p>
                <figcaption>
                  <h4
                    className="Name"
                    style={{
                      fontStyle: "normal",
                      fontSize: "17px",
                    }}
                  >
                    Shakir Ullah
                  </h4>
                  <p className="occupation">
                    Chief Executive Officer @IT
                    Intellesence Software Company
                  </p>
                </figcaption>
              </figure>
            </div>
          </div>

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

export default Testimonial;
