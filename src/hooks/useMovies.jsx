import { useMoviesContext } from "../context/MovieContext";

export function useMovies() {
  const context = useMoviesContext();
  if (!context) {
    throw new Error("useMovies debe usarse dentro de un MovieProvider");
  }
  return context;
}
