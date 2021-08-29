import React from "react";
import { Divider } from "antd";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { Row, Col } from "antd";
import { statbackground, StatisticImg } from "../../assets/img/imageList.js";

const Stat = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${statbackground})`,
        backgroundPosition: "center center",
      }}
    >
      <Divider className="statTitle" dashed={true}>
        OUR STATISTIC
      </Divider>
      <Row>
        <Col span={16} offset={4}>
          <div className="statWrap">
            <h5>The Construction Company</h5>
            <h2>AWESOME FACTS</h2>
            <div className="statItemWrap">
              <div className="statItem">
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

                <span className="statLabel">FINISHED PROJECTS</span>
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
                <span className="statLabel">UNDER CONSTRUCTION 
                PROJECTS</span>
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
                <span className="statLabel">PLANNED PROJECTS</span>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Stat;
