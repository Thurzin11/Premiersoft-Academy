import MD5 from "crypto-js/md5.js";

async function createHash(ts, privateKey, publicKey) {
  const textToHash = ts + privateKey + publicKey;
  const hashHex = MD5(textToHash).toString();
  return hashHex;
}

async function fetchMarvelCharacters() {
  const publicKey = "44d132dc3d09ac9cc343e7412393c01b";
  const privateKey = "02335375f594da58bc01856d5178b1244cb44815";

  try {
    const ts = new Date().getTime();
    const hash = await createHash(ts, privateKey, publicKey);

    const url = `https://gateway.marvel.com/v1/public/characters?name=Captain America&ts=${ts}&apikey=${publicKey}&hash=${hash}`;
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Erro: ${response.statusText}`);

    const { data } = await response.json();
    console.log(data.results);
  } catch (error) {
    console.error("Erro na requisição:", error);
  }
}

fetchMarvelCharacters();
