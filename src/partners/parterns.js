import React from "react";
import "./partners.css";
import Slider from "./slider";
const Partners = () => {
  return (
    <>
      <div className="partners">
        <h3 className="heading">
          Some Of Our Partners
        </h3>

        <div className="seperator">
          <span></span>
          <i
            className="fa fa-users"
            style={{
              fontSize: "30px",
              position: "absolute",
              left: "48%",
              marginTop: "-13px",
            }}
          ></i>
          <span></span>
        </div>

        <div className="subText">
          our valuable partners
        </div>
        <div className="slider">
          <Slider />
        </div>
      </div>
    </>
  );
};

export default Partners;
