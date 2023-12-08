import React, { useEffect } from "react";

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

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json();
    // The data object is {"Search": Array(3), "totalResults": "3",
    //    "Response": "True"}, we are only interested in Search result
    console.log(data.Search);
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

      <div className="container">
        <div className="movie">
          <div>
            <p>{movie1.Year}</p>
          </div>

          <div>
            <img src={movie1.Poster !== 'N/A' ? movie1.Poster : 'https://via.placeholder.com/400'} alt={movie1.Title} />
          </div>

          <div>
            <span>{movie1.Type}</span>
            <h3>{movie1.Title}</h3>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;