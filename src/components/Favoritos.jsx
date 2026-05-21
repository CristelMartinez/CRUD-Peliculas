import { useMovies } from "../hooks/useMovies";
import { FaHeart } from "react-icons/fa";

export function FavoritesList() {
  const { favorites } = useMovies();

  return (
    <div className="bg-white p-6 rounded-3xl shadow-lg mt-6">
      <h2 className="text-2xl font-bold mb-6 text-yellow-500">
        Favoritas
      </h2>

      {favorites.length === 0 ? (
        <p className="text-gray-500">
          No hay películas favoritas.
        </p>
      ) : (
        <ul className="space-y-4">
          {favorites.map((movie) => (
            <li
              key={movie.id}
              className="movie-card favorite"
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

              <div className="favorite-icon">
                <FaHeart />
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}