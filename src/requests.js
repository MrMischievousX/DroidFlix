const api = process.env.REACT_APP_Api;

const requests = {
    fetchActionMovies: `/discover/movie?api_key=${api}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${api}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${api}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${api}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${api}&with_genres=99`,
    fetchTrending: `/trending/all/week?api_key=${api}&lanuage=en-US`,
    fetchTopRated: `/movie/top_rated?api_key=${api}&language=en-US&page=1`,
    fetchNetflixOriginals: `/discover/tv?api_key=${api}&with_networks=213`,
}

export default requests

