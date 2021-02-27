import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";


export default function loadingReducer(state=initialState.loading,action) {
    switch (action.type) {
        case actionTypes.LOADING_TRUE:
            return action.payload
        case actionTypes.LOADING_FALSE:
            return action.payload
        default:
            return state;
    }
}