import { getMovieByName } from "../services/api.js";

export async function renderModal(movieName) {
  const modal = document.getElementById("modal");
  modal.innerHTML = "";
  const movie = await getMovieByName(`${movieName}`).then((movie) => {
    return movie;
  });
  modal.innerHTML = createMovieModal(movie);
}

export function createMovieModal(movie) {
  return `
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title text-center col-10">${movie.title}</h5>
          <span id="closeModal" onclick="closeModal()">X</span>
        </div>
        <div class="modal-body d-flex flex-column align-items-center">
          <img src="${movie.poster}" class="img-fluid col-3 col-md-2" alt="${movie.title}">
          <p><strong>Ano:</strong> ${movie.year}</p>
          <p><strong>Diretor:</strong> ${movie.director}</p>
          <p><strong>Gênero:</strong> ${movie.genre}</p>
          <p><strong>Enredo:</strong> ${movie.plot}</p>
        </div>
      </div>
    </div>
        `;
}
