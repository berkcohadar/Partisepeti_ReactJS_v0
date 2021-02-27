import * as actionTypes from "./actionTypes";
import * as loadingActions from "./loadingAction";

export function loginSuccess(login) {
  localStorage.setItem("token", login.key);
  return { type: actionTypes.LOGIN_SUCCESS, payload: login };
}

export function loginFail(err) {
  return { type: actionTypes.LOGIN_FAIL, payload: err };
}

export function login(email, pass) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: email,
      password: pass,
    }),
  };
  return function (dispatch) {
    let url = "http://localhost:8000/api/rest-auth/login/";
    return fetch(url, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        dispatch(loginSuccess(result));
        dispatch(loadingActions.finished());
      });
    // .catch(err=> dispatch(loginFail(err)))
  };
}

export function signUp(email, pass1, pass2) {
  console.log(email, pass1, pass2);
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: email,
      password1: pass1,
      password2: pass2,
    }),
  };
  return function (dispatch) {
    let url = "http://localhost:8000/api/rest-auth/registration/";
    return fetch(url, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        dispatch(loginSuccess(result));
        dispatch(loadingActions.finished());
      });
    // .catch(err=> dispatch(loginFail(err)))
  };
}
