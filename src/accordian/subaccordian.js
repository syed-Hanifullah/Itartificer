import React, { useState } from "react";
import "./subaccordian.css";
const SubAccordian = ({
  title1,
  title2,
  title3,
  title4,
  title5,
  title6,
  title7,
  title8,
  title9,
}) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div>
      <div
        onClick={() => setIsActive(!isActive)}
        className="plusMinus"
      >
        {isActive ? "-" : "+"}
      </div>

      {isActive && (
        <div className="accordion-content">
          <a>{title1}</a>
          <a>{title2}</a>
          <a>{title3}</a>
          <a>{title4}</a>
          <a>{title5}</a>
          <a>{title6}</a>
          <a>{title7}</a>
          <a>{title8}</a>
          <a>{title9}</a>
        </div>
      )}
    </div>
  );
};

export default SubAccordian;
