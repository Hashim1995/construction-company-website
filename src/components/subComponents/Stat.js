import React from "react";
import { Divider } from "antd";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { Row, Col } from "antd";
import { statbackground, StatisticImg } from "../../assets/img/imageList.js";
import { useTranslation } from "react-i18next";

const Stat = () => {
  const { t } = useTranslation();
  return (
    <div
      style={{
        backgroundImage: `url(${statbackground})`,
        backgroundPosition: "center center",
      }}
    >
      <Divider className="statTitle" dashed={true}>
        {t("our-stat-title")}
      </Divider>
      <Row>
        <Col
          xs={{ span: 22, offset: 1 }}
          md={{ span: 20, offset: 2 }}
          xl={{ span: 16, offset: 4 }}
        >
          <div className="statWrap">
            <h5>{t("our-stat-header-1")}</h5>
            <h2>{t("our-stat-header-2")}</h2>
            <div className="statItemWrap">
              <div id="stat" className="statItem">
                <img
                  className="statImg"
                  src={StatisticImg[0]}
                  alt=" statistic img"
                />
                <VisibilitySensor partialVisibility offset={{ bottom: 50 }}>
                  {({ isVisible }) => (
                    <div>
                      {isVisible ? (
                        <CountUp
                          className="statCounter"
                          start={0}
                          end={48}
                          duration={1.5}
                        ></CountUp>
                      ) : (
                        <CountUp
                          className="statCounter"
                          start={0}
                          end={48}
                          duration={1.5}
                        ></CountUp>
                      )}
                    </div>
                  )}
                </VisibilitySensor>

                <span className="statLabel">{t("our-stat-1-text")}</span>
              </div>
              <div className="statItem">
                <img
                  className="statImg"
                  src={StatisticImg[2]}
                  alt=" statistic img"
                />
                <VisibilitySensor partialVisibility offset={{ bottom: 50 }}>
                  {({ isVisible }) => (
                    <div>
                      {isVisible ? (
                        <CountUp
                          className="statCounter"
                          start={0}
                          end={19}
                          duration={1}
                        ></CountUp>
                      ) : (
                        <CountUp
                          className="statCounter"
                          start={0}
                          end={48}
                          duration={1.5}
                        ></CountUp>
                      )}
                    </div>
                  )}
                </VisibilitySensor>
                <span className="statLabel">{t("our-stat-2-text")}</span>
              </div>
              <div className="statItem">
                <img
                  className="statImg"
                  src={StatisticImg[1]}
                  alt=" statistic img"
                />
                <VisibilitySensor partialVisibility offset={{ bottom: 50 }}>
                  {({ isVisible }) => (
                    <div>
                      {isVisible ? (
                        <CountUp
                          className="statCounter"
                          start={0}
                          end={62}
                          duration={2}
                        ></CountUp>
                      ) : (
                        <CountUp
                          className="statCounter"
                          start={0}
                          end={48}
                          duration={1.5}
                        ></CountUp>
                      )}
                    </div>
                  )}
                </VisibilitySensor>
                <span className="statLabel">{t("our-stat-3-text")}</span>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Stat;
