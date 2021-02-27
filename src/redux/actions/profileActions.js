import * as actionTypes from "./actionTypes";
import * as loadingActions from "./loadingAction";

export function getProfileSuccess(profile){
    return {type:actionTypes.GET_PROFILE,payload:profile}
}

export function getProfile(token){
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json', "Authorization": "Token "+token,},
    };
    return function(dispatch) {
        let url="http://localhost:8000/api/account/profile/";
        return fetch(url,requestOptions)
        .then(response=> response.json())
        .then((result) => {
            dispatch(getProfileSuccess(result));
            dispatch(loadingActions.finished());
          });
    }
}

export function updateProfile(profile,token) {
    const data = {
        first_name : profile.nameSurname,
        phone:profile.phone,
        date_of_birth:profile.birthday,
        gender:profile.birthday,
    }
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json", "Authorization": "Token "+token, },
      body: JSON.stringify(data),
    };
    return function (dispatch) {
      let url = "http://localhost:8000/api/account/editprofile/";
      return fetch(url, requestOptions)
        .then((response) => response.json())
        .then((result) => {
          dispatch(getProfileSuccess(result));
          dispatch(loadingActions.finished());
        });
      // .catch(err=> dispatch(loginFail(err)))
    };
  }