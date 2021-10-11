import React from "react";
import "./services.css";
import { Link } from "react-router-dom";
const DigitalMarketing = () => {
  return (
    <>
      <div class="parent">
        <div class="div1">
          <img
            src="https://itartificer.com/wp-content/uploads/2019/01/Search-Engine-Optimization.jpg"
            style={{
              width: "100%",
              padding: "10px",
            }}
            alt="img"
          />
          <h3 className="subsides">
            Digital Marketing Services
          </h3>
          <h3 className="subHeading">
            Digital Marketing Services
          </h3>

          <p className="subsidesSubText">
            Services provide throughout Khyber
            Pakhtunkhawa like Bill Boards, Tv
            Comercial Radio Commercials google
            Adwords advertisements, and so on.
            <br />
            <br />
            Search Engine Optimization is one of
            the key successes of today’s
            businesses Promotions. To position
            your site in the right place and
            attract potential customers is so
            important to stay in the lead of your
            competitors. Your desire of being in
            the top major search engines is no
            more a fantasy.
            <br />
            <br />
            Search engines are the key drivers of
            a website. Customers are constantly
            using these engines to find the
            service of their interest. At IT
            Artificer we offer complete Search
            Engine Ranking Solutions that assure
            Higher Visibility of your Website
          </p>
          <h5
            style={{
              fontSize: "20px",
              color: "#6e6e6e",
              textDecoration: "underline",
              padding: "10px",
            }}
          >
            How Can SEO Help Your Company?
          </h5>
          <p className="subsidesSubText">
            Search engine optimization (SEO) is a
            critical component of online
            marketing. Search engine optimization
            (SEO) is a critical component of
            online marketing. We use a combination
            of the latest onsite and off-site
            strategies to produce top results.
            <br />
            <br />
            Google processes billions of searches
            every day, and the vast majority of
            searchers never look beyond the first
            page. Do you know where your company
            ranks? If it’s not at the top of the
            rankings, it might as well be
            invisible. Together we can push your
            website above your competition.
          </p>
          <h5
            style={{
              fontSize: "20px",
              color: "#6e6e6e",
              textDecoration: "underline",
              padding: "10px",
            }}
          >
            How Does SEO Work?
          </h5>
          <h6
            style={{
              fontSize: "15px",
              color: "#6e6e6e",
              textDecoration: "underline",
              padding: "10px",
            }}
          >
            Keyword Research
          </h6>

          <p className="subsidesSubText">
            The foundation of a great SEO campaign
            starts by identifying the most
            effective keywords. This process is
            about gaining insight into your
            consumers’ questions and concerns
          </p>
          <h6
            style={{
              fontSize: "15px",
              color: "#6e6e6e",
              textDecoration: "underline",
              padding: "10px",
            }}
          >
            Competitive Analysis
          </h6>

          <p className="subsidesSubText">
            There are a lot of companies competing
            for the same keywords. We’ll analyze
            their strengths and weaknesses to find
            new opportunities for your continued
            online growth.
          </p>

          <h6
            style={{
              fontSize: "15px",
              color: "#6e6e6e",
              textDecoration: "underline",
              padding: "10px",
            }}
          >
            Link Building
          </h6>

          <p className="subsidesSubText">
            Links from established and
            high-quality sites drive relevant
            traffic to your site and build
            authority in Google.
          </p>

          <h6
            style={{
              fontSize: "15px",
              color: "#6e6e6e",
              textDecoration: "underline",
              padding: "10px",
            }}
          >
            Regular blog posts
          </h6>

          <p className="subsidesSubText">
            User experience defines on-site
            optimization. Everything from website
            copy to the structure of your
            navigation contribute to an optimized
            experience for users and search
            engines.
          </p>

          <h6
            style={{
              fontSize: "15px",
              color: "#6e6e6e",
              textDecoration: "underline",
              padding: "10px",
            }}
          >
            Signage{" "}
          </h6>

          <p className="subsidesSubText">
            Your brand identity should be obvious,
            even on the sign above your door.
            Carry your messaging across your
            marketing assets, including your
            signage.
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

export default DigitalMarketing;
