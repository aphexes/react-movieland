import { useState, useEffect } from "react";

import MovieCard from "./MovieCard";

import './App.css'
import SearchIcon from './search.svg'

const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=f0db519c'

const movie1 = {
  "Title": "Andrei Rublev",
  "Year": "1966",
  "imdbID": "tt0060107",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BM2U2MzYwMzAtM2Q2Zi00OTJhLTgxMjEtOGM0NDk5Mzk4MzE5L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjMxMjkwMjI@._V1_SX300.jpg"
}

const App = () => {
  const [movies, setMovies] = useState([]);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json();
    // The data object is {"Search": Array(3), "totalResults": "3",
    //    "Response": "True"}, we are only interested in Search result
    setMovies(data.Search);
  }

  useEffect(() => {
    searchMovies('Andrei Rublev')
  }, [])

  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input
          placeholder="Search for movies"
          value="Superman"
          onChange={() => {}}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => {}}
        />
      </div>

      {
        movies?.length > 0
          ? (
            <div className="container">
              {movies.map((movie) => (
                <MovieCard movie={movie} />
              ))}
            </div>
          ) : (
            <div className="empty">
              <h2>No movies found</h2>
            </div>
          )
      }
    </div>
  );
}

export default App;