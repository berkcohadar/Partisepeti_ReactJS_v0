import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";
import Orders from "./Orders";
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
import ProductsInCollection from "../Collections/ProductsInCollection";
import { Menu } from "antd";

const { SubMenu } = Menu;

export default class ProfileMenu extends Component {
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
      <div>
        <Menu style={{ width: 256, marginTop: 40 }} mode="vertical">
          {this.profilemenu.map((elem, index) => (
            <Menu.Item
            isSelected={true}
              key={"sub" + (index + 1)}
              onClick={(key) => this.props.selectOption(key)}
              icon={elem.icon}
            >
              {elem.title}
            </Menu.Item>
          ))}
        </Menu>
      </div>
    );
  }
}

{
  /* <Menu forceSubMenuRender={true} subMenuCloseDelay={0} onOpenChange={(key)=>this.props.selectOption(key)} triggerSubMenuAction="click" style={{ width: 256, marginTop: 40 }} mode="vertical">
{this.profilemenu.map((elem,index) => (
<SubMenu key={"sub"+(index+1)} icon={elem.icon} title={elem.title}></SubMenu>
))}
</Menu> */
}
