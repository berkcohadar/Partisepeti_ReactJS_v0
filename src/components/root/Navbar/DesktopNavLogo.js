import React, { Component } from "react";
import {
  Row,
  Col,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { bindActionCreators } from "redux";
import * as cartActions from "../../../redux/actions/cartAction";

import { DesktopNavLogoArea } from "./Navbar.elements";
import NaviForm from "./NaviForm";
import Cart from "./Cart";
import Fav from "./Fav";


import { Input, Menu, Drawer, Button, Radio } from "antd";
import {
  UserOutlined,
  HeartOutlined,
  ShoppingCartOutlined,
  CloseOutlined,
} from "@ant-design/icons";

import {
  AccountDiv,
  EditProfileForm,
  FormRow,
  FormTextArea,
  FormText,
  FormInput,
  ProfileForms,
  OrderMainButton,
  OrderMainButtonText,
  FormSelectInput,
} from "../Body/Account/Account.elements";

import HomeMenu from "./HomeMenu";
import { Link } from "react-router-dom";

class DesktopNavLogo extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.state = {
      dropdownOpen: false,
    };
  }

  toggle() {
    this.setState((prevState) => ({
      dropdownOpen: !prevState.dropdownOpen,
    }));
  }

  onMouseEnter() {
    this.setState({ dropdownOpen: true });
  }

  onMouseLeave() {
    this.setState({ dropdownOpen: false });
  }

  showDrawer = () => this.setState({ visible: true });
  onClose = () => this.setState({ visible: false });

  showFavDrawer = () => this.setState({ favDrawer: true });
  onCloseFav = () => this.setState({ favDrawer: false });

  showChildrenDrawer = () => this.setState({ childrenDrawer: true });
  onChildrenDrawerClose = () => this.setState({ childrenDrawer: false });
  addToCart = (product) => this.props.actions.addProductToCart(product);
  handleClick = (e) => this.setState({ current: e.key });
  onChange = (e) => this.setState({ value: e.target.value });
  state = {
    current: null,
    visible: false,
    value: 1,
  };
  render() {
    const { current } = this.state;
    return (
      <>
      <HomeMenu></HomeMenu>
        <DesktopNavLogoArea>
          <Row className="justify-content-center" style={{ width:"100%", height: "70px" }}>
            <Col className="logoContainer" md="3">
              {/* https://dewey.tailorbrands.com/production/brand_version_mockup_image/615/4687796615_1c45eb3d-b9be-4b83-b034-3aa31565060d.png?cb=1613767399 */}
              <Link to="/">
                <img
                  style={{display:"flex"}}
                  height={60}
                  src="https://www.partisepeti.com/static/assets/img/logo.png"
                  alt="partisepeti"
                />
              </Link>
              <FormSelectInput placeholder="Adres Seçiniz..."></FormSelectInput>
            </Col>
            <Col className="searchContainer" md="6">
              <Input placeholder="Ürün ara" className="onSearch"></Input>
            </Col>

            <Col className="iconsContainer" md="3">
              <Row className="justify-content-md-center">
                <Menu
                  style={{
                    background: "#1a1b29",
                    opacity: "1",
                    height: "100%",
                    borderBottom: "0",
                    width: 220,
                  }}
                  mode="horizontal"
                >
                {this.props.isAuthenticated? <Link style={{ marginLeft: "30px"}} to="/profile">
                  <UserOutlined
                          className="header-icon"
                          key="user"
                          style={{ }} 

                        ></UserOutlined>
                  </Link>:<Link style={{ marginLeft: "30px"}} to="/login">                  <UserOutlined
                          className="header-icon"
                          key="user"

                        ></UserOutlined></Link>}
                  

                  <HeartOutlined
                    className="header-icon"
                    key="heart"
                    style={{ marginRight: 30, marginLeft: 30 }}
                    onClick={() => this.showFavDrawer()}
                  ></HeartOutlined>
                  {/* <Badge dot count={5}> */}

                  <ShoppingCartOutlined
                    className="header-icon"
                    key="shop"
                    onClick={() => this.showDrawer()}
                  ></ShoppingCartOutlined>
                </Menu>
              </Row>
            </Col>
          </Row>

          <Drawer
            keyboard={true}
            title="Sepetim"
            placement="right"
            width={700}
            closable={true}
            closeIcon={<CloseOutlined />}
            onClose={() => this.onClose()}
            visible={this.state.visible}
            className="drawer"
          >
            <Cart></Cart>
            {/* <div className="filter-elem-list">
              <div className="fltrs-wrppr">
                <strong level={5}>Adreslerim</strong>
                <Radio.Group onChange={this.onChange} value={this.state.value}>
                  <Radio className="radioStyle" value={1}>
                    Berk Çohadar, Bağlarbaşı, 34844 Maltepe/İstanbul
                  </Radio>
                  <Radio className="radioStyle" value={2}>
                    Berk Çohadar, Yenişehir, 34779 Ataşehir/İstanbul
                  </Radio>
                  <Button
                    className="radioStyle"
                    type="link"
                    onClick={this.showChildrenDrawer}
                  >
                    +Adres Ekle
                  </Button>
                </Radio.Group>
              </div>
            </div> */}
            <Row className="justify-content-end " style={{ marginRight: 10 }}>
              <OrderMainButton
                style={{
                  marginTop: 20,
                  marginRight: 0,
                  background: "#2c343c",
                  width: "250px",
                }}
              >
                <OrderMainButtonText>Alışverişi Tamamla</OrderMainButtonText>
              </OrderMainButton>
            </Row>
            <Drawer
              keyboard={true}
              title="Adres Ekle"
              width={600}
              closable={true}
              closeIcon={<CloseOutlined />}
              onClose={this.onChildrenDrawerClose}
              visible={this.state.childrenDrawer}
            >
              <NaviForm onChildrenDrawerClose={this.onChildrenDrawerClose} />
            </Drawer>
          </Drawer>
          <Drawer
            keyboard={true}
            title="Favorilerim"
            placement="right"
            width={700}
            closable={true}
            closeIcon={<CloseOutlined />}
            onClose={() => this.onCloseFav()}
            visible={this.state.favDrawer}
            className="drawer"
          >
            <Fav></Fav>
            
            </Drawer>
        </DesktopNavLogoArea>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cartReducer,
    isAuthenticated: localStorage.getItem("token") != "null",
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getCart: bindActionCreators(cartActions.getCart, dispatch),
      addProductToCart: bindActionCreators(
        cartActions.addProductToCart,
        dispatch
      ),
      remove1FromCart: bindActionCreators(
        cartActions.remove1ProductFromCart,
        dispatch
      ),
      removeAllFromCart: bindActionCreators(
        cartActions.removeAllFromCart,
        dispatch
      ),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DesktopNavLogo);

{
  /* <Button
className="header-icon"
style={{ marginLeft: "30px" }}
key="user"
icon={<UserOutlined />}
></Button> */
}
