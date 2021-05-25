import { SET_CATEGORY, SET_SORT_BY } from "../reducers/sorts";


export const setCategory = ({ type }) => ({ type: SET_CATEGORY, payload: { type }})
export const setSortBy = ({ type, order }) => ({ type: SET_SORT_BY, payload: {type, order}})