import React from "react";
import { Divider, Row, Col } from "antd";
import WhyUs from "./subComponents/WhyUs.js";
const AboutUs = () => {
  return (
    <div>
      <Row>
        <Col
          xs={{ span: 22, offset: 1 }}
          md={{ span: 20, offset: 2 }}
          xl={{ span: 16, offset: 4 }}
        >
          <div className="aboutUsWrap">
            <Divider className="aboutUsTitle" dashed={true}>
              ABOUT US
            </Divider>
            <div className="aboutUsText">
              <h2>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Tempora aut temporibus, quos illo nemo odit eaque magnam quod
                cumque amet molestias deserunt nobis, sint maiores tempore
                corporis et animi in! Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Molestias repellat, cum laborum amet libero,
                at debitis optio quod ipsa distinctio deserunt, cupiditate
                magnam. Ipsum cum eveniet sed ex, exercitationem perspiciatis?
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias repellat, cum laborum amet libero, at debitis optio
                quod ipsa distinctio deserunt, cupiditate magnam. Ipsum cum
                eveniet sed ex, exercitationem perspiciatis?
              </h2>
            </div>
          </div>
          <WhyUs />
        </Col>
      </Row>
    </div>
  );
};

export default AboutUs;