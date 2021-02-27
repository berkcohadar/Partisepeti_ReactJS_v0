import * as actionTypes from "./actionTypes";

export function loading(){
    return {type:actionTypes.LOADING_TRUE,payload:true}
}

export function finished(){
    return {type:actionTypes.LOADING_FALSE,payload:false}
}