import { useState, useEffect } from "react";

export const MoviesContainer = () => {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZmMwZjFkZTA0N2ZjM2Y4Nzk0ZDI5NWQzYjg4ZGY4ZCIsInN1YiI6IjY1Mzc0MjUwYzUwYWQyMDEwY2UyN2Y1OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kJOKIu7N0Ah8T5AE_2wyfPtrIWmycCDrvBKHBTC06MA",
    },
  };

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?page=" + currentPage + "&sort_by=popularity.desc", options)
      .then((response) => response.json())
      .then((response) => setMovies(response.results))
      .catch((err) => console.error(err));
  }, [currentPage]);

  console.log(movies);

  
  const handleTest = (e) => setCurrentPage(e.target.value);

  return (
    <>
    <button onClick={handleTest} value={1}>1</button>
    <button onClick={handleTest} value={2}>2</button>
    <button onClick={handleTest} value={3}>3</button>

    <div className="containerMovie">
      {movies.map((movie) => {
        if (movie.poster_path) {
          const imageUrl = `https://image.tmdb.org/t/p/w300${movie.poster_path}`;
          return (
            <div key={movie.id} className="card">
              <img src={imageUrl} alt={movie.original_title} />
              <h4>
                <b>{movie.original_title}</b>
              </h4>
              <h4>
                <b>{movie.release_date}</b>
              </h4>
              <p></p>
            </div>
          );
        }
        return null;
      })}
    </div>
    </>
  );
};
