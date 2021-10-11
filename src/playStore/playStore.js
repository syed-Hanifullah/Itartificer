import React from "react";
import "./playStore.css";
import { Link } from "react-router-dom";

const PlayStore = () => {
  return (
    <>
      <div class="parent">
        <div class="div1">
          <h3 className="subsides">
            Best Mobile Application Development
            Company in Peshawar{" "}
          </h3>
          <h3 className="subHeading">
            Play store
          </h3>

          <p className="subsidesSubText">
            IT Artificer are one of the Best
            Mobile Application Development Company
            in Peshawar, Pakistan. We also give
            Proffesional Trianing to IT Graduates
            to be a Proffesional Developers.
            <br />
            <br />
            IT Artificer Mobile App Development
            Team Design and Developed a different
            app for the different communities
            which is published on google play
            store and Apple Store.
          </p>
          <img
            style={{
              width: "100%",
              padding: "10px",
            }}
            src="https://itartificer.com/wp-content/uploads/2019/08/app-1.png"
          />
          <h5
            style={{
              fontSize: "20px",
              color: "#6e6e6e",
              textDecoration: "underline",
              padding: "10px",
            }}
          >
            1) KP Price List
          </h5>
          <p className="subsidesSubText">
            IT Artificer Team Design and Developed
            a daily price updates for all food
            items according to different Markets
            of KP Districts. Soon will be updated
            for all the provinces of the country.
            The name of the application on google
            play store is KP Price List.
          </p>
          <h5
            style={{
              fontSize: "20px",
              color: "#6e6e6e",
              textDecoration: "underline",
              padding: "10px",
            }}
          >
            2) Awami National Party (ANP) News
          </h5>

          <p className="subsidesSubText">
            IT Artificer Team has designed and
            developed the updates for the
            political party that is Awami National
            Party. This App is specially designed
            for the people of KPK to obtain or
            secure the rights of Pashtuns. This
            app contains the daily announcements
            and activities of the Awami National
            Party to let people know the
            inter-party announcements. The name of
            the application on Google Play Store
            is ANP News: Awami National Party KPK.
          </p>

          <h5
            style={{
              fontSize: "20px",
              color: "#6e6e6e",
              textDecoration: "underline",
              padding: "10px",
            }}
          >
            3) Jamaat Islami Party
          </h5>

          <p className="subsidesSubText">
            The IT Artificer Team has developed an
            App for Jamaat Islami Party;
            containing the newly upcoming
            information and activities to
            establish Islam, including politics.
            This app is useful because people can
            have all the related news of the party
            at a single plateform through this
            app. The name of the application on
            Google Play Store is Jamaat Islami
            Party.
          </p>
          <h5
            style={{
              fontSize: "20px",
              color: "#6e6e6e",
              textDecoration: "underline",
              padding: "10px",
            }}
          >
            4) Masnoon Doas
          </h5>

          <p className="subsidesSubText">
            The IT Artificer Team considering the
            basic important daily used doas
            related to different tasks and matters
            of life has developed an app for
            Masnoon doas. This App is specially
            designed to let people be aware of the
            daily life masnoon doas useful for
            every matter of life from. The name of
            the application on Google Play Store
            is Masnoon Doas.
          </p>
          <h5
            style={{
              fontSize: "20px",
              color: "#6e6e6e",
              textDecoration: "underline",
              padding: "10px",
            }}
          >
            5) Just Torch
          </h5>

          <p className="subsidesSubText">
            The It Artificer Team has designed and
            developed the updates for Just Torch;
            a battery-operated portable light
            using the flashlight of your phones as
            Torch. The name of the application on
            Google Play Store is Just Torch.
          </p>
          <h5
            style={{
              fontSize: "20px",
              color: "#6e6e6e",
              textDecoration: "underline",
              padding: "10px",
            }}
          >
            6) Funniest Videos
          </h5>

          <p className="subsidesSubText">
            The It Artificer Team has designed and
            developed the updates for the Funniest
            Videos; containing the latest funny
            videos that will make you laugh from
            the first to the last viral humor
            videos that will make u laugh out
            loud. The name of the application on
            Google Play Store is Funniest Videos.
          </p>
          <h5
            style={{
              fontSize: "20px",
              color: "#6e6e6e",
              textDecoration: "underline",
              padding: "10px",
            }}
          >
            7) PTI Party
          </h5>

          <p className="subsidesSubText">
            The It Artificer Team has designed and
            developed the updates for PTI
            (Pakistan Tehrik Insaf) to let people
            be aware of the inter-party news and
            announcements at a single platform.
            This app contains all the related
            activities and updates of the
            political party PTI. The name of the
            application on Google Play Store is
            PTI Party.
          </p>
          <h5
            style={{
              fontSize: "20px",
              color: "#6e6e6e",
              textDecoration: "underline",
              padding: "10px",
            }}
          >
            8) ITA Gym Workouts
          </h5>

          <p className="subsidesSubText">
            The It Artificer Team has designed and
            developed the updates for the ITA Gym
            Workouts. The App contains helpful
            exercising tips through different
            formats including videos,
            descriptions, and tags. The name of
            the application on Google Play Store
            is ITA Gym Workouts
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
            </Link>
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

export default PlayStore;
