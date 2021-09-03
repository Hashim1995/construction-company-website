import React from "react";
import { Divider } from "antd";
import { ServicesIcons } from "../../assets/img/imageList.js";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { t } = useTranslation();
  return (
    <div>
      <Divider className="mainServiceTitle" dashed={true}>
        {t("main-services")}
      </Divider>
      <div className="mainServiceWrap">
        <div className="mainServiceItem">
          <div className="mainServiceItemImgWrap">
            <img src={ServicesIcons[2]} alt="Construction Consultant" />
          </div>
          <div className="mainServiceTextWrap">
            <h5>{t("services-1-header")}</h5>
            <p>{t("services-1-text")}</p>
          </div>
        </div>
        <div className="mainServiceItem">
          <div className="mainServiceItemImgWrap">
            <img src={ServicesIcons[1]} alt="Architectural Design" />
          </div>
          <div className="mainServiceTextWrap">
            <h5>{t("services-2-header")}</h5>
            <p>{t("services-2-text")}</p>
          </div>
        </div>
        <div className="mainServiceItem">
          <div className="mainServiceItemImgWrap">
            <img src={ServicesIcons[5]} alt="Electrical System" />
          </div>
          <div className="mainServiceTextWrap">
            <h5>{t("services-3-header")}</h5>
            <p>{t("services-3-text")}</p>
          </div>
        </div>
        <div className="mainServiceItem">
          <div className="mainServiceItemImgWrap">
            <img src={ServicesIcons[3]} alt="General Contracting" />
          </div>
          <div className="mainServiceTextWrap">
            <h5>{t("services-4-header")}</h5>
            <p>{t("services-4-text")}</p>
          </div>
        </div>
        <div className="mainServiceItem">
          <div className="mainServiceItemImgWrap">
            <img src={ServicesIcons[0]} alt="Resconstruction Services" />
          </div>
          <div className="mainServiceTextWrap">
            <h5>{t("services-5-header")}</h5>
            <p>{t("services-5-text")}</p>
          </div>
        </div>
        <div className="mainServiceItem">
          <div className="mainServiceItemImgWrap">
            <img src={ServicesIcons[3]} alt="Plumbilg Services" />
          </div>
          <div className="mainServiceTextWrap">
            <h5>{t("services-6-header")}</h5>
            <p>{t("services-6-text")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
