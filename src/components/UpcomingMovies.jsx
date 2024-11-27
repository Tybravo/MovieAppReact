import React from 'react'
import { useGetUpcomingMoviesQuery } from '../service/movieApi'
import { MOVIE_IMAGE_URL} from "../service/movieApi"

const UpcomingMovies = () => {

    const {data, isLoading, isError}= useGetUpcomingMoviesQuery();
    console.log(data);

  return (
    <div>
      {
        data?.results.map((movie)=>{
       
            <div key={movie.id}>
                <img
                src={`${MOVIE_IMAGE_URL}${movie.poster_path}`}
                alt={`${movie.title}`}
                />
            </div>
             })
        }
    </div>
    
  )

}

export default UpcomingMovies
