import styled from "styled-components";
import { FaMagento } from "react-icons/fa";

import { Dropdown } from "antd";
import {Row} from "reactstrap"
// import {primaryColor,primaryHover} from "../../globalColors";
import { Link } from "react-router-dom";

import { Container } from "../../../globalStyles";


import {
  MinusCircleOutlined,
  DeleteOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";

export const Nav = styled.nav`
  height: 80px;
  display: none;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 2;
  padding-top: 10px;
  @media screen and (max-width: 960px) {
    display: flex;
    padding-top: 0px;
    background-color: #12104d;
  }
`;

export const NavbarContainer = styled(Container)`
  display: block;
  justify-content: center;
  height: 80px;
  ${Container}
`;

export const NavLogo = styled(Link)`
  color: black;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  width: 100%;
  max-width: 200px;
  @media screen and (max-width: 960px) {
    max-width: 180px;
    margin-right: auto;
    margin-left: auto;
  }
`;

export const NavIcon = styled(FaMagento)`
  margin-right: 0.5rem;
`;

export const NavLogoPsepeti = styled.img`
  margin-right: 0.5rem;
  display: block;
  @media screen and (max-width: 960px) {
    display: none;
  }
`;
export const SearchBox = styled.div`
  width: 100%;
  max-width: 200px;
  justify-self: center;
  display: block;
  margin-left: auto;
  margin-right: auto;
  top: 0;

  @media screen and (max-width: 960px) {
    display: none;
  }
`;

export const NavMobileLogoPsepeti = styled.img`
  margin-right: 0.5rem;
  display: none;
  margin-right: auto;
  margin-left: auto;
  @media screen and (max-width: 960px) {
    display: block;
    width: 180px;
    margin-top: 10px;
  }
`;
export const MobileIcon = styled.div`
  display: none;
  margin-right: auto;
  margin-left: auto;
  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    left: 1;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;
export const MobileIcons = styled.div`
  display: none;
  margin-left: auto;
  align-items: center;

  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    left: ${({ click }) => (click ? "-100%" : "")};
    right: ${({ click }) => (click ? "" : 0)};
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: none;
  align-items: center;
  list-style: none;
  text-align: center;
  justify-content: center;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    background: #0d0c1d;
    transform: ${({ click }) =>
      click ? "translateX(0)" : "translateX(-100%)"};
    width: 90%;
    height: 100vh;
    position: absolute;
    top: 0px;
    left: ${({ click }) => (click ? 0 : "-100%")};
    opacity: 1;
    transition: transform 0.5s ease-in-out;
  }
`;

export const NavDropdown = styled(Dropdown)`
  margin-right: 10px;
  left: 0;
  height: 50px;
  border-bottom: 1px solid transparent;
  border-radius: 0px;
  &:hover {
    border-bottom: 1px solid black;
  }

  @media screen and (max-width: 960px) {
    width: 100%;

    &:hover {
      border: none;
    }
  }
`;
export const NavBoxParentItem = styled.h3`
  font-size: 1rem;
`;

export const NavItem = styled.li`
  margin-right: 10px;
  height: 50px;
  border-bottom: 1px solid transparent;

  &:hover {
    border-bottom: 1px solid black;
  }

  @media screen and (max-width: 960px) {
    width: 100%;

    &:hover {
      border: none;
    }
  }
`;
export const NavLinks = styled(Link)`
  color: grey;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;
  &:hover {
    color: grey;
    text-decoration: none;
  }
  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;

    &:hover {
      color: grey;
      transition: all 0.3 ease;
    }
  }
`;

export const NavItemBtn = styled.li`
  @media screen and (max-width: 960px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 120px;
  }
`;

export const NavBtnLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 8px 16px;
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
`;

export const DesktopNavLogoArea = styled(Container)`
  display: block;
  height:70px;
  background: #1a1b29;
  opacity:1;
  @media screen and (max-width: 960px) {
    display: none;
  }
`;

export const SubmenuLink = styled(Link)`
  color: grey !important;
  display: flex !important;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100% !important;
  letter-spacing: 0px;
  &:hover {
    color: grey;
    text-decoration: none;
  }
  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;

    &:hover {
      color: grey;
      transition: all 0.3 ease;
    }
  }
`;

export const CartSummary = styled.div`
  width:100%;
  box-shadow: 0px 0px 8px 0px #ddd; 
  max-height:100%;
  border-radius: 4px;
  padding:10px 10px 5px 10px;
  margin-left:15px;
  display: block;
`;

export const CartItem = styled(Row)`
height:70px;
width:%100;
margin:auto;
border-radius: 10px;
margin-bottom:10px;
text-align: center;
vertical-align: middle;

&:hover {
  background-color: rgb(240,240,240);
  box-shadow: 0px 0px 1px 0px transparent;
  }
`;

export const CartDel = styled(DeleteOutlined)`
  padding:4px;
  margin: auto;
  cursor:pointer;
  color:#CA0B00;
  &:hover {
    box-shadow: 0px 3px 2px -3px #000000; 
  }
`;

export const CartMin = styled(MinusCircleOutlined)`
  margin: auto 0 auto 0;
  color:#000;
  cursor:pointer;
  user-select: none;
  &:hover {
    border-radius: 100px;
    box-shadow: 0px 0px 3px 0px #13406A;
  }
`;

export const CartPlus = styled(PlusCircleOutlined)`
  margin: auto 0 auto 0;
  cursor:pointer;
  user-select: none;
  color:#000;
  &:hover {
    border-radius: 100px;
    box-shadow: 0px 0px 3px 0px #13406A;
  }
`;

export const CartImg = styled.img`
  margin:auto;
  height:50px;
  width:50px;
  cursor:pointer;
  user-select: none;
`;

export const CartName = styled.p`
    min-width:150px;
    max-width:150px;
    margin:auto;
`;
export const CartPrice = styled.p`
    min-width:70px;
    max-width:80px;
    margin:auto;
`;
export const CartQuantity = styled.p`
    margin: auto 8px auto 8px;
`;
export const CartTotalP = styled.p`
    font-size:15px;
    margin:auto;
    margin-right:10px;
    color:#111;
    letter-spacing: 0.4px;
`;

export const CartTotal = styled(Row)`
  bottom:0;
  position:sticky;
  height:45px;
  width:100%;
  margin:0 auto 0 auto;
  background: linear-gradient(to right,#fff,#e7e9ec);
  border-radius: 10px;
  transition:0.3s all;
  box-shadow: 0px 0px 3px 1px #ddd; 
`;
export const CartTitleP = styled.p`
    font-size:15px;
    margin:auto;
    margin-left:10px;
    color:#111;
    letter-spacing: 0.4px;
`;

export const CartTitle = styled(Row)`
  bottom:0;
  position:sticky;
  height:45px;
  width:100%;
  margin:0 auto 0 auto;
  margin-bottom:8px;
  background: linear-gradient(to left,#fff,#e7e9ec);

  border-radius: 10px;
  transition:0.3s all;
  box-shadow: 0px 0px 3px 1px #ddd; 
`;

export const PageCart = styled.div`
  max-height:100%;
  display: block;
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 6em;

`;



//Futura ND Medium - Futura SC Book - Futura SC Medium -

