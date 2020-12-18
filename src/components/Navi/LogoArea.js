import React, { Component, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Input, Menu, Drawer, Button,Table,Badge } from "antd";
import {
  UserOutlined,
  HeartFilled,
  ShoppingCartOutlined,
  CloseOutlined,
  MinusCircleOutlined,
} from "@ant-design/icons";
import * as cartActions from "../../redux/actions/cartAction";


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
  emptyCart= () => {
    return (<p>Sepetiniz Bos</p>)
  }
  columns = [
    { title: 'Ürün', dataIndex: 'name', key: 'name' },
    { title: 'Adet', dataIndex: 'quantity', key: 'quantity' },
    { title: 'Fiyat', dataIndex: 'price', key: 'price' },
    { title: 'Toplam', dataIndex: 'productTotal', key: 'productTotal'},
    {
      title: 'Action',
      dataIndex: 'removeProduct',
      key: 'remove1Product',
      render: (product) => <MinusCircleOutlined onClick={()=>this.props.actions.remove1FromCart({product})}/>,
    },
    {
      title: 'Action',
      dataIndex: 'removeProduct',
      key: 'removeAllProducts',
      render: (product) => <MinusCircleOutlined onClick={()=>this.props.actions.removeAllFromCart(product)}/>,
    },
  ];
  data = () => {
    const data = [];
    let item;
    this.props.cart.map(cartItem=>(
      item = {
        key:cartItem.product.id,
        name:cartItem.product.__str__,
        quantity:cartItem.quantity,
        price:cartItem.product.price,
        productTotal:cartItem.product.price*cartItem.quantity,
        removeProduct:cartItem.product
      },
      data.push(item)
    ));
    return data;
  }
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

                <Menu.Item
                  key="shop"
                  icon={<ShoppingCartOutlined />}
                  onClick={()=>this.showDrawer()}
                >
                  {" "}
                </Menu.Item>
              </Menu>
            </Row>
          </Col>
        </Row>
        <Drawer
                  title="Basic Drawer"
                  placement="right"
                  width={720}
                  closable={true}
                  closeIcon={<CloseOutlined/>}
                  onClose={()=>this.onClose()}
                  visible={this.state.visible}
                >
                <Table
                  columns={this.columns}
                  dataSource={this.data()}
                  bordered
                  title={() => 'Sepetim'}
                  footer={() => 'Toplam Fiyat:\t'}
                />
               {
                 this.props.cart.length>0?this.props.cart.map(cartItem=>(
                  <p>{cartItem.quantity} {cartItem.product.__str__} ₺{cartItem.product.price}.00</p>
               )):this.emptyCart()
               }

                </Drawer>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    cart : state.cartReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getCart    : bindActionCreators(cartActions.getCart, dispatch),
      remove1FromCart : bindActionCreators(cartActions.remove1ProductFromCart,dispatch),
      removeAllFromCart : bindActionCreators(cartActions.removeAllFromCart,dispatch)

    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LogoArea);