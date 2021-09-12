import React from "react";
import { Row, Col, Divider } from "antd";
import { logoImg, SocialMediaImg } from "../assets/img/imageList";
import {
  DoubleRightOutlined,
  PhoneOutlined,
  WhatsAppOutlined,
  MailOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
const Footer = () => {
  const { t } = useTranslation();
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
              <h5> {t("footer-about-us-header")}</h5>
              <img src={logoImg} alt="" />
              <p>{t("footer-about-us-text")}</p>
            </div>
            <div className="footerCenter">
              <h5>{t("footer-links-header")}</h5>
              <ul>
                <li>
                  {" "}
                  <DoubleRightOutlined />
                  <Link to="/">{t("main-page")}</Link>
                </li>
                <li>
                  <DoubleRightOutlined />
                  <Link to="/portfolio">{t("footer-links-portfolio")}</Link>
                </li>
                <li>
                  <DoubleRightOutlined />
                  <Link to="/aboutUs">{t("footer-links-about-us")}</Link>
                </li>
                <li>
                  <DoubleRightOutlined />
                  <Link to="/contact">{t("footer-links-contact")}</Link>
                </li>
                <li>
                  <DoubleRightOutlined />
                  <Link href=".commentsCarouselWrap" to="/">
                    {t("footer-links-feedback")}
                  </Link>
                </li>
                <li>
                  <DoubleRightOutlined />
                  <Link href=".mainServiceWrap" to="/">
                    {t("footer-links-services")}
                  </Link>
                </li>
                <li>
                  <DoubleRightOutlined />
                  <Link href=".partnersWrap" to="/">
                    {t("footer-links-our-partners")}
                  </Link>
                </li>
                <li>
                  <DoubleRightOutlined />
                  <Link to="/#stat">{t("footer-links-statistic")}</Link>
                </li>
              </ul>
            </div>
            <div className="footerRight">
              <h5>{t("footer-contact-header")}</h5>
              {/* <p>
                <EnvironmentOutlined />
                <b>{t("footer-contact-address")} : </b> 245a, Rashid Behbudov
                st, Baku, Azerbaijan
              </p> */}
              <p>
                <PhoneOutlined />
                <b>{t("footer-contact-phone")} : </b>{" "}
                <a href="tel:+994 55-123-45-67">+994 50 250 74 90</a>
              </p>
              <p>
                <WhatsAppOutlined />
                <b>Whatsapp : </b>{" "}
                <a
                  href="https://wa.me/+994502507490"
                  target="_blank"
                  rel="noreferrer"
                >
                  {t("send-on-wp")}
                </a>
              </p>
              <p>
                <MailOutlined />
                <b>E-mail : </b>{" "}
                <a href="mailto:rrnarqrupmmc@gmail.com">
                  rrnarqrupmmc@gmail.com
                </a>
              </p>
              <ul>
                <li>
                  <a target="_blank" rel="noreferrer" href="google.com">
                    <img src={SocialMediaImg[0]} alt="facebook" />
                  </a>
                </li>
                <li>
                  <a target="_blank" rel="noreferrer" href="google.com">
                    <img src={SocialMediaImg[1]} alt="instagram" />
                  </a>
                </li>
                <li>
                  <a target="_blank" rel="noreferrer" href="google.com">
                    <img src={SocialMediaImg[2]} alt="facebook" />
                  </a>
                </li>
                <li>
                  <a target="_blank" rel="noreferrer" href="google.com">
                    <img src={SocialMediaImg[3]} alt="youtube" />
                  </a>
                </li>
              </ul>
            </div>
          </footer>
          <Divider plain className="footerBottomDivider">
            {t("copyright")}
          </Divider>
        </Col>
      </Col>
    </Row>
  );
};

export default Footer;
