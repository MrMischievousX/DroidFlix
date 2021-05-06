import Card from "./components/Card"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import requests from './requests.js'
function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Card id="Droidflix" thumb={true}
        title="Droidflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <Card id="Trending" thumb={false}
        title="Top Trending"
        fetchUrl={requests.fetchTrending}
      />
      <Card id="Rated" thumb={false}
        title="Top Rated"
        fetchUrl={requests.fetchTopRated}
      />
      <Card id="Action" thumb={false}
        title="Action Movies"
        fetchUrl={requests.fetchActionMovies}
      />
      <Card id="Horror" thumb={false}
        title="Horror Movies"
        fetchUrl={requests.fetchHorrorMovies}
      />
      <Card id="Romantic" thumb={false}
        title="Romantic Movies"
        fetchUrl={requests.fetchRomanceMovies}
      />
      <Card id="Comedy" thumb={false}
        title="Comedy Movies"
        fetchUrl={requests.fetchComedyMovies}
      />
      <Card id="Documentaries" thumb={false}
        title="Documentaries"
        fetchUrl={requests.fetchDocumentaries}
      />
    </>
  );
}

export default App;
