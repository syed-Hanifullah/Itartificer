import React from "react";
import "./recentPost.css";
import Images from "./recentPostImges";
const RecentPost = () => {
  return (
    <>
      <h3 className="heading">Recent Posts</h3>

      <div className="seperator">
        <span></span>
        <i
          className="fa fa-folder-open"
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
        Latest News Update Around The World From
        Technology.
      </div>

      <div
        className="mainWrapper"
        style={{ marginTop: "-43px" }}
      >
        <Images />
      </div>
    </>
  );
};

export default RecentPost;
