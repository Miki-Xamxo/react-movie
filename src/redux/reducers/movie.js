export const SET_MOVIE = 'SET_MOVIE'
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
export const SET_SORT_MOVIE  = 'SET_SORT_MOVIE'
export const SET_GENRES = 'SET_GENRES'


const initialState = {
  items: [],
  currentPage: 1,
  isLoading: false
}

const movie = (state = initialState, action) => {
  switch(action.type){
    case SET_MOVIE:

      const newItems = state.currentPage === action.page
        ? [...action.payload]
        : [...state.items, action.payload]

      return {
        ...state,
        items: newItems
      }
    case SET_SORT_MOVIE:
      return {
        ...state,
        items: [...action.payload]
      }
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload
      }
    default:
      return state
  }
}


export default movie