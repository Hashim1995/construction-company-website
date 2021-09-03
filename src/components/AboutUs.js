import React from "react";
import { Divider, Row, Col } from "antd";
import WhyUs from "./subComponents/WhyUs.js";
import { useTranslation } from "react-i18next";
const AboutUs = () => {
  const { t } = useTranslation();
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
              {t("about-us-title")}
            </Divider>
            <div className="aboutUsText">
              <h2>{t("about-us-text")}</h2>
            </div>
          </div>
          <WhyUs />
        </Col>
      </Row>
    </div>
  );
};

export default AboutUs;
