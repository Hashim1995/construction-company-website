import React from "react";
import { logoImg } from "../../assets/img/imageList.js";
import { useTranslation } from "react-i18next";
import i18n from "i18next";

import { Menu, Switch } from "antd";
import {
  HomeOutlined,
  AppstoreOutlined,
  TeamOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const Nav = () => {
  const { t } = useTranslation();

  function langSwitch(checked) {
    if (checked) {
      i18n.changeLanguage("en");
      localStorage.setItem("language", "en");
    } else {
      i18n.changeLanguage("az");
      localStorage.setItem("language", "az");
    }
  }
  const handleClick = (e) => {};

  return (
    <Menu
      breakpoint="md"
      className="navMenu"
      onClick={handleClick}
      mode="horizontal"
    >
      <Menu.Item key="logo" className="navMenuItem ">
        <Link to="/">
          <img
            className="navLogoImg"
            style={{ height: "100px" }}
            src={logoImg}
            alt="company logo"
          />
        </Link>
      </Menu.Item>

      <Menu.Item
        key="home"
        className="navMenuTextItem navMenuItem navMobileItem navItemMainPage"
        icon={
          <HomeOutlined
            style={{ fontSize: "clamp(1rem, -0.875rem + 1.8vw, 3.5rem)" }}
          />
        }
      >
        <Link to="/">{t("main-page")}</Link>
      </Menu.Item>
      <Menu.Item
        key="portfolio"
        className="navMenuTextItem navMenuItem navMobileItem"
        icon={
          <AppstoreOutlined
            style={{ fontSize: "clamp(1rem, -0.875rem + 1.8vw, 3.5rem)" }}
          />
        }
      >
        <Link to="/portfolio">{t("portfolio")}</Link>
      </Menu.Item>
      <Menu.Item
        key="about-us"
        className="navMenuTextItem navMenuItem navMobileItem"
        icon={
          <TeamOutlined
            style={{ fontSize: "clamp(1rem, -0.875rem + 1.8vw, 3.5rem)" }}
          />
        }
      >
        <Link to="/aboutUs">{t("about-us")}</Link>
      </Menu.Item>
      <Menu.Item
        key="contact"
        className="navMenuTextItem navMenuItem navMobileItem"
        icon={
          <PhoneOutlined
            style={{ fontSize: "clamp(1rem, -0.875rem + 1.8vw, 3.5rem)" }}
          />
        }
      >
        <Link to="/contact">{t("contact")}</Link>
      </Menu.Item>
      <Menu.Item key="lang" className=" navMenuItem navMobileItem">
        <Switch
          onChange={langSwitch}
          className="langSwitch"
          checkedChildren="En"
          unCheckedChildren="Az"
          defaultChecked={i18n.language === "en"}
        />
      </Menu.Item>
    </Menu>
  );
};

export default Nav;
