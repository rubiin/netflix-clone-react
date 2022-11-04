import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Movie from './Movie'
import { MdChevronRight, MdChevronLeft } from 'react-icons/md'

const Row = ({ title, url,rowId }: { title: string, url: string, rowId: string }) => {

  const [movies, setMovies] = useState([])

  useEffect(() => {
    axios.get(url).then((response) => {
      setMovies(response.data.results);
    })
  }, [])


  const slideLeft = () => {
    const slider = document.getElementById('slider' + rowId);
    slider!.scrollLeft = slider!.scrollLeft - 500;
  };
  const slideRight = () => {
    const slider = document.getElementById('slider' + rowId);
    slider!.scrollLeft = slider!.scrollLeft + 500;
  };


  return (
    <>
      <h2 className='text-white font-bold p-4 md:text-xl'>{title}</h2>
      <div className="relative flex items-center group">
        <MdChevronLeft
          onClick={slideLeft}
          className='bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
          size={40}
        />
        <div
        id={'slider' + rowId}
        className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
          {
            movies.map((movie: any, index: number) => (
              <Movie movie={movie} key={index} />

            ))

          }
          <MdChevronRight

            onClick={slideRight}
            className='bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
            size={40}
          />

        </div>
      </div>
    </>
  )
}


export default Row
