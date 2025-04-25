import { useMovies } from "../hooks/useMovies";

export function Filters() {
  const { filters, updateFilters } = useMovies();

  return (
    <div className="bg-white p-4 rounded shadow-md mb-4">
      <h2 className="text-xl font-bold mb-4">Filtros</h2>
      <input
        className="w-full border p-2 rounded mb-2"
        type="text"
        placeholder="Buscar por título..."
        value={filters.title}
        onChange={(e) => updateFilters({ ...filters, title: e.target.value })}
      />
      <input
        className="w-full border p-2 rounded"
        type="text"
        placeholder="Buscar por género..."
        value={filters.genre}
        onChange={(e) => updateFilters({ ...filters, genre: e.target.value })}
      />
    </div>
  );
}
