import React from 'react'
import Main from './Main'
import Row from './Row'
import Request from '../Request'

const Home = () => {
  return (
    <>
    <Main/>
    <Row rowId="1" title="Upcoming" url={Request.requestUpcoming}/>
    <Row rowId="2" title="Popular" url={Request.requestPopular}/>
    <Row rowId="3" title="Trending" url={Request.requestTrending}/>
    <Row rowId="4" title="Horror" url={Request.requestHorror}/>
    </>
  )
}

export default Home
