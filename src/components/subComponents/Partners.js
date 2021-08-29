import React from "react";
import { Divider } from "antd";

import { PartnersImg } from "../../assets/img/imageList.js";

const Partners = () => {
  return (
    <div>
      <Divider className="partnersTitle" dashed={true}>
        OUR PARTNERS
      </Divider>
      <div className="partnersWrap">
        <div className="partnersItem">
          <a href="google.com">
            <div className="partners-card">
              <div className="partners-card-inner">
                <div className="partners-card-front">
                  <img src={PartnersImg[0]} alt="Partner" />
                </div>
                <div className="partners-card-back">
                  <h4>INVESTMENT PROPERTY</h4>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className="partnersItem">
          <a href="google.com">
            <div className="partners-card">
              <div className="partners-card-inner">
                <div className="partners-card-front">
                  <img src={PartnersImg[1]} alt="Partner" />
                </div>
                <div className="partners-card-back">
                  <h4>REAL ESTATE</h4>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className="partnersItem">
          <a href="google.com">
            <div className="partners-card">
              <div className="partners-card-inner">
                <div className="partners-card-front">
                  <img src={PartnersImg[2]} alt="Partner" />
                </div>
                <div className="partners-card-back">
                  <h4>LUXURY HOLDING</h4>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className="partnersItem">
          <a href="google.com">
            <div className="partners-card">
              <div className="partners-card-inner">
                <div className="partners-card-front">
                  <img src={PartnersImg[3]} alt="Partner" />
                </div>
                <div className="partners-card-back">
                  <h4>THE CAPITAL</h4>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className="partnersItem">
          <a href="google.com">
            <div className="partners-card">
              <div className="partners-card-inner">
                <div className="partners-card-front">
                  <img src={PartnersImg[4]} alt="Partner" />
                </div>
                <div className="partners-card-back">
                  <h4>OPEN HOUSE</h4>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className="partnersItem">
          <a href="google.com">
            <div className="partners-card">
              <div className="partners-card-inner">
                <div className="partners-card-front">
                  <img src={PartnersImg[5]} alt="Partner" />
                </div>
                <div className="partners-card-back">
                  <h4>ATLANTIC HOLDING</h4>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Partners;
