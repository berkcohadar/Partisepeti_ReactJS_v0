import {combineReducers} from "redux";
import changeCategoryReducer from "./changeCategoryReducer";

import categoryListReducer from "./categoryListReducer";

import productListReducer from "./productListReducer";
import menuListReducer from "./menuListReducer";

const rootReducer = combineReducers({
    changeCategoryReducer,
    categoryListReducer,
    productListReducer,
    menuListReducer
})

export default rootReducer;