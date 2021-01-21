import * as actionTypes from "./actionTypes";

export function addProductToFav(product){
    return {type:actionTypes.ADD_TO_FAV,payload:product}
}
