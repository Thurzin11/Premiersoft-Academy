import { searchMovies } from "./services/api.js";
import { renderMovies } from "./components/movieCard.js";

// TODO: Implementar a lógica de busca
document.getElementById("searchButton").addEventListener("click", () => {
  const movieName = document.getElementById("searchInput").value;
  console.log(movieName);
  searchMovies(`${movieName}`).then((movies) => {
    renderMovies(movies);
  });
});

// Carregar alguns filmes iniciais
searchMovies("marvel").then((movies) => {
  renderMovies(movies);
});
