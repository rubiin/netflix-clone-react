import React from 'react'
import Main from './Main'
import Row from './Row'
import Request from '../Request'

const Home = () => {
  return (
    <>
    <Main/>
    <Row title="Upcoming" url={Request.requestUpcoming}/>
    <Row title="Popular" url={Request.requestPopular}/>
    <Row title="Trending" url={Request.requestTrending}/>
    <Row title="Horror" url={Request.requestHorror}/>
    </>
  )
}

export default Home
