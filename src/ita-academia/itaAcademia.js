import React from "react";
import "./itaAcademia.css";
import { Link } from "react-router-dom";
const ItaAcademia = () => {
  return (
    <>
      <div class="parent">
        <div class="div1">
          <h3 className="subsides">
            ITA Academia
          </h3>
          <h3 className="subHeading">
            ITA Academia
          </h3>
          <p className="subsidesSubText">
            IT Artificer not only provide Website
            Development, Software Development,
            Information Technology Services but
            also provide Quality Training for
            Computer Interested Student, For that
            IT Artificer Founded ITA Academia to
            give High Quality and Market Oriented
            training to the student of Information
            Technology and Computer Science.
            <br />
            <br />
            The Key Courses and Training We
            Provide are as follow
          </p>
          <h4 className="courseName">
            Web Designing
          </h4>
          <h4 className="courseName">HTML </h4>
          <ul>
            <li>
              It is the standard markup language
              for creating Web pages.
            </li>
            <li>
              It Stands for Hyper Text Markup
              Language
            </li>
            <li>
              Describes the structure of Web pages
              using markup
            </li>
            <li>
              Elements are the building blocks of
              HTML pages
            </li>
            <li>
              Tags label Contains pieces of
              content such as “heading”,
              “paragraph”, “table”, and so on
            </li>
            <li>
              Browsers do not display the HTML
              tags, but use them to render the
              content of the page
            </li>
          </ul>

          <h4 className="courseName">CSS</h4>
          <ul>
            <li>
              CSS stands for Cascading Style
              Sheets.
            </li>
            <li>
              It describes how HTML elements are
              to be displayed on screen, paper, or
              in other media.
            </li>
            <li>
              Saves a lot of work. It can control
              the layout of multiple web pages all
              at once.
            </li>
            <li>
              Can be added to HTML elements in 3
              ways:
            </li>
            <li>
              Inline – by using the style
              attribute in HTML elements
            </li>
            <li>
              External – by using an external CSS
              file
            </li>
          </ul>
          <h4 className="courseName">
            PhotoShop | JavaScript | Bootstrap
          </h4>
          <ul>
            <li>
              Bootstrap is a free front-end
              framework for faster and easier web
              development
            </li>
            <li>
              Bootstrap includes HTML and CSS
              based design templates for
              typography, forms, buttons, tables,
              navigation, modals, image carousels
              and many other, as well as optional
              JavaScript plugins
            </li>
            <li>
              Bootstrap also gives you the ability
              to easily create responsive designs
            </li>
            <li>
              Bootstrap is the most popular HTML,
              CSS, and JavaScript framework for
              developing responsive, mobile-first
              websites.
            </li>
          </ul>

          <h4 className="courseName">
            Web Development PHP
          </h4>
          <ul>
            <li>
              PHP is a server scripting language,
              and a powerful tool for making
              dynamic and interactive Web pages.
            </li>
            <li>
              {" "}
              PHP is a widely-used, free, and
              efficient alternative to competitors
              such as Microsoft’s ASP.
            </li>
          </ul>
          <h4 className="courseName">MYSQL</h4>
          <ul>
            <li>
              SQL is a standard language for
              storing, manipulating and retrieving
              data in databases.
            </li>
            <li>
              Our SQL tutorial will teach you how
              to use SQL in: MySQL, SQL Server, MS
              Access, Oracle, Sybase, Informix,
              Postgres, and other database
              systems.
            </li>
            <li>
              SQL stands for Structured Query
              Language
            </li>
            <li>
              SQL lets you access and manipulate
              databases
            </li>
            <li>
              SQL became a standard of the
              American National Standards
              Institute (ANSI) in 1986, and of the
              International Organization for
              Standardization (ISO) in 1987
            </li>
          </ul>

          <h4 className="courseName">
            Frameworks
          </h4>
          <ul>
            <li>Cake PHP</li>
            <li>Code-igniter</li>
          </ul>

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

export default ItaAcademia;
