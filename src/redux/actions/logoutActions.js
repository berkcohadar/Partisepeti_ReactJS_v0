import * as actionTypes from "./actionTypes";
import * as loadingActions from "./loadingAction";

export function logoutSuccess(){
    localStorage.setItem("token", null)
    return {type:actionTypes.LOGOUT_SUCCESS,payload:[]}
}
export function removeProfile(){
    return {type:actionTypes.DELETE_PROFILE,payload:[]}
}
export function logout(){
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', "Authorization": "Token "+localStorage.getItem("token"),},
    };
    return function(dispatch) {
        let url="http://localhost:8000/api/rest-auth/logout/";
        return fetch(url,requestOptions)
        .then(response => response.json())
        .then(result => {dispatch(logoutSuccess());dispatch(removeProfile());dispatch(loadingActions.finished());});
    }
}
