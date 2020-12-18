import React, { Component, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Input, Menu, Drawer, Button,Table,Form, Checkbox } from "antd";
import {
  UserOutlined,
  HeartFilled,
  ShoppingCartOutlined,
  CloseOutlined,
  MinusCircleOutlined,
  DeleteOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import * as cartActions from "../../redux/actions/cartAction";


const { Search } = Input;
const onSearch = (value) => console.log(value);

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const Demo = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };}


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
  columns = [
    { title: 'Ürün', dataIndex: 'name', key: 'name' },
    {
      title: '',
      dataIndex: 'removeProduct',
      key: 'remove1Product',
      render: (product) => <MinusCircleOutlined onClick={()=>this.props.actions.remove1FromCart({product})}/>,
    },
    { title: 'Adet', dataIndex: 'quantity', key: 'quantity' },
    {
      title: '',
      dataIndex: 'removeProduct',
      key: 'remove1Product',
      render: (product) => <PlusCircleOutlined onClick={()=>this.addToCart({product})}/>,
    },
    { title: 'Fiyat', dataIndex: 'price', key: 'price' },
    { title: 'Toplam', dataIndex: 'productTotal', key: 'productTotal'}, 
    {
      title: '',
      dataIndex: 'removeProduct',
      key: 'removeAllProducts',
      render: (product) => <DeleteOutlined onClick={()=>this.props.actions.removeAllFromCart(product)}/>,
    },
  ];
  totalPrice = () =>{
    const data = this.data();
    let totalPrice = 0;
    data.map(product=>(
      totalPrice += product.productTotal
    ));
    return totalPrice;
  };

  addToCart = (product) => {
    // placement,
    this.props.actions.addProductToCart(product);
    // notification.success({
    //   message: `Ürününüz sepete başarıyla eklendi. ${placement}`,
    //   duration:2.5,
    //   placement,
    // });
  };
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
                  title="Sepetim"
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
                  
                  footer={() => 'Toplam Fiyat:\t'+this.totalPrice()}
                />
                <Button className="btn-add-adress" type="primary" onClick={this.showChildrenDrawer}>
                  Adres Ekle
                </Button>
                <Drawer
                  title="Two-level Drawer"
                  width={600}
                  closable={false}
                  onClose={this.onChildrenDrawerClose}
                  visible={this.state.childrenDrawer}
                >
                  <Form
                    {...layout}
                    name="basic"
                    initialValues={{
                      remember: true,
                    }}
                    onFinish={Demo.onFinish}
                    onFinishFailed={Demo.onFinishFailed}
                  >
                    <Form.Item
                      label="Username"
                      name="username"
                      rules={[
                        {
                          required: true,
                          message: 'Please input your username!',
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>

                    <Form.Item
                      label="Password"
                      name="password"
                      rules={[
                        {
                          required: true,
                          message: 'Please input your password!',
                        },
                      ]}
                    >
                      <Input.Password />
                    </Form.Item>

                    <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                      <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item {...tailLayout}>
                      <Button type="primary" htmlType="submit">
                        Submit
                      </Button>
                    </Form.Item>
                  </Form>
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