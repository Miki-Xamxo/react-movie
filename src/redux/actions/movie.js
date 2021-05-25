import { movieAPI } from "../../api";
import { SET_CURRENT_PAGE, SET_MOVIE, SET_SORT_MOVIE } from "../reducers/movie";


export const setMovie = (items, page) => ({ type: SET_MOVIE, payload: items, page})
export const setCurrentPage = (page) => ({ type: SET_CURRENT_PAGE, payload: page })
export const setSortMovie = (items) => ({ type: SET_SORT_MOVIE, payload: items})

export const getMovies = (category, sortBy, page) => async (dispatch) => {
  dispatch(setCurrentPage(page))
  const resp = await movieAPI.getMovie(category.type, sortBy, page)
  dispatch(setMovie(resp.data.results, page))

  // dispatch(setCurrentPage(page))
  // if(sortBy.type === 'popular'){
  //   const resp = await movieAPI.popularMovie(page)
  //   dispatch(setMovie(resp.data.films))
  // }else {
  //   const resp = await movieAPI.sortMovie(category.type, sortBy.type, page)
  //   dispatch(setMovie(resp.data.films))
  // }

  // axios.get(`http://localhost:3003/${category.type}?_sort=${sortBy.type}&_order=${sortBy.order}&_page=1&_limit=20`).then(resp => {
  //   dispatch(setMovie(resp.data))
  // })
}