import { combineReducers } from "redux";

import movie from './movie'
import sorts from './sorts'

const rootReducer = combineReducers({
  movie,
  sorts
})

export default rootReducer