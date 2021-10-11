import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const Slider = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
      slidesToSlide: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="App">
      <Carousel
        partialVisible={true}
        responsive={responsive}
        autoPlay
        infinite
        autoPlaySpeed={2000}
        containerClass="carousel-container"
        removeArrowOnDeviceType={[
          "tablet",
          "mobile",
        ]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-10-px"
      >
        <a
          href="#"
          style={{ backgroundColor: "none" }}
        >
          {" "}
          <img
            style={{ backgroundColor: "none" }}
            src="https://itartificer.com/wp-content/uploads/2017/11/kaliwal-fit-copy.x88743.png"
          />
        </a>
        <a href="#">
          {" "}
          <img src="https://itartificer.com/wp-content/uploads/2017/11/shopme-online-fit.x88743.png" />
        </a>
        <a href="#">
          {" "}
          <img src="https://itartificer.com/wp-content/uploads/2017/11/mozbytech-fit-new.x88743.png" />
        </a>
        <a href="#">
          {" "}
          <img src="https://itartificer.com/wp-content/uploads/2017/11/writepure-fit-2.x88743.png" />
        </a>
        <a href="#">
          {" "}
          <img src="https://itartificer.com/wp-content/uploads/2017/08/puretech-fit-1.x88743.png" />
        </a>

        <a href="#">
          {" "}
          <img src="https://itartificer.com/wp-content/uploads/2017/11/ita-academia-fit-1.x88743.png" />
        </a>
      </Carousel>
    </div>
  );
};

export default Slider;
