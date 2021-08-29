import React from "react";
import Services from "./subComponents/Services";
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
          </Col>
        </Col>
      </Row>
      Main page
    </div>
  );
};

export default Home;
