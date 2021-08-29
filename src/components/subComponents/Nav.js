import React from "react";
import { logoImg } from "../../assets/img/imageList.js";

import { Menu } from "antd";
import {
  HomeOutlined,
  AppstoreOutlined,
  TeamOutlined,
  PhoneOutlined,
} from "@ant-design/icons";

const Nav = () => {
  const handleClick = (e) => {
    console.log("click ", e);
  };

  return (
    <Menu className="navMenu" onClick={handleClick} mode="horizontal">
      <Menu.Item className="navMenuItem">
        <img style={{ height: "100px" }} src={logoImg} alt="company logo" />
        Your Company
      </Menu.Item>

      <Menu.Item
        className="navMenuItem"
        icon={
          <HomeOutlined
            style={{ fontSize: "clamp(1rem, -0.875rem + 1.8vw, 3.5rem)" }}
          />
        }
      >
        HOME
      </Menu.Item>
      <Menu.Item
        className="navMenuItem"
        icon={
          <AppstoreOutlined
            style={{ fontSize: "clamp(1rem, -0.875rem + 1.8vw, 3.5rem)" }}
          />
        }
      >
        PORTFOLIO
      </Menu.Item>
      <Menu.Item
        className="navMenuItem"
        icon={
          <TeamOutlined
            style={{ fontSize: "clamp(1rem, -0.875rem + 1.8vw, 3.5rem)" }}
          />
        }
      >
        ABOUT US
      </Menu.Item>
      <Menu.Item
        className="navMenuItem"
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
