import React from "react";
import Services from "./subComponents/Services";
import WhyUs from "./subComponents/WhyUs";
import Stat from "./subComponents/Stat";
import Comments from "./subComponents/Comments";
import Partners from "./subComponents/Partners";
import CarouselSlider from "./subComponents/CarouselSlider";
import { Row, Col } from "antd";

const Home = () => {
  return (
    <div>
      <CarouselSlider />
      <Row>
        <Col span={24}>
          <Col span={16} offset={4}>
            <Services />
            <WhyUs />
          </Col>
          <Stat />
          <Col span={16} offset={4}>
            <Partners />
            <Comments />
          </Col>
        </Col>
      </Row>
      Main page
    </div>
  );
};

export default Home;
