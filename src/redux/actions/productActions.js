import * as actionTypes from "./actionTypes";

export function getProductDetailSuccess(productDetail){
    return {type:actionTypes.GET_PRODUCT_DETAIL,payload:productDetail}
}

export function getProductsSuccess(products){
    return {type:actionTypes.GET_PRODUCTS_SUCCESS,payload:products}
}

export function getProductDetailFail(err){
    return {type:actionTypes.GET_PRODUCT_FAIL,payload:err}
}

export function getProducts(slug){
    return function(dispatch) {
        let url="http://localhost:8000/api/products";
        if (slug!="") url = "http://localhost:8000/api/collections/detail/" + slug
        return fetch(url)
        .then(response=> response.json())
        .then(result=> dispatch(getProductsSuccess(result)));
    }
}

export function getProductDetail(slug){
    return function(dispatch) {
        let url="";
        if (slug!="") url = "http://localhost:8000/api/products?slug=" + slug
        return fetch(url)
        .then(response=> response.json())
        .then(result=> dispatch(getProductDetailSuccess(result)))
        .catch(err=>dispatch(getProductDetailFail(err)));
    }
}
