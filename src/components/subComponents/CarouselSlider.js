import React from "react";
import { Row, Col } from "antd";
import { Carousel } from "antd";
import { CarouselImg } from "../../assets/img/imageList.js";
import { useTranslation } from "react-i18next";

const CarouselSlider = () => {
  const { t } = useTranslation();
  const contentStyle = {
    width: "100%",
    height: "100vh",
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
                  className="headerCarouselimg"
                  style={contentStyle}
                  src={CarouselImg[0]}
                  alt="carousel  1"
                />
                <h3>{t("header-text-one")}</h3>
                <h4>{t("header-text-two")}</h4>
              </div>
            </div>
            <div>
              <div className="headerCarouselInnerWrap">
                <img
                  className="headerCarouselimg"
                  style={contentStyle}
                  src={CarouselImg[1]}
                  alt="carousel  2"
                />
                <h3>{t("header-text-one")}</h3>
                <h4>{t("header-text-two")}</h4>
              </div>
            </div>
            <div>
              <div className="headerCarouselInnerWrap">
                <img
                  className="headerCarouselimg"
                  style={contentStyle}
                  src={CarouselImg[2]}
                  alt="carousel  3"
                />
                <h3>{t("header-text-one")}</h3>
                <h4>{t("header-text-two")}</h4>
              </div>
            </div>
            <div>
              <div className="headerCarouselInnerWrap">
                <img
                  style={contentStyle}
                  src={CarouselImg[3]}
                  alt="carousel  4"
                />
                <h3>{t("header-text-one")}</h3>
                <h4>{t("header-text-two")}</h4>
              </div>
            </div>
            <div>
              <div className="headerCarouselInnerWrap">
                <img
                  style={contentStyle}
                  src={CarouselImg[6]}
                  alt="carousel  7"
                />
                <h3>{t("header-text-one")}</h3>
                <h4>{t("header-text-two")}</h4>
              </div>
            </div>
            <div>
              <div className="headerCarouselInnerWrap">
                <img
                  style={contentStyle}
                  src={CarouselImg[7]}
                  alt="carousel  8"
                />
                <h3>{t("header-text-one")}</h3>
                <h4>{t("header-text-two")}</h4>
              </div>
            </div>
            <div>
              <div className="headerCarouselInnerWrap">
                <img
                  style={contentStyle}
                  src={CarouselImg[4]}
                  alt="carousel  5"
                />
                <h3>{t("header-text-one")}</h3>
                <h4>{t("header-text-two")}</h4>
              </div>
            </div>
            <div>
              <div className="headerCarouselInnerWrap">
                <img
                  style={contentStyle}
                  src={CarouselImg[5]}
                  alt="carousel  6"
                />
                <h3>{t("header-text-one")}</h3>
                <h4>{t("header-text-two")}</h4>
              </div>
            </div>
            
          </Carousel>
        </Col>
      </Row>
    </>
  );
};

export default CarouselSlider;
