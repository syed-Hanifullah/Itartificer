import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <>
      <footer
        class="footer"
        style={{ backgroundColor: "#2f2f2f" }}
      >
        <div class="footer__addr">
          <h1 class="footer__logo">
            More About ITA
          </h1>
          <address>
            IT Artificer Serving its Services all
            over the world specially in Pakistan,
            America, England, Afghanistan, UAE and
            India. We employ a skilled team of
            developers who are totally focused on
            delivering high quality software
            solutions which enable our customers
            to achieve their critical IT
            objectives.
            <br />
            <div className="footerIcons">
              {" "}
              <div class="footersquare facebook">
                <a href="#facebook">
                  {" "}
                  <i class="fa fa-facebook-f ficon"></i>
                </a>
              </div>
              <div class="footersquare twitter">
                <a href="#twitter">
                  {" "}
                  <i class="fa  fa-twitter ticon"></i>
                </a>
              </div>{" "}
              <div class="footersquare youtube">
                <a href="#youtube">
                  {" "}
                  <i class="fa fa-youtube yicon"></i>
                </a>
              </div>
            </div>
          </address>
        </div>

        <ul
          class="footer__nav"
          style={{ backgroundColor: "#2f2f2f" }}
        >
          <li
            class="nav__item"
            style={{ backgroundColor: "#2f2f2f" }}
          >
            <h2
              class="nav__title"
              style={{
                backgroundColor: "#2f2f2f",
              }}
            >
              Recent Posts
            </h2>

            <ul
              class="nav__ul"
              style={{
                backgroundColor: "#2f2f2f",
              }}
            >
              <li
                style={{
                  backgroundColor: "#2f2f2f",
                }}
              >
                <a href="#">
                  12 TIPS FOR WRITING EFFECTIVE
                  EMAILS June 5, 2021
                </a>
              </li>

              <li
                style={{
                  backgroundColor: "#2f2f2f",
                }}
              >
                <a href="#">
                  American IT Company Proposed
                  Tech City in KP March 5, 2021
                </a>
              </li>
            </ul>
          </li>

          <li
            class="nav__item nav__item--extra"
            style={{ backgroundColor: "#2f2f2f" }}
          >
            <h2 class="nav__title">
              Advanced Recent Posts
            </h2>

            <ul
              class="nav__ul nav__ul--extra"
              style={{
                backgroundColor: "#2f2f2f",
              }}
            >
              <li
                style={{
                  backgroundColor: "#2f2f2f",
                }}
              >
                <a href="#">
                  12 TIPS FOR WRITING EFFECTIVE
                  EMAILS June 5, 2021
                </a>
              </li>
              <img
                style={{
                  width: "100px",
                  height: "100px",
                }}
                src="https://itartificer.com/wp-content/uploads/2021/06/12-Tips-is-insight-in-action.-370x500.x88743.png"
              />

              <li
                style={{
                  backgroundColor: "#2f2f2f",
                }}
              >
                <a href="#">
                  Digital Productivity Tools for
                  Startups February 28, 2021
                </a>
              </li>
              <img
                style={{
                  width: "100px",
                  height: "100px",
                }}
                src="https://itartificer.com/wp-content/uploads/2021/05/Digital-Productivity-Tools-370x235.x88743.jpg"
              />
            </ul>
          </li>

          <li
            class="nav__item"
            style={{ backgroundColor: "#2f2f2f" }}
          >
            <h2 class="nav__title">
              FaceBook Page
            </h2>

            <ul
              class="nav__ul"
              style={{
                backgroundColor: "#2f2f2f",
              }}
            >
              <img
                style={{
                  width: "200px",
                  height: "150px",
                }}
                src="https://itartificer.com/wp-content/uploads/2019/08/Software-Services.jpg"
                alt="facebook img"
              />
            </ul>
          </li>
        </ul>

        <div class="legal">
          <p>
            {" "}
            Copyright © IT Artificer. All rights
            reserved! .
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
