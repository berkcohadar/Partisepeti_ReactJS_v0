import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { FaBars, FaTimes } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";

import { IconContext } from "react-icons/lib";
import DesktopNavLogo from "./DesktopNavLogo";

import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  MobileIcons,
  NavMenu,
  NavItem,
  NavLinks,
  NavMobileLogoPsepeti,
} from "./Navbar.elements";
import NavigationMenu from "./NavigationMenu";
import MainCampaign from "./MainCampaign";
import { Col, Container, Row } from "reactstrap";
import { Link } from "react-router-dom";

import {Button} from "antd";

import {
    UserOutlined,
  } from "@ant-design/icons";
  
const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  const handleClick = () => setClick(!click);

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);
  return (
    <>
      {/* <MainCampaign></MainCampaign>
      <div className="mainpage-login">
        {localStorage.getItem("token") == "null" ? (
          <div>
            <Link to="/login">Giriş Yap</Link>
            <Link to="/signup">Üye Ol</Link>
          </div>
        ) : (
          <div>
            <Link to="/profile">Profil</Link>
            <Link to="/logout">Çıkış</Link>
          </div>
        )}
      </div> */}
      <IconContext.Provider value={{ color: "white" }}>
        <Nav>
          <NavbarContainer>
            <NavMenu click={click} onClick={handleClick}>
              <NavItem>
                <NavLinks to="/about">Hakkımızda</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/about">Hakkımızda</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/about">Hakkımızda</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/about">Hakkımızda</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/about">Hakkımızda</NavLinks>
              </NavItem>
            </NavMenu>
            <MobileIcon click={click} onClick={handleClick}>
              {click ? (
                <FaTimes />
              ) : (
                <>
                  <FaBars />
                </>
              )}
            </MobileIcon>
            <NavLogo to="/">
              <NavMobileLogoPsepeti src="https://www.partisepeti.com/static/assets/img/logo.png"></NavMobileLogoPsepeti>
            </NavLogo>
            <MobileIcons click={click}>
              <FiShoppingCart />
            </MobileIcons>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
      <DesktopNavLogo></DesktopNavLogo>
      <NavigationMenu />
    </>
  );
};

export default Navbar;
