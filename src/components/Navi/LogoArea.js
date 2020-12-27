import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Input, Menu, Drawer, Button, Radio } from "antd";
import {
  UserOutlined,
  HeartFilled,
  ShoppingCartOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import * as cartActions from "../../redux/actions/cartAction";

// import Cart from "./Cart";
import NaviForm from "../Navi/NaviForm";

const { Search } = Input;
const onSearch = (value) => console.log(value);

class LogoArea extends Component {
  componentDidMount = () => {};
  showDrawer = () => this.setState({ visible: true });
  onClose = () => this.setState({ visible: false });
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
      <Container className="themed-container header" fluid={true}>
        <Row>
          <Col md="3">
            <a href="/">
              <img
                width={250}
                src="https://www.partisepeti.com/static/assets/img/logo.png"
                alt="partisepeti"
              />
            </a>
          </Col>
          <Col className="searchContainer" md="6">
            <Input
              placeholder="Ürün ara"
              className="onSearch"
              onPressEnter={onSearch}
              bordered={false}
              style={{ width: 430 }}
            />
          </Col>

          <Col md="3">
            <Row className="justify-content-md-center">
              <Menu
                onClick={this.handleClick}
                selectedKeys={[current]}
                mode="horizontal"
              >
                <Menu.Item
                  className="header-icon"
                  key="user"
                  icon={<UserOutlined />}
                ></Menu.Item>

                <Menu.Item
                  className="header-icon"
                  key="heart"
                  icon={<HeartFilled />}
                ></Menu.Item>
                {/* <Badge dot count={5}> */}
                <Menu.Item
                  className="header-icon"
                  key="shop"
                  icon={<ShoppingCartOutlined />}
                  onClick={() => this.showDrawer()}
                />
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
        >
          {/* <Cart /> */}

          <div className="filter-elem-list">
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
          </div>
          <Row className="justify-content-end " style={{ marginRight: 10 }}>
            <Button className="go-to-payment" type="primary">
              {/* loading={loadings[0]} onClick={() => this.enterLoading(0)} */}
              Siparişi Tamamla
            </Button>
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
            <NaviForm onChildrenDrawerClose={this.onChildrenDrawerClose}/>
          </Drawer>
        </Drawer>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cartReducer,
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

export default connect(mapStateToProps, mapDispatchToProps)(LogoArea);
