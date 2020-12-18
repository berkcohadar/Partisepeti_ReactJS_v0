import {combineReducers} from "redux";
import changeCategoryReducer from "./changeCategoryReducer";

import categoryListReducer from "./categoryListReducer";

import productListReducer from "./productListReducer";
import menuListReducer from "./menuListReducer";
import cartReducer from "./cartReducer";

const rootReducer = combineReducers({
    changeCategoryReducer,
    categoryListReducer,
    productListReducer,
    menuListReducer,
    cartReducer
})

export default rootReducer;