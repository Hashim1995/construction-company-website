import React from "react";
import { Row, Col, Divider } from "antd";
import { logoImg, SocialMediaImg } from "../assets/img/imageList";
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
        <Col
          xs={{ span: 22, offset: 1 }}
          md={{ span: 20, offset: 2 }}
          xl={{ span: 16, offset: 4 }}
        >
          <footer className="footer">
            <div className="footerLeft">
              <h5>ABOUT US</h5>
              <img src={logoImg} alt="" />
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
                  <a href="google.com"> Home </a>
                </li>
                <li>
                  <DoubleRightOutlined />
                  <a href="google.com"> Portfolio </a>
                </li>
                <li>
                  <DoubleRightOutlined />
                  <a href="google.com"> About us</a>
                </li>
                <li>
                  <DoubleRightOutlined />
                  <a href="google.com"> Contact </a>
                </li>
                <li>
                  <DoubleRightOutlined />
                  <a href="google.com"> Feedback </a>
                </li>
                <li>
                  <DoubleRightOutlined />
                  <a href="google.com"> Services </a>
                </li>
                <li>
                  <DoubleRightOutlined />
                  <a href="google.com"> Our partners </a>
                </li>
                <li>
                  <DoubleRightOutlined />
                  <a href="google.com"> Statistic </a>
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
              <ul>
                <li>
                  <a target="_blank" href="google.com">
                    <img src={SocialMediaImg[0]} alt="facebook" />
                  </a>
                </li>
                <li>
                  <a target="_blank" href="google.com">
                    <img src={SocialMediaImg[1]} alt="instagram" />
                  </a>
                </li>
                <li>
                  <a target="_blank" href="google.com">
                    <img src={SocialMediaImg[2]} alt="facebook" />
                  </a>
                </li>
                <li>
                  <a target="_blank" href="google.com">
                    <img src={SocialMediaImg[3]} alt="youtube" />
                  </a>
                </li>
                <li>
                  <a target="_blank" href="google.com">
                    <img src={SocialMediaImg[4]} alt="twitter" />
                  </a>
                </li>
              </ul>
            </div>
          </footer>
          <Divider className="footerBottomDivider" />
        </Col>
      </Col>
    </Row>
  );
};

export default Footer;
