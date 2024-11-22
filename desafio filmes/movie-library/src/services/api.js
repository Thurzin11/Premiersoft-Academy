import axios from "axios";

const API_KEY = "808ab349"; // Você pode usar: 'trilogy'
const BASE_URL = "https://www.omdbapi.com";

export async function searchMovies(query) {
  // TODO: Implementar a busca usando fetch ou axios
  // Retornar um array de filmes da API
  try {
    const response = await axios.get(`${BASE_URL}/`, {
      params: {
        s: query,
        type: "movie",
        apikey: API_KEY,
      },
    });

    if (response.data.Response === "False") {
      throw new Error(response.data.Error || "Nenhum filme encontrado");
    }

    const characters = response.data.Search.map((movie) => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster:
        movie.Poster !== "N/A"
          ? movie.Poster
          : "https://via.placeholder.com/300x450?text=Sem+Poster",
      type: movie.Type,
    }));
    return characters;
  } catch (error) {
    console.error("Error fetching movies:", error);
    throw error;
  }
}


export async function getMovieByName(movieName) {
  try {
    const response = await axios.get(`${BASE_URL}/`, {
      params: {
        t: movieName,
        apikey: API_KEY,
      },
    });

    if (response.data.Response === "False") {
      throw new Error(response.data.Error || "Filme não encontrado");
    }

    const movie = {
      id: response.data.imdbID,
      title: response.data.Title,
      year: response.data.Year,
      poster:
        response.data.Poster !== "N/A"
          ? response.data.Poster
          : "https://via.placeholder.com/300x450?text=Sem+Poster",
      director: response.data.Director,
      genre: response.data.Genre,
      plot: response.data.Plot,
    };

    return movie;
  } catch (error) { 
    console.error("Error fetching movie:", error);
    throw error;
  }
}