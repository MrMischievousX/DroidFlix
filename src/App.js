import './App.css';
import Card from "./components/Card"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import requests from './requests.js'
function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Card thumb={true}
        title="Droidflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <Card thumb={false}
        title="Top Trending"
        fetchUrl={requests.fetchTrending}
      />
      <Card thumb={false}
        title="Top Rated"
        fetchUrl={requests.fetchTopRated}
      />
      <Card thumb={false}
        title="Action Movies"
        fetchUrl={requests.fetchActionMovies}
      />
      <Card thumb={false}
        title="Horror Movies"
        fetchUrl={requests.fetchHorrorMovies}
      />
      <Card thumb={false}
        title="Romantic Movies"
        fetchUrl={requests.fetchRomanceMovies}
      />
      <Card thumb={false}
        title="Comedy Movies"
        fetchUrl={requests.fetchComedyMovies}
      />
      <Card thumb={false}
        title="Documentaries"
        fetchUrl={requests.fetchDocumentaries}
      />
    </>
  );
}

export default App;
