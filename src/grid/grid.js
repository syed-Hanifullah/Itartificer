import React from "react";
import "./grid.css";
import { Link } from "react-router-dom";
const Grid = () => {
  return (
    <>
      <div class="parent">
        <div class="div1">
          <img
            style={{
              width: "100%",
              padding: "20px",
            }}
            src="https://itartificer.com/wp-content/uploads/2019/08/1728838a-9079-4956-b2cb-fb8549115b5f.jpg"
            alt="sfdljsf"
          />
          <h1 className="ourTeam">Our Team</h1>
          <p className="teamSubText">
            We Come Together As A Team To Achieve
            A Common Goal
          </p>
          <p className="TeamExp">
            The IT Artificer team coming from a
            diverse set of backgrounds ranges from
            the designers to the developers under
            the supervision of CEO Haider Ali.
            <br />
            <br />
            IT Artificer team is working its best
            in the fields of Web Applications,
            Desktop Applications, Content Writing,
            SEO, Domain Hosting.
            <br />
            <br />
            The team uses its smarter skills to
            deliver outstanding results to its
            clients by sharing their mutual
            passion for information technology. We
            are glad to have such a team with
            smarter minds.
            {/* //////////////////////////////////////////////// */}
            {/* //////////////////////////////////////////////// */}
            {/* //////////////////////////////////////////////// */}
            <div className="Staffs">
              <figure className="fig1">
                <p>
                  <img
                    className="scaled"
                    src="https://itartificer.com/wp-content/uploads/2021/01/hgfsw.jpg"
                    alt="St. Tropez"
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
                    {" "}
                    Shayan Khan
                  </h4>
                  <p className="occupation">
                    Web Developer
                  </p>
                </figcaption>
              </figure>
              <figure className="fig1">
                <p>
                  <img
                    className="scaled"
                    src="https://itartificer.com/wp-content/uploads/2021/01/umar.jpg"
                    alt="St. Tropez"
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
                    {" "}
                    Umar Latif
                  </h4>
                  <p className="occupation">
                    Wordpress Developer
                  </p>
                </figcaption>
              </figure>
              <figure className="fig1">
                <p>
                  <img
                    className="scaled"
                    src="https://itartificer.com/wp-content/uploads/2021/01/2....-1.jpg"
                    alt="St. Tropez"
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
                    {" "}
                    Haris Nazir Khattak
                  </h4>
                  <p className="occupation">
                    Graphic Designer{" "}
                  </p>
                </figcaption>
              </figure>
              <figure className="fig1">
                <p>
                  <img
                    className="scaled"
                    src="https://itartificer.com/wp-content/uploads/2021/01/3......jpg"
                    alt="St. Tropez"
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
                    Fawad Khan
                  </h4>
                  <p className="occupation">
                    Software Developer{" "}
                  </p>
                </figcaption>
              </figure>
            </div>
            <div className="Staffs">
              <figure className="fig1">
                <p>
                  <img
                    className="scaled"
                    src="https://itartificer.com/wp-content/uploads/2021/01/1...yyy_-1.jpg"
                    alt="St. Tropez"
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
                    Ahmad Hassan Jan
                  </h4>
                  <p className="occupation">
                    Python Developer
                  </p>
                </figcaption>
              </figure>
              <figure className="fig1">
                <p>
                  <img
                    className="scaled"
                    src="https://itartificer.com/wp-content/uploads/2017/09/Haider_Ali_CEO.jpg"
                    alt="St. Tropez"
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
                    Haider Ali
                  </h4>
                  <p className="occupation">
                    Chief Executive Officer
                  </p>
                </figcaption>
              </figure>
              <figure className="fig1">
                <p>
                  <img
                    className="scaled"
                    src="https://itartificer.com/wp-content/uploads/2017/09/alam-1.jpg"
                    alt="St. Tropez"
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
                    Fakhr-e-Alam
                  </h4>
                  <p className="occupation">
                    Senior Developer{" "}
                  </p>
                </figcaption>
              </figure>
              <figure className="fig1">
                <p>
                  <img
                    className="scaled"
                    src="https://itartificer.com/wp-content/uploads/2017/09/Sheraz-Ahmad-IT-Artificer-1.jpg"
                    alt="St. Tropez"
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
                    Sheraz Ahmad
                  </h4>
                  <p className="occupation">
                    Software Engineer
                  </p>
                </figcaption>
              </figure>
            </div>
          </p>
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

export default Grid;
