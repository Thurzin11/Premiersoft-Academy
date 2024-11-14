const urlApi = "https://pokeapi.co/api/v2/pokemon/pikachu";

async function getAll() {
  await fetch(urlApi)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
}

getAll();
