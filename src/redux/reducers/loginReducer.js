import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";


export default function loginReducer(state=initialState.login,action) {
    switch (action.type) {
        case actionTypes.LOGIN_SUCCESS:
            return action.payload
        case actionTypes.LOGOUT_SUCCESS:
            return action.payload
        default:
            return state;
    }
}

