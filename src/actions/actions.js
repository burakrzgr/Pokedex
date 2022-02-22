import * as actionTypes from "./actionTypes";

export const search = (todo) => ({ type: actionTypes.SEARCH, payload: todo })
export const addPoke = (todo) => ({ type: actionTypes.ADD, payload: todo })