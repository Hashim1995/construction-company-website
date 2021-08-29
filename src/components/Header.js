import React from "react";
import Nav from "./subComponents/Nav";
import { Row, Col } from "antd";

const Header = () => {
  return (
    <>
      <Row>
        <Col className="navBackground" span={24}>
          <Col span={16} offset={4}>
            <Nav />
          </Col>
        </Col>
      </Row>
    </>
  );
};

export default Header;
