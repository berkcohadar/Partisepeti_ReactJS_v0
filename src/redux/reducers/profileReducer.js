import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";


export default function profileReducer(state=initialState.profile,action) {
    switch (action.type) {
        case actionTypes.GET_PROFILE:
            return action.payload
        default:
            return state;
    }
}
