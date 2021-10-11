import React from "react";
import "./hero.css";
const Hero = () => {
  return (
    <>
      <div className="container">
        <div className="img">
          <img
            src="https://itartificer.com/wp-content/uploads/2018/08/Software-Developement-Peshawar.x88743.jpg"
            alt=""
          />
          <div className="centered">
            Developing Ideas Into Shapes Is Our
            Art
          </div>
          <div className="centeredSubText">
            IT Artificer Team Develop Best
            Solution For Your Business To Make it
            Possible For Your Business To Handle
            Smoothly
          </div>

          <div className="contactText">
            Skype us: itartificer@ Call:+455435u
          </div>
        </div>
      </div>

      <div className="hero">
        <div className="heroHeading1">
          <center>Our Services</center>
        </div>

        <div className="seperator">
          <span></span>
          <i
            className="fa fa-laptop"
            style={{
              fontSize: "30px",
              position: "absolute",
              left: "48%",
              marginTop: "-13px",
            }}
          ></i>
          <span></span>
        </div>

        <div className="subtext">
          We are creative design agency focused on
          full implementation services of all
          sizes
        </div>
      </div>

      {/* //////////////////////////////////////////////////////// */}
      {/* //////////////////////////////////////////////////////// */}

      <div className="griditems">
        <div className="item1">
          <div
            className="square"
            style={{ marginLeft: "20%" }}
          >
            <i
              className="fa fa-comment comment"
              style={{
                padding: "7px",
                transform: " rotate(1020deg)",
                fontSize: "30px",
              }}
            ></i>
          </div>
          <div className="details">
            <div
              className="support"
              style={{
                fontSize: "22px",
                marginLeft: "40px",
              }}
            >
              24/7 Support
            </div>
            <div className="detail">
              Our dedicated support team provides
              24/7 support through emails, skype
              and online calls...
            </div>
            <div className="readMore">
              <a> Read more</a>
            </div>
          </div>
        </div>
        <div className="item2">
          <div
            className="square"
            style={{ marginLeft: "20%" }}
          >
            <i
              className="fa fa-cog cog"
              style={{
                padding: "12px",
                transform: " rotate(1020deg)",
                fontSize: "30px",
              }}
            ></i>
          </div>
          <div className="details">
            <div
              className="support"
              style={{
                fontSize: "22px",
                marginLeft: "40px",
              }}
            >
              24/7 Support
            </div>
            <div className="detail">
              Our dedicated support team provides
              24/7 support through emails, skype
              and online calls...
            </div>
            <div className="readMore">
              <a> Read more</a>
            </div>
          </div>
        </div>
        <div className="item3">
          <div
            className="square"
            style={{ marginLeft: "20%" }}
          >
            <i
              className="fa fa-wrench wrench"
              style={{
                padding: "12px",
                transform: " rotate(1020deg)",
                fontSize: "30px",
              }}
            ></i>
          </div>
          <div className="details">
            <div
              className="support"
              style={{
                fontSize: "22px",
                marginLeft: "40px",
              }}
            >
              24/7 Support
            </div>
            <div className="detail">
              Our dedicated support team provides
              24/7 support through emails, skype
              and online calls...
            </div>
            <div className="readMore">
              <a> Read more</a>
            </div>
          </div>
        </div>
      </div>

      <div className="griditems">
        <div className="item1">
          <div
            className="square"
            style={{ marginLeft: "20%" }}
          >
            <i
              className="fa fa-mobile comment"
              style={{
                padding: "12px",
                transform: " rotate(1035deg)",
                fontSize: "40px",
                marginLeft: "5px",
              }}
            ></i>
          </div>
          <div className="details">
            <div
              className="support"
              style={{
                fontSize: "22px",
                marginLeft: "40px",
              }}
            >
              Responsive Layout
            </div>
            <div className="detail">
              Our dedicated support team provides
              24/7 support through emails, skype
              and online calls...
            </div>
            <div className="readMore">
              <a> Read more</a>
            </div>
          </div>
        </div>
        <div className="item2">
          <div
            className="square"
            style={{ marginLeft: "20%" }}
          >
            <i
              // className="fa fa-chart-line"
              className="fa fa-comment comment"
              style={{
                padding: "12px",
                transform: " rotate(1020deg)",
                fontSize: "30px",
              }}
            ></i>
          </div>
          <div className="details">
            <div
              className="support"
              style={{
                fontSize: "22px",
                marginLeft: "40px",
              }}
            >
              Digital Marketing Services
            </div>
            <div className="detail">
              Digital Marketing Services Services
              provide throughout Khyber
              Pakhtunkhawa like Bill Boards, Tv
              Comercial...
            </div>
            <div className="readMore">
              <a> Read more</a>
            </div>
          </div>
        </div>
        <div className="item3">
          <div
            className="square"
            style={{ marginLeft: "20%" }}
          >
            <i
              className="fa fa-graduation-cap cog"
              style={{
                padding: "12px",
                transform: " rotate(1035deg)",
                fontSize: "30px",
              }}
            ></i>
          </div>
          <div className="details">
            <div
              className="support"
              style={{
                fontSize: "22px",
                marginLeft: "40px",
              }}
            >
              Professional Training
            </div>
            <div className="detail">
              Professional Training We offer web
              development training for fresh
              graduates to spend a...
            </div>
            <div className="readMore">
              <a> Read more</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
