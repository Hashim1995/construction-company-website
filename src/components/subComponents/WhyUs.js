import React from "react";
import { Divider, Collapse } from "antd";
import { Image } from "antd";
import { workersImg } from "../../assets/img/imageList.js";
import { useTranslation } from "react-i18next";

const WhyUs = () => {
  const { t } = useTranslation();
  const { Panel } = Collapse;
  return (
    <div>
      <Divider className="WhyUsTitle" dashed={true}>
        {t("why-choose-us")}
      </Divider>
      <div>
        <div className="WhyUsWrap">
          <Collapse
            accordion
            className="WhyUsCollapse"
            defaultActiveKey={["1"]}
          >
            <Panel className="WhyUsPanel" header={t("why-us-1-header")} key="1">
              <p>{t("why-us-1-text")}</p>
            </Panel>
            <Panel className="WhyUsPanel" header={t("why-us-2-header")} key="2">
              <p>{t("why-us-2-text")}</p>
            </Panel>
            <Panel className="WhyUsPanel" header={t("why-us-3-header")} key="3">
              <p>{t("why-us-3-text")}</p>
            </Panel>
            <Panel className="WhyUsPanel" header={t("why-us-4-header")} key="4">
              <p>{t("why-us-4-text")}</p>
            </Panel>
          </Collapse>
          <div className="WhyUsGallery">
            <Image.PreviewGroup>
              <Image width={"100%"} src={workersImg[0]} />
              <Image width={"33%"} src={workersImg[1]} />
              <Image width={"33%"} src={workersImg[2]} />
              <Image width={"33%"} src={workersImg[3]} />
            </Image.PreviewGroup>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
