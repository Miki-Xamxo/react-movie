import React from 'react'

import posterDefault from '../assets/landscape .svg'

const Card = ({id, poster_path, vote_average, ...item}) => {

  console.log(item)

  const numberVotes = (number) => {
    return number * 10
  }

  const getClassByRate = (vote) => {
  if(vote > 7) {
    return 'green'
  } else if (vote > 3) {
    return 'orange'
  } else {
    return 'red'
  }
}


  return <div className='card'>
    <div className='card__cover'>
      <a href={id}>
        <img src={ poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : posterDefault } alt=""/>
      </a>
      <div className='card__cover--darkened'></div>
    </div>
    <div className='card__info'>
      <div className={`average-rating  ${ vote_average ? getClassByRate(vote_average) : ''}`}>{vote_average ? `${numberVotes(vote_average)}%` : 'NR'}</div>
      <h2>
        <a>{item.title || item.name}</a>
      </h2>
      {/* <span>{genre_ids.map(genre => ` ${genre.genre}`)}</span> */}
      <p>{item.release_date || item.first_air_date}</p>
    </div>
  </div>
}

export default Card