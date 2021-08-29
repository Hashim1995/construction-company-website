import React from "react";
import Nav from "./subComponents/Nav";
import { Row, Col } from "antd";

const Header = () => {
  return (
    <Row>
      <Col span={12} offset={6}>
        <Nav />
      </Col>
    </Row>
  );
};

export default Header;
