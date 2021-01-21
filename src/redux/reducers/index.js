import {combineReducers} from "redux";
import changeCategoryReducer from "./changeCategoryReducer";

import categoryListReducer from "./categoryListReducer";

import productListReducer from "./productListReducer";
import menuListReducer from "./menuListReducer";
import cartReducer from "./cartReducer";
import favReducer from "./favReducer";


const rootReducer = combineReducers({
    changeCategoryReducer,
    categoryListReducer,
    productListReducer,
    menuListReducer,
    cartReducer,
    favReducer,
})

export default rootReducer;