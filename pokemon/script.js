const nomePokemon = document.querySelector("#nomePokemon");
const btnBuscar = document.querySelector("#search");
const pokemonName = document.querySelector("#pokemon");
const habilidade1 = document.querySelector("#habilidade1");
const habilidade2 = document.querySelector("#habilidade2");
const imgPokemon = document.querySelector("#pokemonImage");
const alturaPokemon = document.querySelector("#altura");

btnBuscar.addEventListener("click", async () => {
  const pokemon = await getPokemon(nomePokemon.value);
  console.log(pokemon);
  habilidade1.textContent = pokemon.types[0].type.name.toUpperCase();
  habilidade2.textContent = pokemon.types[1].type.name.toUpperCase();
  imgPokemon.src =
    pokemon.sprites.other["official-artwork"].front_default ||
    pokemon.sprites.front_default;
  pokemonName.textContent = pokemon.name;
  
  alturaPokemon.textContent = `${pokemon.height/10}m`;
});

async function getPokemon(pokemon) {
  const urlApi = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
  try {
    const response = await fetch(urlApi);
    const dados = await response.json();
    return dados;
  } catch (erro) {
    console.log(`ERRO: ${erro}`);
  }
}
