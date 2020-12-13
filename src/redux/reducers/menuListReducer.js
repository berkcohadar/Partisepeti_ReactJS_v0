import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";


export default function menuListReducer(state=initialState.menuItems,action) {
    switch (action.type) {
        case actionTypes.GET_MENU_ITEMS_SUCCESS:
            return action.payload
        default:
            return state;
    }
}