const api = process.env.REACT_APP_Api;

const requests = {
    fetchActionMovies: `/discover/movie?api_key=${api}&with_genres=28&page=${Math.floor(Math.random() * 10) + 1}`,
    fetchComedyMovies: `/discover/movie?api_key=${api}&with_genres=35&page=${Math.floor(Math.random() * 10) + 1}`,
    fetchHorrorMovies: `/discover/movie?api_key=${api}&with_genres=27&page=${Math.floor(Math.random() * 10) + 1}`,
    fetchRomanceMovies: `/discover/movie?api_key=${api}&with_genres=10749&page=${Math.floor(Math.random() * 10) + 1}`,
    fetchDocumentaries: `/discover/movie?api_key=${api}&with_genres=99&page=${Math.floor(Math.random() * 10) + 1}`,
    fetchTrending: `/trending/all/week?api_key=${api}&lanuage=en-US&page=3${Math.floor(Math.random() * 10) + 1}`,
    fetchTopRated: `/movie/top_rated?api_key=${api}&language=en-US&page=${Math.floor(Math.random() * 10) + 1}`,
    fetchNetflixOriginals: `/discover/tv?api_key=${api}&with_networks=213&page=${Math.floor(Math.random() * 10) + 1}`,
    fetchAdventureMovies: `/discover/movie?api_key=${api}&with_genres=12&page=${Math.floor(Math.random() * 10) + 1}`,
    fetchTrillerMovies: `/discover/movie?api_key=${api}&with_genres=53&page=${Math.floor(Math.random() * 10) + 1}`,
    fetchFantasyMovies: `/discover/movie?api_key=${api}&with_genres=14&page=${Math.floor(Math.random() * 10) + 1}`,
    fetchScienceFiction: `/discover/movie?api_key=${api}&with_genres=878&page=${Math.floor(Math.random() * 10) + 1}`,
    fetchMysteryMovie: `/discover/movie?api_key=${api}&with_genres=9648&page=${Math.floor(Math.random() * 10) + 1}`,
    fetchAnimationMovies: `/discover/movie?api_key=${api}&with_genres=16&page=${Math.floor(Math.random() * 10) + 1}`,
    fetchCrimeMovies: `/discover/movie?api_key=${api}&with_genres=80&page=${Math.floor(Math.random() * 10) + 1}`,
    fetchDrameMovies: `/discover/movie?api_key=${api}&with_genres=18&page=${Math.floor(Math.random() * 10) + 1}`,
    fetchWarMovies: `/discover/movie?api_key=${api}&with_genres=10752&page=${Math.floor(Math.random() * 10) + 1}`,
    fetchWesternMovies: `/discover/movie?api_key=${api}&with_genres=37&page=${Math.floor(Math.random() * 10) + 1}`,
    fetchFamilyMovies: `/discover/movie?api_key=${api}&with_genres=10751&page=${Math.floor(Math.random() * 10) + 1}`,
    fetchHistory: `/discover/movie?api_key=${api}&with_genres=36&page=${Math.floor(Math.random() * 10) + 1}`,
}

export default requests

