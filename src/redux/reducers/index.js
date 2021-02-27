import {combineReducers} from "redux";
import changeCategoryReducer from "./changeCategoryReducer";

import categoryListReducer from "./categoryListReducer";

import productListReducer from "./productListReducer";
import menuListReducer from "./menuListReducer";
import cartReducer from "./cartReducer";
import favReducer from "./favReducer";
import loginReducer from "./loginReducer";
import profileReducer from "./profileReducer";
import loadingReducer from "./loadingReducer";
import productDetailReducer from "./productDetailReducer";

const rootReducer = combineReducers({
    changeCategoryReducer,
    categoryListReducer,
    productListReducer,
    menuListReducer,
    cartReducer,
    favReducer,
    loginReducer,
    profileReducer,
    loadingReducer,
    productDetailReducer,
})

export default rootReducer;