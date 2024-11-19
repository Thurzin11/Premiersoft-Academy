import CryptoJS from 'https://cdn.jsdelivr.net/npm/crypto-js@4.1.1/crypto-js.js'

const buttonSearchCharacter = document.querySelector("#search-character");
const inputSearchCharacter = document.querySelector("#input-character");

async function createHash(ts, privateKey, publicKey) {
  const textToHash = ts + privateKey + publicKey;
  const hashHex = CryptoJS.MD5(textToHash).toString();
  return hashHex;
}

async function fetchMarvelCharacters(characterName) {
  const publicKey = "44d132dc3d09ac9cc343e7412393c01b";
  const privateKey = "02335375f594da58bc01856d5178b1244cb44815";

  try {
    const ts = new Date().getTime();
    const hash = await createHash(ts, privateKey, publicKey);

    const url = `https://gateway.marvel.com/v1/public/characters?name=${characterName}&ts=${ts}&apikey=${publicKey}&hash=${hash}`;
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Erro: ${response.statusText}`);

    const { data } = await response.json();
    console.log(data.results);
  } catch (error) {
    console.error("Erro na requisição:", error);
  }
}

buttonSearchCharacter.addEventListener("click",() => {
  // fetchMarvelCharacters(inputSearchCharacter.value)
  console.log(inputSearchCharacter.value);
  
})