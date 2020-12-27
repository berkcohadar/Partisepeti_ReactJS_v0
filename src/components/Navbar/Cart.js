import React, { Component, useState, Container, Row } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Table, List, Skeleton, Avatar } from "antd";
import {
  MinusCircleOutlined,
  DeleteOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import * as cartActions from "../../redux/actions/cartAction";

class Cart extends Component {
  columns = [
    {
      title: "",
      dataIndex: "removeProduct",
      key: "productImg",
      render: (product) => (
        <Skeleton avatar title={false} loading={product.loading} active>
          <List.Item.Meta avatar={<Avatar src={product.thumbnail} />} />
        </Skeleton>
      ),
    },
    { title: "Ürün", dataIndex: "name", key: "name" },

    { title: "Adet", dataIndex: "quantity", key: "quantity" },
    {
      title: "",
      dataIndex: "removeProduct",
      key: "remove1Product",
      render: (product) => (
        <MinusCircleOutlined onClick={() => this.removeFromCart(product)} />
      ),
    },
    {
      title: "",
      dataIndex: "removeProduct",
      key: "remove1Product",
      render: (product) => (
        <PlusCircleOutlined onClick={() => this.addToCart(product)} />
      ),
    },
    {
      title: "Fiyat",
      dataIndex: "price",
      key: "price",
      render: (price) => "₺" + price + ",00",
    },
    {
      title: "Toplam",
      dataIndex: "productTotal",
      key: "productTotal",
      render: (price) => "₺" + price + ",00",
    },
    {
      title: "",
      dataIndex: "removeProduct",
      key: "removeAllProducts",
      render: (product) => (
        <DeleteOutlined
          onClick={() => this.props.actions.removeAllFromCart(product)}
        />
      ),
    },
  ];
  totalPrice = () => {
    const data = this.data();
    let totalPrice = 0;
    data.map((product) => (totalPrice += product.productTotal));
    return totalPrice;
  };
  data = () => {
    const data = [];
    let item;
    this.props.cart.map(
      (cartItem) => (
        (item = {
          key: cartItem.product.id,
          image: cartItem.product.thumbnail,
          name: cartItem.product.__str__,
          quantity: cartItem.quantity,
          price: cartItem.product.price,
          productTotal: cartItem.product.price * cartItem.quantity,
          removeProduct: cartItem.product,
        }),
        data.push(item)
      )
    );

    return data;
  };
  removeFromCart = (product) => this.props.actions.remove1FromCart({ product });
  addToCart = (product) =>
    this.props.actions.addProductToCart({ quantity: 1, product });
  render() {
    return (
      <Table
        columns={this.columns}
        dataSource={this.data()}
        pagination={false}
        footer={() => "Toplam Tutar:\t₺" + this.totalPrice() + ",00"}
      />
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

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
