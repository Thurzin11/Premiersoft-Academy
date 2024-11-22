import { searchMovies } from "./services/api.js";
import { renderMovies } from "./components/movieCard.js";
import { renderModal } from "./components/modalCard.js";

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

export function openModal(movieName) {
  renderModal(movieName);
  const modal = document.getElementById("modal");
  modal.style = "display: block";
}

export function closeModal() {
  const modal = document.getElementById("modal");
  modal.style = "display: none";
}

window.openModal = openModal;
window.closeModal = closeModal;
