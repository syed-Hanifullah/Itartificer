import React, { useEffect, useRef } from "react";
import "./styler.css";
import { Divide as Hamburger } from "hamburger-react";
import SubAccordian from "./subaccordian";

// ////////////////////////////////////////////////////////
const Accordion = ({ children }) => {
  let rfVal = useRef(null);

  useEffect(() => {
    handleClick();
  }, []);

  const handleClick = () => {
    const acc = rfVal.children;
    for (let i = 0; i < acc.length; i++) {
      let a = acc[i];
      a.children[0].onclick = () =>
        a.classList.toggle("active");
    }
  };

  return (
    <div ref={(a) => (rfVal = a)}>{children}</div>
  );
};

const accordian = () => {
  return (
    <div className="App">
      <Accordion>
        <div className="accor">
          <div className="head noselect">
            <Hamburger />
          </div>
          <div className="body">
            <p>Home</p>
            <p>About us</p>
            <SubAccordian
              title1={"Our team"}
              title2={"testimonials"}
            />

            <p>sub sides</p>
            <SubAccordian
              title1={"ita acedamia"}
              title2={"ita r.center"}
              title3={"ita kalewal"}
            />
            <p>products</p>
            <SubAccordian
              title1={"point of sale"}
              title2={"school mis"}
              title3={"currency mis"}
              title4={"hajj umrah mis"}
              title5={"r. estate software"}
            />
            <p>Services</p>
            <SubAccordian
              title1={"domain | hosting"}
              title2={"digital marketing"}
              title3={"web development"}
              title4={"mobile application"}
              title5={"graphics designing"}
              title6={"software apps"}
              title7={"e-commerce"}
              title8={"content writing"}
              title9={"fyp ideas"}
            />
            <p>play store</p>
            <SubAccordian
              title1={"Our app"}
              title2={"privacy policy"}
            />
            <p>blog</p>
            <p>Contact</p>
            <SubAccordian
              title1={"for taining"}
              title2={"apply for job"}
              title3={"apply for internship"}
            />
          </div>
        </div>
      </Accordion>
    </div>
  );
};

export default accordian;
