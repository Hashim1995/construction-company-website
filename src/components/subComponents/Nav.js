import React from "react";
import { logoImg } from "../../assets/img/imageList.js";

import { Menu } from "antd";
import {
  HomeOutlined,
  AppstoreOutlined,
  TeamOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const Nav = () => {
  const handleClick = (e) => {
    console.log("click ", e);
  };

  return (
    <Menu className="navMenu" onClick={handleClick} mode="horizontal">
      <Menu.Item className="navMenuItem">
        <img
          className="navLogoImg"
          style={{ height: "100px" }}
          src={logoImg}
          alt="company logo"
        />
        Your Company
      </Menu.Item>

      <Menu.Item
        className="navMenuTextItem navMenuItem"
        icon={
          <HomeOutlined
            style={{ fontSize: "clamp(1rem, -0.875rem + 1.8vw, 3.5rem)" }}
          />
        }
      >
        <Link to="/">HOME</Link>
      </Menu.Item>
      <Menu.Item
        className="navMenuTextItem navMenuItem"
        icon={
          <AppstoreOutlined
            style={{ fontSize: "clamp(1rem, -0.875rem + 1.8vw, 3.5rem)" }}
          />
        }
      >
        <Link to="/portfolio">PORTFOLIO</Link>
      </Menu.Item>
      <Menu.Item
        className="navMenuTextItem navMenuItem"
        icon={
          <TeamOutlined
            style={{ fontSize: "clamp(1rem, -0.875rem + 1.8vw, 3.5rem)" }}
          />
        }
      >
        ABOUT US
      </Menu.Item>
      <Menu.Item
        className="navMenuTextItem navMenuItem"
        icon={
          <PhoneOutlined
            style={{ fontSize: "clamp(1rem, -0.875rem + 1.8vw, 3.5rem)" }}
          />
        }
      >
        CONTACT
      </Menu.Item>
    </Menu>
  );
};

export default Nav;
