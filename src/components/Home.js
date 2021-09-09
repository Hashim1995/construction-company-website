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
          <Col
            xs={{ span: 22, offset: 1 }}
            md={{ span: 20, offset: 2 }}
            xl={{ span: 16, offset: 4 }}
          >
            <Services />
            <WhyUs />
          </Col>
          <Stat />
          <Col
            xs={{ span: 22, offset: 1 }}
            md={{ span: 20, offset: 2 }}
            xl={{ span: 16, offset: 4 }}
          >
            <Partners />
            {/* <Comments /> */}
          </Col>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
