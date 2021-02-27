import React, { Component, useState, Container, Row } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Table, List, Skeleton, Avatar } from "antd";
import {
  MinusCircleOutlined,
  DeleteOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import * as cartActions from "../../../redux/actions/cartAction";
import {
  CartSummary,
  CartItem,
  CartIcon,
  CartImg,
  CartName,
  CartTotal,
  CartQuantity,
  CartPrice,
  CartDel,
  CartMin,
  CartPlus,
  CartTotalP,
  CartTitle,
  CartTitleP,
} from "./Navbar.elements";

class Cart extends Component {
  data = () => {
    const data = [];
    let item;
    this.props.cart.map(
      (cartItem) => (
        (item = {
          key: cartItem.product.id,
          image: cartItem.product.thumbnail,
          name: cartItem.product.__str__,
          quantity: cartItem,
          price: cartItem.product.price,
          productTotal: cartItem.product.price * cartItem.quantity,
          removeProduct: cartItem.product,
        }),
        data.push(item)
      )
    );
    return data;
  };
  totalPrice = () => {
    const data = this.data();
    let totalPrice = 0;
    let result;
    this.props.cart.map(
      (product) => (totalPrice += product.product.price * product.quantity)
    );
    if (totalPrice>999) result = parseInt(totalPrice/1000)+"."+(totalPrice%1000>99?totalPrice%1000:totalPrice%1000>9?'0'+totalPrice%1000:'00'+totalPrice%1000);
    else result = totalPrice;
    return result;
  };
  removeFromCart = (product) => this.props.actions.remove1FromCart({ product });
  addToCart = (product) =>
    this.props.actions.addProductToCart({ quantity: 1, product });
  render() {
    return (
      <CartSummary style={{width:"640px",top: "0em",position:"static",maxHeight:"80%", overflowY:"scroll" }}>
      <CartTitle>
          <CartTitleP>
            {"Sepetim"}
          </CartTitleP>
        </CartTitle>
        {this.props.cart.map((cartItem) => (
          <CartItem>
            <CartImg src={cartItem.product.thumbnail} />
            <CartName>{cartItem.product.__str__}</CartName>
            
            <CartMin onClick={() => this.removeFromCart(cartItem.product)} />
            <CartQuantity>{cartItem.quantity}</CartQuantity>
            <CartPlus onClick={() => this.addToCart(cartItem.product)} />
            <CartPrice>
              ₺ {cartItem.product.price * cartItem.quantity},00
            </CartPrice>
            <CartDel
              onClick={() =>
                this.props.actions.removeAllFromCart(cartItem.product)
              }
            />
          </CartItem>
        ))}
        <CartTotal>
          <CartTotalP>
            {"Toplam Tutar:\t₺ " + this.totalPrice() + ",00"}
          </CartTotalP>
        </CartTotal>
      </CartSummary> // 5200 yerine 5.200 ve ,00 olmayacak
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
