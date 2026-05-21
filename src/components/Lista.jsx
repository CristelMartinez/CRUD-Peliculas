import { useMovies } from "../hooks/useMovies";
import { FaTrash, FaHeart } from "react-icons/fa";

export function MovieList() {
  const {
    filteredMovies,
    deleteMovie,
    toggleFavorite,
    favorites
  } = useMovies();

  return (
    <div className="bg-white p-6 rounded-3xl shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-blue-900">
        Películas
      </h2>

      <ul className="space-y-4">
        {filteredMovies.map((movie) => {
          const isFavorite = favorites.some(
            (fav) => fav.id === movie.id
          );

          return (
            <li
              key={movie.id}
              className={`movie-card ${
                isFavorite ? "favorite" : ""
              }`}
            >
              <div className="movie-info">
                <h3 className="movie-title">
                  {movie.title.charAt(0).toUpperCase() +
                    movie.title.slice(1)}
                </h3>

                <p className="movie-description">
                  {movie.description}
                </p>

                <span className="genre-badge">
                  {movie.genre}
                </span>
              </div>

              <div className="movie-actions">
                <button
                  className={`btn-fav ${
                    isFavorite ? "active-fav" : ""
                  }`}
                  onClick={() => toggleFavorite(movie)}
                >
                  <FaHeart />
                </button>

                <button
                  className="btn-delete"
                  onClick={() => deleteMovie(movie.id)}
                >
                  <FaTrash />
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}