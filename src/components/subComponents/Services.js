import React from "react";
import { Divider } from "antd";
import { ServicesIcons } from "../../assets/img/imageList.js";

const Services = () => {
  return (
    <div>
      <Divider className="mainServiceTitle" dashed={true}>
        MAIN SERVICES
      </Divider>
      <div className="mainServiceWrap">
        <div className="mainServiceItem">
          <div className="mainServiceItemImgWrap">
            <img src={ServicesIcons[2]} alt="Construction Consultant" />
          </div>
          <div className="mainServiceTextWrap">
            <h5>Construction Consultant</h5>
            <p>
              Vestibulum eu libero volutpat, portas quam, tempus sem. Donec
              sodales quam id lorem lobortis, vitae interdum nisl.
            </p>
          </div>
        </div>
        <div className="mainServiceItem">
          <div className="mainServiceItemImgWrap">
            <img src={ServicesIcons[1]} alt="Architectural Design" />
          </div>
          <div className="mainServiceTextWrap">
            <h5>Architectural Design</h5>
            <p>
              Vestibulum eu libero volutpat, portas quam, tempus sem. Donec
              sodales quam id lorem lobortis, vitae interdum nisl.
            </p>
          </div>
        </div>
        <div className="mainServiceItem">
          <div className="mainServiceItemImgWrap">
            <img src={ServicesIcons[5]} alt="Electrical System" />
          </div>
          <div className="mainServiceTextWrap">
            <h5>Electrical System</h5>
            <p>
              Vestibulum eu libero volutpat, portas quam, tempus sem. Donec
              sodales quam id lorem lobortis, vitae interdum nisl.
            </p>
          </div>
        </div>
        <div className="mainServiceItem">
          <div className="mainServiceItemImgWrap">
            <img src={ServicesIcons[3]} alt="General Contracting" />
          </div>
          <div className="mainServiceTextWrap">
            <h5>General Contracting</h5>
            <p>
              Vestibulum eu libero volutpat, portas quam, tempus sem. Donec
              sodales quam id lorem lobortis, vitae interdum nisl.
            </p>
          </div>
        </div>
        <div className="mainServiceItem">
          <div className="mainServiceItemImgWrap">
            <img src={ServicesIcons[0]} alt="Resconstruction Services" />
          </div>
          <div className="mainServiceTextWrap">
            <h5>Resconstruction Services</h5>
            <p>
              Vestibulum eu libero volutpat, portas quam, tempus sem. Donec
              sodales quam id lorem lobortis, vitae interdum nisl.
            </p>
          </div>
        </div>
        <div className="mainServiceItem">
          <div className="mainServiceItemImgWrap">
            <img src={ServicesIcons[3]} alt="Plumbilg Services" />
          </div>
          <div className="mainServiceTextWrap">
            <h5>Plumbilg Services</h5>
            <p>
              Vestibulum eu libero volutpat, portas quam, tempus sem. Donec
              sodales quam id lorem lobortis, vitae interdum nisl.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
