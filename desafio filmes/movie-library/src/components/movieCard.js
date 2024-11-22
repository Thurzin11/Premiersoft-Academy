export function renderMovies(movies) {
    const moviesList = document.getElementById('moviesList');
    moviesList.innerHTML = ''; // Limpa a lista atual
  
    // TODO: Para cada filme, criar um card usando Bootstrap
    // Dica: Use as classes 'col-md-4 mb-4' para o container do card
    movies.forEach((movie) => {
      const movieCard = createMovieCard(movie);
      moviesList.innerHTML += movieCard;
    });
  }
  
  export function createMovieCard(movie) {
    // TODO: Criar e retornar o HTML do card do filme
    // Dica: Use as classes do Bootstrap para criar um card bonito
    return `
      <div class="col-md-4 mb-4">
        <div class="card">
          <img src="${movie.poster}" class="card-img-top" alt="${movie.title}">
          <div class="card-body">
            <h5 class="card-title">${movie.title}</h5>`
            + (movie.year ? `<p class="card-text">Ano: ${movie.year}</p>` : '') +
            (movie.director ? `<p class="card-text">Diretor: ${movie.director}</p>` : '') +
            (movie.genre ? `<p class="card-text">Gênero: ${movie.genre}</p>` : '') +
            (movie.plot ? `<p class="card-text">${movie.plot}</p>` : '') +
          `</div>
        </div>
      </div>`;	
  }