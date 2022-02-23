import * as actionTypes from "./actionTypes";

export const search = (x) => ({ type: actionTypes.SEARCH, payload: x })
export const addPoke = (x) => ({ type: actionTypes.ADD, payload: x })
export const loadPoke = (x) => ({ type: actionTypes.LOAD, payload: x })