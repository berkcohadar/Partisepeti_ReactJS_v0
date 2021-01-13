import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function cartReducer(state = initialState.cart, action) {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      var item = state.find((c) => c.product.id === action.payload.product.id);
      if (item) {
        var newState = state.map((cartItem) => {
          if (cartItem.product.id === action.payload.product.id) {
            return Object.assign({}, item, { quantity: item.quantity + 1 });
          }
          return cartItem;
        });
        return newState;
      }
      return [...state, { ...action.payload }];
    case actionTypes.REMOVE_1_FROM_CART:
      var item = state.find((c) => c.product.id === action.payload.product.id);
      if (item.quantity > 1) {
        var remove1State = state.map((cartItem) => {
          if (cartItem.product.id === action.payload.product.id) {
            return Object.assign({}, item, { quantity: item.quantity - 1 });
          }
          return cartItem;
        });
        return remove1State;
      } else {
        const newState_removeLast = state.filter(
          (cartItem) => cartItem.product.id !== action.payload.product.id
        );
        return newState_removeLast;
      }
    case actionTypes.REMOVE_FROM_CART:
      const removeAll = state.filter(
        (cartItem) => cartItem.product.id !== action.payload.id
      );
      return removeAll;
    case actionTypes.GET_CART:
      return state;
    default:
      return state;
  }
}
