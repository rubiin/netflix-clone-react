import React, { useState } from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa'

const Movie = ({movie}: {movie: any}) => {
  const [like, setLike] = useState(false)

  return (

       <div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'>
                <img src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`}
                  alt={movie?.title} />
                <div className="absolute w-full h-full top-0 left-0 hover:bg-black/80 opacity-0 hover:opacity-100 text-white flex justify-center items-center">
                  <p className='white-space-normal text-xs md:text-sm font-bold text-center'>{movie?.title}</p>
                </div>

                { like ? <FaHeart className='absolute top-4 left-4 text-grey-400 cursor-pointer' onClick={() => setLike(false)} /> : <FaRegHeart className='absolute top-4 left-4 text-grey-400cursor-pointer' onClick={() => setLike(true)} /> }


    </div>
  )
}

export default Movie
