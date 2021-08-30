import React from "react";
import Nav from "./subComponents/Nav";
import { Row, Col } from "antd";

const Header = () => {
  return (
    <>
      <Row>
        <Col className="navBackground" span={24}>
          <Col
            xs={{ span: 24, offset: 0 }}
            md={{ span: 20, offset: 2 }}
            xl={{ span: 16, offset: 4 }}
          >
            <Nav />
          </Col>
        </Col>
      </Row>
    </>
  );
};

export default Header;
