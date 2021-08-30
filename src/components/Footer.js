import React from "react";
import { Row, Col } from "antd";
import logo from "../assets/img/logo.png";
import {
  DoubleRightOutlined,
  EnvironmentOutlined,
  PhoneOutlined,
  MailOutlined,
} from "@ant-design/icons";

const Footer = () => {
  return (
    <Row>
      <Col span={24} className="footerBackground">
        <Col span={16} offset={4}>
          <footer className="footer">
            <div className="footerLeft">
              <h5>ABOUT US</h5>
              <img src={logo} alt="" />
              <p>
                Building isn’t just a job. At the Construction Company, it is
                our passion. With every project we undertake, we set the bar
                high and provide the best people in the industry, with a true
                love of what we do to make our Customers’ vision a reality.
              </p>
            </div>
            <div className="footerCenter">
              <h5>COMPANY LINKS</h5>
              <ul>
                <li>
                  {" "}
                  <DoubleRightOutlined />
                  <a href="google.com"> HOME </a>
                </li>
                <li>
                  <DoubleRightOutlined />
                  <a href="google.com"> PORTFOLIO </a>
                </li>
                <li>
                  <DoubleRightOutlined />
                  <a href="google.com"> ABOUT US </a>
                </li>
                <li>
                  <DoubleRightOutlined />
                  <a href="google.com"> CONTACT </a>
                </li>
                <li>
                  <DoubleRightOutlined />
                  <a href="google.com"> FEEDBACK </a>
                </li>
                <li>
                  <DoubleRightOutlined />
                  <a href="google.com"> SERVICES </a>
                </li>
                <li>
                  <DoubleRightOutlined />
                  <a href="google.com"> OUR PARTNERS </a>
                </li>
                <li>
                  <DoubleRightOutlined />
                  <a href="google.com"> STATISTIC </a>
                </li>
              </ul>
            </div>
            <div className="footerRight">
              <h5>CONTACT INFO</h5>
              <p>
                <EnvironmentOutlined />
                <b>Address : </b> 245a, Rashid Behbudov st, Baku, Azerbaijan
              </p>
              <p>
                <PhoneOutlined />
                <b>Phone : </b>{" "}
                <a href="tel:+994 55-123-45-67">+994 55-123-45-67</a>
              </p>
              <p>
                <MailOutlined />
                <b>E-mail : </b>{" "}
                <a href="mailto:contact@company.com"> contact@company.com</a>
              </p>
            </div>
          </footer>
        </Col>
      </Col>
    </Row>
  );
};

export default Footer;
