import { MovieProvider } from "./context/MovieContext";
import { MovieForm } from "./components/Formulario";
import { MovieList } from "./components/Lista";
import { FavoritesList } from "./components/Favoritos";
import { Filters } from "./components/Filtros";
import './App.css';

function App() {
  return (
    <MovieProvider>
      <div>
        <h1>CRUD de Películas</h1>

        <div className="container">
          {/* Sección del formulario y filtros */}
          <div className="form-section">
            <MovieForm />
            <Filters />
          </div>

          {/* Sección de listas */}
          <div className="list-section">
            <MovieList />
            <FavoritesList />
          </div>
        </div>
      </div>
    </MovieProvider>
  );
}

export default App;
