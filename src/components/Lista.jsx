import { useMovies } from "../hooks/useMovies";

export function MovieList() {
  const { filteredMovies, deleteMovie, toggleFavorite, favorites } = useMovies();

  return (
    <div className="bg-white p-4 rounded shadow-md">
      <h2 className="text-xl font-bold mb-4">Películas</h2>
      <ul className="space-y-2">
        {filteredMovies.map((movie) => (
          <li key={movie.id} className="border p-3 rounded flex justify-between items-center">
            <div>
              <h3 className="font-semibold">{movie.title}</h3>
              <p className="text-sm">{movie.description}</p>
              <span className="text-xs text-gray-500">{movie.genre}</span>
            </div>
            <div className="flex gap-2">
              <button onClick={() => toggleFavorite(movie)} className="text-yellow-500">
                {favorites.find((fav) => fav.id === movie.id) ? "★" : "☆"}
              </button>
              <button onClick={() => deleteMovie(movie.id)} className="text-red-500">
                ✖
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
