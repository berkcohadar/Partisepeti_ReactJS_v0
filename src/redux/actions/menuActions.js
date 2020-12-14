import * as actionTypes from "./actionTypes";

// export function changeCategory(category){
//     return {type:actionTypes.CHANGE_CATEGORY,payload:category}
// }


export function getMenuItemsSuccess(items){
    return {type:actionTypes.GET_MENU_ITEMS_SUCCESS,payload:items}
}
