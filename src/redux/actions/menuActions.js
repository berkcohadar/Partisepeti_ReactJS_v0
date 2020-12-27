import * as actionTypes from "./actionTypes";

// export function changeCategory(category){
//     return {type:actionTypes.CHANGE_CATEGORY,payload:category}
// }


export function getMenuItemsSuccess(items){
    return {type:actionTypes.GET_MENU_ITEMS_SUCCESS,payload:items}
}

export function getMenuItems(){
    return function(dispatch) {
        let url="http://localhost:8000/api/sitemap";
        return fetch(url)
        .then(response=> response.json())
        .then(result=> dispatch(getMenuItemsSuccess(result)));
    }
}