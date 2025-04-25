import { useMovies } from "../hooks/useMovies";

export function FavoritesList() {
  const { favorites } = useMovies();

  return (
    <div className="bg-yellow-100 p-4 rounded shadow-md">
      <h2 className="text-xl font-bold mb-4">Favoritas</h2>
      {favorites.length === 0 && <p className="text-gray-500">No hay favoritas.</p>}
      <ul className="space-y-2">
        {favorites.map((movie) => (
          <li key={movie.id} className="border p-3 rounded">
            <h3 className="font-semibold">{movie.title}</h3>
            <p className="text-sm">{movie.description}</p>
            <span className="text-xs text-gray-500">{movie.genre}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
