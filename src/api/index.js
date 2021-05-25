import axios from "axios";

// const instance = axios.create({
//   baseURL: 'https://kinopoiskapiunofficial.tech/',
//   headers: {
//     "Content-Type": "application/json",
//     "X-API-KEY": "8c8e1a50-6322-4135-8875-5d40a5420d86",
//   }
// })

const API_KEY = '59c3e235459071fc9bc955bd1da2d868'

export const movieAPI = {
  getMovie(category, sortBy, page) {
    return axios.get(`https://api.themoviedb.org/3/discover/${category}?api_key=${API_KEY}&language=ru-RU&sort_by=${sortBy.type}.${sortBy.order}&page=${page}`)
  },
}

// export const movieAPI = {
//   popularMovie(page) {
//     return instance.get(`api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=${page}`)
//   },

//   sortMovie(type, order, page){
//     return instance.get(`api/v2.1/films/search-by-filters?order=${order}&type=${type}&page=${page}`)
//   }
// }