import { createContext, useContext, useState, useEffect } from "react";

const MovieContext = createContext();

export function MovieProvider({ children }) {
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [filters, setFilters] = useState({ title: "", genre: "" });

  useEffect(() => {
    const storedMovies = JSON.parse(localStorage.getItem("movies")) || [];
    setMovies(storedMovies);
  }, []);

  useEffect(() => {
    localStorage.setItem("movies", JSON.stringify(movies));
  }, [movies]);

  const addMovie = (movie) => {
    setMovies([...movies, { ...movie, id: Date.now() }]);
  };

  const deleteMovie = (id) => {
    setMovies(movies.filter((movie) => movie.id !== id));
    setFavorites(favorites.filter((fav) => fav.id !== id));
  };

  const toggleFavorite = (movie) => {
    const isFavorite = favorites.find((fav) => fav.id === movie.id);
    if (isFavorite) {
      setFavorites(favorites.filter((fav) => fav.id !== movie.id));
    } else {
      setFavorites([...favorites, movie]);
    }
  };

  const updateFilters = (newFilters) => {
    setFilters(newFilters);
  };

  const filteredMovies = movies.filter((movie) => {
    return (
      movie.title.toLowerCase().includes(filters.title.toLowerCase()) &&
      movie.genre.toLowerCase().includes(filters.genre.toLowerCase())
    );
  });

  return (
    <MovieContext.Provider value={{ movies, addMovie, deleteMovie, favorites, toggleFavorite, filters, updateFilters, filteredMovies }}>
      {children}
    </MovieContext.Provider>
  );
}

export function useMoviesContext() {
  return useContext(MovieContext);
}
