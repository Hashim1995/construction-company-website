import React from "react";
import { Row, Col } from "antd";
import { Carousel } from "antd";
import { CarouselImg } from "../../assets/img/imageList.js";

const CarouselSlider = () => {
  const contentStyle = {
    width: "100%",
    height: "auto",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };
  return (
    <>
      <Row>
        <Col span={24}>
          <Carousel
            style={{ height: "100vh", overflow: "hidden" }}
            className="headerCarousel"
            autoplay
          >
            <div>
              <div className="headerCarouselInnerWrap">
                <img
                  style={contentStyle}
                  src={CarouselImg[0]}
                  alt="carousel  1"
                />
                <h3>We have 30 plus years in the building industry</h3>
                <h4>Quality construction continues after the project</h4>
                <h5>We use technology to do the job more quickly</h5>
              </div>
            </div>
            <div>
              <div className="headerCarouselInnerWrap">
                <img
                  style={contentStyle}
                  src={CarouselImg[1]}
                  alt="carousel  2"
                />
                <h3>We have 30 plus years in the building industry</h3>
                <h4>Quality construction continues after the project</h4>
                <h5>We use technology to do the job more quickly</h5>
              </div>
            </div>
            <div>
              <div className="headerCarouselInnerWrap">
                <img
                  style={contentStyle}
                  src={CarouselImg[2]}
                  alt="carousel  3"
                />
                <h3>We have 30 plus years in the building industry</h3>
                <h4>Quality construction continues after the project</h4>
                <h5>We use technology to do the job more quickly</h5>
              </div>
            </div>
            <div>
              <div className="headerCarouselInnerWrap">
                <img
                  style={contentStyle}
                  src={CarouselImg[3]}
                  alt="carousel  4"
                />
                <h3>We have 30 plus years in the building industry</h3>
                <h4>Quality construction continues after the project</h4>
                <h5>We use technology to do the job more quickly</h5>
              </div>
            </div>
            <div>
              <div className="headerCarouselInnerWrap">
                <img
                  style={contentStyle}
                  src={CarouselImg[4]}
                  alt="carousel  5"
                />
                <h3>We have 30 plus years in the building industry</h3>
                <h4>Quality construction continues after the project</h4>
                <h5>We use technology to do the job more quickly</h5>
              </div>
            </div>
          </Carousel>
        </Col>
      </Row>
    </>
  );
};

export default CarouselSlider;
