import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASEURL = import.meta.env.VITE_APP_BASE_URL
const APIKEY = import.meta.env.VITE_APP_APIKEY
export const MOVIE_IMAGE_URL = import.meta.env.VITE_APP_MOVIE_IMAGES_URL

//console.log(BASEURL)
//console.log(APIKEY)

export const movieApi = createApi({
    reducerPath: "movieApp",
    baseQuery: fetchBaseQuery({baseUrl: `${BASEURL}`}),
    endpoints:(builder)=>({
        getTrendingMovies:builder.query({
            query:()=>(`/movie/trending?api_key=${APIKEY}`),
        }),
        getPopularMovies:builder.query({
            query:()=>(`/movie/popular?api_key=${APIKEY}`),
        }),
        getNowPlayingMovies:builder.query({
            query:()=>(`/movie/now_playing?api_key=${APIKEY}`),
        }),
        getTopRatedMovies:builder.query({
            query:()=>(`/movie/top_rated?api_key=${APIKEY}`),
        }),
        getUpcomingMovies:builder.query({
            query:()=>(`/movie/upcoming?api_key=${APIKEY}`),
        }),
    }),
});

// `use${GetPopularMovies}Mutation`

export const  {
    useGetTrendingMoviesQuery,
    useGetNowPlayingMoviesQuery,
    useGetTopRatedMoviesQuery,
    useGetPopularMoviesQuery,
    useGetUpcomingMoviesQuery,
} = movieApi;