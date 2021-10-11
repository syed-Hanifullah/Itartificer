import React from "react";
import "./services.css";

import { Link } from "react-router-dom";
const EBussiness = () => {
  return (
    <>
      <div class="parent">
        <div class="div1">
          <h3 className="subsides">E-Business</h3>
          <h3 className="subHeading">
            E-Business
          </h3>

          <p className="subsidesSubText">
            E-business allows companies to link
            their internal and external processes
            more efficiently and effectively and
            work more closely with suppliers,
            customers, and partners to better
            satisfy their needs and expectations,
            leading to improvements in overall
            business performance.
          </p>
          <h5
            style={{
              fontSize: "20px",
              color: "#6e6e6e",
              textDecoration: "underline",
              padding: "10px",
            }}
          >
            Business Management Software
            integration
          </h5>
          <p className="subsidesSubText">
            Online Innovations is a
            long-established company, with the key
            members of the consulting team all
            having a mature knowledge of the
            business. We have a comprehensive
            understanding of best business
            practices and primary Business
            Management Software applications and
            take the time to research and
            understand your business and
            objectives, then deliver dependable
            e-business solutions that bring
            together and complete your business
            processes whilst delivering the
            correct brand message and positive
            user experience.
          </p>
          <h5
            style={{
              fontSize: "20px",
              color: "#6e6e6e",
              textDecoration: "underline",
              padding: "10px",
            }}
          >
            Online Business Processes
          </h5>

          <p className="subsidesSubText">
            E-business integrates business
            processes like sales, CRM, cataloging,
            support, production, purchasing and
            accounting seamlessly from the
            existing Business Management Systems
            to the web. By embracing e-business;
            businesses cut costs, increase sales,
            generate more leads and improve
            service.
            <br />
            <br />
            Taking your business processes online,
            allows customers and employees to
            interact with your Business Management
            System via a standard internet browser
            – desktop or mobile device. However,
            just like a professional telephone
            manner is important for your
            reception, it is also important that
            your online business tools make the
            correct first impression.
            <br />
            <br />
            Our team of software designers has a
            remarkable understanding of the visual
            nature of the web, a sound knowledge
            of the latest web technologies, design
            principles, and best business
            practices – and this ensures that
            Online Innovations deliver world-class
            business software solutions that are
            easy to use and are intuitive.
          </p>

          <h5
            style={{
              fontSize: "20px",
              color: "#6e6e6e",
              textDecoration: "underline",
              padding: "10px",
            }}
          >
            Electronic Business Security
          </h5>
          <p className="subsidesSubText">
            E-business systems inherently have
            greater security risks than
            traditional business systems,
            therefore it is important for
            e-business systeimport {Link} from
            'react-router-dom'; ms to be fully
            protected against these risks.
            Customers, suppliers, and employees
            may use your e-business system daily
            and expect their confidential
            information to stay secure.
            <br />
            <br />
            Online Innovations have a deep
            understanding of the internet and the
            security concerns for e-businesses and
            invest heavily in physical security
            measures as well as data storage, data
            transmission, anti-virus software,
            firewalls, encryption and skills to
            ensure that our customers business and
            customer information is kept private
            and confidential and that we can
            always offer sound data security
            advice.
          </p>

          <h5
            style={{
              fontSize: "20px",
              color: "#6e6e6e",
              textDecoration: "underline",
              padding: "10px",
            }}
          >
            E-Business Specialists
          </h5>
          <p className="subsidesSubText">
            Our aim is to assist and advise
            businesses on how to take the best
            advantage of the web technologies that
            help businesses work smarter not
            harder. Online Innovations tailor
            e-business solutions to fit their
            brand and their clients so they can do
            e-business on the internet with the
            confidence that their online goals
            will be met.
            <br />
            <br />
            Ecommerce Development Whether it is a
            big retail shop, a reputed brand or a
            small brick-n-mortar store, we work
            closely with merchants of all scales
            to create a digital bridge between the
            products and the potential customers.
            <br />
            <br />
            Our impeccable experience of working
            with thousands of e-commerce
            businesses takes us way beyond
            creating your website – and work with
            you closely to transform your online
            sales with definite e-commerce
            strategy, with marketing as well as
            engagement tactics.
            <br />
            <br />
            E-commerce Web Development Features
          </p>
          <ul>
            <li>Product management</li>
            <li>SEO management</li>
            <li>User friendly admin panel</li>
            <li>Easy product navigation</li>
            <li>Sub-admin management</li>
            <li>Tax, Vat, SKU etc management</li>
            <li>Quick and fast checkout</li>
            <li>Multiple Shipping options</li>
            <li>
              Memeber my folder Inventory &amp;
              stock management
            </li>
            <li>Brand management</li>
            <li>Gift coupon management</li>
            <li>Payment gateway integration</li>
            <li>CMS integration</li>
            <li>Product upselling tool</li>
            <li>SEO friendly architecture</li>
            <li>Product discount management</li>
            <li>
              Fully customized design
              <br />
            </li>
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

export default EBussiness;
