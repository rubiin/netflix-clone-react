import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Row = ({title,url}: {title: string,url:string}) => {

  const [movies, setMovies] = useState([])

  useEffect(() => {
      axios.get(url).then((response) => {
        setMovies(response.data.results);
      })
  }, [])

  return (
    <>
    <h2 className='text-white font-bold p-4 md:text-xl'>{title}</h2>
    <div className="relative flex items-center"></div>
    </>
  )
}


export default Row
