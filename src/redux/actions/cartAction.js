import * as actionTypes from "./actionTypes";

export function addProductToCart(product){
    return {type:actionTypes.ADD_TO_CART,payload:product}
}
export function remove1ProductFromCart(product){
    return {type:actionTypes.REMOVE_1_FROM_CART,payload:product}
}
export function removeAllFromCart(product){
    return {type:actionTypes.REMOVE_FROM_CART,payload:product}
}
export function getCart(cart){
    return {type:actionTypes.GET_CART,payload:cart}
}