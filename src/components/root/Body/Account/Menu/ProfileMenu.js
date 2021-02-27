import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";
import {
  HeartFilled,
  CarryOutOutlined,
  EnvironmentOutlined,
  LikeOutlined,
  ShoppingOutlined,
  BellOutlined,
  CommentOutlined,
  UserOutlined,
  FireFilled,
} from "@ant-design/icons";

import { Menu, MenuItem, MenuTitle } from "./Menu.elements";

class ProfileMenu extends Component {
  profilemenu = [
    { icon: <ShoppingOutlined />, title: "Siparişlerim" },
    { icon: <HeartFilled />, title: "Koleksiyonlarım" },
    { icon: <UserOutlined />, title: "Üyelik Bilgilerim" },
    { icon: <EnvironmentOutlined />, title: "Adreslerim" },
    { icon: <FireFilled />, title: "Kampanyalarım" },
    { icon: <CarryOutOutlined />, title: "Anımsatıcılarım" },
    { icon: <LikeOutlined />, title: "Değerlendirmelerim" },
    { icon: <BellOutlined />, title: "İzinler" },
    { icon: <CommentOutlined />, title: "Yardım" },
  ];
  render() {
    return (
        <Menu>
          {this.profilemenu.map((elem, index) => (
            <MenuItem
              selected={this.props.selected === "sub" + index ? true:''}
              key={"sub" + index}
              onClick={(key) => this.props.selectOption("sub" + index)}
            >
            <MenuTitle><p>{elem.icon}{"\t"}{elem.title}</p></MenuTitle>
            </MenuItem>
          ))}
        </Menu>
    );
  }
}
export default ProfileMenu;

  /* <Menu style={{ width: 256, marginTop: 40 }} mode="vertical">
          {this.profilemenu.map((elem, index) => (
            <Menu.Item
            className="profile-menu"
            // isSelected={true}
            // key={"sub" + (index + 1)}
            // onClick={(key) => this.props.selectOption(key)}
            // icon={elem.icon}
            >
              {elem.title}
            </Menu.Item>
          ))}
        </Menu> */
