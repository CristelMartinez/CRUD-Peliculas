import { useState } from "react";
import { useMovies } from "../hooks/useMovies";

export function MovieForm() {
  const { addMovie } = useMovies();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [genre, setGenre] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description || !genre) return;
    addMovie({ title, description, genre });
    setTitle("");
    setDescription("");
    setGenre("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-4 rounded shadow-md">
      <h2 className="text-xl font-bold">Agregar Película</h2>
      <input
        className="w-full border p-2 rounded"
        type="text"
        placeholder="Título"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        className="w-full border p-2 rounded"
        type="text"
        placeholder="Descripción"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        className="w-full border p-2 rounded"
        type="text"
        placeholder="Género"
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Agregar
      </button>
    </form>
  );
}
