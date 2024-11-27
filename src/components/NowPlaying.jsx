import React from 'react'
import { useGetNowPlayingMoviesQuery } from '../service/movieApi'
import Card from '../reusables/Card'

const NowPlaying = () => {

    const data = useGetNowPlayingMoviesQuery();
    console.log(data);

  return (
    <>
    <Card data={data}/>
    </>
  );

};

export default NowPlaying
