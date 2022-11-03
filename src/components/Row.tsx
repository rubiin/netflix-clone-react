import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Movie from './Movie'
import { MdChevronRight, MdChevronLeft } from 'react-icons/md'

const Row = ({ title, url }: { title: string, url: string }) => {

  const [movies, setMovies] = useState([])

  useEffect(() => {
    axios.get(url).then((response) => {
      setMovies(response.data.results);
    })
  }, [])

  return (
    <>
      <h2 className='text-white font-bold p-4 md:text-xl'>{title}</h2>
      <div className="relative flex items-center">
        <div id={"slider"}>
          {
            movies.map((movie: any) => (
              <Movie movie={movie} />

            ))

          }

        </div>
      </div>
    </>
  )
}


export default Row
