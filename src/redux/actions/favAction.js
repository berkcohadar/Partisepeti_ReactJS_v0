import * as actionTypes from "./actionTypes";

export function addProductToFav(product){
    return {type:actionTypes.ADD_TO_FAV,payload:product}
}

export function removeProductFromFav(product){
    return {type:actionTypes.REMOVE_FROM_FAV,payload:product}
}

export function getFavs(favs){
    return {type:actionTypes.GET_FAVS,payload:favs}
}