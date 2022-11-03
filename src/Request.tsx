const key= "d3124c8d03bc7ad917da1e1e685e45c8";
const rootUrl="https://api.themoviedb.org";

const requests = {
  requestPopular: `${rootUrl}/3/movie/popular?api_key=${key}&language=en-US&page=1`,
  requestTopRated: `${rootUrl}/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
  requestTrending: `${rootUrl}/3/movie/popular?api_key=${key}&language=en-US&page=2`,
  requestHorror: `${rootUrl}/3/search/movie?api_key=${key}&language=en-US&query=horror&page=1&include_adult=false`,
  requestUpcoming: `${rootUrl}/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
}

export default requests
