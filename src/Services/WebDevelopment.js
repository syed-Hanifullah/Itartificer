import React from "react";
import "./services.css";
import { Link } from "react-router-dom";

const WebDevelopment = () => {
  return (
    <>
      <div class="parent">
        <div class="div1">
          <img
            src="https://itartificer.com/wp-content/uploads/2019/01/website-development-768x377.jpg"
            style={{
              width: "100%",
              padding: "10px",
            }}
          />
          <h3 className="subsides">
            Website Development
          </h3>
          <h3 className="subHeading">
            Website Development
          </h3>

          <p className="subsidesSubText">
            We design a strong online existence of
            a website that ensures fast and quick
            response. Our web designing experts
            ensures that your website is search
            engine friendly, aesthetically
            pleasing and user friendly.
            <br />
            ITA have many years of experience in
            combining the power of the Internet by
            developing dynamic and impressive
            websites enabling our customers to
            establish a unique online identity. We
            have a rich design and strong
            technical capabilities that help
            develop interesting and fast loading
            sites.
          </p>
          <h5
            style={{
              fontSize: "20px",
              color: "#6e6e6e",
              textDecoration: "underline",
              padding: "10px",
            }}
          >
            Results-Driven Development from Real
            Professionals
          </h5>
          <p className="subsidesSubText">
            Shifting design trends make many sites
            look dated and do not provide the
            functionality necessary to convert
            casual visitors into paying customers
            at the highest possible rate. If your
            site is stale like most, then it’s
            time for the true experts at SEO.com
            to refresh it or build it from scratch
            if necessary.
            <br />
            <br />
            Since 2012, our company has been a
            world leader in web development,
            online marketing, and search engine
            optimization; so we know exactly what
            it takes for businesses like yours to
            succeed online.
            <br />
            <br />
            We build websites that appeal directly
            to your market, convert visitors into
            paying customers better than most and
            are continuously optimized for the
            highest search engine placement.
          </p>
          <h5
            style={{
              fontSize: "20px",
              color: "#6e6e6e",
              textDecoration: "underline",
              padding: "10px",
            }}
          >
            Free Tools
          </h5>
          <p className="subsidesSubText">
            With every customer site, we include
            thousands of dollars worth of
            plug-ins, adding incredibly powerful
            software tools and website features
            for you—for free.
          </p>

          <h5
            style={{
              fontSize: "20px",
              color: "#6e6e6e",
              textDecoration: "underline",
              padding: "10px",
            }}
          >
            Why Build With Us?
          </h5>

          <h6
            style={{
              fontSize: "15px",
              color: "#6e6e6e",
              textDecoration: "underline",
              padding: "10px",
            }}
          >
            Simple to Maintain
          </h6>

          <p className="subsidesSubText">
            Because we build your site using
            WordPress, changing and updating your
            site is all point-and-click. You don’t
            need to be a developer to make
            changes.
          </p>
          <h6
            style={{
              fontSize: "15px",
              color: "#6e6e6e",
              textDecoration: "underline",
              padding: "10px",
            }}
          >
            Mobile Responsive
          </h6>

          <p className="subsidesSubText">
            Your site will look amazing no matter
            what type of device your customers are
            viewing it on. Our designs dynamically
            adjust for tablet and smartphone
            users.
          </p>

          <h6
            style={{
              fontSize: "15px",
              color: "#6e6e6e",
              textDecoration: "underline",
              padding: "10px",
            }}
          >
            Solid Foundation
          </h6>

          <p className="subsidesSubText">
            All our sites are built on
            search-friendly and flexible
            WordPress, incorporating HTML5 markup
            to prepare you for future web
            standards and microdata that increases
            your visibility for search engines.
          </p>

          <h6
            style={{
              fontSize: "15px",
              color: "#6e6e6e",
              textDecoration: "underline",
              padding: "10px",
            }}
          >
            Built-in Optimization
          </h6>

          <p className="subsidesSubText">
            We are search optimization experts and
            we make sure that your site will not
            only be found but stay competitive in
            search engines.
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

export default WebDevelopment;
