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
    fetchAdventureMovies: `/discover/movie?api_key=${api}&with_genres=12`,
    fetchTrillerMovies: `/discover/movie?api_key=${api}&with_genres=53`,
    fetchFantasyMovies: `/discover/movie?api_key=${api}&with_genres=14`,
    fetchScienceFiction: `/discover/movie?api_key=${api}&with_genres=878`,
    fetchMysteryMovie: `/discover/movie?api_key=${api}&with_genres=9648`,
    fetchAnimationMovies: `/discover/movie?api_key=${api}&with_genres=16`,
    fetchCrimeMovies: `/discover/movie?api_key=${api}&with_genres=80`,
    fetchDrameMovies: `/discover/movie?api_key=${api}&with_genres=18`,
    fetchWarMovies: `/discover/movie?api_key=${api}&with_genres=10752`,
    fetchWesternMovies: `/discover/movie?api_key=${api}&with_genres=37`,
    fetchFamilyMovies: `/discover/movie?api_key=${api}&with_genres=10751`,
    fetchHistory: `/discover/movie?api_key=${api}&with_genres=36`,
}

export default requests

