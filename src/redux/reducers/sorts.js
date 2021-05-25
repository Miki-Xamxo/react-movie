export  const SET_CATEGORY = 'SET_CATEGORY'
export  const SET_SORT_BY = 'SET_SORT_BY'

const initialState = {
  category: {
    type: 'movie'
  },
  sortBy: {
    type: 'popularity',
    order: 'desc'
  }
}

const sorts = (state = initialState, action) => {
  switch(action.type){
    case SET_CATEGORY:
      return {
        ...state,
        category: action.payload,
      }
    case SET_SORT_BY:
      return {
        ...state,
        sortBy: action.payload,
      }
    default:
      return state
  }
}

export default sorts
