import React, { Component} from "react";
import { Col, Container, Row } from "reactstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Input, Menu, Drawer, Button} from "antd";
import {
  UserOutlined,
  HeartFilled,
  ShoppingCartOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import * as cartActions from "../../redux/actions/cartAction";

import Cart from "./Cart";
import NaviForm from "./NaviForm";


const { Search } = Input;
const onSearch = (value) => console.log(value);



class LogoArea extends Component {
  componentDidMount = () => {
    // this.props.actions.getCart();
  }
  showDrawer = () => {
    this.setVisible();
  };
  onClose = () => {
      this.setState({visible:false})
  };
  setVisible= () => {
    this.setState({visible:true})
  };
  checkState= () => {
      return (this.state.visible)
  }
  showChildrenDrawer = () => {
    this.setState({
      childrenDrawer: true,
    });
  };

  onChildrenDrawerClose = () => {
    this.setState({
      childrenDrawer: false,
    });
  };
  // emptyCart= () => {
  //   return (<p>Sepetiniz Bos</p>)
  // }
  addToCart = (product) => {
    // placement,
    this.props.actions.addProductToCart(product);
    // notification.success({
    //   message: `Ürününüz sepete başarıyla eklendi. ${placement}`,
    //   duration:2.5,
    //   placement,
    // });
  };

  state = {
    current: null,
    visible:false,

  };

  handleClick = (e) => {
    console.log("click ", e);
    this.setState({ current: e.key });
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
                <Menu.Item key="user" icon={<UserOutlined />}></Menu.Item>

                <Menu.Item key="heart" icon={<HeartFilled />}></Menu.Item>
                {/* <Badge dot count={5}> */}
                <Menu.Item
                  key="shop"
                  icon={<ShoppingCartOutlined />}
                  onClick={()=>this.showDrawer()}
                />
              </Menu>
            </Row>
          </Col>
        </Row>
        <Drawer
                  title="Sepetim"
                  placement="right"
                  width={800}
                  closable={true}
                  closeIcon={<CloseOutlined/>}
                  onClose={()=>this.onClose()}
                  visible={this.state.visible}
                >
                <Cart/>

                <Button className="btn-add-adress" type="primary" onClick={this.showChildrenDrawer}>
                  Adres Ekle
                </Button>
                {/* <a onClick={this.showChildrenDrawer}></a> */}
                <Drawer
                  title="Adres Ekle"
                  width={700}
                  closable={true}
                  onClose={this.onChildrenDrawerClose}
                  visible={this.state.childrenDrawer}
                >

                 <NaviForm/>
                
                </Drawer>

                 
                </Drawer>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    cart : state.cartReducer,
    
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getCart    : bindActionCreators(cartActions.getCart, dispatch),
      addProductToCart  : bindActionCreators(cartActions.addProductToCart, dispatch),
      remove1FromCart : bindActionCreators(cartActions.remove1ProductFromCart,dispatch),
      removeAllFromCart : bindActionCreators(cartActions.removeAllFromCart,dispatch)

    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LogoArea);