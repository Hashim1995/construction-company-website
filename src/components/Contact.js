import React from "react";
import { Divider, Row, Col } from "antd";
import whatsappIcon from "../assets/img/whatsapp.png";
// import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { SocialMediaImg } from "../assets/img/imageList";
import {
  EnvironmentOutlined,
  PhoneOutlined,
  MailOutlined,
} from "@ant-design/icons";
import { useTranslation } from "react-i18next";
const Contact = () => {
  const { t } = useTranslation();
  const mapStyles = {
    height: "50vh",
    width: "100%",
  };

  const defaultCenter = {
    lat: 40.4093,
    lng: 49.8671,
  };

  return (
    <div>
      <Row>
        <Col
          xs={{ span: 22, offset: 1 }}
          md={{ span: 20, offset: 2 }}
          xl={{ span: 16, offset: 4 }}
        >
          <div className="contactWrap">
            <Divider className="contactTitle" dashed={true}>
              {t("contact-title")}
            </Divider>
            <div className="contactText">
              <div className="contactInnerWrap">
                <p>
                  <EnvironmentOutlined />
                  <b>{t("footer-contact-address")} : </b> 245a, Rashid Behbudov
                  st, Baku, Azerbaijan
                </p>
                <p>
                  <PhoneOutlined />
                  <b>{t("footer-contact-phone")} : </b>{" "}
                  <a href="tel:+994 55-123-45-67">+994 50 250 74 90</a>
                </p>
                <p>
                  <MailOutlined />
                  <b>E-mail : </b>{" "}
                  <a href="mailto:rrnarqrup@gmail.com">rrnarqrup@gmail.com</a>
                </p>
                <ul>
                  <li>
                    <a target="_blank" href="#">
                      <img src={SocialMediaImg[0]} alt="facebook" />
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href="https://www.instagram.com/rrnarqrup/"
                    >
                      <img src={SocialMediaImg[1]} alt="instagram" />
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href="https://wa.me/+994502507490">
                      <img src={whatsappIcon} alt="whatsapp" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Contact;
