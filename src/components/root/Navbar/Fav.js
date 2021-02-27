import React, { Component} from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as favActions from "../../../redux/actions/favAction";

import {
  CartSummary,
  CartItem,
  CartImg,
  CartName,
  CartPrice,
  CartDel,
  CartTitle,
  CartTitleP,
} from "./Navbar.elements";

class Fav extends Component {
  removeFav = (product) => this.props.actions.removeFromFav({ product });
  render() {
    return (
      <CartSummary style={{width:"640px",top: "0em",position:"static",maxHeight:"80%", overflowY:"scroll" }}>
      <CartTitle style={{background: "linear-gradient(to left,#fff,#FCAA32)"}}>
          <CartTitleP style={{color: "#fff"}}>
            {"Favorilerim"}
          </CartTitleP>
        </CartTitle>
        {this.props.favs.map((cartItem) => (
          <CartItem>
            <CartImg src={cartItem.product.thumbnail} />
            <CartName>{cartItem.product.__str__}</CartName>
            <CartPrice>
              ₺ {cartItem.product.price},00
            </CartPrice>
            <CartDel
              onClick={() =>
                this.props.actions.removeFromFav(cartItem.product)
              }
            />
          </CartItem>
        ))}
      </CartSummary> // 5200 yerine 5.200 ve ,00 olmayacak
    );
  }
}

function mapStateToProps(state) {
  return {
    favs: state.favReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      removeFromFav: bindActionCreators(
        favActions.removeProductFromFav,
        dispatch
      ),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Fav);
