import React from 'react'
import { useGetPopularMoviesQuery } from '../service/movieApi'
import Card from '../reusables/Card'

const PopularMovies = () => {

    const data = useGetPopularMoviesQuery
    console.log(data);

  return (
    <div>
      <Card data={data}/>
    </div>
  )
}

export default PopularMovies
