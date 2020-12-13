import * as actionTypes from "./actionTypes";



export function getProductsSuccess(products){
    return {type:actionTypes.GET_PRODUCTS_SUCCESS,payload:products}
}


export function getProducts(slug){
    return function(dispatch) {
        let url="http://192.168.1.2:8000/api/products";
        if (slug) { 
            url = "http://192.168.1.2:8000/api/collections/detail/" + slug
        }
        
        return fetch(url)
        .then(response=> response.json())
        .then(result=> dispatch(getProductsSuccess(result)));
    }
}