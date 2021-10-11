import React from "react";
import "./nav.css";
import Accordian from "./../accordian/accordian";
import { Link } from "react-router-dom";
const MainNav = () => {
  return (
    <>
      <div className="Nav">
        <div className="MainNavImg">
          <img
            src="https://itartificer.com/wp-content/uploads/2018/06/cropped-IT-Artificer-Logo-1-2.x88743.png"
            alt=""
          />
        </div>

        <div class="navbar">
          <Link
            to="/home"
            style={{ marginTop: "16px" }}
          >
            Home
          </Link>

          <div class="dropdown">
            <button class="dropbtn">
              <Link to="aboutUs">
                {" "}
                About us
                <i
                  style={{ padding: "5px" }}
                  class="fa fa-angle-down"
                ></i>
              </Link>
            </button>
            <div class="dropdown-content">
              <Link to="/ourTeam">our team</Link>
              <Link to="/testimonials">
                testimonial
              </Link>
            </div>
          </div>
          <div class="dropdown">
            <button class="dropbtn">
              <Link to="/subSides">
                {" "}
                sub sides
                <i
                  style={{ padding: "5px" }}
                  class="fa fa-angle-down"
                ></i>
              </Link>
            </button>
            <div class="dropdown-content">
              <Link to="/itaAcedamia">
                ita acedamia
              </Link>
              <Link to="/itaRcenter">
                ita r.center
              </Link>
              <Link to="/itaKalewal">
                ita kalewal
              </Link>
            </div>
          </div>
          <div class="dropdown">
            <button class="dropbtn">
              <Link to="/products">
                {" "}
                products
                <i
                  style={{ padding: "5px" }}
                  class="fa fa-angle-down"
                ></i>
              </Link>
            </button>
            <div class="dropdown-content">
              <Link to="/pointOfSale">
                point of sale
              </Link>
              <Link to="/schoolMis">
                school mis
              </Link>
              <Link to="/currencyMis">
                currency mis
              </Link>
              <Link to="/hajjUmrahMis">
                hajj umrah mis
              </Link>
              <Link to="/REstateMis">
                real estate software
              </Link>
            </div>
          </div>
          <div class="dropdown">
            <button class="dropbtn">
              <Link to="/services">
                services
                <i
                  style={{ padding: "5px" }}
                  class="fa fa-angle-down"
                ></i>
              </Link>
            </button>
            <div class="dropdown-content">
              <Link to="/domainHosting">
                Domain | hosting
              </Link>
              <Link to="/digitalMarketing">
                digital marketing
              </Link>
              <Link to="/webDevelopment">
                web development
              </Link>
              <Link to="/mobile-app-dev">
                mobile application
              </Link>
              <Link to="/graphicsDesinging">
                graphics designing
              </Link>
              <Link to="/software-dev">
                software apps
              </Link>
              <Link to="/E-bussiness">
                e-commerce
              </Link>
              <Link to="/contentWriting">
                content writing
              </Link>
              <Link to="/fypIdeas">
                fyp ideas
              </Link>
            </div>
          </div>
          <div class="dropdown">
            <button class="dropbtn">
              <Link to="/playStore">
                {" "}
                play store
                <i
                  style={{ padding: "5px" }}
                  class="fa fa-angle-down"
                ></i>
              </Link>
            </button>
            <div class="dropdown-content">
              <a href="#">Our Apps</a>
              <Link to="/privacyPolicy">
                our policy
              </Link>
            </div>
          </div>
          <Link
            to="/blog"
            style={{ marginTop: "16px" }}
          >
            blog
          </Link>
          <div class="dropdown">
            <button class="dropbtn">
              <Link to="/contact">
                contact
                <i
                  style={{ padding: "5px" }}
                  class="fa fa-angle-down"
                ></i>
              </Link>
            </button>
            <div class="dropdown-content">
              <Link to="/apply-for-training">
                for trainings
              </Link>
              <Link to="/apply-for-jobs">
                for jobs
              </Link>
              <Link to="/internship-in-peshawar-software-house">
                for internship
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="navResponsive">
        <div className="resBtn">
          <Accordian />
        </div>
      </div>
    </>
  );
};

export default MainNav;
