import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";


export default function productDetailReducer(state=initialState.productDetail,action) {
    switch (action.type) {
        case actionTypes.GET_PRODUCT_DETAIL:
            return action.payload
        default:
            return state;
    }
}
