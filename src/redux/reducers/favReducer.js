import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";
import { notification } from "antd";
export default function favReducer(state = initialState.favs, action) {
  switch (action.type) {
    case actionTypes.ADD_TO_FAV:
      var item = state.find((c) => c.product.id === action.payload.product.id);
      if (item) {
        notification.warning({
          message: `${action.payload.product.__str__} zaten favorilerinde. Satın almak ister misin?`,
          duration: 5,
          placement: "bottomRight",
          item,
        });
        return state;
      } else {
        notification.success({
          message: `${action.payload.product.__str__} favoriye eklendi.`,
          duration: 2.5,
          placement: "bottomRight",
          item,
        });
        return [...state, { ...action.payload }];
      }
    case actionTypes.REMOVE_FROM_FAV:
      const removeAll = state.filter(
        (cartItem) => cartItem.product.id !== action.payload.id
      );
      return removeAll;
    case actionTypes.GET_FAVS:
      return state;
    default:
      return state;
  }
}
