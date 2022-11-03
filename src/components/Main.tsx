import React, { useEffect, useState } from 'react'
import axios from 'axios'
import requests from '../Request'


export interface Imovie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: Date;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}



const Main = () => {

  const [movies, setMovies] = useState([])

  const movie: Imovie = movies[Math.floor(Math.random() * movies.length)]

  const trimText = (str: string, len: number) => {
    // trim string length
    return str
  }
  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      setMovies(response.data.results);
    });
  }, []);

  return (
    <div className='w-full h-[550px] text-white'>
      <div className="w-full h-full">
        <div className="absolute w-full h-[550px] bg-gradient-to-r from-black"></div>
        <img className='h-full w-full object-cover' src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title} />
        <div className='absolute w-full top-[20%] p-4 md:p-8'>
          <h1 className='text-3xl md:text-5xl font-bold'>{movie?.title}</h1>
          <div className="my-4">
            <button className='border bg-gray-300 text-black border-gray-300 py-2 px-5'>Play</button>
            <button className='border text-whit e border-gray-300 py-2 px-5 ml-4'>Watch Later</button>
          </div>
          <p className='text-gray-400 text-sm'>{`Released: ${movie?.release_date}`}</p>
          <p className='w-full md:max-w-[70%] lg:max-w-[70%] xl:max-w-[35%] text-gray-200 '>{trimText(movie?.overview, 10)}</p>

         </div>
      </div>
    </div>
  )
}


export default Main
